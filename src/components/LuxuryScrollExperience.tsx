import React, { useState, useEffect } from 'react';
import { ChevronUp, Compass, Sparkles } from 'lucide-react';

interface SectionInfo {
  id: string;
  name: string;
  shortName: string;
}

const SECTIONS: SectionInfo[] = [
  { id: 'inicio', name: 'Início', shortName: 'Início' },
  { id: 'cotacao', name: 'Simulador', shortName: 'Cotação' },
  { id: 'servicos', name: 'Transfers & Tours', shortName: 'Serviços' },
  { id: 'frota', name: 'Frota Premium', shortName: 'Frota' },
  { id: 'diferenciais', name: 'Diferenciais VIP', shortName: 'Diferenciais' },
  { id: 'destinos', name: 'Destinos da Serra', shortName: 'Destinos' },
  { id: 'depoimentos', name: 'Depoimentos', shortName: 'Avaliações' },
  { id: 'faq', name: 'Perguntas Frequentes', shortName: 'FAQ' },
  { id: 'contato', name: 'Atendimento & Reserva', shortName: 'Contato' },
];

export const LuxuryScrollExperience: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const [showScrollControls, setShowScrollControls] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;
          const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
          setShowScrollControls(currentScroll > 280);

          // Detect active section
          const scrollPosition = currentScroll + 200;
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const sectionEl = document.getElementById(SECTIONS[i].id);
            if (sectionEl) {
              const top = sectionEl.offsetTop;
              if (scrollPosition >= top) {
                setActiveSection(SECTIONS[i].id);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const activeSectionInfo = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* 1. Ultra-Luxury Glowing Top Progress Bar with Gold & Emerald Light */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-black/40 backdrop-blur-sm pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full relative transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #143D34 0%, #338B78 30%, #DFCA95 70%, #FFF7D6 100%)',
            boxShadow: '0 0 12px rgba(223, 202, 149, 0.8), 0 0 20px rgba(51, 139, 120, 0.5)',
          }}
        >
          {/* Traveling Glimmer Pulse on the leading edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#FFF,0_0_20px_#DFCA95] animate-pulse" />
        </div>
      </div>

      {/* 2. Floating Minimalist Luxury Navigator (Desktop / Tablet) */}
      <div
        className={`fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center transition-all duration-500 ease-out ${
          showScrollControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6 pointer-events-none'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative bg-[#091D18]/85 backdrop-blur-md border border-white/15 p-2 rounded-2xl shadow-2xl flex flex-col items-center gap-2.5">
          {/* Subtle VIP crest header */}
          <div className="p-1 text-[#DFCA95] opacity-80 hover:opacity-100 transition-opacity" title="Navegação Rápida">
            <Compass className="w-3.5 h-3.5" />
          </div>

          <div className="w-4 h-[1px] bg-white/10 my-0.5" />

          {/* Section Dots */}
          <div className="flex flex-col gap-2 relative">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  aria-label={`Ir para seção ${section.name}`}
                  className="group relative flex items-center justify-center p-1.5 focus:outline-none"
                >
                  {/* Dot indicator */}
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-2.5 h-2.5 bg-gradient-to-tr from-[#DFCA95] to-white shadow-[0_0_10px_#DFCA95] scale-125'
                        : 'w-1.5 h-1.5 bg-white/30 group-hover:bg-white/70 group-hover:scale-110'
                    }`}
                  />

                  {/* Tooltip on Hover */}
                  <span
                    className="absolute left-8 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide whitespace-nowrap bg-[#0D2B24] border border-white/20 text-white shadow-xl opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 pointer-events-none flex items-center gap-1.5"
                  >
                    {isActive && <Sparkles className="w-3 h-3 text-[#DFCA95]" />}
                    <span className={isActive ? 'text-[#DFCA95]' : 'text-slate-200'}>{section.name}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Percent Mini-Badge */}
          <div className="w-4 h-[1px] bg-white/10 my-0.5" />
          <span className="text-[9px] font-mono text-[#DFCA95] font-semibold">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>

      {/* 3. Luxury Scroll-To-Top Button with Circular Progress (Bottom-Left or alongside bottom items) */}
      <div
        className={`fixed bottom-5 left-5 z-40 transition-all duration-500 ease-out ${
          showScrollControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo da página"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#091D18]/90 hover:bg-[#0D2B24] border border-white/20 hover:border-[#DFCA95]/60 text-white shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-md active:scale-95 transition-all duration-300"
        >
          {/* SVG Circular Progress Ring */}
          <svg className="w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="stroke-white/10"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="stroke-[#DFCA95] transition-all duration-150"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                filter: 'drop-shadow(0 0 3px rgba(223, 202, 149, 0.6))',
              }}
            />
          </svg>

          {/* Icon in Center */}
          <ChevronUp className="w-5 h-5 text-white/90 group-hover:text-[#DFCA95] group-hover:-translate-y-0.5 transition-all duration-200 absolute" />

          {/* Tooltip */}
          <span className="absolute left-14 px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide whitespace-nowrap bg-[#0D2B24] border border-white/20 text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Topo da Página ({Math.round(scrollProgress)}%)
          </span>
        </button>
      </div>

      {/* 4. Active Section Dynamic Floating Indicator (Bottom Center Pill on mobile/desktop during scroll) */}
      <div
        className={`fixed top-20 right-4 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#091D18]/80 backdrop-blur-md border border-white/15 shadow-xl transition-all duration-500 ${
          showScrollControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#DFCA95] animate-ping" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-200">
          {activeSectionInfo.name}
        </span>
        <span className="text-[10px] font-mono text-[#DFCA95] font-bold border-l border-white/20 pl-2">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </>
  );
};
