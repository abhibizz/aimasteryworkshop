import { lazy, Suspense } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPin, GraduationCap, Users, Heart, FileText, Stethoscope, ArrowRight, MessageCircle, Briefcase } from "lucide-react";

const LazyWorkshopBelowFold = lazy(() => import("@/components/workshop/WorkshopBelowFold"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = "/lovable-uploads/c8aab1bd-1573-4332-addc-78f0ab352ea2.jpg";

const modules = [
  { title: "Introduction to AI in Healthcare & Medical Productivity", module: "Module 1", timing: "10:30 AM to 11:30 AM", desc: "Understand the AI landscape in healthcare and how AI assistants transform clinical workflows.", topics: ["Overview of AI in modern healthcare", "ChatGPT, Gemini & medical AI assistants", "How AI is transforming clinical practice", "Setting up AI tools for healthcare use", "Understanding AI capabilities and limitations in medicine"], skills: ["Ability to navigate AI tools for healthcare", "Understanding of AI's role in medicine", "Confidence in selecting appropriate AI tools", "Foundation for clinical AI adoption"] },
  { title: "AI for Medical Research & Documentation", module: "Module 2", timing: "11:30 AM to 12:30 PM", desc: "Leverage AI for literature reviews, clinical documentation, and research summarization.", topics: ["AI-powered literature review and synthesis", "Clinical documentation automation", "Report writing and case study preparation", "Research summarization techniques", "Medical writing with AI assistance"], skills: ["Ability to accelerate research workflows", "Understanding of AI-assisted documentation", "Confidence in medical writing with AI", "Knowledge of research automation tools"] },
  { title: "AI Tools for Clinical Workflow & Automation", module: "Module 3", timing: "12:30 PM to 01:30 PM", desc: "Explore AI-powered tools that automate scheduling, patient data management, and administrative tasks.", topics: ["Patient scheduling and appointment management", "Electronic health record optimization", "Administrative task automation", "Data management and organization", "Workflow integration strategies"], skills: ["Ability to automate clinical workflows", "Understanding of healthcare automation", "Confidence in AI-powered admin tools", "Knowledge of workflow optimization"] },
  { title: "Patient Communication & Content with AI", module: "Module 4", timing: "02:30 PM to 03:30 PM", desc: "Master AI-driven patient education materials, consent explanations, and professional content.", topics: ["Patient education material creation", "Consent form and explanation generation", "Professional healthcare content writing", "Patient communication templates", "Multi-language patient resources"], skills: ["Ability to create patient-friendly content", "Understanding of AI-driven communication", "Confidence in consent documentation", "Knowledge of healthcare content standards"] },
  { title: "Ethical Use of AI in Healthcare (Compliance & Best Practices)", module: "Module 5", timing: "03:30 PM to 04:30 PM", desc: "Understand HIPAA considerations, ethical AI usage, data privacy, and responsible AI adoption.", topics: ["HIPAA and data privacy considerations", "Ethical AI usage in clinical settings", "Patient data security best practices", "Regulatory compliance frameworks", "Future of AI in healthcare"], skills: ["Understanding of healthcare AI ethics", "Knowledge of compliance requirements", "Awareness of data privacy standards", "Ability to implement responsible AI practices"] },
];

const HealthcareAiTools = () => {
  usePageMeta("AI Tools for Healthcare Professionals | IIT Kanpur", "Learn AI applications in healthcare at IIT Kanpur.");
  usePreloadImage(HERO_IMG);
  const scrollToForm = () => document.getElementById("hc-register")?.scrollIntoView({ behavior: "smooth" });
  const formVisible = useFormVisibility("hc-register");

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />
      <div className="max-w-[430px] mx-auto relative z-10 pb-14">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src="/images/alence-logo.png" alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border"><MapPin size={13} className="text-primary" /><span>IIT Kanpur Campus</span></div>
        </header>
        <section className="px-5 pb-6 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">Master <span className="text-gradient-cyber">AI Tools</span> For Healthcare Professionals</h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">An elite 1-day clinical intensive for healthcare professionals. Get hands-on with life-saving AI technology at IIT Kanpur.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[{ icon: GraduationCap, label: "IIT Kanpur Campus" }, { icon: Briefcase, label: "Industry Experts" }, { icon: Users, label: "3,500+ Learners" }].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border"><c.icon size={13} className="text-primary" />{c.label}</span>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img alt="Healthcare AI Masterclass" className="w-full object-cover rounded-xl" src={HERO_IMG} loading="eager" fetchPriority="high" decoding="sync" width="398" height="224" />
          </div>
          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat @ ₹2,499 <ArrowRight size={18} /></button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"><MessageCircle size={13} className="text-[hsl(142,70%,45%)]" />Have questions? Chat on WhatsApp</a>
        </section>
        <Suspense fallback={<SectionFallback />}>
          <LazyWorkshopBelowFold scrollToForm={scrollToForm} workshopDate="Sunday, 22 March 2026" workshopTime="10:30 AM – 4:30 PM" outcomes={[{ icon: Heart, text: "Transform clinical workflows with AI assistants" }, { icon: FileText, text: "Automate medical research & documentation" }, { icon: Stethoscope, text: "Master AI-driven patient communication" }]} modules={modules} formSectionId="hc-register" workshopId="healthcare-ai" price={2499} ctaTitle="Ready to Master Healthcare AI at IIT Kanpur?" communityName="Healthcare AI Community" />
        </Suspense>
      </div>
      {!formVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom" style={{ background: "hsl(0 0% 100% / 0.95)", borderTop: "1px solid hsl(210 40% 90% / 0.8)" }}>
          <div className="max-w-[430px] mx-auto px-5 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0"><p className="text-xs text-muted-foreground leading-tight font-medium">Only 12 seats left</p><p className="text-lg font-extrabold text-foreground leading-tight">₹2,499</p></div>
            <button onClick={scrollToForm} className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-primary-foreground min-h-[48px] flex items-center justify-center gap-1.5 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat <ArrowRight size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthcareAiTools;
