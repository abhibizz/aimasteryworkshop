import { useState, useMemo, useEffect } from "react";
import { MapPin, Calendar, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUtmParams } from "@/hooks/useUtmParams";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const recapItems = [
  { icon: Calendar, label: "Date", value: "Sunday, 22 March 2026" },
  { icon: Clock, label: "Time", value: "10:30 AM – 4:30 PM" },
  { icon: MapPin, label: "Venue", value: "IIT Kanpur" },
  { icon: Award, label: "Certificate", value: "Provided to all participants" },
];

const saturdayWorkshops = [
  { value: "ai-digital-marketing", label: "AI-Powered Digital Marketing with Instagram & Facebook Ads – ₹1", price: 1 },
  { value: "cybersecurity-ethical-hacking", label: "Cybersecurity & Ethical Hacking Masterclass for Businesses – ₹1", price: 1 },
  { value: "agentic-ai-ml", label: "Agentic AI & ML: Build an Autonomous Workflow for Businesses – ₹1", price: 1 },
];

const sundayWorkshops = [
  { value: "ai-healthcare", label: "AI Tools for Healthcare Professionals and Management – ₹1", price: 1 },
  { value: "ai-prompt-genai", label: "AI Prompt Engineering & Generative AI – ₹1", price: 1 },
  { value: "website-dev-ai", label: "Website Development With AI – ₹1", price: 1 },
];

const WorkshopRecap = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    saturdayWorkshop: "",
    sundayWorkshop: "",
    agreeTerms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const utmParams = useUtmParams();

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pricing = useMemo(() => {
    let base = 0;
    const sat = saturdayWorkshops.find((w) => w.value === form.saturdayWorkshop);
    const sun = sundayWorkshops.find((w) => w.value === form.sundayWorkshop);
    if (sat) base += sat.price;
    if (sun) base += sun.price;
    const gst = Math.round(base * 0.18);
    return { base, gst, total: base + gst };
  }, [form.saturdayWorkshop, form.sundayWorkshop]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in all fields");
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
    if (!form.saturdayWorkshop && !form.sundayWorkshop) {
      toast.error("Please select at least one workshop");
      return;
    }
    if (!form.agreeTerms) {
      toast.error("Please agree to the Terms & Conditions");
      return;
    }
    if (pricing.total <= 0) {
      toast.error("Please select at least one workshop");
      return;
    }

    setSubmitting(true);

    try {
      // Create Razorpay order via edge function
      const { data, error } = await supabase.functions.invoke("create-razorpay-order", {
        body: {
          amount: pricing.total * 100, // Convert to paise
          currency: "INR",
          receipt: `ws_${Date.now()}`,
          notes: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            saturdayWorkshop: form.saturdayWorkshop,
            sundayWorkshop: form.sundayWorkshop,
          },
        },
      });

      if (error || !data?.orderId) {
        throw new Error(error?.message || data?.error || "Failed to create order");
      }

      // Open Razorpay checkout
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "AI Mastery Workshop",
        description: "Workshop Registration",
        order_id: data.orderId,
        prefill: {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: "#6366f1" },
        handler: async (response: any) => {
          try {
            console.log("Razorpay payment response:", JSON.stringify(response));

            // Verify payment
            const { data: verifyData, error: verifyError } = await supabase.functions.invoke("verify-razorpay-payment", {
              body: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
            });

            console.log("Verify response:", JSON.stringify(verifyData), "Error:", verifyError);

            if (verifyError || !verifyData?.verified) {
              console.error("Verification failed:", verifyError, verifyData);
              toast.error("Payment verification failed. Please contact support.");
              return;
            }

            try {
              const scriptURL = "https://script.google.com/macros/s/AKfycbzrO1KJ0rqNL12GDvTW4ANOeXLYDnKXdJ9qjLtOQWhD_Uem2tpC7IZbdf3cOtWxWvIx/exec";

              const sheetData = {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone,
                amount: pricing.total,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,

                // Workshop Selections (Optional: Update your Google Script to use these if you want specific names in the sheet)
                saturdayWorkshop: form.saturdayWorkshop,
                sundayWorkshop: form.sundayWorkshop,

                // UTM & Tracking Parameters
                source: utmParams.utm_source || "",
                medium: utmParams.utm_medium || "",
                campaign: utmParams.utm_campaign || "",
                term: utmParams.utm_term || "",
                content: utmParams.utm_content || "",
                landingUrl: window.location.href
              };

              // Send data to Google Sheet
              await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors", // This is required for Google Apps Script
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(sheetData),
              });

              console.log("Sheet save request sent successfully");

            } catch (err) {
              console.error("Sheet save error:", err);
            }

            toast.success("Payment successful! Registration confirmed. 🎉");
            navigate("/thank-you");
          } catch (err) {
            console.error("Payment verification error:", err);
            toast.error("Payment verification failed. Please contact support.");
          }
        },
        modal: {
          ondismiss: () => {
            toast.info("Payment cancelled");
          },
        },
      };

      if (!window.Razorpay) {
        toast.error("Payment system not loaded. Please refresh and try again.");
        setSubmitting(false);
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        toast.error(response.error?.description || "Payment failed. Please try again.");
      });
      rzp.open();
    } catch (err: any) {
      console.error("Payment error:", err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="workshop-form" className="py-14 px-6">
      {/* Registration Form */}
      <ScrollReveal>
        <div className="bg-card rounded-xl p-4 card-shadow mb-6">
          <h3 className="text-xl font-bold text-foreground mb-5">
            Workshop Registration
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="h-12 rounded-xl"
              maxLength={100}
            />
            <Input
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="h-12 rounded-xl"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-12 rounded-xl"
              maxLength={255}
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-12 rounded-xl"
              maxLength={15}
            />

            {/* Workshop Selection */}
            <div className="space-y-3 pt-2">
              <p className="text-sm font-medium text-foreground">
                Please select at least one workshop from the lists below:
              </p>

              <div>
                <p className="text-sm text-foreground mb-1.5">
                  Select Workshop For Saturday, 21st Mar 2026
                </p>
                <Select
                  value={form.saturdayWorkshop}
                  onValueChange={(v) => setForm({ ...form, saturdayWorkshop: v })}
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select Workshop" />
                  </SelectTrigger>
                  <SelectContent>
                    {saturdayWorkshops.map((w) => (
                      <SelectItem key={w.value} value={w.value}>
                        {w.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className="text-sm text-foreground mb-1.5">
                  Select Workshop For Sunday, 22nd Mar 2026
                </p>
                <Select
                  value={form.sundayWorkshop}
                  onValueChange={(v) => setForm({ ...form, sundayWorkshop: v })}
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select Workshop" />
                  </SelectTrigger>
                  <SelectContent>
                    {sundayWorkshops.map((w) => (
                      <SelectItem key={w.value} value={w.value}>
                        {w.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-muted rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Base</span>
                <span className="text-foreground">₹{pricing.base.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="text-foreground">₹{pricing.gst.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">₹{pricing.total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2.5 pt-1">
              <Checkbox
                id="terms"
                checked={form.agreeTerms}
                onCheckedChange={(checked) =>
                  setForm({ ...form, agreeTerms: checked === true })
                }
                className="mt-0.5"
              />
              <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                I agree to the{" "}
                <span className="text-primary font-medium">Terms & Conditions</span> and{" "}
                <span className="text-primary font-medium">Privacy Policy</span> and consent to
                receive transactional and promotional communication from the company.
              </label>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-12 text-base font-semibold rounded-xl"
            >
              {submitting ? "Processing..." : "Pay Securely"}
            </Button>
          </form>
        </div>
      </ScrollReveal>

      {/* Workshop Details Recap */}
      <ScrollReveal delay={1}>
        <h3 className="text-lg font-bold text-foreground mb-4 text-center">
          Workshop Details
        </h3>
        <div className="space-y-3">
          {recapItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item.label}:</span>
              <span className="text-sm font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default WorkshopRecap;
