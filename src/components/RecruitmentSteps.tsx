import React from 'react';
import {
  FileCheck,
  Send,
  UserCheck,
  PlaneLanding,
  ArrowLeft,
} from 'lucide-react';
import { RECRUITMENT_STEPS } from '../data/recruitmentData';

export const RecruitmentSteps: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck': return FileCheck;
      case 'Send': return Send;
      case 'UserCheck': return UserCheck;
      case 'PlaneLanding': return PlaneLanding;
      default: return FileCheck;
    }
  };

  return (
    <section id="steps-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#107C41]/10 text-[#0D3B2E] text-xs font-bold mb-3">
            <span>إجراءات واضحة ومنظمة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] font-heading">
            خطوات استقدام العمالة من بنجلاديش
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            مسار ميسر ومحدد من البداية وحتى وصول الكوادر المهنية ومباشرتها للعمل في منشأتك أو مشروعك.
          </p>
        </div>

        {/* 4 Steps Visual Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {RECRUITMENT_STEPS.map((step, idx) => {
            const Icon = getIcon(step.icon);
            return (
              <div
                key={step.step}
                className="relative bg-[#F8FAF9] rounded-2xl p-6 border border-emerald-950/10 hover:border-[#107C41]/40 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0D3B2E] text-[#E5C158] flex items-center justify-center font-bold text-lg shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-emerald-900/20 font-heading">
                      0{step.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0D3B2E] font-heading mb-2.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#107C41]">
                  <span>المرحلة {step.step}</span>
                  {idx < RECRUITMENT_STEPS.length - 1 && (
                    <ArrowLeft className="w-4 h-4 hidden lg:block text-gray-300" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
