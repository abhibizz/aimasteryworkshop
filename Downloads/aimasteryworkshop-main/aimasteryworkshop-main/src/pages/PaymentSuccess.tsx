import { CheckCircle, Calendar, Clock, MapPin, Award, Receipt, ArrowRight, Share2 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useRef } from "react";

const PaymentSuccess = () => {
  usePageMeta(
    "Payment Successful | AI Mastery Workshop",
    "Your payment is confirmed. View your order details for the AI Mastery Workshop at IIT Kanpur."
  );

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const notificationsSent = useRef(false);

  const paymentId = searchParams.get("pid") || "—";
  const orderId = searchParams.get("oid") || "—";
  const amount = searchParams.get("amt") || "—";
  const workshops = searchParams.get("ws") || "—";
  const name = searchParams.get("name") || "Participant";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const workshopList = workshops !== "—" ? workshops.split(",").map((w) => w.trim()) : [];

  const workshopLabelMap: Record<string, string> = {
    "digital-marketing": "AI-Powered Digital Marketing",
    "ethical-hacking-iitk": "Cybersecurity & Ethical Hacking",
    "agentic-ai-ml": "Agentic AI & ML",
    "healthcare-ai": "AI Tools for Healthcare",
    "ai-prompt-genai": "Prompt Engineering & Generative AI",
    "data-science-analytics": "Data Science & Analytics With AI",
  };

  // Fallback: send notifications on mount if they weren't sent during Razorpay callback
  useEffect(() => {
    if (notificationsSent.current) return;
    if (!email && !phone) return;
    if (paymentId === "—") return;
    notificationsSent.current = true;

    const workshopLabel = workshopList.length > 3 ? "2-Day Workshop Pass" : workshopList.map(w => workshopLabelMap[w] || w).join(", ");

    console.log("🔄 PaymentSuccess: Sending fallback notifications...");

    if (email) {
      supabase.functions.invoke("send-payment-email", {
        body: {
          type: "success",
          email,
          name,
          workshopName: workshopLabel,
          amount,
          paymentId,
        }
      }).then(r => console.log("📧 Fallback email result:", r)).catch(e => console.error("📧 Fallback email error:", e));
    }

    if (phone) {
      const satWorkshops = workshopList.filter(w => ["digital-marketing", "ethical-hacking-iitk", "agentic-ai-ml"].includes(w));
      const sunWorkshops = workshopList.filter(w => ["healthcare-ai", "ai-prompt-genai", "data-science-analytics"].includes(w));

      supabase.functions.invoke("send-whatsapp-notification", {
        body: {
          type: "success",
          phone,
          name,
          email,
          workshopName: satWorkshops.map(w => workshopLabelMap[w] || w).join(", ") || "None",
          sundayWorkshop: sunWorkshops.map(w => workshopLabelMap[w] || w).join(", ") || "None",
          paymentId,
        }
      }).then(r => console.log("📱 Fallback WhatsApp result:", r)).catch(e => console.error("📱 Fallback WhatsApp error:", e));
    }
  }, []);

  const handleShare = async () => {
    const text = `🎉 I just registered for the AI Mastery Workshop at IIT Kanpur!\n\nWorkshops: ${workshopList.map((w) => workshopLabelMap[w] || w).join(", ")}\nDate: 21–22 March 2026\nVenue: IIT Kanpur`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "AI Mastery Workshop Registration", text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <main className="overflow-x-hidden bg-muted min-h-screen">
      <div className="max-w-[430px] mx-auto bg-background min-h-screen shadow-sm relative flex flex-col items-center px-5 py-10">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/images/light-bg.webp')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
            opacity: 0.4,
          }}
        />

        <div className="relative z-10 w-full space-y-6">
          {/* Success Icon */}
          <div className="flex flex-col items-center text-center space-y-3 pt-4">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center animate-in zoom-in-50 duration-500">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs text-primary-foreground">✓</span>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-foreground">Payment Successful! 🎉</h1>
              <p className="text-sm text-muted-foreground">
                Congratulations {name}, your registration is confirmed!
              </p>
            </div>
          </div>

          {/* Order Details Card */}
          <div className="bg-card rounded-2xl p-5 card-shadow space-y-4">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Receipt size={16} className="text-primary" />
              Order Summary
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-xs text-muted-foreground">Payment ID</span>
                <span className="text-xs font-mono font-medium text-foreground">{paymentId}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-xs text-muted-foreground">Order ID</span>
                <span className="text-xs font-mono font-medium text-foreground truncate max-w-[180px]">{orderId}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-xs text-muted-foreground">Amount Paid</span>
                <span className="text-sm font-bold text-foreground">₹{amount}</span>
              </div>
            </div>

            {workshopList.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="text-xs text-muted-foreground font-medium">Workshops Registered</span>
                <div className="space-y-2">
                  {workshopList.map((w) => (
                    <div key={w} className="flex items-center gap-2 bg-primary/5 rounded-lg px-3 py-2">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{workshopLabelMap[w] || w}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Event Details Card */}
          <div className="bg-card rounded-2xl p-5 card-shadow space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Event Details</h2>
            {[
              { icon: Calendar, label: "Date", value: "21–22 March 2026" },
              { icon: Clock, label: "Time", value: "10:30 AM – 4:30 PM" },
              { icon: MapPin, label: "Venue", value: "IIT Kanpur" },
              { icon: Award, label: "Certificate", value: "Provided to all participants" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item.label}:</span>
                <span className="text-sm font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="bg-primary/5 rounded-xl p-4 text-sm text-muted-foreground leading-relaxed border border-primary/10">
            📧 A confirmation email has been sent to your registered email. Please check your inbox (and spam folder) for workshop details.
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <Button onClick={handleShare} variant="outline" className="w-full h-12 rounded-xl gap-2">
              <Share2 size={16} />
              Share with Friends
            </Button>

            <Button onClick={() => navigate("/")} className="w-full h-12 rounded-xl gap-2 bg-primary hover:bg-primary/90">
              Back to Home
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccess;
