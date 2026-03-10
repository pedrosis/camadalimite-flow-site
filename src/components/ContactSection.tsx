import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground mb-16"
        >
          CONTATO
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a
            href="https://wa.me/5518997937238"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="btn-solid inline-flex items-center gap-3"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            WHATSAPP
          </motion.a>

          <motion.a
            href="https://instagram.com/camadalimiteoficial"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="btn-solid inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            INSTAGRAM
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
