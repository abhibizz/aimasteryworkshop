import { lazy, Suspense } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPin, GraduationCap, Users, UserCheck, Target, FileText, ArrowRight, MessageCircle, Briefcase } from "lucide-react";

const LazyWorkshopBelowFold = lazy(() => import("@/components/workshop/WorkshopBelowFold"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = "/lovable-uploads/28ed86e3-6071-4aed-8c56-f1df1dfb260a.jpg";

const modules = [
  { title: "Introduction to AI in Human Resources", module: "Module 1", timing: "10:30 AM to 11:30 AM", desc: "Understand the AI landscape in HR and how tools like ChatGPT transform recruitment and management.", topics: ["Overview of AI in modern HR practices", "ChatGPT & AI assistants for HR workflows", "How AI is reshaping talent management", "Setting up AI tools for HR operations", "AI capabilities and limitations in HR"], skills: ["Ability to navigate AI tools for HR", "Understanding of AI's role in human resources", "Confidence in selecting appropriate HR AI tools", "Foundation for AI-driven HR transformation"] },
  { title: "AI Tools for Recruitment & Candidate Screening", module: "Module 2", timing: "11:30 AM to 12:30 PM", desc: "Learn to use AI for resume screening, candidate shortlisting, and talent acquisition workflows.", topics: ["AI-powered resume screening techniques", "Candidate shortlisting and matching", "Interview scheduling automation", "Job description generation with AI", "Talent pipeline management"], skills: ["Ability to automate recruitment processes", "Understanding of AI-driven screening", "Confidence in talent acquisition tools", "Knowledge of hiring workflow optimization"] },
  { title: "HR Automation (Emails, Reports, Documentation)", module: "Module 3", timing: "12:30 PM to 01:30 PM", desc: "Master AI-powered automation for HR emails, offer letters, policy documents, and reports.", topics: ["Automated email drafting and templates", "Offer letter and contract generation", "Policy document creation with AI", "HR report automation and formatting", "Administrative task streamlining"], skills: ["Ability to automate routine HR tasks", "Understanding of document automation", "Confidence in AI-powered reporting", "Knowledge of HR process optimization"] },
  { title: "Employee Engagement & HR Analytics with AI", module: "Module 4", timing: "02:30 PM to 03:30 PM", desc: "Explore AI tools for employee satisfaction surveys, performance analytics, and engagement strategies.", topics: ["Employee satisfaction survey design with AI", "Performance analytics and dashboards", "Sentiment analysis for employee feedback", "Engagement strategy optimization", "Predictive analytics for retention"], skills: ["Ability to measure employee engagement", "Understanding of HR analytics", "Confidence in data-driven HR decisions", "Knowledge of predictive workforce tools"] },
  { title: "Real HR Use Cases & Live AI Demonstrations", module: "Module 5", timing: "03:30 PM to 04:30 PM", desc: "Hands-on live demonstrations of AI tools solving real HR challenges.", topics: ["Onboarding automation demonstrations", "Exit interview analysis with AI", "HR dashboard creation live demo", "Cross-functional HR AI applications", "Future trends in HR technology"], skills: ["Understanding of practical HR AI applications", "Ability to identify HR automation opportunities", "Knowledge of HR tech career pathways", "Inspiration for AI-driven HR projects"] },
];

const AiForHrProfessionals = () => {
  usePageMeta("AI for HR Professionals Workshop | IIT Kanpur", "Transform HR operations with AI at IIT Kanpur.");
  usePreloadImage(HERO_IMG);
  const scrollToForm = () => document.getElementById("hr-register")?.scrollIntoView({ behavior: "smooth" });
  const formVisible = useFormVisibility("hr-register");

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />
      <div className="max-w-[430px] mx-auto relative z-10 pb-14">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src="/images/alence-logo.png" alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border"><MapPin size={13} className="text-primary" /><span>IIT Kanpur Campus</span></div>
        </header>
        <section className="px-5 pb-6 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight"><span className="text-gradient-cyber">AI for HR</span> Professionals — Transform HR at IIT Kanpur</h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">Master AI-powered recruitment, engagement & HR operations directly from industry experts — in one power-packed day at IIT Kanpur.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[{ icon: GraduationCap, label: "IIT Kanpur Campus" }, { icon: Briefcase, label: "Industry Experts" }, { icon: Users, label: "3,500+ Learners" }].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border"><c.icon size={13} className="text-primary" />{c.label}</span>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img alt="HR AI Masterclass" className="w-full object-cover rounded-xl" src={HERO_IMG} loading="eager" fetchPriority="high" decoding="sync" width="398" height="224" />
          </div>
          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat @ ₹2,099 <ArrowRight size={18} /></button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"><MessageCircle size={13} className="text-[hsl(142,70%,45%)]" />Have questions? Chat on WhatsApp</a>
        </section>
        <Suspense fallback={<SectionFallback />}>
          <LazyWorkshopBelowFold scrollToForm={scrollToForm} workshopDate="Sunday, 22 March 2026" workshopTime="10:30 AM – 4:30 PM" outcomes={[{ icon: UserCheck, text: "Automate recruitment & candidate screening" }, { icon: FileText, text: "AI-powered HR emails, reports & documentation" }, { icon: Target, text: "Master employee engagement analytics" }]} modules={modules} formSectionId="hr-register" workshopId="ai-prompt-genai" ctaTitle="Ready to Transform HR with AI at IIT Kanpur?" communityName="HR AI Community" />
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

export default AiForHrProfessionals;
