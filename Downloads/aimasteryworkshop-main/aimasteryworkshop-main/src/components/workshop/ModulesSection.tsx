import { useState } from "react";
import { Clock, CheckCircle2, Minus, Plus } from "lucide-react";

const modules = [
  {
    title: "Foundations of Prompt Engineering",
    module: "Module 1",
    timing: "10:30 AM to 12:00 PM",
    desc: "Build core knowledge of how to communicate effectively with AI models for reliable, repeatable results.",
    topics: [
      "Zero-shot & few-shot prompting techniques",
      "Prompt structure, clarity & context layering",
      "AI behavior control and output formatting",
      "Prompt optimization and iteration strategies",
      "Understanding model capabilities and limitations",
    ],
    skills: [
      "Ability to write structured, effective prompts",
      "Understanding of prompting paradigms",
      "Confidence in controlling AI output quality",
      "Foundational prompt engineering perspective",
    ],
  },
  {
    title: "Generative AI Tools in Practice",
    module: "Module 2",
    timing: "12:00 PM to 01:30 PM",
    desc: "Master leading AI platforms through hands-on exercises and real-world use cases.",
    topics: [
      "ChatGPT advanced features & custom instructions",
      "Claude for analysis, writing & code generation",
      "Gemini multimodal capabilities walkthrough",
      "Text, image & code generation workflows",
      "Tool comparison, selection & workflow automation",
      "Building AI-powered productivity systems",
    ],
    skills: [
      "Ability to leverage multiple AI platforms effectively",
      "Understanding of each tool's strengths and trade-offs",
      "Confidence in building AI-assisted workflows",
      "Familiarity with industry-standard AI tools",
    ],
  },
  {
    title: "Hands-On Activities & Prompt Battles",
    module: "Module 3",
    timing: "02:30 PM to 04:30 PM",
    desc: "Apply everything in competitive challenges, group activities, and real-time prompt testing.",
    topics: [
      "Group prompt engineering challenges",
      "Real-time prompt testing & debugging",
      "Live prompt battles — head-to-head competitions",
      "Ethical AI discussion & responsible usage",
      "Advanced chain-of-thought & reasoning prompts",
      "Building reusable prompt templates & libraries",
    ],
    skills: [
      "Battle-tested prompt writing under pressure",
      "Understanding of prompt debugging techniques",
      "Ability to evaluate and improve prompt quality",
      "Informed decision-making for AI ethics",
    ],
  },
];

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-card border border-border rounded-2xl mb-3 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-semibold text-foreground text-[15px] pr-4">{title}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${open ? "bg-primary/10" : "bg-muted"}`}>
          {open ? <Minus size={14} className="text-primary" /> : <Plus size={14} className="text-primary" />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{children}</div>
      )}
    </div>
  );
};

const ModulesSection = () => (
  <section className="px-5 pb-10">
    <h2 className="text-[22px] font-extrabold text-foreground mb-1 tracking-tight text-center">Workshop <span className="text-gradient-cyber">Modules</span></h2>
    <p className="text-sm text-muted-foreground mb-5 text-center">The workshop follows a <strong className="text-foreground">progressive academic structure</strong>, moving from foundational concepts to applied understanding.</p>

    <div className="space-y-3">
      {modules.map((mod, idx) => (
        <AccordionItem key={idx} title={mod.title} defaultOpen={idx === 0}>
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{mod.module}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={11} /> {mod.timing}</span>
            </div>
            <p className="text-[13px] text-muted-foreground italic">{mod.desc}</p>
            <div>
              <p className="text-xs font-bold text-foreground mb-1.5">Topics Covered</p>
              <ul className="space-y-1">
                {mod.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[12px] text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground mb-1.5">Skills Acquired</p>
              <ul className="space-y-1">
                {mod.skills.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[12px] text-muted-foreground">
                    <CheckCircle2 size={11} className="text-primary flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionItem>
      ))}
    </div>
  </section>
);

export default ModulesSection;
