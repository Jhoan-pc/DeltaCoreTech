import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="section-container footer-content">
        <div className="footer-brand">
          <span className="logo-text">DeltaCore</span>
          <p className="footer-tagline">
            Ingeniería de clase mundial. <br />
            Transformación Lean 4.0 para la industria en Colombia.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h4>Navegación</h4>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Filosofía</a>
            <a href="#cotizador">Cotizaciones</a>
          </div>
          <div className="link-column">
            <h4>Contacto Directo</h4>
            <a href="mailto:estrategia@deltacore.co" className="contact-link">
              <Mail className="footer-icon" /> estrategia@deltacore.co
            </a>
            <a href="tel:+573000000000" className="contact-link">
              <Phone className="footer-icon" /> +57 300 000 0000
            </a>
            <div className="contact-link">
              <MapPin className="footer-icon" /> Bogotá, Distrito Capital
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DeltaCoreTech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
