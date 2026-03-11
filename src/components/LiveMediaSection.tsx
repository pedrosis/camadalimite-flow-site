import { motion } from "framer-motion";
import { Video, Camera, Image } from "lucide-react";
import bgAovivo from "@/assets/bg-aovivo.png";

const icons = [Video, Camera, Image];

const LiveMediaSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${bgAovivo})` }}
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
          AO VIVO
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {icons.map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="media-card"
            >
              <Icon className="w-8 h-8 text-muted-foreground mb-4" strokeWidth={1} />
              <p className="font-body text-sm text-foreground text-center mb-1">
                Vídeos e fotos ao vivo
              </p>
              <p className="font-display text-xs tracking-widest text-muted-foreground">
                EM BREVE
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-sm text-muted-foreground text-center mt-8"
        >
          Acompanhe o Camada Limite no Instagram para ver os próximos shows.
        </motion.p>
      </div>
      </div>
    </section>
  );
};

export default LiveMediaSection;
