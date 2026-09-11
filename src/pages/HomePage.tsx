import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ServicesSection } from '../components/ServicesSection';
import { InteractiveSectors } from '../components/InteractiveSectors';
import { TopProfessions } from '../components/TopProfessions';
import { WhyBangladesh } from '../components/WhyBangladesh';
import { CorporateSection } from '../components/CorporateSection';
import { RecruitmentSteps } from '../components/RecruitmentSteps';
import { RequestForm } from '../components/RequestForm';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="استقدام من بنجلاديش للعمالة المهنية والماهرة | السعودية والخليج"
        description="استقدام من بنجلاديش للعمالة المهنية والماهرة في مختلف المهن والقطاعات، من عمال المقاولات والمصانع إلى المطاعم والصيانة والنقل والخدمات. تواصل معنا."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <Hero />

      {/* Trust Bar below Hero */}
      <TrustBar />

      {/* Services Section */}
      <ServicesSection />

      {/* Interactive Sectors & Professions Filter */}
      <InteractiveSectors />

      {/* Top Demanded Professions */}
      <TopProfessions />

      {/* Why Bangladesh Section */}
      <WhyBangladesh />

      {/* Corporate & Business Recruitment */}
      <CorporateSection />

      {/* 4 Steps Recruitment Roadmap */}
      <RecruitmentSteps />

      {/* Direct Recruitment Request Form */}
      <RequestForm />

      {/* FAQ Section with JSON-LD Schema */}
      <FAQSection />

      {/* Contact Section with Phone and WhatsApp */}
      <ContactSection />
    </>
  );
};
