import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import bgAovivo from "@/assets/bg-aovivo.png";

interface MediaItem {
  type: "photo" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
}

const mediaItems: MediaItem[] = [
  { type: "photo", src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=400&fit=crop", alt: "Show ao vivo 1" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", alt: "Vídeo ao vivo 1" },
  { type: "photo", src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop", alt: "Show ao vivo 2" },
  { type: "photo", src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop", alt: "Show ao vivo 3" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&h=400&fit=crop", alt: "Vídeo ao vivo 2" },
  { type: "photo", src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop", alt: "Show ao vivo 4" },
];

const LiveMediaSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section id="aovivo" className="relative py-24 md:py-32 overflow-hidden">
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
          className="font-display text-2xl md:text-3xl tracking-[0.15em] text-foreground mb-4"
        >
          AO VIVO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm text-muted-foreground mb-10"
        >
          Fotos e vídeos das nossas apresentações.
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="relative z-10">
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center border border-primary text-foreground hover:bg-muted transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center border border-primary text-foreground hover:bg-muted transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-14 md:px-20 pb-4 scrollbar-thin"
          style={{ scrollbarWidth: "thin" }}
        >
          {mediaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[360px] border border-primary overflow-hidden group relative"
              style={{ backgroundColor: "hsl(var(--card))" }}
            >
              {item.type === "photo" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full aspect-video">
                  <img
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/40 transition-opacity duration-300 group-hover:bg-background/20">
                    <div className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center">
                      <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4">
                <span className="font-display text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  {item.type === "photo" ? "Foto" : "Vídeo"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-container relative z-10 mt-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-sm text-muted-foreground text-center"
        >
          Acompanhe o Camada Limite no Instagram para ver os próximos shows.
        </motion.p>
      </div>
    </section>
  );
};

export default LiveMediaSection;
