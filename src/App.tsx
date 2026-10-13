import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { BookingCalculator } from './components/BookingCalculator';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DestinationsSection } from './components/DestinationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickBookingModal } from './components/QuickBookingModal';
import { LuxuryScrollExperience } from './components/LuxuryScrollExperience';
import { ScrollReveal } from './components/ScrollReveal';
import { SectionTransition } from './components/SectionTransition';
import { ServicePage } from './components/ServicePage';
import { DETAILED_SERVICES } from './data/servicesData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [modalDetails, setModalDetails] = useState<any>(undefined);

  // Parse service slug if any
  const getServiceSlugFromPath = (path: string): string | null => {
    const clean = path.replace(/^\/+|\/+$/g, '').replace(/\.html$/, '');
    return DETAILED_SERVICES[clean] ? clean : null;
  };

  const activeServiceSlug = getServiceSlugFromPath(currentPath);

  // Listen to browser popstate (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Restore homepage meta tags if on homepage
  useEffect(() => {
    if (!activeServiceSlug) {
      document.title = 'Serra Gaúcha Turismo | Transfer Porto Alegre Gramado';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Transfer Aeroporto Porto Alegre para Gramado e Canela. Serviços privativos e regulares, passeios exclusivos e atendimento VIP na Serra Gaúcha.'
        );
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', 'Serra Gaúcha Turismo | Transfer Porto Alegre Gramado');
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Transfer Aeroporto Porto Alegre para Gramado e Canela. Serviços privativos e regulares, passeios exclusivos e atendimento VIP na Serra Gaúcha.'
        );
      }
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', 'https://serragauchaturismo.vercel.app/');
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://serragauchaturismo.vercel.app/');
      }
    }
  }, [activeServiceSlug]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (serviceName?: string, details?: any) => {
    setModalService(serviceName || 'Transfer Aeroporto POA ⇄ Gramado (Privativo)');
    setModalDetails(details);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // If visiting a dedicated service URL, render the dedicated SEO/AEO/SXO page
  if (activeServiceSlug) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] text-[#333333] font-sans overflow-x-hidden">
        <ServicePage
          slug={activeServiceSlug}
          onOpenBookingModal={handleOpenModal}
          onNavigateHome={() => navigateTo('/')}
          onNavigateService={(targetSlug) => navigateTo(`/${targetSlug}`)}
        />

        {/* Footer with deep internal links */}
        <Footer
          onNavigateHome={() => navigateTo('/')}
          onNavigateService={(targetSlug) => navigateTo(`/${targetSlug}`)}
        />

        {/* Floating Concierge WhatsApp */}
        <FloatingWhatsApp />

        {/* Quick Booking Modal */}
        <QuickBookingModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialService={modalService}
          initialDetails={modalDetails}
        />
      </div>
    );
  }

  // Home Page Experience
  return (
    <div className="min-h-screen bg-[#143D34] text-gray-100 font-sans selection:bg-[#DFCA95] selection:text-[#143D34] overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenBookingModal={handleOpenModal} />

      {/* Hero with Authority & Fast Transfer Quote */}
      <Hero onOpenBookingModal={handleOpenModal} />

      {/* Trust & Metric Proof Strip */}
      <ScrollReveal delay={0.1} distance={24} duration={0.8}>
        <TrustBadges />
      </ScrollReveal>

      {/* Transition: Hero -> Booking Calculator */}
      <SectionTransition
        fromColor="dark"
        toColor="emerald"
        icon="sparkles"
        label="Simulador Exclusivo"
      />

      {/* Interactive Booking Calculator & Custom Itinerary Builder */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <BookingCalculator onOpenBookingModal={handleOpenModal} />
      </ScrollReveal>

      {/* Transition: Calculator -> Services Showcase */}
      <SectionTransition
        fromColor="emerald"
        toColor="light"
        icon="compass"
        label="Transfers & Roteiros"
      />

      {/* Services Showcase (Transfers, City Tours, Wine Tours, Tickets) */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <ServicesSection
          onOpenBookingModal={handleOpenModal}
          onNavigateService={(slug) => navigateTo(`/${slug}`)}
        />
      </ScrollReveal>

      {/* Transition: Services -> Fleet Section */}
      <SectionTransition
        fromColor="light"
        toColor="dark"
        icon="award"
        label="Frota Premium"
      />

      {/* Luxury Fleet Presentation */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <FleetSection onOpenBookingModal={handleOpenModal} />
      </ScrollReveal>

      {/* Transition: Fleet -> Why Choose Us */}
      <SectionTransition
        fromColor="dark"
        toColor="light"
        icon="shield"
        label="Excelência & Tradição"
      />

      {/* Why Choose Us, Brand Story since 2018 & Objection Killers */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <WhyChooseUs onOpenBookingModal={() => handleOpenModal('Transfer Serra Gaúcha')} />
      </ScrollReveal>

      {/* Transition: Why Choose Us -> Destinations */}
      <SectionTransition
        fromColor="light"
        toColor="emerald"
        icon="compass"
        label="Destinos da Serra"
      />

      {/* Serra Gaúcha Scenic Highlights & Travel Tips */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <DestinationsSection onOpenBookingModal={handleOpenModal} />
      </ScrollReveal>

      {/* Transition: Destinations -> Testimonials */}
      <SectionTransition
        fromColor="emerald"
        toColor="light"
        icon="star"
        label="Avaliações 5 Estrelas"
      />

      {/* Verified Traveler Testimonials */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <TestimonialsSection />
      </ScrollReveal>

      {/* Transition: Testimonials -> FAQ */}
      <SectionTransition
        fromColor="light"
        toColor="dark"
        icon="sparkles"
        label="Dúvidas Frequentes"
      />

      {/* Strategic FAQ */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <FaqSection />
      </ScrollReveal>

      {/* Transition: FAQ -> Contact */}
      <SectionTransition
        fromColor="dark"
        toColor="dark"
        icon="sparkles"
        label="Atendimento Personalizado"
      />

      {/* Final Conversion Form & Complete Contact Info */}
      <ScrollReveal delay={0.1} distance={30} duration={0.85}>
        <ContactSection />
      </ScrollReveal>

      {/* Footer with deep internal links to all 6 service pages */}
      <Footer
        onNavigateHome={() => navigateTo('/')}
        onNavigateService={(slug) => navigateTo(`/${slug}`)}
      />

      {/* Interactive Luxury Scroll Progress, Floating Section Spy & Scroll-to-Top */}
      <LuxuryScrollExperience />

      {/* Floating Instant WhatsApp Concierge Button */}
      <FloatingWhatsApp />

      {/* Quick Booking Modal */}
      <QuickBookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialService={modalService}
        initialDetails={modalDetails}
      />
    </div>
  );
}
