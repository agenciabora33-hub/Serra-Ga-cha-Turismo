import React from 'react';
import { ShieldCheck, Award, Users, Car, Check, Plane, CreditCard, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const TrustBadges: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: 'Desde 2018',
      label: '7+ Anos de Excelência',
      sublabel: 'Pioneirismo em receptivo VIP na serra',
    },
    {
      icon: Users,
      value: '+5.000',
      label: 'Turistas Atendidos',
      sublabel: 'Casais, famílias e corporativo',
    },
    {
      icon: Car,
      value: '100% Própria',
      label: 'Frota Revisada',
      sublabel: 'Vans executivas, SUVs e Sedans',
    },
    {
      icon: ShieldCheck,
      value: '4.9 ★★★★★',
      label: 'Nota Máxima',
      sublabel: 'No Google e redes sociais',
    },
  ];

  const badges = [
    'Cadastur Oficial Ministério do Turismo',
    'Seguro Passageiro APP em todas as viagens',
    'Monitoramento Ativo de Voos Salgado Filho',
    'Cadeirinhas Infantis Higienizadas Gratuitas',
    'Atendimento Humanizado 07h às 22h',
    'Sem custos ocultos ou taxas extras',
  ];

  return (
    <section className="relative z-10 -mt-4 sm:-mt-8 mb-10 sm:mb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Immersive UI Container */}
      <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl shadow-slate-900/10">
        
        {/* Metric Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 lg:pt-0' : ''} ${
                  idx > 0 ? 'lg:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#143D34]/5 border border-[#143D34]/15 flex items-center justify-center mb-3 text-[#143D34] shadow-sm">
                  <Icon className="w-5 h-5 text-[#143D34]" />
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#143D34]">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-900 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-600 font-medium mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            );
          })}
        </div>

        {/* Rolling / Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-700 font-medium tracking-wide">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-emerald-700 stroke-[3]" />
                </span>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
