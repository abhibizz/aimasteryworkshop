import { lazy, Suspense } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPin, GraduationCap, Users, Brain, Sparkles, Code, ArrowRight, MessageCircle, Briefcase } from "lucide-react";

const LazyWorkshopBelowFold = lazy(() => import("@/components/workshop/WorkshopBelowFold"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = "/lovable-uploads/11ee6ed7-501a-4121-b730-2fcea67a3fee.jpg";

const modules = [
  { title: "Introduction to Agentic AI & Autonomous Systems", module: "Module 1", timing: "10:30 AM to 11:30 AM", desc: "Understand foundations of autonomous AI and what makes agents different from traditional AI.", topics: ["What is Agentic AI and why it matters now", "Difference between traditional AI and autonomous agents", "The landscape of modern agentic systems", "Key components: perception, reasoning, action", "Real-world examples of AI agents in production"], skills: ["Understanding of autonomous AI fundamentals", "Ability to identify agentic vs traditional AI", "Awareness of the AI agent ecosystem", "Foundation for building your own agents"] },
  { title: "Prompt Engineering for AI Agents", module: "Module 2", timing: "11:30 AM to 12:30 PM", desc: "Master prompt chaining, context layering, and advanced techniques that power AI workflows.", topics: ["Advanced prompt engineering techniques", "Prompt chaining and context layering", "System prompts and role-based instructions", "Few-shot and chain-of-thought prompting", "Handling edge cases and error recovery"], skills: ["Ability to craft production-grade prompts", "Understanding of prompt optimization", "Confidence in debugging AI outputs", "Knowledge of industry best practices"] },
  { title: "Multi-Agent Workflows & Automation", module: "Module 3", timing: "12:30 PM to 01:30 PM", desc: "Design and build multi-agent systems that collaborate, delegate tasks, and execute complex workflows.", topics: ["Multi-agent architecture patterns", "Agent communication and delegation", "Workflow orchestration frameworks", "Error handling in multi-agent systems", "Scaling agent workflows"], skills: ["Ability to design multi-agent systems", "Understanding of agent orchestration", "Knowledge of collaboration patterns", "Confidence in building complex workflows"] },
  { title: "Building AI Agents Using Modern Tools & APIs", module: "Module 4", timing: "02:30 PM to 03:30 PM", desc: "Hands-on session building real AI agents using modern tools, APIs, and frameworks.", topics: ["Overview of agent-building frameworks", "Connecting agents to external APIs", "Building tool-using agents", "Memory and state management", "Deployment and monitoring"], skills: ["Hands-on experience building agents", "Ability to integrate APIs with agents", "Understanding of agent deployment", "Practical tool-using agent skills"] },
  { title: "Real-World Use Cases & Live Demonstrations", module: "Module 5", timing: "03:30 PM to 04:30 PM", desc: "Watch live demonstrations of AI agents solving real-world problems and explore business use cases.", topics: ["AI agents in customer support automation", "Content generation and research agents", "Data analysis and reporting agents", "Business process automation examples", "Future trends and career opportunities"], skills: ["Understanding of practical AI applications", "Ability to identify business use cases", "Knowledge of AI career pathways", "Inspiration for your own AI projects"] },
];

const AIMasterclass = () => {
  usePageMeta("AI Masterclass Workshop | IIT Kanpur", "Deep-dive AI masterclass covering advanced prompt engineering, automation & AI-powered productivity. Hands-on training at IIT Kanpur.");
  usePreloadImage(HERO_IMG);
  const scrollToForm = () => document.getElementById("ai-register")?.scrollIntoView({ behavior: "smooth" });
  const formVisible = useFormVisibility("ai-register");

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />
      <div className="max-w-[430px] mx-auto relative z-10 pb-14">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src="/images/alence-logo.png" alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border"><MapPin size={13} className="text-primary" /><span>IIT Kanpur Campus</span></div>
        </header>
        <section className="px-5 pb-6 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">The Ultimate <span className="text-gradient-cyber">AI Masterclass</span> — Learn at IIT Kanpur</h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">Master Agentic AI, Prompt Engineering & Multi-Agent Workflows directly from industry experts — in one power-packed day at IIT Kanpur.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[{ icon: GraduationCap, label: "IIT Kanpur Campus" }, { icon: Briefcase, label: "Industry Experts" }, { icon: Users, label: "3,500+ Learners" }].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border"><c.icon size={13} className="text-primary" />{c.label}</span>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img alt="AI Masterclass at IIT Kanpur" className="w-full object-cover rounded-xl" src={HERO_IMG} loading="eager" fetchPriority="high" decoding="sync" width="398" height="224" />
          </div>
          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat @ ₹2,099 <ArrowRight size={18} /></button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"><MessageCircle size={13} className="text-[hsl(142,70%,45%)]" />Have questions? Chat on WhatsApp</a>
        </section>
        <Suspense fallback={<SectionFallback />}>
          <LazyWorkshopBelowFold scrollToForm={scrollToForm} workshopDate="Saturday, 21 March 2026" workshopTime="10:30 AM – 4:30 PM" outcomes={[{ icon: Brain, text: "Build autonomous AI agents from scratch" }, { icon: Sparkles, text: "Master advanced prompt engineering techniques" }, { icon: Code, text: "Design multi-agent workflows for real businesses" }]} modules={modules} formSectionId="ai-register" workshopId="agentic-ai-ml" ctaTitle="Ready to Master AI at IIT Kanpur?" />
        </Suspense>
      </div>
      {!formVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom" style={{ background: "hsl(0 0% 100% / 0.95)", borderTop: "1px solid hsl(210 40% 90% / 0.8)" }}>
          <div className="max-w-[430px] mx-auto px-5 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0"><p className="text-xs text-muted-foreground leading-tight font-medium">Only 12 seats left</p><p className="text-lg font-extrabold text-foreground leading-tight">₹2,099</p></div>
            <button onClick={scrollToForm} className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-primary-foreground min-h-[48px] flex items-center justify-center gap-1.5 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat <ArrowRight size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMasterclass;
