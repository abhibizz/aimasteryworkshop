

## Diagnosis

The backend function `save-to-google-sheet` returns `200 OK` with `{"success": true}` when called directly, meaning the function itself runs fine. However, data is not appearing in the Google Sheet. This means the **Google Apps Script web app** is either:
- Returning an error silently (the function treats any response as success)
- The Apps Script deployment URL has expired or changed
- The Apps Script has a bug processing the incoming data

## Plan

### 1. Improve the edge function to detect Google-side failures
Currently, the function always returns `{ success: true }` regardless of what Google responds. We need to:
- Check the HTTP status from Google Apps Script
- Parse and forward the actual Google response
- Log the full response for debugging

**File:** `supabase/functions/save-to-google-sheet/index.ts`
- After fetching the Apps Script URL, check if `response.ok` is false and return an error
- Include the Google response text in logs and in the returned response so failures are visible

### 2. Verify/update the Google Apps Script URL
The `GOOGLE_APPS_SCRIPT_URL` secret may point to an expired deployment. We'll ask you to verify the URL is current after the code fix is deployed.

### Technical details
- Google Apps Script web apps redirect on POST (302 → final response). The current `fetch` follows redirects by default, but the final response may contain an error message that's being ignored.
- The fix will parse the Google response text and check for success indicators before returning `{ success: true }`.

