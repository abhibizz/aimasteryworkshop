import { useState, lazy, Suspense } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPin, GraduationCap, Users, BarChart3, Target, TrendingUp, ArrowRight, MessageCircle, Briefcase } from "lucide-react";

const LazyWorkshopBelowFold = lazy(() => import("@/components/workshop/WorkshopBelowFold"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = "/lovable-uploads/63304648-16ff-4c49-9c1e-de8b2f96990c.jpg";

const modules = [
  {
    title: "Foundations of Digital Marketing",
    module: "Module 1", timing: "09:30 AM to 11:00 AM",
    desc: "Build core knowledge of digital marketing channels, strategies, and the modern marketing landscape.",
    topics: ["Definition and scope of digital marketing in modern business", "Why businesses and professionals need digital marketing skills", "Overview of key channels: Search, Social, Email, Content", "Understanding customer journey and digital touchpoints", "Marketing funnel fundamentals: Awareness → Interest → Conversion"],
    skills: ["Ability to explain digital marketing concepts clearly", "Understanding of how channels work together", "Awareness of the digital marketing ecosystem", "Foundational strategic marketing perspective"],
  },
  {
    title: "Performance Marketing (Meta + Google Ads)",
    module: "Module 2", timing: "11:00 AM to 12:00 PM",
    desc: "Master paid advertising platforms to drive measurable ROI for businesses.",
    topics: ["Facebook & Instagram Ads Manager walkthrough", "Campaign objectives, ad sets, and audience targeting", "Google Ads: Search, Display & YouTube campaigns", "A/B testing creatives, copy, and audiences", "Budget allocation and bid strategy optimisation", "Retargeting and lookalike audience strategies"],
    skills: ["Ability to set up and manage ad campaigns end-to-end", "Understanding of audience targeting and segmentation", "Confidence in reading ad performance metrics", "Familiarity with industry-standard advertising tools"],
  },
  {
    title: "Funnels, Landing Pages & CRO",
    module: "Module 3", timing: "12:00 PM to 01:30 PM",
    desc: "Design high-converting funnels and landing pages that turn visitors into customers.",
    topics: ["Sales funnel architecture and customer flow", "Landing page anatomy: headline, CTA, trust signals", "Conversion Rate Optimisation (CRO) principles", "Lead magnets and opt-in strategies", "Persuasion frameworks: urgency, scarcity, social proof", "Tools overview: Unbounce, Leadpages, Carrd"],
    skills: ["Ability to design conversion-focused landing pages", "Understanding of funnel stages and drop-off points", "Knowledge of CRO best practices", "Confidence in building lead capture systems"],
  },
  {
    title: "Analytics, Tracking & AI Tools",
    module: "Module 4", timing: "02:00 PM to 03:30 PM",
    desc: "Set up tracking, measure performance, and leverage AI tools for smarter marketing.",
    topics: ["Google Analytics 4 setup and navigation", "UTM parameters and campaign tracking", "Facebook Pixel and conversion API setup", "AI tools for content creation and ad copy", "Automating reports and surfacing insights with AI", "Overview of ChatGPT, Canva AI, and marketing automation tools"],
    skills: ["Ability to set up end-to-end tracking for campaigns", "Understanding of key marketing metrics and KPIs", "Familiarity with AI-powered marketing tools", "Confidence in data-driven decision making"],
  },
  {
    title: "Content Marketing & Social Media Strategy",
    module: "Module 5", timing: "03:30 PM to 04:30 PM",
    desc: "Create compelling content strategies that drive organic growth and engagement.",
    topics: ["Content pillars and editorial calendar planning", "Social media platform strategies (Instagram, LinkedIn, YouTube)", "SEO fundamentals and keyword research basics", "Email marketing: sequences, segmentation, and automation", "Influencer marketing and collaboration strategies"],
    skills: ["Understanding of content strategy frameworks", "Awareness of platform-specific best practices", "Ability to plan and execute content calendars", "Strategic perspective on organic growth channels"],
  },
  {
    title: "Career Roadmap & Freelancing Playbook",
    module: "Module 6", timing: "04:30 PM to 05:00 PM",
    desc: "Build a portfolio, price your services, and land your first clients in digital marketing.",
    topics: ["Digital marketing career pathways", "Freelancing vs agency vs in-house roles", "Building a portfolio with real projects", "Pricing strategies and client acquisition", "Industry certifications and learning progression", "Guidance on selecting specialisation areas"],
    skills: ["Clarity on career options and entry paths", "Understanding of professional positioning", "Ability to plan a structured learning roadmap", "Informed decision-making for future specialisation"],
  },
];

const DigitalMarketing = () => {
  usePageMeta("AI-Powered Digital Marketing Workshop | IIT Kanpur", "Master Meta & Google Ads, funnels, analytics & AI marketing tools in a full-day hands-on workshop at IIT Kanpur.");
  usePreloadImage(HERO_IMG);
  const scrollToForm = () => document.getElementById("dm-register")?.scrollIntoView({ behavior: "smooth" });
  const formVisible = useFormVisibility("dm-register");

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />

      <div className="max-w-[430px] mx-auto relative z-10 pb-14">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src="/images/alence-logo.png" alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border">
            <MapPin size={13} className="text-primary" />
            <span>IIT Kanpur Campus</span>
          </div>
        </header>

        <section className="px-5 pb-6 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">
            Crack Real <span className="text-gradient-cyber">Digital Marketing</span> — Learn at IIT Kanpur
          </h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            Learn Meta & Google Ads, Funnels, Analytics & AI tools directly from industry experts — in one power-packed day at IIT Kanpur.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[
              { icon: GraduationCap, label: "IIT Kanpur Campus" },
              { icon: Briefcase, label: "Industry Experts" },
              { icon: Users, label: "3,500+ Learners" },
            ].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border">
                <c.icon size={13} className="text-primary" />
                {c.label}
              </span>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img alt="Digital Marketing Masterclass at IIT Kanpur" className="w-full object-cover rounded-xl" src={HERO_IMG} loading="eager" fetchPriority="high" decoding="sync" width="398" height="224" />
          </div>
          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>
            Reserve Seat @ ₹2,099 <ArrowRight size={18} />
          </button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors">
            <MessageCircle size={13} className="text-[hsl(142,70%,45%)]" />
            Have questions? Chat on WhatsApp
          </a>
        </section>

        <Suspense fallback={<SectionFallback />}>
          <LazyWorkshopBelowFold
            scrollToForm={scrollToForm}
            workshopDate="Saturday, 21 March 2026"
            workshopTime="9:30 AM – 5:00 PM"
            outcomes={[
              { icon: BarChart3, text: "Run high-ROI Meta & Google Ads" },
              { icon: TrendingUp, text: "Build conversion-focused funnels" },
              { icon: Target, text: "Use AI tools for modern marketing" },
            ]}
            modules={modules}
            formSectionId="dm-register"
            workshopId="digital-marketing"
            price={2099}
            ctaTitle="Ready to Learn Digital Marketing at IIT Kanpur?"
            communityName="AI Community"
          />
        </Suspense>
      </div>

      {!formVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom" style={{ background: "hsl(0 0% 100% / 0.95)", borderTop: "1px solid hsl(210 40% 90% / 0.8)" }}>
          <div className="max-w-[430px] mx-auto px-5 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground leading-tight font-medium">Only 12 seats left</p>
              <p className="text-lg font-extrabold text-foreground leading-tight">₹2,099</p>
            </div>
            <button onClick={scrollToForm} className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-primary-foreground min-h-[48px] flex items-center justify-center gap-1.5 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>
              Reserve Seat <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalMarketing;
