import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { CountdownTimer } from "./components/CountdownTimer";
import { QuickInfoBar } from "./components/QuickInfoBar";
import { EventsSchedule } from "./components/EventsSchedule";
import { RsvpSection } from "./components/RsvpSection";
import { DetailsSection } from "./components/DetailsSection";
import { GallerySection } from "./components/GallerySection";
import { FullGalleryPage } from "./components/FullGalleryPage";
import { RegistrySection } from "./components/RegistrySection";
import { ProgramsSection } from "./components/ProgramsSection";
import { GratitudeSection } from './components/GratitudeSection';
import { ThankYouModal } from "./components/ThankYouModal";
import { RsvpSubmission } from "./types";
import { COUPLE_INFO } from "./data/mockData";
import { Heart } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "gallery">("home");
  const [activeSection, setActiveSection] = useState("home");
  const [latestRsvp, setLatestRsvp] = useState<RsvpSubmission | null>(null);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleRsvpSuccess = (rsvp: RsvpSubmission) => {
    setLatestRsvp(rsvp);
    setShowThankYouModal(true);
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setTimeout(() => {
      document
        .getElementById("gallery")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  if (currentView === "gallery") {
    return <FullGalleryPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#2d2a26] font-sans antialiased flex flex-col selection:bg-[#e8d5cc] selection:text-[#2d2a26] relative overflow-x-hidden">
      {/* Ambient Soft Background Orbs matching Burgundy, Lavender & Cream */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-150 max-h-150 bg-[#9c7bb5] rounded-full blur-[140px] opacity-30 pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-175 max-h-175 bg-[#2e0710] rounded-full blur-[150px] opacity-25 pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-5%] w-[40vw] h-[40vw] max-w-125 max-h-125 bg-[#f5e6d3] rounded-full blur-[130px] opacity-40 pointer-events-none z-0" />

      {/* Navigation Header */}
      <div className="relative z-50">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* Main Content */}
      <main className="grow relative z-10">
        {/* Screen 01: Hero Banner */}
        <Hero
          onRsvpClick={() => {
            setActiveSection("rsvp");
            document
              .getElementById("rsvp")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          onExploreClick={() => {
            setActiveSection("story");
            document
              .getElementById("story")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Screen 01 & 02: Story, Tosin's & Kelvin's Perspectives & Timeline */}
        <OurStory
          onReadFullStory={() => {
            setActiveSection("story");
          }}
        />

        {/* Screen 01: Countdown Timer */}
        <CountdownTimer />

        {/* Screen 01: Quick Info Strip */}
        <QuickInfoBar />

        {/* Screen 03: Events & Schedule */}
        <EventsSchedule
          onGoToRegistry={() => {
            setActiveSection("registry");
            document
              .getElementById("registry")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Screen 04: RSVP Section */}
        <RsvpSection onRsvpSuccess={handleRsvpSuccess} />

        {/* Screen 05: Details Section */}
        <DetailsSection />

        {/* Screen 06: Gallery Section */}
        <GallerySection onViewMore={() => setCurrentView("gallery")} />

        {/* Screen 07: Registry Section */}
        <RegistrySection />

        {/* Screen 08: Programs Section */}
        <ProgramsSection />
        
        {/* Screen 09: Gratitude & Thank You Section */}
        <GratitudeSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#2d2a26] text-white/80 py-12 border-t border-white/10 text-center text-xs space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-serif text-2xl text-white tracking-widest font-normal mb-1">
            {COUPLE_INFO.names}
          </p>
          <p className="text-[11px] text-[#e8d2bd] uppercase tracking-[0.2em] mb-4 font-semibold">
            {COUPLE_INFO.date} • {COUPLE_INFO.city}
          </p>
          <div className="flex items-center justify-center gap-2 text-[#e8d2bd] mb-3">
            <Heart className="w-4 h-4 fill-current text-[#e8d2bd]" />
          </div>
          <p className="text-[11px] text-white/50">
            {COUPLE_INFO.hashtag} • Celebrating the Union of Tosin & Kelvin
          </p>
          <div className="pt-4 border-t border-white/10 mt-4">
            <p className="text-[11px] tracking-wider text-white/40 uppercase">
              COPYRIGHT Digital Cafe {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showThankYouModal && latestRsvp && (
        <ThankYouModal
          rsvp={latestRsvp}
          onClose={() => setShowThankYouModal(false)}
        />
      )}
    </div>
  );
}
