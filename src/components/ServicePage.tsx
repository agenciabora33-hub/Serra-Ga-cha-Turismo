import React, { useEffect, useState } from 'react';
import { DetailedServiceData, DETAILED_SERVICES } from '../data/servicesData';
import { COMPANY_INFO } from '../data/mockData';
import {
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  HelpCircle,
  Star,
  Car,
  Calendar,
  MessageSquare,
  ArrowLeft,
  ChevronDown,
  Sparkles,
  Phone,
  PlaneTakeoff,
  Award,
  ArrowRight,
  Send,
  Info
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface ServicePageProps {
  slug: string;
  onOpenBookingModal: (serviceTitle: string, details?: any) => void;
  onNavigateHome: () => void;
  onNavigateService: (targetSlug: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  slug,
  onOpenBookingModal,
  onNavigateHome,
  onNavigateService,
}) => {
  const service = DETAILED_SERVICES[slug] || DETAILED_SERVICES['transfer-aeroporto-porto-alegre-gramado'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Update dynamic head tags for client-side navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.title = service.seoTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', service.metaDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', service.seoTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', service.metaDescription);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://serragauchaturismo.vercel.app/${service.slug}`);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://serragauchaturismo.vercel.app/${service.slug}`);
    }
  }, [service]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Estava visualizando a página de ${service.title} no site da Serra Gaúcha Turismo e gostaria de solicitar um orçamento exclusivo.`
  );
  const whatsappUrl = `${COMPANY_INFO.whatsappUrl}?text=${whatsappMessage}`;

  // Structured Data (JSON-LD) for SEO & AEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Início',
            'item': 'https://serragauchaturismo.vercel.app/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Serviços',
            'item': 'https://serragauchaturismo.vercel.app/#servicos',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': service.title,
            'item': `https://serragauchaturismo.vercel.app/${service.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `https://serragauchaturismo.vercel.app/${service.slug}#service`,
        'name': service.title,
        'description': service.metaDescription,
        'serviceType': service.category,
        'provider': {
          '@type': 'TravelAgency',
          'name': COMPANY_INFO.name,
          'telephone': COMPANY_INFO.phoneFormatted,
          'url': 'https://serragauchaturismo.vercel.app/',
          'priceRange': '$$',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Rua Adão Wilbert, 78',
            'addressLocality': 'Três Coroas',
            'addressRegion': 'RS',
            'postalCode': '95660-000',
            'addressCountry': 'BR',
          },
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Gramado' },
          { '@type': 'City', 'name': 'Canela' },
          { '@type': 'City', 'name': 'Porto Alegre' },
          { '@type': 'City', 'name': 'Bento Gonçalves' },
        ],
        'offers': {
          '@type': 'Offer',
          'availability': 'https://schema.org/InStock',
          'priceCurrency': 'BRL',
          'url': `https://serragauchaturismo.vercel.app/${service.slug}`,
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': service.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#333333] font-sans">
      {/* Schema.org Injected for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#0D2B24] border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1.5 px-2.5 rounded-lg hover:bg-white/5"
              aria-label="Voltar para a página inicial"
            >
              <ArrowLeft className="w-4 h-4 text-[#DFCA95]" />
              <span className="hidden sm:inline">Voltar ao Início</span>
              <span className="sm:hidden">Início</span>
            </button>
            <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
            <div className="cursor-pointer" onClick={onNavigateHome}>
              <BrandLogo variant="horizontal" size="sm" theme="light" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Plantão WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenBookingModal(service.title)}
              className="bg-[#DFCA95] text-[#0D2B24] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#ebd9ad] transition-all shadow-md active:scale-95"
            >
              Solicitar Cotação
            </button>
          </div>
        </div>

        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="bg-[#143D34] px-4 sm:px-6 lg:px-8 py-2 border-t border-white/5 text-[11px] text-slate-300">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <button onClick={onNavigateHome} className="hover:text-white underline-offset-2 hover:underline">
              Início
            </button>
            <span className="text-white/40">/</span>
            <button onClick={onNavigateHome} className="hover:text-white underline-offset-2 hover:underline">
              Serviços
            </button>
            <span className="text-white/40">/</span>
            <span className="text-[#DFCA95] font-medium truncate">{service.title}</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#143D34] text-white pt-10 pb-16 sm:pb-24 overflow-hidden">
        {/* Background Subtle Gradient & Glow */}
        <div className="absolute inset-0 bg-radial from-[#1e584b] to-[#0d2b24] opacity-80 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFCA95]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headlines & High-Value Pitch */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#DFCA95]/40 text-[#DFCA95] text-[11px] uppercase tracking-[0.2em] rounded-full font-semibold bg-[#DFCA95]/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.badge}</span>
              </div>

              {/* Exact H1 for High SEO/AEO ranking */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-slate-200 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#DFCA95]" />
                  <span>{service.route}</span>
                </div>
                {service.duration && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-slate-200 border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#DFCA95]" />
                    <span>{service.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs text-slate-200 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Frota Segurada & Cadastur</span>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenBookingModal(service.title)}
                  className="bg-[#DFCA95] text-[#0D2B24] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#ebd9ad] transition-all shadow-lg active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Simular & Reservar Online</span>
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Orçamento Imediato no WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-300/80 flex items-center gap-1.5 pt-1">
                <Info className="w-3.5 h-3.5 text-[#DFCA95]" />
                <span>{service.priceNote}</span>
              </p>
            </div>

            {/* Right Column: Hero Visual Card with Trust Badges */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-2">
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                  <img
                    src={service.ogImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Floating Pill on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-xs text-white">
                    <p className="font-semibold flex items-center gap-1 text-[#DFCA95]">
                      <Award className="w-4 h-4" />
                      <span>Excelência Comprovada</span>
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5 font-light">
                      Atendimento pontual com motoristas credenciados especialistas nas estradas da Serra Gaúcha.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AEO: DIRECT ANSWER BOX (Answer Engine Optimization) */}
      <section className="relative -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#143D34]/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#143D34] text-[#DFCA95] flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#143D34] bg-[#143D34]/10 px-2 py-0.5 rounded">
                  Resposta Direta • AEO & Resumo Essencial
                </span>
                <span className="text-slate-400 text-xs hidden sm:inline">• Tudo o que você precisa saber</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-serif text-[#143D34]">
                Como funciona o {service.title}?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {service.directAnswerAeo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xs uppercase font-bold tracking-widest text-[#143D34] text-center mb-6">
          Informações Rápidas e Fatos Oficiais do Serviço
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {service.quickFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#143D34]/30 transition-all flex flex-col justify-between"
            >
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                {fact.label}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#143D34] leading-snug">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works: Step-by-Step Guide (HowTo schema match) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#143D34] bg-[#143D34]/5 px-3 py-1 rounded-full border border-[#143D34]/15">
              Passo a Passo
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143D34] mt-2">
              Como Funciona a Contratação e Execução
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
              Processo simplificado, sem burocracia e com suporte do início ao fim da sua viagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howItWorks.map((step) => (
              <div
                key={step.step}
                className="relative bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200 hover:border-[#143D34]/40 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#143D34] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#143D34] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions vs Exclusions */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Included */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-emerald-100">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <h3 className="font-serif text-lg font-bold text-slate-900">
                O que está incluso no serviço:
              </h3>
            </div>
            <ul className="space-y-3">
              {service.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <XCircle className="w-5 h-5 text-slate-400" />
              <h3 className="font-serif text-lg font-bold text-slate-900">
                O que não está incluso:
              </h3>
            </div>
            <ul className="space-y-3">
              {service.notIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <p className="font-medium text-[#143D34]">Transparência Total:</p>
              <p className="mt-1 font-light">
                Não há taxas ocultas ou surpresas com pedágios. Todos os custos combinados são honrados integralmente.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Fleet Options Dedicated to this Service */}
      {service.vehicleTypes && service.vehicleTypes.length > 0 && (
        <section className="py-12 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#143D34] bg-[#143D34]/5 px-3 py-1 rounded-full border border-[#143D34]/15">
                Frota Homologada
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143D34] mt-2">
                Veículos Disponíveis para este Serviço
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
                Carros revisados, higienizados e equipados com ar-condicionado digital e seguro passageiro APP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.vehicleTypes.map((veh, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F9FA] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#143D34]/40 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src={veh.image}
                        alt={veh.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white">
                        {veh.capacity}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-serif text-base font-bold text-[#143D34] mb-1">
                        {veh.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 font-medium">
                        Bagagem: {veh.luggage}
                      </p>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        {veh.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onOpenBookingModal(service.title, { vehicle: veh.name })}
                      className="w-full bg-[#143D34] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#0D2B24] transition-colors"
                    >
                      Escolher Este Veículo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      {service.comparisonTable && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143D34]">
              {service.comparisonTable.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light">
              Entenda por que a antecedência e o padrão executivo fazem toda a diferença na sua viagem.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#143D34] text-white">
                  {service.comparisonTable.headers.map((header, idx) => (
                    <th key={idx} className="p-3.5 sm:p-4 font-serif font-bold text-xs uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {service.comparisonTable.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="p-3.5 sm:p-4 font-bold text-emerald-700 bg-emerald-50/50">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.ourService}</span>
                      </div>
                    </td>
                    <td className="p-3.5 sm:p-4 text-slate-500">
                      {row.competitor}
                    </td>
                    <td className="p-3.5 sm:p-4 text-slate-500">
                      {row.appTaxi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Strategic FAQ Section (FAQPage Schema Synced) */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#143D34] bg-[#143D34]/5 px-3 py-1 rounded-full border border-[#143D34]/15">
              Dúvidas Frequentes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143D34] mt-2">
              Perguntas e Respostas sobre {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light">
              Tire todas as suas dúvidas antes de fechar a sua viagem para a Serra Gaúcha.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-[#F8F9FA] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-[#143D34] hover:text-[#0D2B24]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#143D34]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              Tem alguma dúvida específica não listada aqui?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Converse agora no WhatsApp com nossa central</span>
            </a>
          </div>
        </div>
      </section>

      {/* Verified Testimonials */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#143D34] bg-[#143D34]/5 px-3 py-1 rounded-full border border-[#143D34]/15">
              Depoimentos Verificados
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#143D34] mt-2">
              Quem Usou este Serviço Recomenda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#DFCA95] mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic font-light leading-relaxed">
                    "{test.comment}"
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{test.name}</h4>
                    <p className="text-[11px] text-slate-500">{test.origin} • {test.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practical Travel Tips for SXO */}
      {service.travelTips && (
        <section className="py-10 bg-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#143D34] text-[#DFCA95] flex items-center justify-center shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#143D34]">
                  Dicas dos Especialistas Locais da Serra Gaúcha
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {service.travelTips.map((tip, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-[#143D34] font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Internal Linking: Related Services (Boosts Crawlability & SEO Equity) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#143D34] mb-6 text-center">
          Complete seu Roteiro com Outros Serviços Populares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.relatedServices.map((relSlug) => {
            const rel = DETAILED_SERVICES[relSlug];
            if (!rel) return null;
            return (
              <div
                key={rel.slug}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:border-[#143D34]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 overflow-hidden">
                    <img
                      src={rel.ogImage}
                      alt={rel.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#143D34] bg-[#143D34]/10 px-2 py-0.5 rounded">
                      {rel.badge}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-[#143D34] mt-2 line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-light">
                      {rel.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => onNavigateService(rel.slug)}
                    className="w-full text-center text-xs font-bold text-[#143D34] hover:text-[#0D2B24] border border-[#143D34]/20 py-2 rounded-lg hover:bg-[#143D34]/5 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Ver Página do Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="bg-[#143D34] text-white py-14 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 text-[#DFCA95] text-[10px] uppercase tracking-[0.2em] rounded-full">
            <span>★</span> Atendimento Imediato das 07h às 22h
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
            Garanta seu {service.title.split('(')[0]} com Desconto Exclusivo
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
            Não arrisque suas férias com transportes instáveis. Fale agora com nossa equipe ou simule online para receber o voucher oficial com garantia de pontualidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBookingModal(service.title)}
              className="w-full sm:w-auto bg-[#DFCA95] text-[#0D2B24] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#ebd9ad] transition-all shadow-xl active:scale-95"
            >
              Simular Cotação Agora
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#0D2B24] border-t border-white/15 p-3 flex items-center gap-2 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => onOpenBookingModal(service.title)}
          className="flex-1 bg-[#DFCA95] text-[#0D2B24] py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-center"
        >
          Simular Valor
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
