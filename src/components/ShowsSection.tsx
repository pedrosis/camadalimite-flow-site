import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shows = [
  { venue: "Bar do Zé", city: "Presidente Prudente", date: "12 Jul 2026" },
  { venue: "Espaço Cultural", city: "Marília", date: "19 Jul 2026" },
  { venue: "Pub Rock", city: "Assis", date: "26 Jul 2026" },
  { venue: "Boteco do Vini", city: "Presidente Prudente", date: "02 Ago 2026" },
  { venue: "Casa de Shows", city: "Londrina", date: "09 Ago 2026" },
];

const ShowsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="agenda" className="py-24 md:py-32">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground mb-16"
        >
          AGENDA DE SHOWS
        </motion.h2>
      </div>

      <div className="relative">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center border border-primary text-foreground hover:bg-muted transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center border border-primary text-foreground hover:bg-muted transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {shows.map((show, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="show-card flex-shrink-0"
            >
              <h3 className="font-display text-lg tracking-wider text-foreground mb-3">
                {show.venue}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-1">{show.city}</p>
              <p className="font-body text-sm text-accent">{show.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
