import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';
import { Shield, Clock, MapPin, CheckCircle, ArrowRight, Car, Sparkles, Filter, Users } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBookingModal: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'transfer' | 'tour' | 'vip'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'transfer', label: 'Transfers Aeroporto POA' },
    { id: 'tour', label: 'Passeios & City Tours' },
    { id: 'vip', label: 'Motorista VIP & Ingressos' },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#F8F9FA] text-[#333333] relative">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#143D34]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#143D34]/20 text-[#143D34] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-[#143D34]/5">
            <span>★</span> Experiências & Traslados Exclusivos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143D34] tracking-tight">
            Nossos Serviços de <span className="italic text-[#143D34]">Receptivo VIP</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            De traslados pontuais no Aeroporto Salgado Filho até roteiros sob medida pelas mais belas paisagens de Gramado, Canela e Vale dos Vinhedos.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#143D34] text-white border-[#143D34] shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#143D34] hover:text-[#143D34]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group p-6 border border-slate-200 bg-white rounded-2xl hover:border-[#143D34]/40 transition-all flex flex-col justify-between shadow-sm hover:shadow-xl duration-300"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 -mx-6 -mt-6 mb-6 rounded-t-2xl overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[#143D34] text-white shadow-md">
                  {service.badge}
                </span>

                {service.duration && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-black/60 backdrop-blur-md text-white border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#DFCA95]" />
                    {service.duration}
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#143D34] font-bold uppercase tracking-wider mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-[#143D34]" />
                    <span>{service.route}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#143D34] group-hover:text-[#0D2B24] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                      Incluso no serviço:
                    </span>
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vehicle Compatibility */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                    <Car className="w-3.5 h-3.5 text-[#143D34] shrink-0" />
                    <span>Opções: {service.vehicleTypes.join(' • ')}</span>
                  </div>
                </div>

                {/* Card Footer with CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Orçamento
                    </span>
                    <span className="text-xs font-bold text-[#143D34]">
                      Sob Medida & Transparente
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="text-[#143D34] text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 hover:text-[#0D2B24] group/btn transition-colors"
                  >
                    <span>Reservar</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#143D34] text-white border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 border border-white/20 text-[#DFCA95] text-[9px] uppercase tracking-[0.2em] rounded-full">
              <span>★</span> Atendimento VIP
            </div>
            <h4 className="font-serif text-xl font-bold text-white">
              Precisa de um roteiro personalizado com motorista exclusivo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl font-light">
              Desenhamos trajetos sob medida para casamentos, grupos corporativos ou passeios especiais de lua de mel.
            </p>
          </div>
          <button
            onClick={() => onOpenBookingModal('Roteiro Personalizado')}
            className="shrink-0 bg-white text-[#143D34] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F0F9F7] transition-all shadow-md active:scale-95"
          >
            Falar com Concierge VIP
          </button>
        </div>

      </div>
    </section>
  );
};
