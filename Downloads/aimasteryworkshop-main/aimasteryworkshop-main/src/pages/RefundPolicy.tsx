import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import alenceLogo from "@/assets/alence-logo.png";

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-border px-5 py-4 flex items-center gap-4 max-w-3xl mx-auto">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={20} />
      </Link>
      <img src={alenceLogo} alt="Aylence" className="h-5" />
    </header>

    <main className="max-w-3xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Refund and Cancellation Policy</h1>
      <p className="text-xs text-muted-foreground mb-6">Last Updated: 28 April, 2025</p>

      <div className="bg-card border border-border rounded-xl p-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-foreground mb-2">1. Acceptance of Terms</h2>
          <p className="mb-3">The Refund and Cancellation Policy governs your use of the services provided by Aylence ("Aylence", "we", "us", or "our"). By accessing or using our website https://aylence.com/ and related services (collectively, the "Services"), you agree to comply with and be bound by this policy.</p>
          <p>We at Aylence are committed to delivering high-quality educational experiences and ensuring transparency in all our policies. Please read the following Refund and Cancellation Policy carefully before registering for any of our workshops, courses, or events.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">2. No Refund Policy</h2>
          <p className="mb-3">We maintain a strict no-refund policy for all registrations and payments made on our platform. Once a participant has registered and made payment for any Aylence event, the amount is <strong className="text-foreground">non-refundable</strong> under any circumstances, including but not limited to:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Change in personal plans or schedule</li>
            <li>Inability to attend due to technical or personal reasons</li>
            <li>No-shows on the day of the event</li>
            <li>Dissatisfaction with the event content or delivery</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">3. Alternate Options</h2>
          <p className="mb-3">While we do not offer monetary refunds, we understand that unforeseen situations may arise. In such cases, participants can request an alternative solution, such as:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 mb-3">
            <li>Transferring the seat to another person</li>
            <li>Deferring participation to a future workshop or batch, if available</li>
          </ul>
          <p>To request an alternative, please email us at <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a> at least 72 hours before the event. Requests received after this period may not be accommodated.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">4. Event Cancellation by Aylence</h2>
          <p className="mb-3">In the rare event that Aylence cancels or reschedules an event due to unforeseen circumstances (such as insufficient registrations, trainer unavailability, or force majeure events), participants will be offered:</p>
          <ul className="list-disc list-inside space-y-2 pl-2 mb-3">
            <li>A 100% refund of the registration fee, or</li>
            <li>The option to attend the event on a rescheduled date</li>
          </ul>
          <p>Refunds in such cases will be processed to the original mode of payment within <strong className="text-foreground">7–10 working days</strong> from the date of cancellation notification.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">5. Rescheduling or Format Changes</h2>
          <p>Aylence reserves the right to <strong className="text-foreground">reschedule, relocate, or shift the format of the event</strong> (e.g., from in-person to online) when necessary. While refunds will not be issued for such changes, we will make every effort to inform participants in advance and provide adequate support.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">6. Contact Information</h2>
          <p className="mb-3">If you have any questions or need to request an alternative, please reach out to us:</p>
          <p>📧 <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a></p>
        </section>
      </div>
    </main>
  </div>
);

export default RefundPolicy;
