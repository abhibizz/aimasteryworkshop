import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import alenceLogo from "@/assets/alence-logo.png";

const CookiePolicy = () => (
  <div className="min-h-screen bg-background">
    <header className="border-b border-border px-5 py-4 flex items-center gap-4 max-w-3xl mx-auto">
      <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft size={20} />
      </Link>
      <img src={alenceLogo} alt="Aylence" className="h-5" />
    </header>

    <main className="max-w-3xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-1">Cookie Policy</h1>
      <p className="text-xs text-muted-foreground mb-6">Last Updated: 29 April 2025</p>

      <div className="bg-card border border-border rounded-xl p-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <p className="mb-3">This Cookie Policy explains how Aylence (hereinafter referred to as "Aylence", "we", "us", or "our") and our affiliated entities listed on this website use cookies and similar technologies to recognise you when you visit our website: https://aylence.com/</p>
          <p>It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
        </div>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">What are cookies?</h2>
          <p className="mb-3">A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the site again, the cookie allows that site to recognise your browser. Cookies may store user preferences and other information.</p>
          <p className="mb-3">Cookies provide a convenience feature to save you time or tell the Web server that you have returned to a specific page.</p>
          <p>Cookies set by the website owner (in this case, Aylence) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g. advertising, interactive content and analytics). The parties that set these third-party cookies can recognise your computer both when it visits the website in question and when it visits certain other websites.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">Why do we use cookies?</h2>
          <p className="mb-3">We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Websites and Subscription Services.</p>
          <p>For example, Aylence keeps track of the Websites and pages you visit within Aylence, to determine what portion of the Aylence Website or Subscription Service is the most popular or most used. This data is used to deliver customized content and promotions within the Aylence Website and Subscription Service to customers whose behaviour indicates that they are interested in a particular subject area. Third parties serve cookies through our Websites for advertising, analytics and other purposes.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">What types of cookies do we use, and how do we use them?</h2>
          <p className="mb-3">The specific types of first and third-party cookies served through our Websites and the purposes they perform.</p>
          <p className="mb-3"><strong className="text-foreground">These cookies include:</strong></p>
          <div className="space-y-3">
            <p><strong className="text-foreground">Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Websites.</p>
            <p><strong className="text-foreground">Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Websites, but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</p>
            <p><strong className="text-foreground">Analytics and customisation cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customise our Websites for you.</p>
            <p><strong className="text-foreground">Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>
            <p><strong className="text-foreground">Social networking cookies:</strong> These cookies are used to enable you to share pages and content that you find interesting on our Websites through third-party social networking and other websites. These cookies may also be used for advertising purposes.</p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">How can I control cookies?</h2>
          <p className="mb-3">You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking the appropriate opt-out links.</p>
          <p className="mb-3">You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
          <p className="mb-3">In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com.</p>
          <p>Please Note: this does not opt you out of being served advertising. You will continue to receive generic advertisements.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">What about other tracking technologies, like web beacons?</h2>
          <p>Cookies are not the only way to recognise or track visitors to a website. We employ a software technology called clear gifs (a.k.a. Web Beacons/Web Bugs), that helps us better manage the Website and Subscription Service by informing us what content is effective. Clear gifs are tiny graphics with a unique identifier, similar in function to cookies, and are used to track the online movements of Web users. We use clear gifs or pixels in our HTML-based emails to let us know which emails have been opened by recipients.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">Do you use Flash Cookies or Local Shared Objects?</h2>
          <p className="mb-3">The Adobe Flash Player (and similar applications) use technology to remember settings, preferences and usage similar to browser cookies but these are managed through a different interface than the one provided by your Web browser. Aylence does not use Flash cookies. However, the customers of our software platform may create pages on the Aylence platform that employ Adobe Flash cookies.</p>
          <p>Similarly, our customers may create pages using the Aylence Subscription Service that uses technology from tracking utility companies, such as cookies and web beacons. The use of these technologies by our customers is not covered by our Cookie Policy or Privacy Notice.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">Do you serve targeted advertising?</h2>
          <p>Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites to provide relevant advertisements about goods and services that you may be interested in. The information collected through this process does not enable us or them to identify your name, contact details or other personally identifying details unless you choose to provide these.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">How often will you update this Cookie Policy?</h2>
          <p className="mb-3">We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. We will notify you of any material changes to this Cookie Policy before the changes become effective by posting the changes on this page.</p>
          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-foreground mb-2">Where can I get further information?</h2>
          <p>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:contact@aylence.com" className="text-primary hover:underline">contact@aylence.com</a>.</p>
        </section>
      </div>
    </main>
  </div>
);

export default CookiePolicy;
