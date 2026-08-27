import React, { useState } from 'react';
import { FAQ_LIST } from '../data/mockData';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#143D34] relative text-white">
      {/* Forest Radial Background */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, #0D2B24 100%)' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border border-white/20 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full font-semibold bg-white/5">
            <span>★</span> Tire Suas Dúvidas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Perguntas <span className="italic text-[#DFCA95]">Frequentes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light">
            Tudo o que você precisa saber sobre o transfer aeroporto, logística de malas e passeios em Gramado e Canela.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl bg-[#0D2B24]/90 border transition-all overflow-hidden ${
                  isOpen ? 'border-white/40 shadow-lg' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-white text-[#143D34]' : 'text-white bg-[#143D34]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed font-light border-t border-white/10 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help direct box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0D2B24] border border-white/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-left">
            <h4 className="font-serif text-lg font-bold text-white">
              Ainda tem alguma dúvida sobre o seu trajeto?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe local responde você em minutos no WhatsApp.
            </p>
          </div>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] transition-all flex items-center gap-2 shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar no WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
