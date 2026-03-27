import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const artists = [
  "Coldplay", "The Cramberies", "Tim Maia", "Tribalistas", "Nando Reis", "Marjorie Estiano", "Skank",
  "Billie Eilish", "Kid Abelha", "Vanessa da Mata", "Marisa Monte", "Cassia Eller", "Pitty", "Rita Lee", "Amy Winehouse",
  "Ivete Sangalo", "Ana Carolina", "Anavitória", "Maroon 5", "P!nk", "Avril Lavigne", "Paramore", "Los Hermanos", "Natiruts",
  "Lulu Santos", "Os Paralamas do Sucesso", "Oasis", "Capital Inicial", "Djavan", "Engenheiros do Hawai", "Jorge Vercilo",
  "Cazuza",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  opacity: number;
}

const RepertoireSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>();

  const initParticles = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    return artists.map((text) => ({
      x: Math.random() * (rect.width - 200) + 100,
      y: Math.random() * (rect.height - 100) + 50,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      text,
      size: 12 + Math.random() * 14,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  useEffect(() => {
    const init = initParticles();
    if (init) setParticles(init);
  }, [initParticles]);

  useEffect(() => {
    if (particles.length === 0) return;

    const animate = () => {
      setParticles((prev) => {
        const container = containerRef.current;
        if (!container) return prev;
        const rect = container.getBoundingClientRect();
        const mouse = mouseRef.current;

        return prev.map((p) => {
          let { x, y, vx, vy } = p;

          // Mouse repulsion
          const dx = x - (mouse.x - rect.left);
          const dy = y - (mouse.y - rect.top);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            const force = (150 - dist) / 150 * 0.8;
            vx += (dx / dist) * force;
            vy += (dy / dist) * force;
          }

          // Damping
          vx *= 0.98;
          vy *= 0.98;

          // Base drift
          vx += (Math.random() - 0.5) * 0.02;
          vy += (Math.random() - 0.5) * 0.02;

          x += vx;
          y += vy;

          // Bounds
          if (x < 20) { x = 20; vx *= -0.5; }
          if (x > rect.width - 20) { x = rect.width - 20; vx *= -0.5; }
          if (y < 20) { y = 20; vy *= -0.5; }
          if (y > rect.height - 20) { y = rect.height - 20; vy *= -0.5; }

          return { ...p, x, y, vx, vy };
        });
      });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [particles.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <section id="repertorio" className="py-24 md:py-32">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground mb-16"
        >
          REPERTÓRIO
        </motion.h2>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-[400px] md:h-[500px] overflow-hidden cursor-crosshair"
      >
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute font-display tracking-wider text-foreground whitespace-nowrap select-none pointer-events-none transition-opacity duration-1000"
            style={{
              left: p.x,
              top: p.y,
              fontSize: p.size,
              opacity: p.opacity,
              transform: "translate(-50%, -50%)",
            }}
          >
            {p.text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default RepertoireSection;
