'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, FileText, Printer, Save, Plus } from 'lucide-react';

type CompanyType = 'empresa_a' | 'empresa_b' | 'empresa_c';

export default function QuoteEngine() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    nit: '',
    address: '',
    phone: '',
    email: '',
    representative: '',
    company_size: '', 
    urgency: 'medium',
    item: 'Servicio de Mantenimiento / Consultoría'
  });
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');

  const handleCompanySelect = (type: CompanyType) => {
    setSelectedCompany(type);
    setStatus('idle');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCompany) return;
    setStatus('submitting');
    try {
      const { error } = await supabase
        .from('quotes')
        .insert([
          { 
            company_type: selectedCompany,
            name: formData.name,
            nit: formData.nit,
            address: formData.address,
            phone: formData.phone,
            email: formData.email,
            representative: formData.representative,
            specific_data: { item: formData.item }
          }
        ]);

      if (error) {
        console.error('Error supabase:', error);
        throw error;
      }
      
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000); // Volver al estado normal después de 5s
    } catch (err) {
      console.error('Error insertando cotización:', err);
      setStatus('error');
    }
  };

  return (
    <section id="cotizador" className="quote-section">
      <div className="section-container" style={{ maxWidth: '1400px' }}>
        
        {/* State 1: Selección inicial de empresa corporativa */}
        {!selectedCompany && (
          <div className="quote-init-state animate-reveal">
            <h2 className="headline-medium" style={{ color: 'var(--text-primary)' }}>Módulo de <br/>Cotizaciones</h2>
            <p className="subheadline" style={{ marginTop: '20px', marginBottom: '40px' }}>Selecciona tu sector para acceder al panel de configuración técnica.</p>
            <div className="company-selector-grid">
              <button className="dashboard-btn" onClick={() => handleCompanySelect('empresa_a')}>Industria Pesada</button>
              <button className="dashboard-btn" onClick={() => handleCompanySelect('empresa_b')}>Manufactura y Logística</button>
              <button className="dashboard-btn" onClick={() => handleCompanySelect('empresa_c')}>Servicios Corporativos</button>
            </div>
          </div>
        )}

        {/* State 2: App Dashboard Split View */}
        {selectedCompany && (
          <div className="quote-app-container animate-fade-in">
            {/* Toolbar Header Negro */}
            <div className="quote-toolbar">
              <div className="toolbar-left">
                <button className="icon-btn" onClick={() => setSelectedCompany(null)}>
                  <ArrowLeft size={20} />
                </button>
                <div className="toolbar-title">
                  <FileText className="text-accent-gold" size={24} />
                  <h3>Nueva Cotización - {selectedCompany === 'empresa_a' ? 'Industria Pesada' : selectedCompany === 'empresa_b' ? 'Manufactura' : 'Servicios'}</h3>
                </div>
              </div>
              <div className="toolbar-actions">
                <button type="button" className="action-btn btn-print">
                  <Printer size={18} /> Imprimir / PDF
                </button>
                <button type="submit" form="quoteForm" className="action-btn btn-save" disabled={status === 'submitting'}>
                  <Save size={18} /> {status === 'submitting' ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </div>

            {/* Split Content Body */}
            <div className="quote-split-view">
              {/* Formulario Izquierda */}
              <div className="quote-form-pane">
                <h4 className="pane-section-title">INFORMACIÓN DEL CLIENTE</h4>
                <form id="quoteForm" className="dashboard-form" onSubmit={handleSubmit}>
                  
                  <div className="input-block">
                    <label>Nombre / Razón Social</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Ej: Industrias Aceros Ltda." />
                  </div>
                  
                  <div className="input-block">
                    <label>NIT / Cédula</label>
                    <input required type="text" name="nit" value={formData.nit} onChange={handleInputChange} placeholder="Ej: 900.123.456-7" />
                  </div>
                  
                  <div className="input-block">
                    <label>Dirección</label>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Ej: Zona Industrial Calle 123" />
                  </div>

                  <div className="input-row">
                    <div className="input-block">
                      <label>Teléfono</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Ej: 300 123 4567" />
                    </div>
                    <div className="input-block">
                      <label>Email</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Ej: compras@empresa.com" />
                    </div>
                  </div>

                  <div className="input-block">
                    <label>Representante Legal</label>
                    <input type="text" name="representative" value={formData.representative} onChange={handleInputChange} placeholder="Ej: Juan Pérez" />
                  </div>

                  {status === 'success' && (
                    <div className="success-banner" style={{ marginTop: '20px', padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '8px' }}>
                      Cotización generada y guardada en el sistema con éxito.
                    </div>
                  )}

                  <div className="pane-section-header" style={{ marginTop: '40px' }}>
                    <h4 className="pane-section-title" style={{ margin: 0 }}>ÍTEMS</h4>
                    <button type="button" className="btn-add-item"><Plus size={16} /> Agregar</button>
                  </div>
                  
                  <div className="item-card">
                    <input type="text" name="item" value={formData.item} onChange={handleInputChange} className="borderless-input" />
                  </div>

                </form>
              </div>

              {/* Preview Derecha (Hoja de Cotización) */}
              <div className="quote-preview-pane">
                <div className="paper-document">
                  <div className="paper-header">
                    <h1 className="logo-text" style={{ fontSize: '1.5rem', color: '#111' }}>Delta<span style={{color: 'var(--accent-gold)'}}>Core</span></h1>
                    <div className="doc-meta">
                      <p><strong>COTIZACIÓN Nº:</strong> 00{Math.floor(Math.random() * 1000)}</p>
                      <p><strong>FECHA:</strong> {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="paper-client-info">
                    <div className="info-group">
                      <p className="label">CLIENTE:</p>
                      <p className="value">{formData.name || '---'}</p>
                    </div>
                    <div className="info-group">
                      <p className="label">NIT:</p>
                      <p className="value">{formData.nit || '---'}</p>
                    </div>
                    <div className="info-group">
                      <p className="label">EMAIL:</p>
                      <p className="value">{formData.email || '---'}</p>
                    </div>
                    <div className="info-group">
                      <p className="label">TELÉFONO:</p>
                      <p className="value">{formData.phone || '---'}</p>
                    </div>
                  </div>

                  <div className="paper-table">
                    <div className="table-head">
                      <div className="col-desc">DESCRIPCIÓN</div>
                      <div className="col-qty">CANT.</div>
                      <div className="col-price">V. UNITARIO</div>
                      <div className="col-total">TOTAL</div>
                    </div>
                    <div className="table-row">
                      <div className="col-desc">{formData.item}</div>
                      <div className="col-qty">1</div>
                      <div className="col-price">$ ---</div>
                      <div className="col-total">$ ---</div>
                    </div>
                  </div>

                  <div className="paper-totals">
                    <div className="total-row"><span>Subtotal:</span> <span>$ ---</span></div>
                    <div className="total-row"><span>IVA (19%):</span> <span>$ ---</span></div>
                    <div className="total-row highlight"><span>TOTAL:</span> <span>$ ---</span></div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
