import { FileText, Users, Award, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const bonuses = [
  { icon: FileText, title: "Prompt Templates Pack", desc: "Ready-to-use prompt templates for various use cases" },
  { icon: Users, title: "Community Access", desc: "Join our exclusive AI practitioners community" },
  { icon: Award, title: "Workshop Certificate", desc: "Official certificate of completion" },
  { icon: BookOpen, title: "Resource Toolkit", desc: "Curated tools, guides & reference materials" },
];

const BonusesSection = () => (
  <section className="section-padding">
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Bonuses <span className="text-gradient">Included</span>
      </h2>

      <div className="space-y-3">
        {bonuses.map((b, i) => (
          <div key={b.title} className="bg-card rounded-xl p-4 card-shadow flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <b.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-[15px]">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export default BonusesSection;
