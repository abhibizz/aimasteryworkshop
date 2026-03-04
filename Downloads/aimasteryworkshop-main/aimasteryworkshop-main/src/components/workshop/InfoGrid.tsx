import { MapPin, Calendar, Clock, Award } from "lucide-react";

const C = {
  primary: "#2D4BFF",
  card: "#FFFFFF",
  text: "#1A1A2E",
  shadow: "0 2px 12px rgba(0,0,0,0.06)",
};

const infoItems = [
  { icon: MapPin, text: "IIT Kanpur On-Campus" },
  { icon: Award, text: "Certificate To All Participants" },
  { icon: Calendar, text: "Sunday 22nd March 2026" },
  { icon: Clock, text: "From 10:30 AM To 4:30 PM" },
];

const InfoGrid = () => (
  <div className="grid grid-cols-2 gap-3 mb-5">
    {infoItems.map(({ icon: Icon, text }) => (
      <div
        key={text}
        className="flex items-center gap-3 p-4 rounded-[14px]"
        style={{ background: C.card, boxShadow: C.shadow }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${C.primary}12` }}
        >
          <Icon size={20} style={{ color: C.primary }} />
        </div>
        <span className="text-sm font-semibold text-left leading-tight" style={{ color: C.text }}>
          {text}
        </span>
      </div>
    ))}
  </div>
);

export default InfoGrid;
