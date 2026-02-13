import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const modules = [
  {
    title: "Module 1: Foundations of Prompt Engineering",
    topics: ["Zero-shot & Few-shot prompting", "Prompt structure & context layering", "AI behavior control", "Prompt optimization"],
  },
  {
    title: "Module 2: Generative AI in Practice",
    topics: ["Text & image generation", "Code assistance", "Workflow automation", "Tool comparison & selection"],
  },
  {
    title: "Module 3: Hands-On Activities & Challenges",
    topics: ["Group activities", "Real-time prompt testing", "Ethical AI discussion", "Live prompt battles"],
  },
];

const AgendaSection = () => (
  <section className="pt-0 pb-14 px-6">
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Workshop <span className="text-gradient">Agenda</span>
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {modules.map((mod, i) => (
          <AccordionItem
            key={i}
            value={`mod-${i}`}
            className="bg-background border border-border rounded-xl px-4 data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="text-foreground font-semibold hover:text-primary hover:no-underline py-4 text-left text-[15px]">
              {mod.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pb-2">
                {mod.topics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-muted-foreground text-[15px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollReveal>
  </section>
);

export default AgendaSection;
