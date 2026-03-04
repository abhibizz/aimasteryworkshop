import { lazy, Suspense } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPin, GraduationCap, Users, Brain, Globe, Route, ArrowRight, MessageCircle, Briefcase } from "lucide-react";

const LazyWorkshopBelowFold = lazy(() => import("@/components/workshop/WorkshopBelowFold"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = "/lovable-uploads/328ca44c-2be6-4f3d-a6c7-1935e07f3a3d.jpg";

const modules = [
  { title: "Foundations of Cyber Security & Ethical Hacking", module: "Module 1", timing: "10:30 AM to 11:00 AM", desc: "Build core knowledge in cyber threats and the digital security landscape.", topics: ["Scope of cybersecurity in modern systems", "Real-world cyber incidents & data leaks", "Ethical hacking: purpose, legality, responsibility", "Attack lifecycle: recon → exploitation → evasion"], skills: ["Ability to explain cybersecurity concepts", "Understanding of ethical foundations", "Awareness of digital threats", "Foundational threat-modelling perspective"] },
  { title: "Reconnaissance, Scanning & Phishing", module: "Module 2", timing: "11:00 AM to 12:00 PM", desc: "OSINT, footprinting, and social engineering fundamentals.", topics: ["Publicly exposed data footprints", "Network scanning: ports, services, exposure", "Phishing mechanisms & human vulnerability", "Recognizing social engineering attacks"], skills: ["Ability to identify exposed information", "Understanding of attacker methods", "Phishing recognition skills", "Human-centric security awareness"] },
  { title: "Web Application Security & Burp Suite", module: "Module 3", timing: "12:00 PM to 01:00 PM", desc: "Web app architecture and request–response flow analysis.", topics: ["Input validation flaws & injection vulnerabilities", "Burp Suite for intercepting & analyzing traffic", "Industry-standard security testing workflows"], skills: ["Web traffic interception skills", "Understanding of web app security", "Confidence in Burp Suite", "Security testing knowledge"] },
  { title: "Real-World Threats & Defense Strategies", module: "Module 4", timing: "02:00 PM to 03:30 PM", desc: "Data breaches, identity theft, and organizational defense.", topics: ["SIM swap fraud, account takeover scenarios", "Mobile & endpoint security risks", "Firewalls, monitoring, security policies", "Incident response and damage mitigation"], skills: ["Attack pattern identification", "Defense-in-depth understanding", "Incident response knowledge", "Mobile security awareness"] },
  { title: "AI in Cyber Security & Career Roadmap", module: "Module 5", timing: "03:30 PM to 04:30 PM", desc: "How AI changes cybersecurity and your path to certification.", topics: ["AI-powered threat detection", "Machine learning in security operations", "Career paths: SOC, Pen-Tester, Security Engineer", "Certification roadmap (CEH, OSCP, CompTIA)"], skills: ["AI in security understanding", "Clear career roadmap", "Industry certification knowledge", "Structured learning plan"] },
];

const CyberV2 = () => {
  usePageMeta("Cybersecurity Workshop V2 | IIT Kanpur", "Advanced cybersecurity & ethical hacking workshop at IIT Kanpur.");
  usePreloadImage(HERO_IMG);
  const scrollToForm = () => document.getElementById("cyber-register")?.scrollIntoView({ behavior: "smooth" });
  const formVisible = useFormVisibility("cyber-register");

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />
      <div className="max-w-[430px] mx-auto relative z-10 pb-14">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src="/images/alence-logo.png" alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border"><MapPin size={13} className="text-primary" /><span>IIT Kanpur Campus</span></div>
        </header>
        <section className="px-5 pb-6 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">Master <span className="text-gradient-cyber">Ethical Hacking</span> in 1 Day at IIT Kanpur</h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">Learn real-world hacking & defense skills used by top security professionals — hands-on at IIT Kanpur.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[{ icon: GraduationCap, label: "IIT Kanpur Campus" }, { icon: Briefcase, label: "Industry Experts" }, { icon: Users, label: "3,500+ Learners" }].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border"><c.icon size={13} className="text-primary" />{c.label}</span>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img alt="Ethical Hacking Workshop" className="w-full object-cover rounded-xl" src={HERO_IMG} loading="eager" fetchPriority="high" decoding="sync" width="398" height="224" />
          </div>
          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat @ ₹2,099 <ArrowRight size={18} /></button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"><MessageCircle size={13} className="text-[hsl(142,70%,45%)]" />Have questions? Chat on WhatsApp</a>
        </section>
        <Suspense fallback={<SectionFallback />}>
          <LazyWorkshopBelowFold scrollToForm={scrollToForm} workshopDate="Saturday, 21 March 2026" workshopTime="10:30 AM – 4:30 PM" outcomes={[{ icon: Brain, text: "Develop the hacker mindset & attack lifecycle" }, { icon: Globe, text: "Hands-on with Burp Suite & traffic interception" }, { icon: Route, text: "Clear career roadmap to Pen-Tester certification" }]} modules={modules} formSectionId="cyber-register" workshopId="ethical-hacking-iitk" ctaTitle="Ready to Master Ethical Hacking at IIT Kanpur?" communityName="Security Community" />
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

export default CyberV2;
