import ScrollReveal from "@/components/ScrollReveal";
import graduationIcon from "@/assets/graduation.gif";
import programmerIcon from "@/assets/programmer.gif";
import analyticsIcon from "@/assets/analytics.gif";
import husbandIcon from "@/assets/husband.gif";
import contentMediaIcon from "@/assets/content-media.gif";
import aiIcon from "@/assets/artificial-intelligence.gif";

const audiences = [
  { img: graduationIcon, label: "Students", bg: "bg-primary/10" },
  { img: programmerIcon, label: "Developers", bg: "bg-primary/10" },
  { img: analyticsIcon, label: "Marketers", bg: "bg-primary/10" },
  { img: husbandIcon, label: "Founders", bg: "bg-primary/10" },
  { img: contentMediaIcon, label: "Content Creators", bg: "bg-primary/10" },
  { img: aiIcon, label: "AI Enthusiasts", bg: "bg-primary/10" },
];

const AttendSection = () => (
  <section className="pt-0 pb-14 px-6">
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Who Should <span className="text-gradient">Attend</span>
      </h2>
    </ScrollReveal>

    <div className="grid grid-cols-2 gap-3">
      {audiences.map((a, i) => (
        <ScrollReveal key={a.label} delay={i}>
          <div className={`${a.bg} rounded-xl p-3 text-center card-shadow`}>
            <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center mx-auto mb-2">
              <img src={a.img} alt={a.label} className="h-7 w-7 object-contain" style={{ filter: "hue-rotate(45deg)" }} />
            </div>
            <p className="font-semibold text-foreground text-sm">{a.label}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default AttendSection;
