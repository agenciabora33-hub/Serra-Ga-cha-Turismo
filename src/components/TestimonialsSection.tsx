import React from 'react';
import { TESTIMONIALS_LIST } from '../data/mockData';
import { Star, Quote, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#F8F9FA] relative text-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#143D34]/20 text-[#143D34] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-[#143D34]/5">
            <span>★</span> Experiências Reais na Serra Gaúcha
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143D34] tracking-tight">
            A Opinião de Quem Já <span className="italic text-[#143D34]">Viajou Conosco</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Mais de 5.000 turistas atendidos com segurança, conforto e pontualidade desde 2018.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_LIST.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-[#143D34]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg relative"
            >
              <div className="absolute top-6 right-6 text-slate-200 pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Rating and Trip Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#143D34]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DFCA95] text-[#DFCA95]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-[#143D34] text-white">
                    {item.tripType}
                  </span>
                </div>

                {/* Comment Body */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light italic">
                  "{item.comment}"
                </p>

                {/* Service Tag */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#143D34] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Serviço utilizado: <strong>{item.serviceUsed}</strong></span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#143D34]/30"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#143D34]">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3 text-[#143D34]" />
                      <span>{item.originCity}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">
                    {item.date}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3 h-3" />
                    Avaliação Verificada
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Badge Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#143D34] text-white border border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0D2B24] border border-white/20 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-[#DFCA95] text-[#DFCA95]" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                Compromisso com a Satisfação Total do Viajante
              </h4>
              <p className="text-xs text-slate-300 font-light">
                Mais de 98% dos nossos clientes recomendam a Serra Gaúcha Turismo para amigos e familiares.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5551998361117"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] transition-all shadow-md"
          >
            Fazer Parte dos Nossos Clientes Satisfeitos
          </a>
        </div>

      </div>
    </section>
  );
};
