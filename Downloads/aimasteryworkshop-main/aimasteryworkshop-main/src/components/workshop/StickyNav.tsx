import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[430px] mx-auto flex items-center justify-between py-3 px-5">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <span className="font-bold text-foreground">AI Workshop</span>
        </div>
        <button
          onClick={() => document.getElementById("workshop-form")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default StickyNav;
