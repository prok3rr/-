import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { CorporateSection } from '../components/CorporateSection';
import { RequestForm } from '../components/RequestForm';
import {
  Building2,
  ChevronLeft,
  CheckCircle2,
  Users2,
  FileCheck2,
  ShieldAlert,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl, getTelUrl } from '../data/recruitmentData';

export const CompaniesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title="استقدام عمالة للشركات والمؤسسات من بنجلاديش | حلول تعاقد وتوريد كفاءات"
        description="نوفر حلول استقدام متكاملة للشركات والمؤسسات من بنجلاديش: عمالة للمقاولات والمطاعم والمصانع واللوجستيات والصيانة. توريد أعداد وتسهيلات تعاقدية نظامية."
        canonicalPath="/companies"
      />

      {/* Header */}
      <div className="bg-[#0A2A20] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">للشركات والمؤسسات</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#144738] text-[#E5C158] text-xs font-bold mb-3 border border-[#1E604C]">
            <Users2 className="w-3.5 h-3.5" />
            <span>حلول قطاع الأعمال B2B</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">
            استقدام عمالة للشركات والمؤسسات
          </h1>

          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-3xl leading-relaxed">
            نوفر حلول استقدام مخصصة للمنشآت والشركات التي تحتاج إلى عمالة مهنية وفنية من بنجلاديش، وفق طبيعة النشاط والعدد والتخصص المطلوب، مع التزام تام باللوائح والأنظمة.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a
              id="companies-whatsapp-quote-btn"
              href={getWhatsappUrl('السلام عليكم، نحن شركة/مؤسسة ونرغب في طلب عرض أسعار لاستقدام عمالة من بنجلاديش')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>طلب عرض أسعار مخصص للشركات عبر واتساب</span>
            </a>

            <a
              id="companies-call-btn"
              href={getTelUrl()}
              className="px-6 py-3 rounded-xl bg-[#144F3F] text-emerald-100 border border-[#206E58] text-xs sm:text-sm font-semibold flex items-center gap-2"
              dir="ltr"
            >
              <PhoneCall className="w-4 h-4 text-[#E5C158]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Corporate Features Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 border border-emerald-950/10 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#107C41] flex items-center justify-center mb-5">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0D3B2E] font-heading mb-2">توريد أعداد وجماعات عمل</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              إمكانية استقدام طواقم كاملة للمشاريع الكبرى والمصانع وسلاسل المطاعم مع فحص مهني متزامن.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-emerald-950/10 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#107C41] flex items-center justify-center mb-5">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0D3B2E] font-heading mb-2">مقابلات فنية واختبارات</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              إمكانية تنظيم لجان فحص واختبارات عملية مباشرة أو عبر الفيديو للتحقق من المهارات قبل التعاقد.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-emerald-950/10 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#107C41] flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0D3B2E] font-heading mb-2">متابعة نظامية مستمرة</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              إنجاز الإجراءات عبر القنوات الرسمية المعتمدة ومتابعة دقيقة لكل مرحلة حتى وصول العمالة.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Sectors Section */}
      <CorporateSection />

      {/* Corporate Request Form */}
      <RequestForm />
    </div>
  );
};
