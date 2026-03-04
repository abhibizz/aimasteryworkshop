import { lazy, Suspense, memo } from "react";
import { useFormVisibility } from "@/hooks/useFormVisibility";
import { usePageMeta } from "@/hooks/usePageMeta";
import usePreloadImage from "@/hooks/usePreloadImage";
import { MapPinIcon, GraduationCapIcon, UsersIcon, ArrowRightIcon, AwardIcon, MessageCircleIcon } from "@/components/icons/HeroIcons";

const LazyBelowFold = lazy(() => import("@/components/workshop/BelowFoldSections"));
const SectionFallback = () => <div className="h-32" />;

const HERO_IMG = "/images/hero-index-banner.png";

const Index = () => {
  usePageMeta("AI Prompt Engineering & Generative AI Workshop | IIT Kanpur", "Master prompt engineering & generative AI tools in a hands-on full-day workshop at IIT Kanpur. Learn ChatGPT, Gemini, Midjourney & more.");
  usePreloadImage(HERO_IMG);
  const scrollToForm = () => document.getElementById("workshop-form")?.scrollIntoView({ behavior: "smooth" });
  const formVisible = useFormVisibility("workshop-form");

  return (
    <div className="min-h-screen font-sans relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[hsl(210,50%,98%)] via-[hsl(210,50%,97%)] to-[hsl(210,50%,96%)]" />

      <div className="max-w-[430px] mx-auto relative z-10 pb-14">
        <header className="px-5 py-4 flex items-center justify-between">
          <img src="/images/alence-logo.png" alt="Aylence" className="h-4" width="80" height="16" />
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full px-3 py-1.5 bg-card border border-border">
            <MapPinIcon size={13} className="text-primary" />
            <span>IIT Kanpur Campus</span>
          </div>
        </header>

        <section className="px-5 pb-6 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.15] text-foreground mb-3 tracking-tight">
            Master <span className="text-gradient-cyber">AI Prompt Engineering</span> — at IIT Kanpur
          </h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
            Move Beyond Chatting With AI. Build Systems, Workflows, and Reliable Results — in one power-packed day at IIT Kanpur.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {[
              { icon: GraduationCapIcon, label: "IIT Kanpur Campus" },
              { icon: AwardIcon, label: "Certificate Included" },
              { icon: UsersIcon, label: "3,500+ Learners" },
            ].map((c) => (
              <span key={c.label} className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-card border border-border">
                <c.icon size={13} className="text-primary" />
                {c.label}
              </span>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden mb-5 bg-card border border-border p-1.5">
            <img
              alt="AI Prompt Engineering Workshop at IIT Kanpur"
              className="w-full object-cover rounded-xl"
              src={HERO_IMG}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              width="398"
              height="224"
            />
          </div>

          <button onClick={scrollToForm} className="w-full min-h-[54px] text-base font-bold rounded-xl text-primary-foreground flex items-center justify-center gap-2 transition-colors glow-button-cyber" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>
            Reserve Seat @ ₹2,099 <ArrowRightIcon size={18} />
          </button>

          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-3 hover:text-foreground transition-colors">
            <MessageCircleIcon size={13} className="text-[hsl(142,70%,45%)]" />
            Have questions? Chat on WhatsApp
          </a>
        </section>

        <Suspense fallback={<SectionFallback />}>
          <LazyBelowFold scrollToForm={scrollToForm} />
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
              Reserve Seat <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Index);
