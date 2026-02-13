import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const includes = [
  "Full-Day Workshop",
  "Certificate",
  "AI Toolkit",
  "Community",
];

const PricingSection = () => (
  <section id="pricing" className="pt-0 pb-14 px-6">
    <ScrollReveal>
      <div className="bg-card rounded-2xl card-shadow p-5 space-y-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-foreground">₹1</p>
          <p className="text-muted-foreground mt-1">+ 18% GST</p>
        </div>

        <ul className="space-y-3">
          {includes.map((item, i) => (
            <li key={item} className="flex items-center gap-3 text-foreground">
              <Check className="h-5 w-5 text-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={() => document.getElementById("workshop-form")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg animate-pulse-glow hover:opacity-90 transition-opacity min-h-[52px]">
          Secure My Spot
        </button>

        <p className="text-center text-accent font-medium text-sm">
          ⚡ Limited Seats Available
        </p>
      </div>
    </ScrollReveal>
  </section>
);

export default PricingSection;
