import { MapPin, Calendar, Clock, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import RegistrationForm from "@/components/workshop/RegistrationForm";

const recapItems = [
  { icon: Calendar, label: "Date", value: "Sunday, 22 March 2026" },
  { icon: Clock, label: "Time", value: "10:30 AM – 4:30 PM" },
  { icon: MapPin, label: "Venue", value: "IIT Kanpur" },
  { icon: Award, label: "Certificate", value: "Provided to all participants" },
];

const WorkshopRecap = () => {
  return (
    <section id="workshop-form" className="py-14 px-6">
      {/* Registration Form */}
      <RegistrationForm sectionId="workshop-form-inner" />

      {/* Workshop Details Recap */}
      <ScrollReveal delay={1}>
        <h3 className="text-lg font-bold text-foreground mb-4 text-center">
          Workshop Details
        </h3>
        <div className="space-y-3">
          {recapItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item.label}:</span>
              <span className="text-sm font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default WorkshopRecap;
