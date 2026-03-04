import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import alenceLogo from "@/assets/alence-logo.png";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <header className="border-b border-border px-5 py-4 flex items-center gap-4 max-w-3xl mx-auto">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={20} />
      </Link>
      <img src={alenceLogo} alt="Aylence" className="h-5" />
    </header>

    <main className="max-w-3xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-6">Privacy Policy for Aylence</h1>

      <div className="bg-card border border-border rounded-xl p-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>
          This Privacy Policy outlines how Aylence (hereinafter referred to as "Aylence", "we", "us" and "our"), operating through the website
          https://aylence.com collects, uses, and safeguards personal information when you interact with our website and services.
        </p>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Information Collection</h2>
          <p className="mb-3">We may collect various types of information for different purposes to provide and improve our services:</p>
          <ol className="list-decimal list-inside space-y-3 pl-2">
            <li>
              <strong className="text-foreground">Personal Information:</strong> We may collect personal details like name, email address, and contact information when voluntarily provided by you, for instance, when subscribing to newsletters or contacting us through forms on our website.
            </li>
            <li>
              <strong className="text-foreground">Log Data:</strong> Our website may collect information that your browser sends whenever you visit our site. This includes your computer's Internet Protocol ("IP") address, browser type, pages visited, time and date of visit, and other statistics.
            </li>
            <li>
              <strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience. Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Photography & Videography</h2>
          <p className="mb-3">
            During our events, we may capture photographs and record videos for professional and promotional purposes. Please note that we may not always seek prior consent for this media coverage.
          </p>
          <p className="mb-3">
            However, we fully respect your privacy. If you have any concerns or do not wish to be photographed or recorded, kindly inform our team during the event — we will ensure your preference is honoured.
          </p>
          <p>
            All photos and videos captured during the event will be shared with participants after the event concludes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Use of Information</h2>
          <p className="mb-3">We use the collected information for various purposes, including:</p>
          <ol className="list-decimal list-inside space-y-1.5 pl-2">
            <li>Providing and maintaining our website</li>
            <li>Notifying you about changes to our services or website</li>
            <li>Allowing you to participate in interactive features</li>
            <li>Providing customer care and support</li>
            <li>Analyzing website usage to improve our content and services</li>
            <li>Monitoring the usage of our website for security purposes</li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Sharing of Information</h2>
          <p className="mb-3">We do not sell your personal information. However, we may share information under the following circumstances:</p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>
              <strong className="text-foreground">Service Providers:</strong> We may engage third-party companies to assist in providing our services or to perform tasks on our behalf, such as analytics or website hosting.
            </li>
            <li>
              <strong className="text-foreground">Legal Compliance:</strong> We may disclose personal information in response to valid requests from public authorities or where required by law.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Security</h2>
          <p>
            We take reasonable measures to protect your personal information but cannot guarantee absolute security. You acknowledge that transmission over the Internet or electronic storage carries inherent risks.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also object to the processing of your personal information under certain circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy, and any revisions will be effective when posted on this page. We encourage you to review this page periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns mail us at{" "}
            <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a>
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
