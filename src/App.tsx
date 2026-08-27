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
    <div className="min-h-screen bg-[#143D34] text-gray-100 font-sans selection:bg-[#DFCA95] selection:text-[#143D34]">
      {/* Navigation */}
      <Navbar onOpenBookingModal={handleOpenModal} />

      {/* Hero with Authority & Fast Transfer Quote */}
      <Hero onOpenBookingModal={handleOpenModal} />

      {/* Trust & Metric Proof Strip */}
      <TrustBadges />

      {/* Interactive Booking Calculator & Custom Itinerary Builder */}
      <BookingCalculator onOpenBookingModal={handleOpenModal} />

      {/* Services Showcase (Transfers, City Tours, Wine Tours, Tickets) */}
      <ServicesSection onOpenBookingModal={handleOpenModal} />

      {/* Luxury Fleet Presentation */}
      <FleetSection onOpenBookingModal={handleOpenModal} />

      {/* Why Choose Us, Brand Story since 2018 & Objection Killers */}
      <WhyChooseUs onOpenBookingModal={() => handleOpenModal('Transfer Serra Gaúcha')} />

      {/* Serra Gaúcha Scenic Highlights & Travel Tips */}
      <DestinationsSection onOpenBookingModal={handleOpenModal} />

      {/* Verified Traveler Testimonials */}
      <TestimonialsSection />

      {/* Strategic FAQ */}
      <FaqSection />

      {/* Final Conversion Form & Complete Contact Info */}
      <ContactSection />

      {/* Footer */}
      <Footer />

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
