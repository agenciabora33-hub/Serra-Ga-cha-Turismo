import React from 'react';
import { SCENIC_LOCATIONS } from '../data/mockData';
import { MapPin, Clock, Compass, ArrowRight, Sparkles } from 'lucide-react';

interface DestinationsSectionProps {
  onOpenBookingModal: (locationName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#143D34] relative text-white">
      {/* Forest Radial Background */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #0D2B24 100%)' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-white/20 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-white/5">
            <span>★</span> Destinos da Serra Gaúcha
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Descubra as Cidades Mais <span className="italic text-[#DFCA95]">Encantadoras do Brasil</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light">
            Levamos você com todo o conforto para os melhores atrativos, parques temáticos e vinícolas da serra.
          </p>
        </div>

        {/* Scenic Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCENIC_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-[#0D2B24] border border-white/20 hover:border-white transition-all duration-300 shadow-xl flex flex-col h-[380px]"
            >
              {/* Image background */}
              <img
                src={loc.image}
                alt={loc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B24] via-[#0D2B24]/70 to-transparent"></div>

              {/* Content overlay */}
              <div className="relative z-10 p-6 flex-1 flex flex-col justify-end">
                <div className="flex items-center gap-1 text-xs text-[#DFCA95] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Rio Grande do Sul</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {loc.title}
                </h3>
                
                <p className="text-xs text-slate-300 mb-3 font-light">
                  {loc.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {loc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-slate-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenBookingModal(`Passeio em ${loc.title}`)}
                  className="w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Reservar Passeio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Info Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0D2B24]/90 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <span className="text-xs text-slate-400 font-medium">Distância Aeroporto POA ⇄ Gramado</span>
            <div className="font-serif text-lg font-bold text-white mt-1">Aprox. 115 km</div>
            <span className="text-[11px] text-[#DFCA95]">Tempo estimado: 1h50 a 2h10</span>
          </div>
          <div className="sm:border-x border-white/10">
            <span className="text-xs text-slate-400 font-medium">Distância Gramado ⇄ Canela</span>
            <div className="font-serif text-lg font-bold text-white mt-1">Apenas 7 km</div>
            <span className="text-[11px] text-[#DFCA95]">Tempo estimado: 10 a 15 minutos</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Distância Gramado ⇄ Vale dos Vinhedos</span>
            <div className="font-serif text-lg font-bold text-white mt-1">Aprox. 110 km</div>
            <span className="text-[11px] text-[#DFCA95]">Tempo estimado: 1h45 a 2h00</span>
          </div>
        </div>

      </div>
    </section>
  );
};
