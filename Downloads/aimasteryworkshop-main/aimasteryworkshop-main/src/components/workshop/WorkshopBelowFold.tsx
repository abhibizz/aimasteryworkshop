import { useState, lazy, Suspense } from "react";
import { Zap, Clock, Flame, ArrowRight, CheckCircle2, Users, Award, Lock, MessageCircle, Minus, Plus } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const LazyRegistrationForm = lazy(() => import("@/components/workshop/RegistrationForm"));
const LazyFeedbackCarousel = lazy(() => import("@/components/workshop/FeedbackCarousel"));
const LazyWorkshopDetailsCard = lazy(() => import("@/components/workshop/WorkshopDetailsCard"));
const LazyBonusesGrid = lazy(() => import("@/components/workshop/BonusesGrid"));

const SectionFallback = () => <div className="h-32" />;

interface ModuleData {
  title: string;
  module: string;
  timing: string;
  desc: string;
  topics: string[];
  skills: string[];
}

interface WorkshopBelowFoldProps {
  scrollToForm: () => void;
  workshopDate: string;
  workshopTime: string;
  outcomes: { icon: LucideIcon; text: string }[];
  modules: ModuleData[];
  formSectionId: string;
  workshopId: string;
  price?: number;
  ctaTitle: string;
  communityName?: string;
}

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-card border border-border rounded-2xl mb-3 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-semibold text-foreground text-[15px] pr-4">{title}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${open ? "bg-primary/10" : "bg-muted"}`}>
          {open ? <Minus size={14} className="text-primary" /> : <Plus size={14} className="text-primary" />}
        </div>
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{children}</div>}
    </div>
  );
};

const WorkshopBelowFold = ({
  scrollToForm, workshopDate, workshopTime, outcomes, modules, formSectionId, workshopId, price = 2099, ctaTitle, communityName = "AI Community"
}: WorkshopBelowFoldProps) => (
  <>
    {/* URGENCY */}
    <section className="px-5 pb-8">
      <div className="bg-card border border-border rounded-2xl p-4 space-y-2.5">
        {[
          { icon: Zap, text: "Only 12 seats remaining", color: "hsl(18,100%,55%)" },
          { icon: Clock, text: "Registrations close in 48 hours", color: "hsl(217,91%,50%)" },
          { icon: Flame, text: "23 people registered in the last 24 hours", color: "hsl(18,100%,55%)" },
        ].map((u) => (
          <div key={u.text} className="flex items-center gap-3">
            <u.icon size={16} style={{ color: u.color }} className="flex-shrink-0" />
            <p className="text-[13px] font-medium text-foreground">{u.text}</p>
          </div>
        ))}
      </div>
    </section>

    <Suspense fallback={<SectionFallback />}>
      <LazyWorkshopDetailsCard date={workshopDate} time={workshopTime} />
    </Suspense>

    {/* OUTCOMES */}
    <section className="px-5 pb-10">
      <div className="space-y-3">
        {outcomes.map((o) => (
          <div key={o.text} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
              <o.icon size={17} className="text-primary" />
            </div>
            <p className="text-[14px] font-medium text-foreground">{o.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* MODULES */}
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
                <ul className="space-y-1">{mod.topics.map((t) => (<li key={t} className="flex items-start gap-2 text-[12px] text-muted-foreground"><span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />{t}</li>))}</ul>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground mb-1.5">Skills Acquired</p>
                <ul className="space-y-1">{mod.skills.map((s) => (<li key={s} className="flex items-start gap-2 text-[12px] text-muted-foreground"><CheckCircle2 size={11} className="text-primary flex-shrink-0 mt-0.5" />{s}</li>))}</ul>
              </div>
            </div>
          </AccordionItem>
        ))}
      </div>
    </section>

    {/* SOCIAL PROOF */}
    <section className="px-5 pb-10">
      <h2 className="text-[22px] font-extrabold text-foreground mb-5 tracking-tight text-center">Trusted by <span className="text-gradient-cyber">Thousands</span></h2>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Users, value: "3,500+", label: "Professionals Trained", sub: "Across startups, agencies & campuses" },
          { icon: Award, value: "Techkriti '26", label: "Participation", sub: "Official academic collaboration" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-2xl p-4 text-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2.5 bg-primary/10">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="font-extrabold text-foreground text-lg leading-tight">{s.value}</p>
            <p className="text-muted-foreground text-xs mt-0.5 font-medium">{s.label}</p>
            <p className="text-muted-foreground text-[11px] mt-1 leading-snug">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>

    <Suspense fallback={<SectionFallback />}>
      <LazyFeedbackCarousel />
      <LazyBonusesGrid />
    </Suspense>

    {/* TRUST */}
    <section className="px-5 pb-10">
      <div className="bg-card border border-border rounded-2xl p-5 flex items-center justify-around">
        {[
          { icon: Award, label: "Certificate" },
          { icon: Lock, label: "Secure Pay" },
          { icon: MessageCircle, label: "WhatsApp Support" },
        ].map((t) => (
          <div key={t.label} className="flex flex-col items-center gap-1.5">
            <t.icon size={20} className="text-primary" />
            <span className="text-[11px] font-medium text-muted-foreground">{t.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="px-5 pb-8">
      <div className="rounded-2xl p-6 text-center text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>
        <h2 className="text-xl font-extrabold leading-tight mb-2">{ctaTitle}</h2>
        <button onClick={scrollToForm} className="w-full min-h-[54px] bg-card text-foreground font-bold rounded-xl text-base flex items-center justify-center gap-2 mt-4 transition-colors hover:opacity-90">
          Reserve Seat @ ₹{price.toLocaleString("en-IN")} <ArrowRight size={18} />
        </button>
        <p className="text-primary-foreground/70 text-xs mt-3">⚠️ Limited seats • One-day only • No recordings</p>
      </div>
    </section>

    <Suspense fallback={<SectionFallback />}>
      <LazyRegistrationForm sectionId={formSectionId} workshopId={workshopId} price={price} />
    </Suspense>
  </>
);

export default WorkshopBelowFold;
