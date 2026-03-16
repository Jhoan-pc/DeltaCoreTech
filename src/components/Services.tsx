import React from 'react';
import Image from 'next/image';
import { Network, LineChart, Cpu } from 'lucide-react';

export default function Services() {
  const coreServices = [
    {
      title: "Optimización Lean 4.0",
      description: "Reducción sistémica del desperdicio operativo mediante digitalización y metodologías Lean puras, maximizando el flujo de valor.",
      icon: <LineChart className="service-icon" />
    },
    {
      title: "Integración Digital Absoluta",
      description: "Conexión en tiempo real de plantas, máquinas y sistemas ERP/MES. Estandarizamos el flujo de información de tu compañía.",
      icon: <Network className="service-icon" />
    },
    {
      title: "Consultoría Estratégica",
      description: "Diagnóstico profundo y diseño de arquitectura organizacional de alto rendimiento. Creamos estructuras resilientes enfocadas al ROI.",
      icon: <Cpu className="service-icon" />
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-bg-wrapper">
        <Image 
          src="/images/tech_services_bg.png"
          alt="Tech Background"
          fill
          className="services-bg-image"
        />
        <div className="services-overlay"></div>
      </div>
      <div className="section-container relative-content">
        <div className="section-header animate-reveal">
          <h2 className="headline-medium">Pilares de Rendimiento.</h2>
          <p className="subheadline">Nuestra metodología de ingeniería simplificada.</p>
        </div>
        
        <div className="services-grid">
          {coreServices.map((service, idx) => (
            <div key={idx} className={`service-card animate-reveal delay-${idx + 1}`}>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
