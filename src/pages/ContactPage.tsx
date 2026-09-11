import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { ContactSection } from '../components/ContactSection';
import { RequestForm } from '../components/RequestForm';
import { ChevronLeft, Phone, MessageCircle, Clock, MapPin, Mail } from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl, getTelUrl } from '../data/recruitmentData';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title="تواصل معنا | استقدام من بنجلاديش | هاتف وواتساب +966540400475"
        description="تواصل مع فريق استقدام من بنجلاديش عبر الواتساب أو الهاتف: +966540400475. استشارات مجانية وسرعة استجابة لطلبات العمالة المهنية والفنية."
        canonicalPath="/contact"
      />

      {/* Header */}
      <div className="bg-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">تواصل معنا</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-heading">
            تواصل معنا لاستقدام العمالة من بنجلاديش
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            فريق خدمة العملاء ومستشاري الاستقدام مستعدون للإجابة على كافة استفساراتكم وتقديم عروض الأسعار على مدار الساعة.
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#107C41] flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-1">الاتصال المباشر</h3>
            <a
              id="contact-page-phone-btn"
              href={getTelUrl()}
              className="text-base font-bold text-[#0D3B2E] hover:text-[#107C41] dir-ltr inline-block my-1"
              dir="ltr"
            >
              {CONTACT_INFO.phoneDisplay}
            </a>
            <p className="text-xs text-gray-500">متاح لجميع الشبكات</p>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#25D366] flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-1">محادثة واتساب</h3>
            <a
              id="contact-page-whatsapp-btn"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#25D366] hover:underline inline-block my-1"
            >
              فتح محادثة فورية
            </a>
            <p className="text-xs text-gray-500">رد سريع على مدار اليوم</p>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#107C41] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-1">أوقات العمل</h3>
            <p className="text-sm font-bold text-[#0D3B2E] my-1">
              {CONTACT_INFO.workHours}
            </p>
            <p className="text-xs text-gray-500">الواتساب يستقبل الرسائل 24/7</p>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#107C41] flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-1">نطاق الخدمة</h3>
            <p className="text-sm font-bold text-[#0D3B2E] my-1">
              {CONTACT_INFO.location}
            </p>
            <p className="text-xs text-gray-500">تغطية لكافة المناطق</p>
          </div>

        </div>
      </div>

      {/* Main Request Form */}
      <RequestForm />
    </div>
  );
};
