import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Calendar,
  Users,
  Car
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Transfer Aeroporto POA ⇄ Gramado (Privativo)',
    tripDate: '',
    passengers: '2',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const msg = `*Nova Solicitação de Orçamento - Site Serra Gaúcha Turismo*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `✉️ *E-mail:* ${formData.email || 'Não informado'}\n` +
      `🚘 *Serviço:* ${formData.service}\n` +
      `📅 *Data da Viagem:* ${formData.tripDate || 'A definir'}\n` +
      `👥 *Passageiros:* ${formData.passengers} pessoa(s)\n` +
      (formData.notes ? `📝 *Observações / Voo:* ${formData.notes}\n` : '') +
      `\n_Por favor, me envie a cotação com disponibilidade._`;

    const encoded = encodeURIComponent(msg);
    setSubmitted(true);
    
    // Open WhatsApp
    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#143D34] relative text-white">
      {/* Forest Radial Background */}
      <div 
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #0D2B24 100%)' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-white/20 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-white/5">
            <span>★</span> Atendimento Personalizado
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Reserve Sua Experiência na <span className="italic text-[#DFCA95]">Serra Gaúcha</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light">
            Preencha o formulário abaixo para receber sua proposta completa em minutos ou fale agora com um dos nossos consultores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Working Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-[#0D2B24]/90 border border-white/15 p-6 sm:p-8 shadow-xl space-y-6">
              
              <h3 className="font-serif text-2xl font-bold text-white">
                Canais de Atendimento VIP
              </h3>
              <p className="text-sm text-slate-300 font-light">
                Estamos prontos para atender você todos os dias com atenção humanizada e agilidade.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* WhatsApp & Phone */}
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#143D34] hover:bg-[#1A4B40] border border-white/15 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">
                      WhatsApp Principal & Reservas
                    </span>
                    <strong className="text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors font-bold">
                      {COMPANY_INFO.phoneFormatted}
                    </strong>
                    <span className="text-[11px] text-emerald-400 block mt-0.5 font-medium">
                      ● Resposta rápida das 07h às 22h
                    </span>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#143D34]/70 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#DFCA95]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">
                      Horário de Funcionamento
                    </span>
                    <strong className="text-sm text-white font-bold">
                      {COMPANY_INFO.workingHours}
                    </strong>
                    <span className="text-[11px] text-slate-300/80 block mt-0.5">
                      Aberto de domingo a domingo, inclusive feriados
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#143D34]/70 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#DFCA95]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">
                      Endereço e Base Operacional
                    </span>
                    <p className="text-xs sm:text-sm text-white font-medium">
                      {COMPANY_INFO.address}
                    </p>
                    <span className="text-[11px] text-slate-300/80 block mt-0.5">
                      Próximo ao eixo Porto Alegre ➔ Gramado / Canela
                    </span>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#143D34]/70 hover:bg-[#143D34] border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">
                        Instagram Oficial
                      </span>
                      <strong className="text-sm text-white group-hover:text-pink-300 transition-colors">
                        {COMPANY_INFO.instagram}
                      </strong>
                    </div>
                  </div>
                  <span className="text-xs text-[#DFCA95] font-semibold group-hover:underline">
                    Seguir ➔
                  </span>
                </a>

              </div>

            </div>

            {/* Cadastur Security Badge */}
            <div className="p-4 rounded-xl bg-[#0D2B24] border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-semibold">Empresa 100% Legalizada Cadastur</strong>
                Transporte de passageiros regulamentado com seguro obrigatório.
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0D2B24]/90 border border-white/15 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  Formulário de Reserva & Orçamento
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
                  Preencha seus dados para receber nossa cotação detalhada no WhatsApp.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Pronto! Sua solicitação foi direcionada para o nosso WhatsApp. Um especialista já está pronto para te responder.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp para Contato *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (51) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Email and Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      E-mail (Opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Serviço Desejado *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                    >
                      <option value="Transfer Aeroporto POA ⇄ Gramado (Privativo)">Transfer Aeroporto POA ⇄ Gramado (Privativo)</option>
                      <option value="Transfer Aeroporto POA ⇄ Canela (Privativo)">Transfer Aeroporto POA ⇄ Canela (Privativo)</option>
                      <option value="Transfer Regular Compartilhado POA ⇄ Gramado">Transfer Regular Compartilhado POA ⇄ Gramado</option>
                      <option value="City Tour Gramado & Canela Completo">City Tour Gramado & Canela Completo</option>
                      <option value="Tour Uva e Vinho com Maria Fumaça">Tour Uva e Vinho com Maria Fumaça</option>
                      <option value="Motorista Particular Diária VIP">Motorista Particular VIP</option>
                      <option value="Ingressos e Parques Temáticos">Ingressos e Parques Temáticos</option>
                    </select>
                  </div>
                </div>

                {/* Date and Passengers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#DFCA95]" />
                      Data Prevista da Viagem
                    </label>
                    <input
                      type="date"
                      value={formData.tripDate}
                      onChange={(e) => setFormData({ ...formData, tripDate: e.target.value })}
                      className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#DFCA95]" />
                      Quantidade de Pessoas
                    </label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-white"
                    >
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas (Casal)</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5 a 7">5 a 7 pessoas</option>
                      <option value="8 a 15">8 a 15 pessoas (Van)</option>
                      <option value="16+">16+ pessoas (Grupo / Corporativo)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Detalhes do Voo ou Observações Adicionais
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Informe o número do voo (se houver), hotel em Gramado ou se precisará de cadeirinha de bebê..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#143D34] border border-white/15 rounded-xl px-3.5 py-2 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-white"
                  ></textarea>
                </div>

                {/* Primary Action Button */}
                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 text-[#143D34]" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-300/80">
                  🔒 Garantia de resposta rápida e respeito total à sua privacidade.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
