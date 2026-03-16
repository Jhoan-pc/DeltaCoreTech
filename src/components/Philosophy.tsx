import React from 'react';
import Image from 'next/image';

export default function Philosophy() {
  return (
    <section id="nosotros" className="philosophy-section">
      <div className="section-container">
        <div className="philosophy-content">
          <div className="philosophy-text animate-reveal">
            <h2 className="headline-medium" style={{ marginBottom: "30px" }}>
              Nuestra Filosofía.
            </h2>
            <p>
              Creemos que la verdadera innovación no surge de añadir complejidad, 
              sino de <strong>eliminar lo innecesario</strong>. 
            </p>
            <p>
              Aplicamos los principios de <strong>Lean 4.0</strong> para auditar, depurar y 
              acelerar los procesos de tu empresa, garantizando que cada recurso se traduzca 
              en valor directo para el cliente final. Menos fricción, más impacto.
            </p>
          </div>
          
          <div className="philosophy-visual animate-reveal delay-2">
            <Image 
              src="/images/philosophy_lean.png" 
              alt="Lean 4.0 Philosophy"
              fill
              className="philosophy-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
