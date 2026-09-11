import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, ChevronLeft } from 'lucide-react';
import { Link } from '../utils/router';
import { CONTACT_INFO, getWhatsappUrl, getTelUrl, SECTORS, PROFESSIONS } from '../data/recruitmentData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#07241B] text-white border-t border-[#0D3B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#0F3B2E]">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0E3D30] border border-[#1B604B] flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#E54B4B]"></div>
              </div>
              <span className="text-xl font-bold font-heading text-white">
                استقدام من بنجلاديش
              </span>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              خدمات استقدام العمالة المهنية والماهرة من بنجلاديش لمختلف القطاعات والمهن.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-emerald-200">
              <a
                id="footer-phone-contact"
                href={getTelUrl()}
                className="flex items-center gap-2 hover:text-[#E5C158] transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#E5C158]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a
                id="footer-whatsapp-contact"
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>تواصل واتساب متاح طوال اليوم</span>
              </a>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E5C158]" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Main Links requested (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#E5C158] font-heading border-b border-[#124536] pb-2">
              روابط الموقع الرئيسية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              <li>
                <Link to="/" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>خدمات الاستقدام</span>
                </Link>
              </li>
              <li>
                <Link to="/sectors" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>القطاعات المهنية</span>
                </Link>
              </li>
              <li>
                <Link to="/professions" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>المهن</span>
                </Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>للشركات والمؤسسات</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>من نحن</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>تواصل معنا</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                  <span>الأسئلة الشائعة</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectors Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#E5C158] font-heading border-b border-[#124536] pb-2">
              القطاعات المهنية
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <Link
                    to={`/sectors/${sector.slug}`}
                    className="hover:text-[#E5C158] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{sector.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Key Professions Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#E5C158] font-heading border-b border-[#124536] pb-2">
              أشهر المهن
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90">
              {PROFESSIONS.slice(0, 6).map((prof) => (
                <li key={prof.id}>
                  <Link
                    to={`/professions/${prof.slug}`}
                    className="hover:text-[#E5C158] transition-colors truncate block"
                    title={prof.title}
                  >
                    {prof.title.replace('استقدام ', '')}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/professions" className="text-[#E5C158] font-bold block pt-1 hover:underline">
                  جميع المهن ({PROFESSIONS.length}) ←
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright as explicitly required */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <p className="text-center sm:text-right">
            جميع الحقوق محفوظة © استقدام من بنجلاديش
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>استقدام كوادر مهنية وفنية معتمدة</span>
            <span className="text-emerald-500">|</span>
            <span>المملكة العربية السعودية ودول الخليج</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
