import { Users, Award, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { icon: Users, value: "3500+", label: "Participants" },
  { icon: Award, value: "35+", label: "Workshops Conducted" },
  { icon: Star, value: "4.8/5", label: "Average Rating" },
];

const TrustStrip = () => (
  <section className="pt-2.5 pb-14 px-6">
    <ScrollReveal>
      <div className="space-y-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-4 bg-background rounded-xl p-4 card-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground text-lg">{s.value}</p>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export default TrustStrip;
