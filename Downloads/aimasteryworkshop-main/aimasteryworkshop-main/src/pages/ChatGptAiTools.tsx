import { lazy, Suspense } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPin, GraduationCap, Users, Brain, Lightbulb, Zap, ArrowRight, MessageCircle, Briefcase } from "lucide-react";

const LazyWorkshopBelowFold = lazy(() => import("@/components/workshop/WorkshopBelowFold"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = "/lovable-uploads/04cbb469-3d38-4837-8614-9d68fc350055.jpg";

const modules = [
  { title: "Introduction to AI & Productivity Tools", module: "Module 1", timing: "10:30 AM to 11:30 AM", desc: "Understand the AI landscape and how tools like ChatGPT and Gemini supercharge your daily workflow.", topics: ["Overview of AI assistants: ChatGPT, Gemini, Claude", "How AI is transforming work across industries", "Setting up and configuring AI tools", "Understanding AI capabilities and limitations", "Choosing the right AI tool for different tasks"], skills: ["Ability to navigate major AI platforms", "Understanding of AI capabilities", "Confidence in selecting the right tool", "Foundation for advanced AI usage"] },
  { title: "Prompt Engineering for Daily Productivity", module: "Module 2", timing: "11:30 AM to 12:30 PM", desc: "Master crafting effective prompts to get precise, high-quality outputs from AI tools every time.", topics: ["Prompt structure and formatting best practices", "Role-based prompting techniques", "Chain-of-thought and step-by-step prompting", "Handling complex multi-part requests", "Iterating and refining prompts for better results"], skills: ["Ability to craft effective prompts consistently", "Understanding of prompt optimization", "Confidence in getting quality AI outputs", "Knowledge of advanced prompting techniques"] },
  { title: "Using AI for Content Creation & Research", module: "Module 3", timing: "12:30 PM to 01:30 PM", desc: "Leverage AI for writing, summarization, brainstorming, and research tasks at lightning speed.", topics: ["AI-powered writing: blogs, emails, reports", "Research summarization and literature review", "Brainstorming and ideation with AI", "Content repurposing across formats", "Fact-checking and quality assurance with AI"], skills: ["Ability to create content 10x faster", "Understanding of AI-assisted research", "Confidence in AI-powered brainstorming", "Knowledge of content quality workflows"] },
  { title: "Automation Tools & Smart Workflows", module: "Module 4", timing: "02:30 PM to 03:30 PM", desc: "Explore automation platforms and AI-powered workflows that save hours of manual work.", topics: ["No-code automation platforms overview", "Connecting AI tools with daily apps", "Building automated email and document workflows", "AI-powered data analysis and reporting", "Creating custom AI assistants for specific tasks"], skills: ["Ability to automate repetitive tasks", "Understanding of workflow design", "Confidence in building AI integrations", "Knowledge of no-code automation tools"] },
  { title: "Real-Life Use Cases & Live Demonstrations", module: "Module 5", timing: "03:30 PM to 04:30 PM", desc: "Watch live demos of AI tools in action across various industries and use cases.", topics: ["AI in marketing and sales workflows", "AI for education and learning", "AI in business operations and HR", "Live problem-solving sessions", "Career opportunities in AI"], skills: ["Understanding of cross-industry AI applications", "Ability to identify AI opportunities", "Knowledge of AI career pathways", "Inspiration for personal AI projects"] },
];

const ChatGptAiTools = () => {
  usePageMeta("ChatGPT & AI Tools Workshop | IIT Kanpur", "Hands-on workshop on ChatGPT, AI writing tools & automation at IIT Kanpur.");
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
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">Master <span className="text-gradient-cyber">ChatGPT & AI Tools</span> — Learn at IIT Kanpur</h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">Master ChatGPT, Gemini & AI productivity tools to work smarter, faster & better — hands-on training at IIT Kanpur.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[{ icon: GraduationCap, label: "IIT Kanpur Campus" }, { icon: Briefcase, label: "Industry Experts" }, { icon: Users, label: "3,500+ Learners" }].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border"><c.icon size={13} className="text-primary" />{c.label}</span>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img alt="AI Productivity Masterclass" className="w-full object-cover rounded-xl" src={HERO_IMG} loading="eager" fetchPriority="high" decoding="sync" width="398" height="224" />
          </div>
          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat @ ₹2,099 <ArrowRight size={18} /></button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"><MessageCircle size={13} className="text-[hsl(142,70%,45%)]" />Have questions? Chat on WhatsApp</a>
        </section>
        <Suspense fallback={<SectionFallback />}>
          <LazyWorkshopBelowFold scrollToForm={scrollToForm} workshopDate="Sunday, 22 March 2026" workshopTime="10:30 AM – 4:30 PM" outcomes={[{ icon: Brain, text: "Master ChatGPT & AI assistants for daily work" }, { icon: Lightbulb, text: "Automate content creation & research tasks" }, { icon: Zap, text: "Build smart AI-powered workflows" }]} modules={modules} formSectionId="ai-register" workshopId="ai-prompt-genai" ctaTitle="Ready to Master AI Tools at IIT Kanpur?" />
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

export default ChatGptAiTools;
