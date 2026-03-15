import { useState, useEffect, useRef } from "react";
import { skillsData } from "#constants/index.js";

const LINES = [
  ["$ ", "./init_portfolio.sh"],
  ["✓ ", "Kernel loaded"],
  ["✓ ", <><span>Auth: </span><span className="text-white font-medium">kunal.chakraborty</span></>],
  ["→ ", "Mounting modules..."],
  ["✓ ", <><span>Backend — </span><span className="text-teal-400">online</span></>],
  ["✓ ", <><span>Architecture — </span><span className="text-teal-400">online</span></>],
  ["✓ ", <><span>Frontend — </span><span className="text-teal-400">online</span></>],
  ["$ ", "Loading interface..."],
];

 function Splash({ onFinish }) {
  const [phase, setPhase] = useState("idle");
  const [tick, setTick]   = useState(-1);
  const audio = useRef(null);

  useEffect(() => {
    if (phase !== "boot") return;
    let i = 0;
    const id = setInterval(() => {
      setTick(i++);
      if (i >= LINES.length) { clearInterval(id); setTimeout(() => setPhase("about"), 450); }
    }, 260);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "about") setTimeout(() => onFinish?.(), 5000);
  }, [phase]);

  const start = async () => {
    try {
       audio.current = new Audio("/sounds/mac_startup.mp3");
        await audio.current.play();
       } catch {}
    setPhase("boot");
  };

  return (
    <div className="splash-root">

      <div className="splash-grid" />

      {phase !== "idle" && (
        <>
          <div className="splash-orb-1" />
          <div className="splash-orb-2" />
        </>
      )}

      {["const","async","fn()","tcp","ssh","{}","await","api","[]","0x"].map((w, i) => (
        <span
          key={i}
          className="splash-particle"
          style={{
            left: `${5 + (i * 9.3) % 88}%`,
            bottom: `${(i * 11) % 35}%`,
            animationName: "rise",
            animationDuration: `${6 + i % 4}s`,
            animationDelay: `${i * .8}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {w}
        </span>
      ))}

      {phase === "idle" && (
        <button onClick={start} className="relative z-10 flex flex-col items-center gap-5 focus:outline-none">
          <div className="relative w-24 h-24">
            <div className="idle-avatar-ring" />
            <div className="idle-avatar-bg" />
            <div className="idle-avatar-inner">
              <img src="/images/kunal.jpg" alt="Kunal Chakraborty" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <p className="idle-name">Kunal Chakraborty</p>
          <p className="text-[11px] tracking-[.3em] uppercase flex items-center gap-2 text-indigo-400/75">
            <span className="idle-cursor">▋</span> Click to initialize
          </p>
        </button>
      )}

      {phase === "boot" && (
        <div className="relative z-10 w-full max-w-sm px-6 font-mono">
          {LINES.map(([pre, text], i) => (
            <p
              key={i}
              className="text-xs mb-1.5 transition-opacity duration-300"
              style={{ opacity: i <= tick ? 1 : 0, color: "rgba(255,255,255,.45)" }}
            >
              <span className={i % 2 === 0 ? "text-indigo-400" : "text-teal-400"}>{pre}</span>
              {text}
            </p>
          ))}
          <div className="boot-progress-track">
            <div className="boot-progress-bar" style={{ width: `${(tick + 1) / LINES.length * 100}%` }} />
          </div>
        </div>
      )}

      {phase === "about" && (
        <div className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-4">
            <div className="about-avatar">KC</div>
            <div className="text-left">
              <p className="about-name">Kunal Chakraborty</p>
              <p className="text-[10px] text-indigo-400 tracking-[.25em] uppercase mt-1">Aspiring Software Engineer</p>
            </div>
          </div>

          <div className="about-divider" />

          <p className="about-bio">
            Aspiring Software Engineer focused on building fast, scalable, and accessible backend systems,
             while occasionally exploring the frontend to bring full-stack ideas to life.
          </p>

          <div className="grid grid-cols-3 gap-2 w-full">
            {skillsData.map((s) => (
              <div key={s.id} className="skill-chip">
                <img src={s.icon} alt={s.name} className="w-6 h-6 object-contain" />
                <span className="text-[10px] text-white/75 tracking-widest uppercase font-mono">{s.name}</span>
              </div>
            ))}
          </div>

          <button onClick={onFinish} className="enter-btn">
            Enter Portfolio →
          </button>
        </div>
      )}

    </div>
  );
}

export default Splash;