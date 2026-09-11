import React from 'react';
import { ShieldCheck, Briefcase, Award, PhoneCall } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      id: 'trust-1',
      title: 'عمالة من بنجلاديش',
      subtitle: 'فحص طبي واختبار مهني دقيق',
      icon: ShieldCheck,
    },
    {
      id: 'trust-2',
      title: 'مهن متعددة',
      subtitle: 'تغطية لكافة التخصصات الفنية والمهنية',
      icon: Briefcase,
    },
    {
      id: 'trust-3',
      title: 'خدمة احترافية',
      subtitle: 'إجراءات نظامية وسرعة في الإنجاز',
      icon: Award,
    },
    {
      id: 'trust-4',
      title: 'تواصل مباشر',
      subtitle: 'متابعة عبر الواتساب والمكالمات',
      icon: PhoneCall,
    },
  ];

  return (
    <div id="trust-bar-section" className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-emerald-950/5 border border-emerald-100 p-4 sm:p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-emerald-100">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3.5 ${index > 0 ? 'pt-3 sm:pt-0 sm:pr-4' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D3B2E]/5 border border-[#0D3B2E]/10 flex items-center justify-center text-[#0D3B2E] shrink-0">
                  <Icon className="w-6 h-6 text-[#107C41]" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-[#0D3B2E] font-heading leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
