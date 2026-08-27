import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="mb-2 relative bg-[#0D2B24] border border-white/20 rounded-xl p-3 shadow-2xl max-w-xs text-xs text-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white p-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Online Agora • Resposta Imediata</span>
          </div>
          
          <p className="text-[11px] text-slate-300 pr-3 font-light">
            Olá! Precisa de transfer ou passeios em Gramado? Solicite seu orçamento no WhatsApp.
          </p>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#DFCA95] hover:underline"
          >
            <span>Iniciar Atendimento</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-trigger"
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp da Serra Gaúcha Turismo"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-300/30"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white text-[9px] font-bold text-white items-center justify-center">
            1
          </span>
        </span>
        <MessageSquare className="w-7 h-7 text-white fill-white" />
      </a>
      
    </div>
  );
};
