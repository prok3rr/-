import React from 'react';
import { Briefcase, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROFESSIONS, getWhatsappUrl } from '../data/recruitmentData';
import { Link } from '../utils/router';
import { Profession } from '../types';

interface TopProfessionsProps {
  onSelectProfession?: (profTitle: string) => void;
  limit?: number;
}

export const TopProfessions: React.FC<TopProfessionsProps> = ({ onSelectProfession, limit }) => {
  const displayedProfessions = limit ? PROFESSIONS.slice(0, limit) : PROFESSIONS;

  const handleOrder = (p: Profession) => {
    if (onSelectProfession) {
      onSelectProfession(p.title);
      return;
    }
    const formElement = document.getElementById('request-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const input = document.getElementById('form-profession-input') as HTMLInputElement | null;
      if (input) input.value = p.title;
    } else {
      window.open(getWhatsappUrl(`السلام عليكم ورحمة الله، أرغب في استقدام: ${p.title}`), '_blank');
    }
  };

  return (
    <section id="professions-section" className="py-16 sm:py-20 bg-[#F1F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E] text-xs font-bold mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#107C41]" />
              <span>المهن الأكثر طلباً</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] font-heading">
              أشهر المهن المطلوبة من بنجلاديش
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              نوفر الكوادر المهنية والحرفية الأكثر طلباً في السوق السعودي وأسواق الخليج بكفاءة عالية واختبارات فنية معتمدة.
            </p>
          </div>

          <Link
            to="/professions"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D3B2E] hover:text-[#107C41] self-start sm:self-auto bg-white px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#107C41] shadow-2xs transition-all"
          >
            <span>عرض دليل المهن بالكامل ({PROFESSIONS.length})</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* 15 Professions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProfessions.map((prof) => (
            <div
              key={prof.id}
              id={`profession-card-${prof.id}`}
              className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#107C41]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Sector Tag */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E]">
                    {prof.sectorName}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {prof.experienceLevel}
                  </span>
                </div>

                {/* Profession Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0D3B2E] font-heading mb-2 group-hover:text-[#107C41] transition-colors">
                  {prof.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {prof.shortDesc}
                </p>

                {/* Key tasks preview */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-gray-100">
                  {prof.tasks.slice(0, 2).map((task, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#107C41] mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Order now + Read full details page */}
              <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                <button
                  id={`order-prof-btn-${prof.id}`}
                  type="button"
                  onClick={() => handleOrder(prof)}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white text-xs font-bold transition-all text-center"
                >
                  اطلب استقدام
                </button>

                <Link
                  id={`view-prof-btn-${prof.id}`}
                  to={`/professions/${prof.slug}`}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-[#0D3B2E] border border-gray-200 transition-colors flex items-center justify-center"
                  title="صفحة المهنة التفصيلية"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
