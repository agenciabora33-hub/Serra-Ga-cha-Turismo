import React from 'react';
import { DIFFERENTIALS_LIST, COMPANY_INFO } from '../data/mockData';
import { 
  PlaneTakeoff, 
  ShieldCheck, 
  Clock, 
  Car, 
  MessageSquareText, 
  CreditCard, 
  Check, 
  X, 
  Sparkles, 
  HeartHandshake, 
  Navigation 
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBookingModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBookingModal }) => {
  const iconMap: Record<string, any> = {
    PlaneTakeoff,
    ShieldCheck,
    Clock,
    Car,
    MessageSquareText,
    CreditCard,
  };

  const comparisonRows = [
    {
      feature: 'Garantia em Atraso de Voo (Salgado Filho POA)',
      ourService: 'Rastreamento por radar; motorista aguarda sem custo extra',
      others: 'Cobrança de horas extras ou cancelamento sem aviso',
    },
    {
      feature: 'Experiência em Neblina e Curvas da Serra',
      ourService: 'Motoristas locais credenciados e treinados nas rodovias da serra',
      others: 'Motoristas de fora inexperientes nas pistas sinuosas',
    },
    {
      feature: 'Recepção no Desembarque',
      ourService: 'Recepção VIP com placa nominal e ajuda com bagagens',
      others: 'Você precisa procurar o carro na calçada de fora',
    },
    {
      feature: 'Cadeirinhas e Bebê-Conforto',
      ourService: 'Inclusos e devidamente higienizados sob reserva',
      others: 'Geralmente não disponibilizam ou cobram taxas altas',
    },
    {
      feature: 'Segurança & Frota',
      ourService: 'Frota 100% própria, revisada com seguro passageiro APP',
      others: 'Carros terceirizados com estado mecânico incerto',
    },
    {
      feature: 'Suporte no WhatsApp Durante a Viagem',
      ourService: 'Equipe de concierge ativa das 07:00 às 22:00',
      others: 'Respostas automatizadas e sem atendimento local',
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-[#F8F9FA] relative text-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-[#143D34]/20 text-[#143D34] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-[#143D34]/5">
            <span>★</span> Excelência Desde 2018
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143D34] tracking-tight">
            Por Que a <span className="italic text-[#143D34]">Serra Gaúcha Turismo</span> é a Sua Melhor Escolha?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Sua viagem de férias ou trabalho não pode depender da sorte. Conheça os pilares que nos tornaram referência em transfer e passeios na Serra Gaúcha.
          </p>
        </div>

        {/* Narrative & Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DIFFERENTIALS_LIST.map((item, idx) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#143D34]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#143D34] flex items-center justify-center mb-5 text-[#DFCA95] group-hover:scale-105 transition-transform shadow-sm">
                    <Icon className="w-6 h-6 text-[#DFCA95]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#143D34] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#143D34] font-bold tracking-wide">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Compromisso Serra Gaúcha Turismo</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Story / About Narrative Card */}
        <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-[#143D34] text-white border border-white/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 border border-white/20 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full">
                <span>★</span> Nossa História & Propósito
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Mais do que transportar pessoas, cuidamos do primeiro ao último minuto do seu sonho na serra.
              </h3>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                Fundada em <strong>2018</strong> no coração do Rio Grande do Sul, a <strong>Serra Gaúcha Turismo</strong> nasceu com uma missão clara: transformar o trajeto entre o Aeroporto de Porto Alegre e os hotéis de Gramado e Canela em uma experiência acolhedora, pontual e memorável.
              </p>
              
              <p className="text-sm text-slate-200 leading-relaxed font-light">
                Sabemos que voos podem ter imprevistos e que as rodovias serranas exigem cautela técnica com neblina e relevo. Por isso, investimos em treinamento constante de motoristas credenciados e em uma frota moderna e própria.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">📍 Sede em Três Coroas - RS</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">⭐ Nota 4.9 nas avaliações</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">💼 Registro Cadastur Oficial</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-[#0D2B24]/90 border border-white/10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#DFCA95]/10 border border-[#DFCA95]/40 flex items-center justify-center mb-3">
                <Navigation className="w-8 h-8 text-[#DFCA95]" />
              </div>
              <span className="text-2xl font-serif font-bold text-[#DFCA95]">7+ Anos</span>
              <span className="text-xs text-white uppercase font-semibold tracking-wider">de Estrada na Serra</span>
              <p className="text-xs text-slate-300 mt-2">
                Conhecemos cada curva, mirante e atalho para garantir sua viagem tranquila.
              </p>
              <button
                onClick={onOpenBookingModal}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] transition-all w-full shadow-md"
              >
                Reservar Meu Transfer
              </button>
            </div>

          </div>
        </div>

        {/* Objection Killer: Comparison Table */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#143D34]">
              A Diferença de Escolher um <span className="italic text-[#143D34]">Serviço Especialista</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Compare a tranquilidade da Serra Gaúcha Turismo com opções incertas
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#143D34] text-white border-b border-[#0D2B24] font-semibold">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Critério / Benefício</th>
                  <th className="py-4 px-4 sm:px-6 text-[#DFCA95] font-bold bg-[#0D2B24]">
                    ⭐ Serra Gaúcha Turismo
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-slate-300">
                    Transporte Comum / Apps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-emerald-700 font-medium bg-[#143D34]/5">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.ourService}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
