import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { ServicesSection } from '../components/ServicesSection';
import { RequestForm } from '../components/RequestForm';
import { Link } from '../utils/router';
import { ShieldCheck, PhoneCall, ChevronLeft } from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl, getTelUrl } from '../data/recruitmentData';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title="خدمات استقدام العمالة من بنجلاديش | كوادر مهنية وفنية لكافة القطاعات"
        description="تصفح جميع خدمات استقدام العمالة من بنجلاديش: عمالة مهنية، فنية، مقاولات، مطاعم، مصانع، سائقين، صيانة ونظافة. طلب فوري وتأشيرات نظامية."
        canonicalPath="/services"
      />

      {/* Page Header Banner */}
      <div className="bg-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">خدمات الاستقدام</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-heading">
            خدمات استقدام العمالة من بنجلاديش
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            نوفر حلول استقدام متكاملة تلبي معايير العمل في السعودية والخليج، وتغطي مختلف التخصصات المهنية والفنية للأفراد والشركات.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              id="services-header-whatsapp-btn"
              href={getWhatsappUrl('السلام عليكم، أرغب في الاستفسار عن باقات وخدمات استقدام عمالة من بنجلاديش')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow hover:bg-[#1EBE5D] transition-colors"
            >
              استفسار مباشر عبر واتساب
            </a>
            <a
              id="services-header-call-btn"
              href={getTelUrl()}
              className="px-5 py-2.5 rounded-xl bg-[#144F3F] text-emerald-100 border border-[#206E58] text-xs sm:text-sm font-semibold hover:bg-[#1A5F4C] transition-colors"
              dir="ltr"
            >
              <PhoneCall className="w-3.5 h-3.5 inline ml-1.5 text-[#E5C158]" />
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Services List */}
      <ServicesSection />

      {/* Request Form */}
      <RequestForm />
    </div>
  );
};
