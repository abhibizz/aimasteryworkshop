const StickyBottomCTA = () =>
<div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom">
    <div className="max-w-[430px] mx-auto px-5 py-3">
      <button
      onClick={() => document.getElementById("workshop-form")?.scrollIntoView({ behavior: "smooth" })}
      className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-base glow-button hover:opacity-90 transition-all min-h-[52px]">

        Register Now – ₹2,099/-
      </button>
    </div>
  </div>;


export default StickyBottomCTA;