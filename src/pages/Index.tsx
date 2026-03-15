import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowsSection from "@/components/ShowsSection";
import LiveMediaSection from "@/components/LiveMediaSection";
import RepertoireSection from "@/components/RepertoireSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ShowsSection />
      {/* <LiveMediaSection /> */}
      <RepertoireSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-muted">
        <div className="section-container text-center">
          <p className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            © 2026 Camada Limite. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
