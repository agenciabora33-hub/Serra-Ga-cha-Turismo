import React from 'react';
import { FLEET_VEHICLES } from '../data/mockData';
import { Users, Briefcase, Wifi, Shield, Check, Sparkles, ArrowRight } from 'lucide-react';

interface FleetSectionProps {
  onOpenBookingModal: (vehicleName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="frota" className="py-16 sm:py-24 bg-[#143D34] relative overflow-hidden text-white">
      {/* Forest Radial Background */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #0D2B24 100%)' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-white/20 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-white/5">
            <span>★</span> Frota 100% Própria & Segurada
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Veículos Executivos e <span className="italic text-[#DFCA95]">Conforto VIP</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light">
            Não terceirizamos nossa qualidade. Nossos carros e vans executivas passam por manutenção preventiva rigorosa, possuem ar-condicionado potente e seguro passageiro integral.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FLEET_VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="rounded-2xl bg-[#0D2B24]/90 border border-white/20 hover:border-white/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Vehicle Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#DFCA95] uppercase tracking-[0.2em]">
                      {vehicle.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                      {vehicle.name}
                    </h3>
                  </div>
                  {vehicle.badge && (
                    <span className="shrink-0 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-white text-[#143D34] shadow-md">
                      {vehicle.badge}
                    </span>
                  )}
                </div>

                {/* Vehicle Image */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B24]/90 via-transparent to-transparent"></div>
                  
                  {/* Capacity Badges floating */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-xs text-white border border-white/10">
                      <Users className="w-3.5 h-3.5 text-[#DFCA95]" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-xs text-white border border-white/10">
                      <Briefcase className="w-3.5 h-3.5 text-[#DFCA95]" />
                      <span>{vehicle.luggageCapacity}</span>
                    </div>
                  </div>
                </div>

                {/* Comfort Features Grid */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Comodidades a bordo:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.comfortFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 mb-6">
                  <strong className="text-[#DFCA95]">Recomendado para:</strong> {vehicle.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBookingModal(`Veículo: ${vehicle.name}`)}
                className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Este Veículo no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Hygiene & Security banner */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#DFCA95]">Higienização Detalhada</h5>
            <p className="text-xs text-slate-300 mt-1">Limpeza e sanitização completa antes de cada viagem.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#DFCA95]">Seguro Passageiro APP</h5>
            <p className="text-xs text-slate-300 mt-1">Cobertura securitária total para você e sua família.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#DFCA95]">Água e Climatização</h5>
            <p className="text-xs text-slate-300 mt-1">Ambiente na temperatura ideal para a subida da serra.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
