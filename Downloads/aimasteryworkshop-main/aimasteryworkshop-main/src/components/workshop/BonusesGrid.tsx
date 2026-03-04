const bonuses = [
  { img: "/images/bonus-certificate.png", title: "Certificate", desc: "Hard Copy — same day" },
  { img: "/images/bonus-wifi.png", title: "WiFi Access", desc: "Campus WiFi for participants" },
  { img: "/images/bonus-community.png", title: "AI Community", desc: "Exclusive lifetime access" },
  { img: "/images/bonus-networking.png", title: "Networking", desc: "Meet 100+ professionals" },
];

const BonusesGrid = () => (
  <section className="px-5 pb-10">
    <h2 className="text-[22px] font-extrabold text-foreground mb-1 tracking-tight text-center">Workshop <span className="text-gradient-cyber">Bonuses</span></h2>
    <p className="text-sm text-muted-foreground mb-5 text-center">Included free with your registration.</p>
    <div className="grid grid-cols-2 gap-3">
      {bonuses.map((b) => (
        <div key={b.title} className="bg-card border border-border rounded-2xl p-4 text-center">
          <img src={b.img} alt={b.title} className="w-14 h-14 object-contain mx-auto mb-3 rounded-xl" loading="lazy" decoding="async" width="56" height="56" />
          <h3 className="font-bold text-foreground mb-1 text-[15px]">{b.title}</h3>
          <p className="text-muted-foreground text-[12px] leading-relaxed">{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BonusesGrid;
