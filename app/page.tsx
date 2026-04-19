import { Terminal, Database, Shield, Zap, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white selection:bg-[#00ff66] selection:text-black">
      {/* Hero Section */}
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#00ff66]/30 bg-[#00ff66]/10 text-[#00ff66] text-sm font-mono mb-4 animate-pulse">
          <Terminal size={16} />
          <span>Soporte L3 & Data Engineering</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
          SENDERO<span className="text-[#00ff66]">BYTE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Arquitectura de datos <span className="text-white font-medium">bulletproof</span>, soporte crítico y el camino hacia el dominio de Python y SQL.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-8 py-4 bg-[#00ff66] text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
            Iniciar el Sendero <ChevronRight size={20} />
          </button>
          <button className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-lg font-medium transition-colors">
            Ver Proyectos
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-24">
        <ServiceCard 
          icon={<Database className="text-[#00ff66]" />}
          title="Data Architect"
          desc="Especialista en ETL, Teradata y plataformas críticas de datos."
        />
        <ServiceCard 
          icon={<Shield className="text-[#00ff66]" />}
          title="Soporte L3"
          desc="Resolución de incidentes complejos y estabilidad de sistemas."
        />
        <ServiceCard 
          icon={<Zap className="text-[#00ff66]" />}
          title="Performance"
          desc="Optimización de queries SQL y flujos de datos a gran escala."
        />
      </div>

      {/* Footer Status */}
      <footer className="mt-24 text-gray-600 font-mono text-sm">
        <span className="text-[#00ff66]">●</span> Sistema Operativo: SenderoByte 1.0 | 2026
      </footer>
    </main>
  )
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#00ff66]/40 transition-all group">
      <div className="mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ff66] transition-colors">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}
