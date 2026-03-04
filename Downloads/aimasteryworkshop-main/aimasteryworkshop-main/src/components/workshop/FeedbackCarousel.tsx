import { useState, useCallback, useEffect, useRef } from "react";

const TOTAL = 10;
const imagePath = (i: number) => `/images/feedback-${i + 1}.png`;

const FeedbackCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + TOTAL) % TOTAL), []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [next]);

  // Only render current + neighbors (3 images max instead of 10)
  const visible = [
    (current - 1 + TOTAL) % TOTAL,
    current,
    (current + 1) % TOTAL,
  ];

  return (
    <section className="pb-10 pt-2">
      <h2 className="text-xl font-bold text-foreground mb-4 px-5">
        Feedback from Our <span className="text-gradient">Previous Workshops</span>
      </h2>

      <div
        ref={containerRef}
        className="overflow-hidden px-5"
        onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = touchStart.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        }}
      >
        <div className="relative" style={{ height: 400 }}>
          {visible.map((idx) => (
            <img
              key={idx}
              src={imagePath(idx)}
              alt={`Workshop feedback ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-xl border border-border shadow-sm"
              style={{
                opacity: idx === current ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
              loading="lazy"
              decoding="async"
              width="340"
              height="400"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-5" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeedbackCarousel;
