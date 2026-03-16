import Link from 'next/link';
import React from 'react';
import { KeyRound } from 'lucide-react';

export default function Header() {
  return (
    <header className="main-header glass-nav">
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <span className="logo-text">Delta<span style={{color: 'var(--accent-gold)'}}>Core</span></span>
          </Link>
        </div>
        
        <nav className="main-nav">
          <div className="nav-links">
            <Link href="#servicios" className="nav-link">Servicios</Link>
            <Link href="#nosotros" className="nav-link">Filosofía Lean</Link>
            <Link href="#casos" className="nav-link">Impacto</Link>
          </div>
          
          <div className="quote-action">
            <Link href="#cotizador" className="key-link" title="Solicitar Cotización">
              <KeyRound className="key-icon" />
              <span className="key-tooltip">Cotizar</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

