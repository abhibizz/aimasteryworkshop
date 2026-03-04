import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import alenceLogo from "@/assets/alence-logo.png";

const Disclaimer = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-border px-5 py-4 flex items-center gap-4 max-w-3xl mx-auto">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={20} />
      </Link>
      <img src={alenceLogo} alt="Aylence" className="h-5" />
    </header>

    <main className="max-w-3xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Disclaimer Policy</h1>
      <p className="text-xs text-muted-foreground mb-6">Last Updated: 29 April 2025</p>

      <div className="bg-card border border-border rounded-xl p-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Acceptance of Terms</h2>
          <p>
            This Disclaimer ("Terms") governs the services provided by Aylence (hereinafter referred to as "Aylence", "we," "us," or "our"). By accessing or using our website https://aylence.com, and related services (collectively, the "Services"), you agree to comply with and be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Disclaimer</h2>
          <p className="mb-3">
            All the information on the websites – website https://aylence.com, is published in good faith and for general information purpose only.
          </p>
          <p className="mb-3">
            Aylence does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on the above-mentioned websites is strictly at your own risk. Aylence will not be liable for any losses and/or damages in connection with the use of our website.
          </p>
          <p className="mb-3">
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link that may have gone 'bad'.
          </p>
          <p>
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms that are beyond our control. Please be sure to check the Privacy Policies of those sites as well as their "Terms of Service" before engaging in any business or uploading any information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Consent</h2>
          <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Update</h2>
          <p className="mb-3">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
          <p>
            Note: If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at{" "}
            <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@Aylence.com</a>.
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default Disclaimer;
