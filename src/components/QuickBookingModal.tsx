import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, Calendar, Users, MapPin, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDetails?: any;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialDetails,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Transfer Aeroporto POA ⇄ Gramado (Privativo)');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('2');
  const [flightNumber, setFlightNumber] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
    if (initialDetails?.date) {
      setDate(initialDetails.date);
    }
    if (initialDetails?.passengers) {
      setPassengers(String(initialDetails.passengers));
    }
  }, [initialService, initialDetails, isOpen]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `*Solicitação de Reserva / Transfer - Serra Gaúcha Turismo*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `🚘 *Serviço Selecionado:* ${service}\n` +
      `👥 *Passageiros:* ${passengers} pessoa(s)\n` +
      (date ? `📅 *Data Desejada:* ${date}\n` : '') +
      (flightNumber ? `✈️ *Nº do Voo:* ${flightNumber}\n` : '') +
      (notes ? `📝 *Observações:* ${notes}\n` : '') +
      `\n_Por favor, me informe o valor e como proceder com a reserva._`;

    const encoded = encodeURIComponent(msg);
    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0D2B24] border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-white/20 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold mb-2 bg-white/5">
            <span>★</span> Atendimento Exclusivo no WhatsApp
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Reservar Transfer ou Passeio
          </h3>
          <p className="text-xs text-slate-200 mt-1">
            Preencha seus dados para receber o orçamento oficial da Serra Gaúcha Turismo.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} className="space-y-4 text-xs sm:text-sm">
          
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Serviço Escolhido
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
            >
              <option value="Transfer Aeroporto POA ⇄ Gramado (Privativo)">Transfer Aeroporto POA ⇄ Gramado (Privativo)</option>
              <option value="Transfer Aeroporto POA ⇄ Canela (Privativo)">Transfer Aeroporto POA ⇄ Canela (Privativo)</option>
              <option value="Transfer Aeroporto Caxias do Sul (CXJ) ⇄ Gramado / Canela (Privativo)">Transfer Aeroporto Caxias do Sul (CXJ) ⇄ Gramado / Canela (Privativo)</option>
              <option value="Transfer Florianópolis ⇄ Gramado / Canela (Privativo)">Transfer Florianópolis ⇄ Gramado / Canela (Privativo)</option>
              <option value="Transfer Caxias do Sul ⇄ Gramado / Canela (Privativo)">Transfer Caxias do Sul ⇄ Gramado / Canela (Privativo)</option>
              <option value="Assessoria & Roteiro VIP: Compras, Fábricas & Alta Gastronomia">Assessoria & Roteiro VIP: Compras, Fábricas & Alta Gastronomia</option>
              <option value="City Tour Gramado & Canela Completo">City Tour Gramado & Canela Completo</option>
              <option value="Tour Uva e Vinho com Maria Fumaça">Tour Uva e Vinho com Maria Fumaça</option>
              <option value="Motorista Particular Diária VIP">Motorista Particular Diária VIP</option>
              <option value="Assessoria de Ingressos Parques">Assessoria de Ingressos Parques</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Mariana Silveira"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Seu WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="(51) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#DFCA95]" />
                Data da Viagem
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
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
                className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas (Casal)</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
                <option value="5 a 7">5 a 7 pessoas</option>
                <option value="8 a 15">8 a 15 pessoas</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nº do Voo / Detalhes de Hotel ou Bagagens (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ex: Voo LA1234 chega 14h / Hotel Ritta Höppner"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-white"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#143D34]" />
              <span>Enviar no WhatsApp e Receber Cotação</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-300/80 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resposta rápida das 07:00 às 22:00</span>
          </div>

        </form>

      </div>

    </div>
  );
};
