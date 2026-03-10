import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="section-container">
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
              Camada Limite é um duo acústico que mistura rock, pop e MPB em versões cheias 
              de personalidade. Com arranjos minimalistas e energia ao vivo, o projeto nasceu 
              da paixão pela música e pela conexão com o público em bares e eventos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
