import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './utils/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SectorsPage } from './pages/SectorsPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { ProfessionsPage } from './pages/ProfessionsPage';
import { ProfessionDetailPage } from './pages/ProfessionDetailPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Scroll to top on route change (unless hash exists)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [currentPath]);

  // Route matching logic
  const renderPage = () => {
    // Exact paths
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/services') {
      return <ServicesPage />;
    }
    if (currentPath === '/sectors') {
      return <SectorsPage />;
    }
    if (currentPath === '/professions') {
      return <ProfessionsPage />;
    }
    if (currentPath === '/companies') {
      return <CompaniesPage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/faq') {
      return <FaqPage />;
    }

    // Dynamic Sector Route: /sectors/:slug
    if (currentPath.startsWith('/sectors/')) {
      const slug = currentPath.replace('/sectors/', '').split('/')[0];
      if (slug) {
        return <SectorDetailPage slug={slug} />;
      }
    }

    // Dynamic Profession Route: /professions/:slug
    if (currentPath.startsWith('/professions/')) {
      const slug = currentPath.replace('/professions/', '').split('/')[0];
      if (slug) {
        return <ProfessionDetailPage slug={slug} />;
      }
    }

    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-gray-900 font-sans selection:bg-[#107C41] selection:text-white" dir="rtl">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Site Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
