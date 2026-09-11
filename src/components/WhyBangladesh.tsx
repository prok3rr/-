import React from 'react';
import {
  Layers,
  CheckCircle2,
  Wrench,
  PieChart,
  Sliders,
  Building,
  ShieldAlert,
} from 'lucide-react';
import { WHY_BANGLADESH } from '../data/recruitmentData';

export const WhyBangladesh: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'CheckCircle2': return CheckCircle2;
      case 'Wrench': return Wrench;
      case 'PieChart': return PieChart;
      case 'Sliders': return Sliders;
      case 'Building': return Building;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="why-bangladesh-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#107C41]/10 text-[#0D3B2E] text-xs font-bold mb-3">
            <span>حقائق ومؤشرات سوق العمل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] font-heading">
            لماذا استقدام العمالة من بنجلاديش؟
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            يعد السوق البنجلاديشي أحد أهم الروافد الحيوية للعمالة المهنية والماهرة في منطقة الخليج العربي، لما يتمتع به من كفاءات تدريبية وقدرة تشغيلية تلائم مختلف المشاريع.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_BANGLADESH.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="bg-[#F8FAF9] rounded-2xl p-6 sm:p-7 border border-emerald-950/10 hover:border-[#107C41]/40 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D3B2E] text-[#E5C158] flex items-center justify-center mb-5 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#0D3B2E] font-heading mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Realistic Trust Note Banner */}
        <div className="mt-12 bg-emerald-50/70 rounded-2xl p-5 sm:p-6 border border-emerald-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-right">
            <div className="w-10 h-10 rounded-full bg-[#107C41] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D3B2E]">
                معايير فحص واختيار واضحة وموثقة
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                تخضع جميع الكوادر لفحص طبي دقيق واختبار عملي للمهارات قبل إنهاء إجراءات الاستقدام لضمان ملاءمتها للعمل.
              </p>
            </div>
          </div>

          <span className="text-xs font-bold text-[#107C41] bg-white px-4 py-2 rounded-xl border border-emerald-200 shrink-0">
            ضمان الجدية والنظامية
          </span>
        </div>

      </div>
    </section>
  );
};
