import { MapPin, Calendar, Clock, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const details = [
  { icon: MapPin, label: "Venue", value: "IIT Kanpur" },
  { icon: Calendar, label: "Date", value: "22 March 2026" },
  { icon: Clock, label: "Time", value: "10:30 AM – 4:30 PM" },
  { icon: Award, label: "Certificate", value: "Provided" },
];

const DetailsSection = () => (
  <section id="details" className="pt-0 pb-14 px-6">
    <ScrollReveal>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Workshop <span className="text-gradient">Details</span>
      </h2>

      <div className="bg-card rounded-xl card-shadow overflow-hidden">
        {details.map((d, i) => (
          <div key={d.label}>
            <div className="flex items-center gap-4 p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <d.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{d.label}</p>
                <p className="font-semibold text-foreground">{d.value}</p>
              </div>
            </div>
            {i < details.length - 1 && <div className="border-b border-border mx-4" />}
          </div>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export default DetailsSection;
