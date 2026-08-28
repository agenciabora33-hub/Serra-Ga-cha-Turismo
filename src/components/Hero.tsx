import React, { useState } from 'react';
import { Shield, Star, Award, CheckCircle2, ArrowRight, Plane, Users, Calendar, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBookingModal: (serviceName?: string, details?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const [routeType, setRouteType] = useState('Transfer Aeroporto POA ⇄ Gramado');
  const [modality, setModality] = useState<'privativo' | 'regular'>('privativo');
  const [passengers, setPassengers] = useState('2');
  const [tripDate, setTripDate] = useState('');

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal(routeType, {
      modality,
      passengers: parseInt(passengers, 10) || 2,
      date: tripDate,
    });
  };

  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-[#143D34]">
      {/* Forest Radial Background */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #0D2B24 100%)' }}
      ></div>
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Emotional Copy & Authority */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/25 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-white/5">
              <span>★</span> Desde 2018 • Serra Gaúcha Turismo
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Transfer Porto Alegre <br/>
              <span className="italic text-[#DFCA95]">Gramado & Canela</span>
            </h1>

            {/* Subheadline with Local SEO */}
            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Sua viagem inesquecível pela Serra Gaúcha começa aqui. Traslados privativos e regulares entre o Aeroporto Salgado Filho e seu hotel com pontualidade britânica, frota própria de alto padrão e atendimento acolhedor.
            </p>

            {/* Core Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-200">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 p-2.5 rounded-lg">
                <Plane className="w-4 h-4 text-[#DFCA95] shrink-0" />
                <span className="font-medium text-left">Voo Monitorado Sem Custo Extra</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 p-2.5 rounded-lg">
                <Shield className="w-4 h-4 text-[#DFCA95] shrink-0" />
                <span className="font-medium text-left">Motoristas Especialistas Locais</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 p-2.5 rounded-lg">
                <Award className="w-4 h-4 text-[#DFCA95] shrink-0" />
                <span className="font-medium text-left">Frota 100% Própria & Segurada</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto bg-white text-[#143D34] px-8 py-3.5 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-[#F0F9F7] transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Reservar Transfer</span>
                <ArrowRight className="w-4 h-4 text-[#143D34]" />
              </button>

              <a
                href="#frota"
                className="flex items-center space-x-3 text-white hover:text-[#DFCA95] transition-colors py-2 px-3"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                  <span className="text-xs text-[#DFCA95]">▶</span>
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold">Conheça a Frota</span>
              </a>
            </div>

            {/* Social Proof snippet */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white/30"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Cliente satisfeita"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white/30"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Cliente satisfeito"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white/30"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                  alt="Cliente satisfeita"
                />
              </div>
              <div className="text-left text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-slate-300/80 text-[11px]">
                  Mais de 5.000 turistas atendidos com nota máxima na Serra Gaúcha
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Reservation Card in Glassmorphism */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0D2B24]/90 backdrop-blur-md p-6 sm:p-7 border border-white/15 shadow-2xl">
              
              {/* Subtle top badge */}
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-white text-[#143D34] text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#143D34]" />
                Cotação Expressa VIP
              </div>

              <div className="text-left mt-1 mb-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Consulte Disponibilidade
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Atendimento imediato das 07:00 às 22:00
                </p>
              </div>

              <form onSubmit={handleQuickQuote} className="space-y-3.5">
                
                {/* Route Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#DFCA95]" />
                    Trajeto Desejado
                  </label>
                  <select
                    value={routeType}
                    onChange={(e) => setRouteType(e.target.value)}
                    className="w-full bg-[#143D34] border border-white/15 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Transfer Aeroporto POA ⇄ Gramado">Aeroporto Salgado Filho (POA) ⇄ Gramado</option>
                    <option value="Transfer Aeroporto POA ⇄ Canela">Aeroporto Salgado Filho (POA) ⇄ Canela</option>
                    <option value="Transfer Aeroporto POA ⇄ Nova Petrópolis">Aeroporto Salgado Filho (POA) ⇄ Nova Petrópolis</option>
                    <option value="City Tour Completo Gramado & Canela">City Tour Gramado e Canela</option>
                    <option value="Tour Vale dos Vinhedos + Maria Fumaça">Tour Uva e Vinho + Maria Fumaça</option>
                    <option value="Motorista Particular Diária VIP">Motorista Particular / Diária VIP</option>
                  </select>
                </div>

                {/* Modality Toggle */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tipo de Atendimento
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setModality('privativo')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        modality === 'privativo'
                          ? 'bg-white text-[#143D34] border-white shadow-md'
                          : 'bg-[#143D34]/80 text-slate-300 border-white/10 hover:border-white/25'
                      }`}
                    >
                      Privativo VIP
                    </button>
                    <button
                      type="button"
                      onClick={() => setModality('regular')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        modality === 'regular'
                          ? 'bg-white text-[#143D34] border-white shadow-md'
                          : 'bg-[#143D34]/80 text-slate-300 border-white/10 hover:border-white/25'
                      }`}
                    >
                      Regular Compartilhado
                    </button>
                  </div>
                </div>

                {/* Date & Passengers Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#DFCA95]" />
                      Data da Viagem
                    </label>
                    <input
                      type="date"
                      value={tripDate}
                      onChange={(e) => setTripDate(e.target.value)}
                      className="w-full bg-[#143D34] border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#DFCA95]" />
                      Passageiros
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-[#143D34] border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                    >
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas (Casal)</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas (Família)</option>
                      <option value="5">5 a 7 pessoas</option>
                      <option value="8">8 a 15 pessoas (Grupo)</option>
                      <option value="16">16+ pessoas (Corporativo)</option>
                    </select>
                  </div>
                </div>

                {/* Features Checkbox list */}
                <div className="bg-[#143D34]/70 rounded-lg p-2.5 border border-white/10 space-y-1 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Cancelamento e alteração flexível</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#DFCA95]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Cadeirinha infantil gratuita higienizada</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Recepção com placa nominal no aeroporto</span>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  id="hero-card-submit-btn"
                  className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Solicitar Cotação no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#143D34]" />
                </button>
              </form>

              <div className="mt-2.5 text-center">
                <span className="text-[10px] text-slate-400 tracking-wider">
                  🔒 Rastreamento oficial de voos • Sem taxa por atraso de voo
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
