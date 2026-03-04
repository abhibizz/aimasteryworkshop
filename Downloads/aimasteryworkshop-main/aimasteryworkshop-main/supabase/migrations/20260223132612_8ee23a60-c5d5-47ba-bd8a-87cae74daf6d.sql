
CREATE TABLE public.whatsapp_notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  payment_id TEXT,
  type TEXT NOT NULL CHECK (type IN ('success', 'failed')),
  interakt_message_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for fast duplicate lookups
CREATE UNIQUE INDEX idx_wa_dedup ON public.whatsapp_notifications (phone, payment_id, type) WHERE payment_id IS NOT NULL;

-- RLS enabled but no public access needed (only edge functions use service role)
ALTER TABLE public.whatsapp_notifications ENABLE ROW LEVEL SECURITY;
