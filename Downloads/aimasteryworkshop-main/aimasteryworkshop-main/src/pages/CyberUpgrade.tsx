import { useState, useEffect, useMemo, useRef } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Lock, Zap, Clock, MapPin, Calendar, Flame, Star, TrendingUp, Brain, Code, Shield, Cpu, Target, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useUtmParams } from "@/hooks/useUtmParams";
const alenceLogo = "/images/alence-logo.png";

declare global {
  interface Window { Razorpay: any; }
}

interface Workshop {
  id: string;
  label: string;
  outcomes: string[];
  tag: string | null;
}

interface Pricing {
  base: number;
  gst: number;
  total: number;
  count: number;
  savings: number;
  bothDays: boolean;
}

const WORKSHOP_PRICES: Record<string, number> = {
  "digital-marketing": 2099,
  "ethical-hacking-iitk": 2099,
  "agentic-ai-ml": 2099,
  "healthcare-ai": 2499,
  "ai-prompt-genai": 2099,
  "data-science-analytics": 1699
};
const BOTH_DAY_DISCOUNT = 0.20;

const saturdayWorkshops: Workshop[] = [
  { id: "digital-marketing", label: "AI-Powered Digital Marketing", outcomes: ["Run high-ROI Meta & Google Ads", "Build conversion funnels", "Live campaign setup + templates"], tag: null },
  { id: "ethical-hacking-iitk", label: "Cybersecurity & Ethical Hacking", outcomes: ["Perform real penetration testing", "Use Burp Suite & Kali Linux", "Live vulnerability assessment"], tag: null },
  { id: "agentic-ai-ml", label: "Agentic AI & ML", outcomes: ["Build an autonomous AI workflow", "Live demo + templates", "Use cases for real businesses"], tag: "⭐ Most Popular" },
];

const sundayWorkshops: Workshop[] = [
  { id: "healthcare-ai", label: "AI Tools for Healthcare", outcomes: ["Automate clinical workflows", "AI diagnostics & reporting", "Real hospital case studies"], tag: null },
  { id: "ai-prompt-genai", label: "Prompt Engineering & Generative AI", outcomes: ["50+ battle-tested prompts", "Content, ads & automation", "Live practice session"], tag: "⭐ Most Popular" },
  { id: "data-science-analytics", label: "Data Science & Analytics With AI", outcomes: ["Master data cleaning with AI", "Build predictive models", "Real-world analytics projects"], tag: null },
];

const ALL_WORKSHOP_IDS = [...saturdayWorkshops, ...sundayWorkshops].map((w) => w.id);

const getInitialSelections = (wsParam: string | null): string[] => {
  if (wsParam && ALL_WORKSHOP_IDS.includes(wsParam)) return [wsParam];
  return ["agentic-ai-ml", "ai-prompt-genai"];
};

const CyberUpgrade = () => {
  usePageMeta("Add More Workshops | Bundle & Save", "Add extra workshops to your registration and save.");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const utmParams = useUtmParams();

  const wsParam = searchParams.get("ws");
  const initialSelections = useMemo(() => getInitialSelections(wsParam), [wsParam]);
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>(initialSelections);
  const [submitting, setSubmitting] = useState(false);

  const firstName = searchParams.get("fn") || "";
  const lastName = searchParams.get("ln") || "";
  const email = searchParams.get("em") || "";
  const phone = searchParams.get("ph") || "";

  useEffect(() => { if (!firstName || !email) navigate("/cyber"); }, [firstName, email, navigate]);

  const saturdayRef = useRef<HTMLElement>(null);
  const preCreatedOrderRef = useRef<{ orderId: string; amount: number; currency: string; keyId: string; workshopKey: string } | null>(null);
  const preCreateInFlightRef = useRef<string | null>(null);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  const toggleWorkshop = (id: string) => {
    const isSaturday = saturdayWorkshops.some((w) => w.id === id);
    setSelectedWorkshops((prev) => {
      const isSelected = prev.includes(id);
      if (isSelected) return prev.filter((w) => w !== id);
      const sameDay = isSaturday ? saturdayWorkshops.map((w) => w.id) : sundayWorkshops.map((w) => w.id);
      return [...prev.filter((w) => !sameDay.includes(w)), id];
    });
  };

  const pricing = useMemo<Pricing>(() => {
    const count = selectedWorkshops.length;
    const base = selectedWorkshops.reduce((sum, id) => sum + (WORKSHOP_PRICES[id] || 2099), 0);
    const hasSaturday = selectedWorkshops.some((w) => saturdayWorkshops.some((s) => s.id === w));
    const hasSunday = selectedWorkshops.some((w) => sundayWorkshops.some((s) => s.id === w));
    const bothDays = hasSaturday && hasSunday;
    const discount = bothDays ? Math.round(base * BOTH_DAY_DISCOUNT) : 0;
    const discountedBase = base - discount;
    const gst = Math.round(discountedBase * 0.18);
    return { base, gst, total: discountedBase + gst, count, savings: discount, bothDays };
  }, [selectedWorkshops]);

  useEffect(() => {
    if (selectedWorkshops.length === 0) { preCreatedOrderRef.current = null; return; }
    const workshopKey = `${[...selectedWorkshops].sort().join(",")}_${pricing.total}`;
    if (preCreatedOrderRef.current?.workshopKey === workshopKey) return;
    if (preCreateInFlightRef.current === workshopKey) return;
    preCreateInFlightRef.current = workshopKey;
    const workshopName = selectedWorkshops.join(",");
    const createOrder = async () => {
      try {
        const orderBody = { amount: pricing.total * 100, currency: "INR", receipt: `cyber_${Date.now()}`, notes: { firstName, lastName, email, phone, workshop: workshopName } };
        let data: any = null;
        try { const { data: d, error: e } = await supabase.functions.invoke("create-razorpay-order", { body: orderBody }); if (!e && d?.orderId) data = d; } catch { }
        if (!data) { try { const r = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-razorpay-order`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`, 'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY }, body: JSON.stringify(orderBody) }); const result = await r.json(); if (r.ok && result.orderId) data = result; } catch { } }
        if (data && preCreateInFlightRef.current === workshopKey) preCreatedOrderRef.current = { ...data, workshopKey };
      } catch { } finally { if (preCreateInFlightRef.current === workshopKey) preCreateInFlightRef.current = null; }
    };
    createOrder();
  }, [selectedWorkshops, pricing.total, firstName, lastName, email, phone]);

  const handlePayment = async () => {
    if (selectedWorkshops.length === 0) { toast.error("Please select at least one workshop."); return; }
    setSubmitting(true);
    try {
      const workshopName = selectedWorkshops.join(",");
      const satWorkshops = selectedWorkshops.filter((w) => saturdayWorkshops.some((s) => s.id === w));
      const sunWorkshops = selectedWorkshops.filter((w) => sundayWorkshops.some((s) => s.id === w));
      const expectedKey = `${[...selectedWorkshops].sort().join(",")}_${pricing.total}`;
      let data: any = null;
      let lastError: any = null;
      if (preCreatedOrderRef.current?.workshopKey === expectedKey) data = preCreatedOrderRef.current;
      if (!data) {
        const orderBody = { amount: pricing.total * 100, currency: "INR", receipt: `cyber_${Date.now()}`, notes: { firstName, lastName, email, phone, workshop: workshopName } };
        try { const { data: d, error: e } = await supabase.functions.invoke("create-razorpay-order", { body: orderBody }); if (!e && d?.orderId) data = d; else lastError = new Error(e?.message || d?.error || 'Order creation failed'); } catch (err: any) { lastError = err; }
        if (!data) { try { const r = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-razorpay-order`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`, 'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY }, body: JSON.stringify(orderBody) }); const result = await r.json(); if (r.ok && result.orderId) data = result; else lastError = new Error(result.error || 'Order creation failed'); } catch (err: any) { lastError = err; } }
        if (!data) throw lastError;
      }
      preCreatedOrderRef.current = null;
      const options = {
        key: data.keyId, amount: data.amount, currency: data.currency,
        name: pricing.bothDays ? "2-Day Workshop Pass" : `${pricing.count} Workshop${pricing.count > 1 ? "s" : ""} Registration`,
        description: "Workshop Registration", order_id: data.orderId,
        prefill: { name: `${firstName} ${lastName}`, email, contact: phone },
        theme: { color: "#1565D8" },
        handler: async (response: any) => {
          try {
            const { data: verifyData, error: verifyError } = await supabase.functions.invoke("verify-razorpay-payment", { body: { razorpay_order_id: response.razorpay_order_id, razorpay_payment_id: response.razorpay_payment_id, razorpay_signature: response.razorpay_signature } });
            if (verifyError || !verifyData?.verified) { toast.error("Payment verification failed. Please contact support."); return; }
            toast.success("Payment successful! Registration confirmed. 🎉");
            const successParams = new URLSearchParams({ pid: response.razorpay_payment_id, oid: response.razorpay_order_id, amt: String(pricing.total), ws: selectedWorkshops.join(","), name: `${firstName} ${lastName}`.trim(), email, phone });
            navigate(`/payment-success?${successParams.toString()}`);
            supabase.functions.invoke("save-to-google-sheet", { body: { timestamp: new Date().toISOString(), firstName, lastName, email, phone, saturdayWorkshop: satWorkshops.join(","), sundayWorkshop: sunWorkshops.join(","), amount: pricing.total, paymentId: response.razorpay_payment_id, orderId: response.razorpay_order_id, ...utmParams, landingPage: window.location.origin + "/upgrade" } }).catch(() => { });
            supabase.functions.invoke("send-payment-email", { body: { type: "success", email, name: `${firstName} ${lastName}`.trim(), workshopName: pricing.bothDays ? "2-Day Workshop Pass" : selectedWorkshops.join(", "), amount: pricing.total, paymentId: response.razorpay_payment_id } }).catch(() => { });
            supabase.functions.invoke("send-whatsapp-notification", { body: { type: "success", phone, name: `${firstName} ${lastName}`.trim(), email, workshopName: satWorkshops.join(", ") || "None", sundayWorkshop: sunWorkshops.join(", ") || "None", paymentId: response.razorpay_payment_id } }).catch(() => { });
          } catch { toast.error("Payment verification failed. Please contact support."); }
        },
        modal: {
          ondismiss: async () => {
            toast.info("Payment cancelled");
            supabase.functions.invoke("send-payment-email", { body: { type: "failed", email, name: `${firstName} ${lastName}`.trim(), workshopName: pricing.bothDays ? "2-Day Workshop Pass" : selectedWorkshops.join(", ") } }).catch(() => { });
            supabase.functions.invoke("send-whatsapp-notification", { body: { type: "failed", phone, name: `${firstName} ${lastName}`.trim(), email, workshopName: satWorkshops.join(", ") || "None", sundayWorkshop: sunWorkshops.join(", ") || "None" } }).catch(() => { });
          }
        }
      };
      if (!window.Razorpay) { toast.error("Payment system not loaded. Please refresh."); setSubmitting(false); return; }
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", async (r: any) => {
        toast.error(r.error?.description || "Payment failed.");
        supabase.functions.invoke("send-payment-email", { body: { type: "failed", email, name: `${firstName} ${lastName}`.trim(), workshopName: pricing.bothDays ? "2-Day Workshop Pass" : selectedWorkshops.join(", ") } }).catch(() => { });
        supabase.functions.invoke("send-whatsapp-notification", { body: { type: "failed", phone, name: `${firstName} ${lastName}`.trim(), email, workshopName: satWorkshops.join(", ") || "None", sundayWorkshop: sunWorkshops.join(", ") || "None" } }).catch(() => { });
      });
      rzp.open();
    } catch (err: any) {
      const msg = err?.message?.toLowerCase?.() || "";
      if (msg.includes("fetch") || msg.includes("network")) toast.error("Network error — please refresh the page and try again.");
      else toast.error(err.message || "Something went wrong. Please try again.");
    } finally { setSubmitting(false); }
  };

  const renderWorkshopItem = (workshop: Workshop) => {
    const isSelected = selectedWorkshops.includes(workshop.id);
    return (
      <div key={workshop.id} onClick={() => toggleWorkshop(workshop.id)} className={`p-4 rounded-xl cursor-pointer transition-colors ${isSelected ? "bg-primary/5 ring-1 ring-primary/30" : "hover:bg-muted/50"}`}>
        <div className="flex items-start gap-3">
          <div className={`w-5 h-5 rounded-md flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${isSelected ? "bg-primary" : "border-2 border-muted-foreground/30"}`}>
            {isSelected && <CheckCircle2 size={13} className="text-primary-foreground" />}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-foreground leading-snug">{workshop.label}</span>
              {workshop.tag && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{workshop.tag}</span>}
            </div>
            <ul className="mt-2 space-y-1">
              {workshop.outcomes.map((o) => <li key={o} className="flex items-center gap-1.5 text-[12px] text-muted-foreground"><CheckCircle2 size={10} className="text-primary flex-shrink-0" />{o}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />
      <div className="max-w-[430px] mx-auto relative z-10 pb-32">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src={alenceLogo} alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border"><MapPin size={13} className="text-primary" /><span>IIT Kanpur Campus</span></div>
        </header>

        <section className="px-5 pb-6 text-center">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4"><Zap size={13} />Step 2 of 2</div>
          <h1 id="upgrade-header" className="text-[26px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">Choose Your <span className="text-gradient-cyber">Workshop</span></h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed">Pick one or two workshops. Bundle both days and save 20%!</p>
        </section>

        <section className="px-5 pb-6">
          <div className="bg-card border border-border rounded-2xl p-4 space-y-2">
            {[{ icon: Calendar, text: "Saturday 21st + Sunday 22nd March", color: "hsl(217,91%,50%)" }, { icon: Clock, text: "10:30 AM – 4:30 PM each day", color: "hsl(217,91%,50%)" }, { icon: MapPin, text: "IIT Kanpur On-Campus", color: "hsl(217,91%,50%)" }].map((d) => (
              <div key={d.text} className="flex items-center gap-3"><d.icon size={15} style={{ color: d.color }} className="flex-shrink-0" /><p className="text-[13px] font-medium text-foreground">{d.text}</p></div>
            ))}
          </div>
        </section>

        {pricing.bothDays && (
          <section className="px-5 pb-5">
            <div className="rounded-2xl p-4 text-center" style={{ background: "linear-gradient(135deg, hsl(142 70% 45% / 0.1), hsl(142 70% 45% / 0.05))" }}>
              <p className="text-sm font-bold text-foreground">🎉 2-Day Bundle — Save ₹{pricing.savings.toLocaleString("en-IN")}!</p>
              <p className="text-xs text-muted-foreground mt-1">20% off when you attend both days</p>
            </div>
          </section>
        )}

        <section ref={saturdayRef} className="px-5 pb-6">
          <h2 className="text-lg font-extrabold text-foreground mb-1 tracking-tight">Saturday, 21st March</h2>
          <p className="text-xs text-muted-foreground mb-3">Choose one Saturday workshop</p>
          <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden">{saturdayWorkshops.map(renderWorkshopItem)}</div>
        </section>

        <section className="px-5 pb-6">
          <h2 className="text-lg font-extrabold text-foreground mb-1 tracking-tight">Sunday, 22nd March</h2>
          <p className="text-xs text-muted-foreground mb-3">Choose one Sunday workshop</p>
          <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden">{sundayWorkshops.map(renderWorkshopItem)}</div>
        </section>

        <section className="px-5 pb-6">
          <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{pricing.count} Workshop{pricing.count > 1 ? "s" : ""}</span><span className="text-sm text-foreground">₹{pricing.base.toLocaleString("en-IN")}</span></div>
            {pricing.savings > 0 && <div className="flex items-center justify-between"><span className="text-sm font-medium" style={{ color: "hsl(142, 70%, 45%)" }}>Bundle Discount (20%)</span><span className="text-sm font-medium" style={{ color: "hsl(142, 70%, 45%)" }}>-₹{pricing.savings.toLocaleString("en-IN")}</span></div>}
            <div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">GST (18%)</span><span className="text-sm text-foreground">₹{pricing.gst.toLocaleString("en-IN")}</span></div>
            <div className="border-t border-border pt-3 flex items-center justify-between"><span className="text-base font-extrabold text-foreground">Total</span><span className="text-xl font-extrabold text-foreground">₹{pricing.total.toLocaleString("en-IN")}</span></div>
          </div>
        </section>

        <section className="px-5 pb-6">
          <div className="bg-card border border-border rounded-2xl p-4 flex items-center justify-around">
            {[{ icon: Shield, label: "Secure Pay" }, { icon: Lock, label: "256-bit SSL" }, { icon: Star, label: "Trusted" }].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1"><t.icon size={18} className="text-primary" /><span className="text-[10px] font-medium text-muted-foreground">{t.label}</span></div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom" style={{ background: "hsl(0 0% 100% / 0.95)", borderTop: "1px solid hsl(210 40% 90% / 0.8)" }}>
        <div className="max-w-[430px] mx-auto px-5 py-3">
          <div className="flex items-center justify-between mb-2">
            <div><p className="text-xs text-muted-foreground font-medium">{pricing.count} workshop{pricing.count > 1 ? "s" : ""} selected</p><p className="text-xl font-extrabold text-foreground">₹{pricing.total.toLocaleString("en-IN")}</p></div>
            {pricing.savings > 0 && <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "hsl(142 70% 45% / 0.1)", color: "hsl(142, 70%, 45%)" }}>Save ₹{pricing.savings.toLocaleString("en-IN")}</span>}
          </div>
          <button onClick={handlePayment} disabled={submitting || selectedWorkshops.length === 0} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors disabled:opacity-60 glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>
            {submitting ? "Processing..." : `Pay ₹${pricing.total.toLocaleString("en-IN")} Securely`} {!submitting && <ArrowRight size={18} />}
          </button>
          <p className="text-center text-[11px] text-muted-foreground mt-2 flex items-center justify-center gap-1"><Lock size={10} />Secured by Razorpay</p>
        </div>
      </div>
    </div>
  );
};

export default CyberUpgrade;
