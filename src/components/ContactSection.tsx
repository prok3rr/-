import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl, getTelUrl } from '../data/recruitmentData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#0B3327] via-[#0D3B2E] to-[#07251C] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle Bangladesh artistic background touches */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#E54B4B]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#1A775C]/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#134D3D] text-[#E5C158] border border-[#1F6753] text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
              <span>استشارات استقدام فورية ومجانية</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading leading-tight">
              تواصل معنا لاستقدام العمالة من بنجلاديش
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              سواء كنت تبحث عن كوادر مهنية لمنشأتك أو عمالة فنية متخصصة لمشروعك، يسعدنا تواصلكم وتوفير الكفاءات المناسبة في أسرع وقت.
            </p>

            {/* Prominently displayed phone number as requested */}
            <div className="py-4">
              <span className="text-xs text-emerald-300 block mb-1 font-medium">رقم التواصل المباشر وخدمة العملاء:</span>
              <a
                id="contact-large-phone-display"
                href={getTelUrl()}
                className="inline-block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5C158] font-heading tracking-wider hover:opacity-90 transition-opacity"
                dir="ltr"
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>

            {/* Explicitly requested action buttons: واتساب (opens in new window) + اتصال */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                id="contact-section-whatsapp-btn"
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>تواصل عبر واتساب</span>
              </a>

              <a
                id="contact-section-call-btn"
                href={getTelUrl()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#144F3F] hover:bg-[#1A5F4D] text-white border border-[#23705C] font-bold text-base shadow-md transition-all duration-200 flex items-center justify-center gap-3 active:scale-95"
                dir="ltr"
              >
                <Phone className="w-5 h-5 text-[#E5C158]" />
                <span>اتصال هاتفي مباشر</span>
              </a>
            </div>

            {/* Operating info */}
            <div className="pt-6 border-t border-[#144738] flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#E5C158]" />
                {CONTACT_INFO.workHours}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E5C158]" />
                {CONTACT_INFO.location}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
