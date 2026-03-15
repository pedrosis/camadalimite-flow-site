import { motion } from "framer-motion";
import bgSobre from "@/assets/bg-sobre.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${bgSobre})` }}
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
          SOBRE NÓS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] border border-primary bg-card flex items-center justify-center"
          >
            <span className="font-display text-sm tracking-widest text-muted-foreground">
              FOTO DA BANDA
            </span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-base md:text-lg leading-relaxed text-accent">
              Camada Limite nasceu do encontro entre duas paixões: engenharia e música.
              Como na mecânica dos fluidos, onde a camada limite é a região em que o escoamento muda
              de comportamento ao tocar uma superfície, é no contato com o público que nosso som ganha forma.
              Somos um duo que navega entre rock, pop, pop rock e MPB, explorando essa zona de interação onde técnica,
              emoção e música entram em fluxo!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
