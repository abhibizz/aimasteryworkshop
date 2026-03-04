import { useState, useRef } from "react";
import { Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useUtmParams } from "@/hooks/useUtmParams";


interface RegistrationFormProps {
  sectionId: string;
  workshopId?: string;
  price?: number;
}

const RegistrationForm = ({ sectionId, workshopId, price = 2099 }: RegistrationFormProps) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", agreeTerms: true });
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);
  const utmParams = useUtmParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    if (!form.agreeTerms) {
      toast.error("Please agree to the Terms & Conditions");
      return;
    }

    if (submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true);
    try {
      // Wait for Google Sheet save before redirecting to ensure data capture
      const [sheetResult] = await Promise.allSettled([
        supabase.functions.invoke("save-to-google-sheet", {
          body: {
            timestamp: new Date().toISOString(),
            firstName: form.fullName,
            lastName: "",
            email: form.email,
            phone: form.phone,
            saturdayWorkshop: "lead-capture",
            sundayWorkshop: "",
            amount: 0,
            paymentId: "",
            orderId: "",
            ...utmParams,
            landingPage: window.location.origin + window.location.pathname,
          },
        }),
        supabase.functions.invoke("meta-conversion-api", {
          body: {
            event_name: "Lead",
            email: form.email,
            phone: form.phone,
            event_source_url: window.location.href,
          },
        }),
      ]);

      if (sheetResult.status === "rejected") {
        console.error("Google Sheet save failed:", sheetResult.reason);
      }

      const params = new URLSearchParams({ fn: form.fullName, ln: "", em: form.email, ph: form.phone });
      if (workshopId) params.set("ws", workshopId);
      navigate(`/upgrade?${params.toString()}#upgrade-header`);
    } catch (err: any) {
      void err;
      toast.error("Something went wrong. Please try again.");
      submittedRef.current = false;
      setSubmitting(false);
    }
  };

  return (
      <section id={sectionId} className="px-5 pb-8">
        <div className="card-glass-solid p-5 rounded-2xl relative overflow-hidden">
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{ background: "linear-gradient(90deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%), hsl(217, 91%, 50%))" }}
          />

          <div className="flex items-center justify-center gap-2 mb-1 mt-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(217 91% 50% / 0.1), hsl(190 90% 50% / 0.08))" }}
            >
              <Lock size={15} style={{ color: "hsl(217, 91%, 50%)" }} />
            </div>
            <h2 className="text-xl font-extrabold text-foreground">Register Now</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5 text-center">Secure your spot in 2 minutes.</p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <Input
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="h-12 rounded-xl bg-[hsl(210,50%,97%)] border-[hsl(210,40%,90%)]"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-12 rounded-xl bg-[hsl(210,50%,97%)] border-[hsl(210,40%,90%)]"
              maxLength={255}
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-12 rounded-xl bg-[hsl(210,50%,97%)] border-[hsl(210,40%,90%)]"
              maxLength={15}
            />

            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id={`${sectionId}-terms`}
                checked={form.agreeTerms}
                onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })}
                className="w-4 h-4 mt-0.5 flex-shrink-0 accent-[hsl(217,91%,50%)]"
              />
              <label htmlFor={`${sectionId}-terms`} className="text-xs leading-relaxed text-muted-foreground cursor-pointer">
                I agree to the <span className="font-medium" style={{ color: "hsl(217, 91%, 50%)" }}>Terms & Conditions</span> and{" "}
                <span className="font-medium" style={{ color: "hsl(217, 91%, 50%)" }}>Privacy Policy</span> and consent to receive
                transactional and promotional communication.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full min-h-[54px] text-base font-bold rounded-xl text-[hsl(0,0%,100%)] flex items-center justify-center gap-2 group transition-all duration-200 disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}
            >
              {submitting ? "Processing..." : `Reserve My Seat – ₹${price.toLocaleString("en-IN")}/-`}
              {!submitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock size={12} />
              <span>No payment now • Choose your plan next</span>
            </div>
          </form>
        </div>
      </section>
  );
};

export default RegistrationForm;
