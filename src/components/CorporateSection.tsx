import React from 'react';
import {
  Building2,
  Coffee,
  Factory,
  Hotel,
  Wrench,
  Sparkles,
  Truck,
  Trees,
  Store,
  ArrowLeft,
  Users2,
  FileSpreadsheet,
  CheckCircle,
} from 'lucide-react';
import { CORPORATE_SECTORS } from '../data/recruitmentData';

interface CorporateSectionProps {
  onCorporateOrderClick?: () => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onCorporateOrderClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Coffee': return Coffee;
      case 'Factory': return Factory;
      case 'Hotel': return Hotel;
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      case 'Truck': return Truck;
      case 'Trees': return Trees;
      case 'Store': return Store;
      default: return Building2;
    }
  };

  const handleCorporateClick = () => {
    if (onCorporateOrderClick) {
      onCorporateOrderClick();
      return;
    }
    const formElement = document.getElementById('request-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const clientTypeSelect = document.getElementById('form-client-type-select') as HTMLSelectElement | null;
      if (clientTypeSelect) clientTypeSelect.value = 'شركة';
    }
  };

  return (
    <section id="corporate-section" className="py-16 sm:py-20 bg-[#0A2A20] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#107C41]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E5C158]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#144738] text-[#E5C158] text-xs font-bold mb-3 border border-[#1E604C]">
            <Users2 className="w-3.5 h-3.5" />
            <span>حلول قطاع الأعمال B2B</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading leading-tight">
            استقدام عمالة للشركات والمؤسسات
          </h2>

          <p className="mt-4 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            نوفر حلول استقدام للمنشآت والشركات التي تحتاج إلى عمالة مهنية وفنية من بنجلاديش، وفق طبيعة النشاط والعدد والتخصص المطلوب.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#E5C158]" />
              توريد كفاءات بأعداد فردية وجماعية
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#E5C158]" />
              عقود رسمية ومطابقة كود العمل
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#E5C158]" />
              إمكانية المقابلات الشخصية والاختبارات الفنية
            </span>
          </div>
        </div>

        {/* 9 Corporate Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {CORPORATE_SECTORS.map((sector, index) => {
            const Icon = getIcon(sector.icon);
            return (
              <div
                key={index}
                className="bg-[#0F3B2E]/70 rounded-2xl p-5 border border-[#175240] hover:border-[#E5C158]/40 hover:bg-[#134537] transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#092B21] text-[#E5C158] flex items-center justify-center border border-[#1D604C]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {sector.title}
                  </h3>
                </div>
                <p className="text-xs text-emerald-100/80 leading-relaxed pr-1">
                  {sector.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Corporate Order CTA Banner with Action Button */}
        <div className="rounded-2xl bg-gradient-to-r from-[#124B3B] via-[#0E3E31] to-[#0A2E24] p-6 sm:p-8 border border-[#1F6753] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-right">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              هل تمثل شركة أو مؤسسة وتبحث عن عرض أسعار مخصص؟
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200">
              فريقنا جاهز لدراسة احتياج منشأتك وتقديم عرض استقدام شامل للعدد والمهن المحددة.
            </p>
          </div>

          <button
            id="corporate-order-cta-btn"
            type="button"
            onClick={handleCorporateClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#E5C158] hover:bg-[#D6B046] text-[#0A2A20] text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
          >
            <span>اطلب عمالة لشركتك</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
