import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ShieldCheck, ChevronRight, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Transfers & Passeios', href: '#servicos' },
    { name: 'Nossa Frota', href: '#frota' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top Banner with Authority & Contact */}
      <div className="bg-[#0D2B24] text-slate-300 text-xs py-2 border-b border-white/10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-[#DFCA95] font-medium text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFCA95]" />
              Agência Credenciada Cadastur • Desde 2018
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-[#DFCA95]" />
              {COMPANY_INFO.workingHours}
            </span>
            <span className="hidden lg:inline-block text-white/20">|</span>
            <span className="hidden lg:inline-block text-slate-300/80 text-[11px]">
              Gramado • Canela • POA • Nova Petrópolis
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-[11px]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              WhatsApp: {COMPANY_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#143D34]/95 backdrop-blur-md shadow-2xl border-b border-white/15 py-3.5'
            : 'bg-[#143D34] border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo matching exact uploaded logo */}
          <a href="#inicio" className="group">
            <BrandLogo variant="horizontal" size="md" theme="light" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] uppercase tracking-widest font-medium text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#DFCA95] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-cta-btn"
              onClick={() => onOpenBookingModal()}
              className="bg-white text-[#143D34] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F0F9F7] transition-all shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <span>Reservar Agora</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#143D34]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="nav-mobile-cta"
              onClick={() => onOpenBookingModal()}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#143D34] bg-white shadow-sm"
            >
              Reservar
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D2B24] border-b border-white/15 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 text-xs uppercase tracking-widest font-medium text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#DFCA95] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                id="mobile-menu-cta-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#143D34] bg-white hover:bg-[#F0F9F7] shadow-lg"
              >
                <span>Reservar Meu Transfer ou Passeio</span>
                <ChevronRight className="w-4 h-4 text-[#143D34]" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-700/60"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp Direto ({COMPANY_INFO.phoneFormatted})
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
