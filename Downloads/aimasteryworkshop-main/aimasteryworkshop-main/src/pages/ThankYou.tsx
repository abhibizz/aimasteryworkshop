import { CheckCircle, Calendar, Clock, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const recapItems = [
  { icon: Calendar, label: "Date", value: "21–22 March 2026" },
  { icon: Clock, label: "Time", value: "10:30 AM – 4:30 PM" },
  { icon: MapPin, label: "Venue", value: "IIT Kanpur" },
  { icon: Award, label: "Certificate", value: "Provided to all participants" },
];

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-x-hidden bg-muted min-h-screen">
      <div className="max-w-[430px] mx-auto bg-background min-h-screen shadow-sm relative flex flex-col items-center justify-center px-6 py-14">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/light-bg.webp')", backgroundRepeat: "repeat", backgroundSize: "200px", opacity: 0.4 }} />

        <div className="relative z-10 text-center space-y-6 w-full">
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Registration Confirmed! 🎉</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thank you for registering for the AI Mastery Workshop. A confirmation email has been sent to your inbox.
            </p>
          </div>

          <div className="bg-card rounded-xl p-5 card-shadow space-y-3 text-left">
            <h2 className="text-base font-semibold text-foreground">Workshop Details</h2>
            {recapItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item.label}:</span>
                <span className="text-sm font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
            Please save this page or check your email for important details about the workshop venue, schedule, and what to bring.
          </div>

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full h-12 rounded-xl"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
