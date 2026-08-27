import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Baby, 
  Clock, 
  MessageSquare,
  Luggage
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface BookingCalculatorProps {
  onOpenBookingModal: (serviceName?: string, data?: any) => void;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({ onOpenBookingModal }) => {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
  const [origin, setOrigin] = useState('Aeroporto Salgado Filho (POA)');
  const [destination, setDestination] = useState('Gramado (Hotel / Pousada)');
  const [serviceClass, setServiceClass] = useState<'privativo' | 'regular'>('privativo');
  const [passengers, setPassengers] = useState<number>(2);
  const [dateIn, setDateIn] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [needsChildSeat, setNeedsChildSeat] = useState(false);
  const [needsTourCombo, setNeedsTourCombo] = useState(false);

  const generateWhatsAppMessage = () => {
    const text = `*Olá! Gostaria de solicitar um orçamento de Transfer/Passeio com a Serra Gaúcha Turismo:*\n\n` +
      `📌 *Tipo de Viagem:* ${tripType === 'roundtrip' ? 'Ida e Volta (Transfer Completo)' : 'Apenas 1 Trecho'}\n` +
      `📍 *Origem:* ${origin}\n` +
      `🏁 *Destino:* ${destination}\n` +
      `✨ *Modalidade:* ${serviceClass === 'privativo' ? 'Privativo VIP Exclusivo' : 'Regular Compartilhado'}\n` +
      `👥 *Passageiros:* ${passengers} pessoa(s)\n` +
      (dateIn ? `📅 *Data Chegada:* ${dateIn} ${timeIn ? `às ${timeIn}` : ''}\n` : '') +
      (tripType === 'roundtrip' && dateOut ? `📅 *Data Retorno:* ${dateOut}\n` : '') +
      (flightNumber ? `✈️ *Nº do Voo:* ${flightNumber}\n` : '') +
      `👶 *Cadeirinha Infantil:* ${needsChildSeat ? 'Sim, preciso' : 'Não'}\n` +
      `🎟️ *Interesse em Passeios/Ingressos:* ${needsTourCombo ? 'Sim, quero combo com passeios' : 'Não'}\n\n` +
      `_Por favor, me informe o valor e a disponibilidade para minha viagem._`;

    const encoded = encodeURIComponent(text);
    return `${COMPANY_INFO.whatsappUrl}?text=${encoded}`;
  };

  const handleDirectWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppMessage();
    window.open(url, '_blank');
  };

  return (
    <section id="cotacao" className="py-16 sm:py-24 bg-[#F8F9FA] relative text-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#143D34]/20 text-[#143D34] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-[#143D34]/5">
            <span>★</span> Simulador Interativo em Tempo Real
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143D34] tracking-tight">
            Monte Seu <span className="italic text-[#143D34]">Transfer Sob Medida</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-light">
            Selecione suas preferências e receba uma proposta detalhada sem compromisso diretamente com nossos especialistas.
          </p>
        </div>

        {/* Calculator Frame */}
        <div className="rounded-3xl bg-[#143D34] border border-white/15 p-6 sm:p-10 shadow-2xl text-white">
          
          <form onSubmit={handleDirectWhatsApp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Configurations (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Trip Type Selector */}
              <div>
                <label className="block text-[10px] font-bold text-[#DFCA95] uppercase tracking-widest mb-2">
                  1. Formato da Viagem
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTripType('roundtrip')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all flex items-center justify-center gap-2 ${
                      tripType === 'roundtrip'
                        ? 'bg-white text-[#143D34] border-white shadow-md'
                        : 'bg-[#0D2B24]/90 text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>Ida e Volta (Transfer Completo)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType('oneway')}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all flex items-center justify-center gap-2 ${
                      tripType === 'oneway'
                        ? 'bg-white text-[#143D34] border-white shadow-md'
                        : 'bg-[#0D2B24]/90 text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>Apenas 1 Trecho (Só Ida/Volta)</span>
                  </button>
                </div>
              </div>

              {/* Origin & Destination Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#DFCA95]" />
                    Ponto de Partida (Origem)
                  </label>
                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-[#0D2B24]/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                  >
                    <option value="Aeroporto Salgado Filho (POA)">Aeroporto Salgado Filho (POA)</option>
                    <option value="Gramado (Hotel / Pousada)">Gramado (Hotel / Pousada / Centro)</option>
                    <option value="Canela (Hotel / Pousada)">Canela (Hotel / Pousada / Centro)</option>
                    <option value="Porto Alegre (Hotel / Bairro)">Porto Alegre (Hotel / Residência)</option>
                    <option value="Nova Petrópolis">Nova Petrópolis</option>
                    <option value="Três Coroas / Igrejinha">Três Coroas / Igrejinha</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#DFCA95]" />
                    Ponto de Chegada (Destino)
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#0D2B24]/90 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                  >
                    <option value="Gramado (Hotel / Pousada)">Gramado (Hotel / Pousada / Centro)</option>
                    <option value="Canela (Hotel / Pousada)">Canela (Hotel / Pousada / Centro)</option>
                    <option value="Aeroporto Salgado Filho (POA)">Aeroporto Salgado Filho (POA)</option>
                    <option value="Vale dos Vinhedos / Bento Gonçalves">Vale dos Vinhedos / Bento Gonçalves</option>
                    <option value="Nova Petrópolis">Nova Petrópolis</option>
                  </select>
                </div>
              </div>

              {/* Service Class & Passengers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#DFCA95]" />
                    Modalidade do Transfer
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setServiceClass('privativo')}
                      className={`p-2.5 rounded-lg text-xs font-semibold border text-center transition-all ${
                        serviceClass === 'privativo'
                          ? 'bg-white border-white text-[#143D34] font-bold shadow-md'
                          : 'bg-[#0D2B24]/90 border-white/10 text-slate-300'
                      }`}
                    >
                      Privativo VIP (Exclusivo)
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceClass('regular')}
                      className={`p-2.5 rounded-lg text-xs font-semibold border text-center transition-all ${
                        serviceClass === 'regular'
                          ? 'bg-white border-white text-[#143D34] font-bold shadow-md'
                          : 'bg-[#0D2B24]/90 border-white/10 text-slate-300'
                      }`}
                    >
                      Regular (Econômico)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#DFCA95]" />
                    Quantidade de Passageiros
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={passengers}
                      onChange={(e) => setPassengers(parseInt(e.target.value, 10))}
                      className="w-full accent-white cursor-pointer"
                    />
                    <span className="w-16 text-center py-1.5 px-2 rounded-lg bg-[#0D2B24] border border-white/15 text-xs font-bold text-[#DFCA95]">
                      {passengers} pax
                    </span>
                  </div>
                </div>
              </div>

              {/* Dates and Flight Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#DFCA95]" />
                    Data de Chegada
                  </label>
                  <input
                    type="date"
                    value={dateIn}
                    onChange={(e) => setDateIn(e.target.value)}
                    className="w-full bg-[#0D2B24]/90 border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                  />
                </div>

                {tripType === 'roundtrip' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#DFCA95]" />
                      Data de Retorno
                    </label>
                    <input
                      type="date"
                      value={dateOut}
                      onChange={(e) => setDateOut(e.target.value)}
                      className="w-full bg-[#0D2B24]/90 border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#DFCA95]" />
                    Nº do Voo (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: LA3456 / G3 1234"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    className="w-full bg-[#0D2B24]/90 border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              {/* Extra Perks Checkboxes */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-2 p-3 rounded-xl bg-[#0D2B24]/80 border border-white/10 cursor-pointer hover:border-white/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={needsChildSeat}
                    onChange={(e) => setNeedsChildSeat(e.target.checked)}
                    className="w-4 h-4 rounded text-[#143D34] focus:ring-0 accent-white"
                  />
                  <div className="flex items-center gap-1.5 text-xs text-slate-200">
                    <Baby className="w-4 h-4 text-[#DFCA95]" />
                    <span>Preciso de Cadeirinha / Bebê-Conforto (Grátis)</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-3 rounded-xl bg-[#0D2B24]/80 border border-white/10 cursor-pointer hover:border-white/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={needsTourCombo}
                    onChange={(e) => setNeedsTourCombo(e.target.checked)}
                    className="w-4 h-4 rounded text-[#143D34] focus:ring-0 accent-white"
                  />
                  <div className="flex items-center gap-1.5 text-xs text-slate-200">
                    <Sparkles className="w-4 h-4 text-[#DFCA95]" />
                    <span>Quero incluir Passeios / Maria Fumaça</span>
                  </div>
                </label>
              </div>

            </div>

            {/* Right Col: Live Summary Card & Trigger (4 cols) */}
            <div className="lg:col-span-4 rounded-2xl bg-[#0D2B24]/95 border border-white/20 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-[10px] font-bold text-[#DFCA95] uppercase tracking-widest">
                    Resumo do Seu Pedido
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded-sm bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 uppercase tracking-wider">
                    Atendimento VIP
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Modalidade:</span>
                    <strong className="text-white">
                      {serviceClass === 'privativo' ? 'Privativo VIP' : 'Regular Compartilhado'}
                    </strong>
                  </div>

                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Trajeto:</span>
                    <strong className="text-white text-right max-w-[170px] truncate">
                      {origin} ➔ {destination}
                    </strong>
                  </div>

                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Formato:</span>
                    <strong className="text-white">
                      {tripType === 'roundtrip' ? 'Ida e Volta Completo' : 'Apenas 1 Trecho'}
                    </strong>
                  </div>

                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Passageiros:</span>
                    <strong className="text-[#DFCA95]">{passengers} pessoas</strong>
                  </div>

                  {needsChildSeat && (
                    <div className="flex justify-between py-1 border-b border-white/5 text-[#DFCA95]">
                      <span>Cadeirinha Infantil:</span>
                      <strong>Inclusa (Cortesia)</strong>
                    </div>
                  )}

                  <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                    <p className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      Sem custos ocultos de pedágio ou combustível
                    </p>
                    <p className="flex items-center gap-1.5 text-slate-300">
                      <Luggage className="w-3.5 h-3.5 shrink-0 text-[#DFCA95]" />
                      Amplo bagageiro para todas as malas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  type="submit"
                  id="calculator-whatsapp-btn"
                  className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#143D34]" />
                  <span>Enviar Cotação no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  Atendimento das 07:00 às 22:00 todos os dias da semana.
                </p>
              </div>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
