'use client';

import React from 'react';
import { Terminal, Database, Code, Shield, Cpu, MessageSquare, Calendar } from 'lucide-react';

export default function Home() {
  const whatsappNumber = "5491135198965";

  const handleWhatsApp = (service: string) => {
    const msg = `Hola Marcos! Estoy interesado en los servicios de ${service} de SenderoByte.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-[#1a1816] text-[#e6e6e6] min-h-screen font-sans overflow-x-hidden relative selection:bg-[#00ff66] selection:text-black">
      
      {/* Background Orbs (Animación CSS nativa con Tailwind) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-[#00ff66] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute top-[70%] left-[80%] w-[250px] h-[250px] bg-[#00ff66] rounded-full blur-[100px] opacity-10"></div>
      </div>

      {/* Navbar Minimalista */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1816]/90 backdrop-blur-md border-b border-[#00ff66]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
            <Terminal className="text-[#00ff66]" />
            SENDERO<span className="text-[#00ff66]">BYTE</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#servicios" className="hover:text-[#00ff66] transition-colors">Servicios</a>
            <a href="#trayectoria" className="hover:text-[#00ff66] transition-colors">Trayectoria</a>
            <a href="#contacto" className="hover:text-[#00ff66] transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-48 pb-24 px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff66]/30 bg-[#00ff66]/10 text-[#00ff66] text-sm font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
          Sistemas Operativos & Datos Críticos
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
          ARQUITECTURA <br /> <span className="text-[#00ff66]">BULLETPROOF</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light">
          Especialista en migraciones masivas, soporte L3 y el sendero hacia el dominio de Python y SQL.
        </p>
        <div className="flex gap-4">
          <a href="#servicios" className="px-8 py-4 bg-[#00ff66] text-black font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,102,0.3)]">
            Explorar Servicios
          </a>
        </div>
      </header>

      {/* Servicios (Sin Modales, Directo a la Acción) */}
      <section id="servicios" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">MIS <span className="text-[#00ff66]">SERVICIOS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#2c2520]/50 border border-[#0f5c32] hover:border-[#00ff66] transition-all group">
              <Database className="text-[#00ff66] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-3">Data Engineering</h4>
              <p className="text-gray-400 mb-6 text-sm">ETL masivo, Teradata y pipelines robustos. Migraciones de alta complejidad.</p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-black/50 border border-[#00ff66]/30 text-[#00ff66] text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-black/50 border border-[#00ff66]/30 text-[#00ff66] text-xs rounded-full">SQL</span>
              </div>
              <button onClick={() => handleWhatsApp('Data Engineering')} className="w-full py-3 border border-[#00ff66] text-[#00ff66] rounded-lg hover:bg-[#00ff66] hover:text-black transition-colors font-bold text-sm">
                Consultar
              </button>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#2c2520]/50 border border-[#0f5c32] hover:border-[#00ff66] transition-all group">
              <Shield className="text-[#00ff66] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-3">Soporte L3</h4>
              <p className="text-gray-400 mb-6 text-sm">Resolución de incidentes críticos, estabilidad de sistemas y análisis de causa raíz.</p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-black/50 border border-[#00ff66]/30 text-[#00ff66] text-xs rounded-full">Linux</span>
                <span className="px-3 py-1 bg-black/50 border border-[#00ff66]/30 text-[#00ff66] text-xs rounded-full">Infra</span>
              </div>
              <button onClick={() => handleWhatsApp('Soporte L3')} className="w-full py-3 border border-[#00ff66] text-[#00ff66] rounded-lg hover:bg-[#00ff66] hover:text-black transition-colors font-bold text-sm">
                Consultar
              </button>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#2c2520]/50 border border-[#0f5c32] hover:border-[#00ff66] transition-all group">
              <Cpu className="text-[#00ff66] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-3">Tech Solutions</h4>
              <p className="text-gray-400 mb-6 text-sm">Soporte POS, Hardware crítico, Ciberseguridad base y despliegue de Web Apps.</p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-black/50 border border-[#00ff66]/30 text-[#00ff66] text-xs rounded-full">Hardware</span>
                <span className="px-3 py-1 bg-black/50 border border-[#00ff66]/30 text-[#00ff66] text-xs rounded-full">React</span>
              </div>
              <button onClick={() => handleWhatsApp('Tech Solutions')} className="w-full py-3 border border-[#00ff66] text-[#00ff66] rounded-lg hover:bg-[#00ff66] hover:text-black transition-colors font-bold text-sm">
                Consultar
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section id="trayectoria" className="relative z-10 py-24 px-6 bg-black/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">EXPERIENCIA <span className="text-[#00ff66]">CRÍTICA</span></h2>
          
          <div className="space-y-12 border-l-2 border-[#00ff66]/30 ml-4 md:ml-0">
            {/* Item 1 */}
            <div className="relative pl-10">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#1a1816] border-2 border-[#00ff66] rounded-full shadow-[0_0_10px_#00ff66]"></div>
              <span className="text-[#00ff66] font-bold font-mono text-sm tracking-widest uppercase">Actualidad</span>
              <h4 className="text-2xl font-bold mt-1 text-white">Charles Taylor</h4>
              <p className="text-gray-400 mt-2">L3 Development Support. Mantenimiento y resolución de incidentes en infraestructura de alta disponibilidad.</p>
            </div>
            
            {/* Item 2 */}
            <div className="relative pl-10">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#1a1816] border-2 border-gray-600 rounded-full"></div>
              <span className="text-gray-500 font-bold font-mono text-sm tracking-widest uppercase">2023 - 2024</span>
              <h4 className="text-2xl font-bold mt-1 text-white">Banco Galicia</h4>
              <p className="text-gray-400 mt-2">Senior Data Engineer. Integración de sistemas legacy (COBOL) con SQL y automatización de pipelines ETL.</p>
            </div>

            {/* Item 3 */}
            <div className="relative pl-10">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#1a1816] border-2 border-gray-600 rounded-full"></div>
              <span className="text-gray-500 font-bold font-mono text-sm tracking-widest uppercase">2022 - 2024</span>
              <h4 className="text-2xl font-bold mt-1 text-white">gutbit</h4>
              <p className="text-gray-400 mt-2">Migración masiva de 19.2 millones de líneas móviles. Manejo de volúmenes críticos de datos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Iniciá el <span className="text-[#00ff66]">Sendero</span></h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Ya sea para resolver un incidente de nivel 3 o armar una arquitectura de datos desde cero, agendá una llamada.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://calendly.com/subtechar/30min" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00ff66] text-black font-bold rounded-lg hover:scale-105 transition-transform">
              <Calendar size={20} /> Agendar Meet
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-[#00ff66] text-white hover:text-[#00ff66] font-bold rounded-lg transition-colors bg-white/5">
              <MessageSquare size={20} /> WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-gray-600 font-mono text-sm border-t border-white/5 bg-black/50">
        <span className="text-[#00ff66] animate-pulse">●</span> SenderoByte v1.0 | Sistemas Operativos & Arquitectura de Datos
      </footer>
    </div>
  );
}
