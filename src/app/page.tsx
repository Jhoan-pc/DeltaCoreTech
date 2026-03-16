import Image from "next/image";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import QuoteEngine from "@/components/Quotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="hero-section">
          {/* Fondo Inmersivo de Alta Calidad (Apple Style) */}
          <div className="hero-bg-wrapper">
            <Image 
              src="/images/hero_light_premium.png"
              alt="Industrial Engineering Background"
              fill
              priority
              className="hero-image"
            />
            <div className="hero-gradient-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-title-container animate-reveal delay-1">
              <div className="accent-line"></div>
              <span className="key-tooltip" style={{position:'static', opacity:1, transform:'none', color:'var(--accent-gold)', marginBottom:'10px', display:'block', fontSize:'0.9rem'}}>Ingeniería & Resultados</span>
              <h1 className="headline-large">
                Eficiencia <br /> Absoluta.
              </h1>
            </div>
            <p className="subheadline animate-reveal delay-2" style={{maxWidth: '600px'}}>
              Transformamos la complejidad industrial de tu empresa en rendimiento inteligente con metodologías puras Lean 4.0.
            </p>
            <div className="hero-actions animate-reveal delay-3">
              <a href="#cotizador" className="btn-primary">
                Iniciar Proyecto
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver Filosofía
              </a>
            </div>
          </div>
        </section>

        <Services />
        <Philosophy />
        <QuoteEngine />
      </main>
      <Footer />
    </>
  );
}


