import React from 'react';
import { ShieldCheck, Heart, MapPin, Phone, MessageSquare, Instagram, Clock, CreditCard, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D2B24] border-t border-white/10 text-gray-400 text-xs sm:text-sm">
      
      {/* Upper Footer: Brand & Core Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="horizontal" size="md" theme="light" />

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Desde 2018 conectando o Aeroporto Internacional Salgado Filho (Porto Alegre) aos mais prestigiados hotéis e atrativos de Gramado, Canela e Serra Gaúcha com conforto, pontualidade britânica e atendimento VIP.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Agência Credenciada Cadastur • Frota 100% Própria</span>
            </div>
          </div>

          {/* Col 2: Fast Anchor Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#DFCA95] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DFCA95]" />
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#DFCA95] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DFCA95]" />
                  Transfer Aeroporto POA ⇄ Gramado
                </a>
              </li>
              <li>
                <a href="#frota" className="hover:text-[#DFCA95] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DFCA95]" />
                  Nossa Frota Executiva
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#DFCA95] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DFCA95]" />
                  Diferenciais & Segurança
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#DFCA95] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DFCA95]" />
                  Depoimentos de Turistas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DFCA95] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DFCA95]" />
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Local SEO (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• Traslado Aeroporto de Porto Alegre</li>
              <li>• Transfer Privativo Gramado e Canela</li>
              <li>• City Tour Completo Gramado & Canela</li>
              <li>• Tour Uva e Vinho + Maria Fumaça</li>
              <li>• Roteiros Personalizados com Motorista VIP</li>
              <li>• Assessoria e Ingressos para Parques</li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-gray-300 block mb-1.5">
                Formas de Pagamento:
              </span>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="px-2 py-1 rounded bg-[#143D34] border border-white/15 font-bold text-emerald-400">PIX</span>
                <span className="px-2 py-1 rounded bg-[#143D34] border border-white/15">Cartão de Crédito</span>
                <span className="px-2 py-1 rounded bg-[#143D34] border border-white/15">Até 12x</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Base (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Contato Direto
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#DFCA95] shrink-0 mt-0.5" />
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#DFCA95]">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </p>
              <p className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#DFCA95] shrink-0 mt-0.5" />
                <span>07:00 às 22:00 (Diariamente)</span>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#DFCA95] shrink-0 mt-0.5" />
                <span>Três Coroas • Gramado • Canela - RS</span>
              </p>
              <p className="flex items-start gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-[#DFCA95] shrink-0 mt-0.5" />
                <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {COMPANY_INFO.instagram}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Local SEO Keywords paragraph */}
        <div className="mt-10 pt-8 border-t border-white/10 text-[11px] text-gray-500 leading-relaxed">
          <strong className="text-gray-400 block mb-1">Serra Gaúcha Turismo Receptivo e Traslados:</strong>
          Sua melhor opção para Transfer Porto Alegre Gramado, Traslado Aeroporto de Porto Alegre Salgado Filho, Passeios em Gramado e Canela, Agência de Turismo na Serra Gaúcha, Van Executiva Gramado, City Tour Lago Negro e Catedral de Pedra, e Tour Vale dos Vinhedos.
        </div>

      </div>

      {/* Lower Copyright Bar */}
      <div className="bg-[#081C17] border-t border-white/5 py-6 px-4 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Serra Gaúcha Turismo. Todos os direitos reservados. Fundada em 2018.
          </p>
          <p className="flex items-center gap-1">
            <span>Rua Adão Wilbert, 78 - Centro, Três Coroas - RS, 95660-000</span>
          </p>
        </div>

        {/* Agency Credit Line */}
        <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-500">
          <a
            href="https://wa.me/5554981164282?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DFCA95] transition-colors inline-flex items-center justify-center gap-1"
          >
            Site realizado por agência Bora Digital Strategy www.agenciabora.com.br
          </a>
        </div>
      </div>
    </footer>
  );
};
