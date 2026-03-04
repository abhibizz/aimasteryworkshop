import { MapPin, Calendar, Clock, Award } from "lucide-react";

interface WorkshopDetailsCardProps {
  venue?: string;
  date: string;
  time: string;
  certificate?: string;
}

const WorkshopDetailsCard = ({
  venue = "IIT Kanpur On-Campus",
  date,
  time,
  certificate = "Provided to all participants",
}: WorkshopDetailsCardProps) => {
  const details = [
    { icon: MapPin, label: "Venue", value: venue },
    { icon: Calendar, label: "Date", value: date },
    { icon: Clock, label: "Time", value: time },
    { icon: Award, label: "Certificate", value: certificate },
  ];

  return (
    <section className="px-5 pb-8">
      <h2 className="text-[22px] font-extrabold text-foreground mb-4 tracking-tight text-center">
        Workshop <span className="text-gradient-cyber">Details</span>
      </h2>
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {details.map((d, i) => (
          <div key={d.label}>
            <div className="flex items-center gap-4 p-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(217 91% 50% / 0.1), hsl(190 90% 50% / 0.08))" }}
              >
                <d.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wide font-medium">{d.label}</p>
                <p className="font-semibold text-foreground text-[14px]">{d.value}</p>
              </div>
            </div>
            {i < details.length - 1 && <div className="border-b border-border/50 mx-4" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopDetailsCard;
