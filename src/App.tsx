import React, { useState } from 'react';
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

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);
  const [modalDetails, setModalDetails] = useState<any>(undefined);

  const handleOpenModal = (serviceName?: string, details?: any) => {
    setModalService(serviceName || 'Transfer Aeroporto POA ⇄ Gramado (Privativo)');
    setModalDetails(details);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <ServicesSection onOpenBookingModal={handleOpenModal} />
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

      {/* Footer */}
      <Footer />

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

