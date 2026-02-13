import { Shield, Zap, Lock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () =>
<section className="py-10 px-5 bg-primary text-primary-foreground opacity-95">
    <ScrollReveal>
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold leading-tight">
          Ready to Master AI Prompt Engineering?
        </h2>

        <p className="text-primary-foreground/80">
          Seats are filling fast.
        </p>

        <button
          onClick={() => document.getElementById("workshop-form")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full bg-card text-foreground py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity min-h-[52px]">
          Register Now
        </button>

        <div className="flex items-center justify-center gap-4 text-xs text-primary-foreground/70 flex-wrap">
          <span className="flex items-center gap-1">
            <Lock className="h-3.5 w-3.5" /> Secure Payment
          </span>
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5" /> Instant Confirmation
          </span>
          <span className="flex items-center gap-1">
            <Shield className="h-3.5 w-3.5" /> Limited Seats
          </span>
        </div>
      </div>
    </ScrollReveal>
  </section>;


export default FinalCTA;