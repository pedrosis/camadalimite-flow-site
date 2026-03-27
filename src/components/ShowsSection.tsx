import { useMemo } from "react";
import { motion } from "framer-motion";
import bgAgenda from "@/assets/bg-agenda.png";

interface Show {
  venue: string;
  city: string;
  date: string;
  isoDate: string;
}

const shows: Show[] = [
  { venue: "Choperia Pimenta", city: "Ilha Solteira", date: "28 Mar 2026", isoDate: "2026-03-28" },
  // { venue: "Espaço Cultural", city: "Marília", date: "19 Jul 2026", isoDate: "2026-07-19" },
  // { venue: "Pub Rock", city: "Assis", date: "26 Jul 2026", isoDate: "2026-07-26" },
  // { venue: "Boteco do Vini", city: "Presidente Prudente", date: "02 Ago 2026", isoDate: "2026-08-02" },
  // { venue: "Casa de Shows", city: "Londrina", date: "09 Ago 2026", isoDate: "2026-08-09" },
];

const ShowsSection = () => {
  const { upcoming, past } = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const upcoming: Show[] = [];
    const past: Show[] = [];

    shows.forEach((show) => {
      const showDate = new Date(show.isoDate + "T00:00:00");
      if (showDate >= now) {
        upcoming.push(show);
      } else {
        past.push(show);
      }
    });

    // Upcoming: soonest first
    upcoming.sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime());
    // Past: most recent first
    past.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());

    return { upcoming, past };
  }, []);

  const renderCards = (list: Show[], emptyMsg: string) => {
    if (list.length === 0) {
      return (
        <p className="font-body text-sm text-muted-foreground italic">
          {emptyMsg}
        </p>
      );
    }
    return (
      <div className="flex flex-col gap-4 max-h-[420px] overflow-y-auto pr-2 scrollbar-thin">
        {list.map((show, i) => (
          <motion.div
            key={show.isoDate + show.venue}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="show-card flex-shrink-0"
          >
            <h3 className="font-display text-lg tracking-wider text-foreground mb-2">
              {show.venue}
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-1">{show.city}</p>
            <p className="font-body text-sm text-accent">{show.date}</p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="agenda" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${bgAgenda})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="section-container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground mb-16"
        >
          AGENDA DE SHOWS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Próximos Shows */}
          <div>
            <h3 className="font-display text-base tracking-[0.2em] text-foreground mb-6 border-b border-muted pb-3">
              PRÓXIMOS SHOWS
            </h3>
            {renderCards(upcoming, "Nenhum show agendado no momento.")}
          </div>

          {/* Histórico */}
          <div>
            <h3 className="font-display text-base tracking-[0.2em] text-muted-foreground mb-6 border-b border-muted pb-3">
              HISTÓRICO
            </h3>
            {renderCards(past, "Nenhum show realizado ainda.")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
