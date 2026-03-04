import { useState, lazy, Suspense } from "react";
import { Brain, Wrench, Layers, Zap, Clock, Flame, ArrowRight, Award, Users, MessageCircle, Swords, Lock, Minus, Plus } from "lucide-react";

const LazyRegistrationForm = lazy(() => import("@/components/workshop/RegistrationForm"));
const LazyFeedbackCarousel = lazy(() => import("@/components/workshop/FeedbackCarousel"));
const LazyWorkshopDetailsCard = lazy(() => import("@/components/workshop/WorkshopDetailsCard"));
const LazyModulesSection = lazy(() => import("@/components/workshop/ModulesSection"));
const LazyBonusesGrid = lazy(() => import("@/components/workshop/BonusesGrid"));

const SectionFallback = () => <div className="h-32" />;

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-semibold text-foreground text-[15px] pr-4">{question}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${open ? "bg-primary/10" : "bg-muted"}`}>
          {open ? <Minus size={14} className="text-primary" /> : <Plus size={14} className="text-primary" />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const BelowFoldSections = ({ scrollToForm }: { scrollToForm: () => void }) => (
  <>
    {/* URGENCY & SCARCITY */}
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
      <LazyWorkshopDetailsCard date="Sunday, 22 March 2026" time="10:30 AM – 4:30 PM" />
    </Suspense>

    {/* OUTCOMES */}
    <section className="px-5 pb-10">
      <div className="space-y-3">
        {[
          { icon: Brain, text: "Master prompt engineering foundations & frameworks" },
          { icon: Wrench, text: "Hands-on with ChatGPT, Claude, Gemini & more" },
          { icon: Layers, text: "Apply zero-shot, few-shot & chain-of-thought techniques" },
          { icon: Swords, text: "Compete in live prompt battles & challenges" },
        ].map((o) => (
          <div key={o.text} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
              <o.icon size={17} className="text-primary" />
            </div>
            <p className="text-[14px] font-medium text-foreground">{o.text}</p>
          </div>
        ))}
      </div>
    </section>

    <Suspense fallback={<SectionFallback />}>
      <LazyModulesSection />
    </Suspense>

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

    {/* TRUST STRIP */}
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

    {/* FAQ */}
    <section className="px-5 pb-10">
      <h2 className="text-[22px] font-extrabold text-foreground mb-5 tracking-tight text-center">Frequently Asked <span className="text-gradient-cyber">Questions</span></h2>
      <div className="space-y-3">
        {[
          { q: "Do I need prior AI experience?", a: "No prior experience is needed. The workshop takes you from fundamentals to advanced concepts in a single day." },
          { q: "Will I receive a certificate?", a: "Yes! All attendees who complete the full-day workshop receive a Certificate of Completion." },
          { q: "Is this workshop beginner friendly?", a: "Absolutely. We start with basics and build up to advanced techniques, making it accessible for everyone." },
          { q: "What tools will be covered?", a: "We cover ChatGPT, Claude, Gemini, and other leading generative AI tools with hands-on practice." },
          { q: "Is recording provided?", a: "This is a fully hands-on workshop. While recordings aren't provided, you'll receive comprehensive materials and reference guides." },
        ].map((faq, idx) => (
          <FAQItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="px-5 pb-8">
      <div className="rounded-2xl p-6 text-center text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(217, 91%, 50%), hsl(190, 90%, 45%))" }}>
        <h2 className="text-xl font-extrabold leading-tight mb-2">Ready to Master AI Prompt Engineering?</h2>
        <button onClick={scrollToForm} className="w-full min-h-[54px] bg-card text-foreground font-bold rounded-xl text-base flex items-center justify-center gap-2 mt-4 transition-colors hover:opacity-90">
          Reserve Seat @ ₹2,099 <ArrowRight size={18} />
        </button>
        <p className="text-primary-foreground/70 text-xs mt-3">⚠️ Limited seats • One-day only • No recordings</p>
      </div>
    </section>

    <Suspense fallback={<SectionFallback />}>
      <LazyRegistrationForm sectionId="workshop-form" workshopId="agentic-ai-ml" />
    </Suspense>
  </>
);

export default BelowFoldSections;