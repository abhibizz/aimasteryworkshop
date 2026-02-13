import { Brain, Wrench, Layers, Swords } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    icon: Brain,
    title: "Prompt Engineering Foundations",
    desc: "Learn structure, clarity, constraints, and context for effective AI communication.",
  },
  {
    icon: Wrench,
    title: "Generative AI Tools",
    desc: "Master ChatGPT, Claude, Gemini & other cutting-edge AI platforms hands-on.",
  },
  {
    icon: Layers,
    title: "Prompt Frameworks & Techniques",
    desc: "Apply zero-shot, few-shot, chain-of-thought, and advanced prompting patterns.",
  },
  {
    icon: Swords,
    title: "Live Prompt Battles",
    desc: "Compete in real-time prompt challenges and sharpen your skills under pressure.",
  },
];

const LearnSection = () => (
  <section id="learn" className="pt-0 pb-14 px-6">
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        What You'll <span className="text-gradient">Learn</span>
      </h2>
    </ScrollReveal>

    <div className="space-y-3">
      {cards.map((card, i) => (
        <ScrollReveal key={card.title} delay={i}>
          <div className="bg-card rounded-xl p-4 card-shadow flex gap-3 items-start">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <card.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{card.desc}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default LearnSection;
