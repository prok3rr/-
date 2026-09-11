import React, { useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { PROFESSIONS, SECTORS, getWhatsappUrl } from '../data/recruitmentData';
import { RequestForm } from '../components/RequestForm';
import {
  Briefcase,
  Search,
  ChevronLeft,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

export const ProfessionsPage: React.FC = () => {
  const [activeSectorFilter, setActiveSectorFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProfessions = PROFESSIONS.filter((p) => {
    const matchesSector = activeSectorFilter === 'all' || p.sectorId === activeSectorFilter;
    const matchesSearch =
      searchTerm.trim() === '' ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title="دليل المهن المطلوبة من بنجلاديش | كهربائي، فني تكييف، طباخ، سائق، حداد"
        description="دليل شامل لأشهر المهن المطلوبة من بنجلاديش: استقدام كهربائي، فني تكييف، ميكانيكي، حداد، نجار، سائق، شيف، باريستا، عمال مطاعم ومصانع. كوادر مهنية معتمدة."
        canonicalPath="/professions"
      />

      {/* Header */}
      <div className="bg-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">المهن المطلوبة</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-heading">
            أشهر المهن المطلوبة من بنجلاديش
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            دليل شامل لكافة التخصصات والكوادر المهنية والحرفية الأكثر طلباً من أصحاب الأعمال والشركات والمؤسسات.
          </p>

          {/* Search bar in header */}
          <div className="mt-6 max-w-md relative">
            <Search className="w-5 h-5 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث باسم المهنة أو التخصص..."
              className="w-full pl-4 pr-11 py-3 rounded-xl bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#E5C158] placeholder:text-gray-400 shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Sector filter tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-gray-200">
          <button
            type="button"
            onClick={() => setActiveSectorFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSectorFilter === 'all'
                ? 'bg-[#0D3B2E] text-[#E5C158] shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            جميع المهن ({PROFESSIONS.length})
          </button>
          {SECTORS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => setActiveSectorFilter(sec.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSectorFilter === sec.id
                  ? 'bg-[#0D3B2E] text-[#E5C158] shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {sec.title}
            </button>
          ))}
        </div>
      </div>

      {/* Professions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProfessions.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center text-gray-500 border border-gray-200">
            لا توجد مهن مطابقة لبحثك. يرجى محاولة كلمة بحث مختلفة.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessions.map((prof) => (
              <div
                key={prof.id}
                className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#107C41]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E]">
                      {prof.sectorName}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {prof.experienceLevel}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#0D3B2E] font-heading mb-2 group-hover:text-[#107C41] transition-colors">
                    {prof.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {prof.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-6 pt-3 border-t border-gray-100">
                    {prof.tasks.slice(0, 3).map((task, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#107C41] mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <a
                    href={getWhatsappUrl(`السلام عليكم ورحمة الله، أرغب في استقدام: ${prof.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white text-xs font-bold transition-all text-center"
                  >
                    طلب استقدام واتساب
                  </a>

                  <Link
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
        )}
      </div>

      {/* Request Form */}
      <RequestForm />
    </div>
  );
};
