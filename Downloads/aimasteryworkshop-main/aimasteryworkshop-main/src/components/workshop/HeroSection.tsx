import { Building2, Award, Calendar, Clock } from "lucide-react";
import heroImage from "@/assets/hero-workshop-iitk.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const details = [
{ icon: Building2, text: "IIT Kanpur On-Campus" },
{ icon: Award, text: "Certificate To All Participants" },
{ icon: Calendar, text: "Sunday 22nd March 2026" },
{ icon: Clock, text: "From 10:30 AM To 4:30 PM" }];


const HeroSection = () => {
  return (
    <section className="pt-16 pb-8 px-6 bg-muted">
      <ScrollReveal>
        <div className="space-y-4">
          {/* Headline */}
          <h1 className="leading-[1.2] font-bold text-primary text-3xl text-center">
            AI Prompt Engineering & Generative AI Workshop at IIT Kanpur
          </h1>

          {/* Red subheadline */}
          <p className="text-accent font-medium text-[15px] italic text-center">
            Move Beyond Chatting With AI. Build Systems, Workflows, and Reliable Results.
          </p>

          {/* Workshop Banner Image */}
          <div className="rounded-xl overflow-hidden card-shadow">
            <img
              src={heroImage}
              alt="Workshop Series at IIT Kanpur - students at campus"
              className="w-full object-cover" />

          </div>

          {/* 2x2 Detail Grid */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {details.map((d, i) =>
            <div key={d.text} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground font-medium text-[14px] leading-snug pt-1.5">
                  {d.text}
                </p>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>);

};

export default HeroSection;