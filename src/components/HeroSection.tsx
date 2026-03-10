import { useEffect, useRef } from "react";
import chalkboardBg from "@/assets/chalkboard-bg.png";
import logoWhite from "@/assets/logo-white.svg";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create flow particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.15,
        life: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw flow lines
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 40, p.y - p.vy * 40);
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.life * 0.08})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.life += 0.002;
        if (p.life > 1) p.life = 0;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Chalkboard background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${chalkboardBg})` }}
      />

      {/* Flow lines canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-display font-bold leading-[0.9] tracking-[0.15em] text-foreground">
          CAMADA
          <br />
          LIMITE
        </h1>
        <p className="mt-6 font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
          Acoustic duo — rock, pop, MPB e clássicos.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="scroll-indicator-line">
          <div className="scroll-indicator-dot" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
