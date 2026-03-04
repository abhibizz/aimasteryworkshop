import { Link } from "react-router-dom";
import alenceLogo from "@/assets/alence-logo.png";

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy", internal: true },
  { label: "Disclaimer", href: "/disclaimer", internal: true },
  { label: "Terms & Conditions", href: "/terms-and-conditions", internal: true },
  { label: "Cookie Policy", href: "/cookie-policy", internal: true },
  { label: "Refund & Cancellation", href: "/refund-and-cancellation", internal: true },
];

const Footer = () => (
  <footer className="relative z-20 bg-muted border-t border-border mt-8">
    <div className="max-w-3xl mx-auto px-5 py-8 pb-24">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src={alenceLogo} alt="Alence logo" className="h-8 object-contain" />
      </div>

      {/* Policy Links */}
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-5">
        {policyLinks.map((link) =>
          'internal' in link && link.internal ? (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          )
        )}
      </nav>

      {/* Copyright */}
      <p className="text-center text-[11px] text-muted-foreground/70">
        © {new Date().getFullYear()} Aylence Edutech Pvt. Ltd. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
