import { lazy, Suspense } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPin, GraduationCap, Users, BarChart3, Database, TrendingUp, ArrowRight, MessageCircle, Briefcase } from "lucide-react";
import heroDataScience from "@/assets/hero-data-science.png";

const LazyWorkshopBelowFold = lazy(() => import("@/components/workshop/WorkshopBelowFold"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = heroDataScience;

const modules = [
  { title: "Introduction to Data Science & AI-Powered Analytics", module: "Module 1", timing: "10:30 AM to 11:30 AM", desc: "Understand the data science landscape and how AI transforms analytics workflows.", topics: ["What is Data Science and why it matters today", "Overview of AI tools for data analytics", "Understanding data types, sources & pipelines", "Setting up your AI-powered analytics toolkit", "Real-world use cases across industries"], skills: ["Ability to navigate AI analytics tools", "Understanding of data science fundamentals", "Confidence in identifying data opportunities", "Foundation for AI-driven analysis"] },
  { title: "Data Cleaning, Preparation & Exploration with AI", module: "Module 2", timing: "11:30 AM to 12:30 PM", desc: "Use AI to clean messy data, handle missing values, and perform exploratory data analysis efficiently.", topics: ["AI-assisted data cleaning techniques", "Handling missing values and outliers", "Automated exploratory data analysis (EDA)", "Data transformation and feature engineering", "Working with structured & unstructured data"], skills: ["Ability to prepare datasets efficiently", "Understanding of data quality standards", "Confidence in AI-powered data wrangling", "Knowledge of EDA best practices"] },
  { title: "Data Visualization & Dashboard Building", module: "Module 3", timing: "12:30 PM to 01:30 PM", desc: "Create compelling visualizations and interactive dashboards using AI-powered tools.", topics: ["Principles of effective data visualization", "AI-generated charts and graphs", "Building interactive dashboards", "Storytelling with data", "Tools: ChatGPT, Python libraries & BI platforms"], skills: ["Ability to create impactful visualizations", "Understanding of dashboard design", "Confidence in presenting data insights", "Knowledge of visualization tools"] },
  { title: "Predictive Analytics & Machine Learning Basics with AI", module: "Module 4", timing: "02:30 PM to 03:30 PM", desc: "Leverage AI tools to build predictive models without writing complex code.", topics: ["Introduction to predictive analytics", "AI-assisted model building & selection", "Regression, classification & clustering basics", "No-code/low-code ML with AI tools", "Interpreting model results for business use"], skills: ["Ability to build basic predictive models", "Understanding of ML fundamentals", "Confidence in no-code ML platforms", "Knowledge of model evaluation techniques"] },
  { title: "Real-World Applications & Career in Data Science", module: "Module 5", timing: "03:30 PM to 04:30 PM", desc: "Apply your skills to real-world projects and explore career paths in data science & analytics.", topics: ["Industry case studies: finance, marketing, healthcare", "Building a data science portfolio", "AI tools for automated reporting", "Career paths and emerging roles", "Future trends in AI-powered analytics"], skills: ["Understanding of industry applications", "Knowledge of career opportunities", "Ability to plan a data science career", "Awareness of emerging trends"] },
];

const DataScienceAnalytics = () => {
  usePageMeta("Data Science & Analytics With AI | IIT Kanpur", "Master data science, analytics & AI-powered insights at IIT Kanpur.");
  usePreloadImage(HERO_IMG);
  const scrollToForm = () => document.getElementById("ds-register")?.scrollIntoView({ behavior: "smooth" });
  const formVisible = useFormVisibility("ds-register");

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />
      <div className="max-w-[430px] mx-auto relative z-10 pb-14">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src="/images/alence-logo.png" alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border"><MapPin size={13} className="text-primary" /><span>IIT Kanpur Campus</span></div>
        </header>
        <section className="px-5 pb-6 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">Master <span className="text-gradient-cyber">Data Science & Analytics</span> With AI — at IIT Kanpur</h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">A hands-on 1-day intensive on AI-powered data science, analytics, and visualization at IIT Kanpur.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[{ icon: GraduationCap, label: "IIT Kanpur Campus" }, { icon: Briefcase, label: "Industry Experts" }, { icon: Users, label: "3,500+ Learners" }].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border"><c.icon size={13} className="text-primary" />{c.label}</span>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img alt="Data Science & Analytics Workshop" className="w-full object-cover rounded-xl" src={HERO_IMG} loading="eager" fetchPriority="high" decoding="sync" width="398" height="224" />
          </div>
          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat @ ₹1,699 <ArrowRight size={18} /></button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors"><MessageCircle size={13} className="text-[hsl(142,70%,45%)]" />Have questions? Chat on WhatsApp</a>
        </section>
        <Suspense fallback={<SectionFallback />}>
          <LazyWorkshopBelowFold scrollToForm={scrollToForm} workshopDate="Sunday, 22 March 2026" workshopTime="10:30 AM – 4:30 PM" outcomes={[{ icon: BarChart3, text: "Build dashboards & visualizations with AI assistance" }, { icon: Database, text: "Analyse large datasets using AI-powered tools" }, { icon: TrendingUp, text: "Extract actionable insights for business decisions" }]} modules={modules} formSectionId="ds-register" workshopId="data-science-analytics" price={1699} ctaTitle="Ready to Master Data Science at IIT Kanpur?" communityName="Data Science Community" />
        </Suspense>
      </div>
      {!formVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom" style={{ background: "hsl(0 0% 100% / 0.95)", borderTop: "1px solid hsl(210 40% 90% / 0.8)" }}>
          <div className="max-w-[430px] mx-auto px-5 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0"><p className="text-xs text-muted-foreground leading-tight font-medium">Only 15 seats left</p><p className="text-lg font-extrabold text-foreground leading-tight">₹1,699</p></div>
            <button onClick={scrollToForm} className="flex-1 py-3.5 rounded-xl font-bold text-[15px] text-primary-foreground min-h-[48px] flex items-center justify-center gap-1.5 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>Reserve Seat <ArrowRight size={16} /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataScienceAnalytics;
