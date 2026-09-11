import React, { useState } from 'react';
import {
  Building2,
  Zap,
  Factory,
  UtensilsCrossed,
  Hotel,
  Truck,
  Wrench,
  Trees,
  Search,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { SECTORS, getWhatsappUrl } from '../data/recruitmentData';
import { Link } from '../utils/router';

interface InteractiveSectorsProps {
  onSelectProfession?: (professionName: string) => void;
}

export const InteractiveSectors: React.FC<InteractiveSectorsProps> = ({ onSelectProfession }) => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('construction');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Zap': return Zap;
      case 'Factory': return Factory;
      case 'UtensilsCrossed': return UtensilsCrossed;
      case 'Hotel': return Hotel;
      case 'Truck': return Truck;
      case 'Wrench': return Wrench;
      case 'Trees': return Trees;
      default: return Building2;
    }
  };

  const selectedSector = SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];

  // Filtering professions based on search or active sector
  const currentProfessions = selectedSector.professions.filter((p) =>
    searchQuery.trim() === '' ? true : p.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOrderProfession = (prof: string) => {
    if (onSelectProfession) {
      onSelectProfession(prof);
      return;
    }
    const formElement = document.getElementById('request-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const input = document.getElementById('form-profession-input') as HTMLInputElement | null;
      if (input) input.value = `${prof} (قطاع ${selectedSector.title})`;
    } else {
      window.open(getWhatsappUrl(`السلام عليكم ورحمة الله، أرغب في استقدام: ${prof} من بنجلاديش`), '_blank');
    }
  };

  return (
    <section id="sectors-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#107C41]/10 text-[#0D3B2E] text-xs font-bold mb-3">
            <span>تصفية ذكية حسب التخصص</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] font-heading">
            قطاعات العمالة المهنية
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            اختر القطاع المطلوب لتصفح المهن المتخصصة والكوادر المتوفرة، أو استخدم البحث المباشر للوصول السريع إلى المهنة المطلوبة.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="professions-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مهنة (كهربائي، طباخ، نجار، سائق، لحام...)"
                className="w-full pl-4 pr-11 py-3 rounded-xl border border-gray-200 focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none text-sm bg-[#F8FAF9] placeholder:text-gray-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  مسح
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Sector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {SECTORS.map((sector) => {
            const Icon = getSectorIcon(sector.iconName);
            const isSelected = sector.id === selectedSectorId;
            return (
              <button
                key={sector.id}
                id={`sector-tab-btn-${sector.id}`}
                type="button"
                onClick={() => {
                  setSelectedSectorId(sector.id);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#0D3B2E] text-[#E5C158] shadow-md shadow-[#0D3B2E]/20 scale-105'
                    : 'bg-[#F1F5F3] text-gray-700 hover:bg-[#E5EFEA] hover:text-[#0D3B2E]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E5C158]' : 'text-[#107C41]'}`} />
                <span>{sector.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Showcase Container */}
        <div className="bg-[#F8FAF9] rounded-3xl border border-emerald-950/10 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Main info: Sector Description & Professions List */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
                <div>
                  <span className="text-xs font-semibold text-[#107C41]">
                    القطاع المحدد حالياً
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D3B2E] font-heading">
                    {selectedSector.title}
                  </h3>
                </div>

                <Link
                  to={`/sectors/${selectedSector.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#107C41] hover:text-[#0D3B2E] bg-white px-3.5 py-2 rounded-lg border border-gray-200 hover:border-[#107C41] shadow-2xs transition-colors self-start sm:self-auto"
                >
                  <span>صفحة القطاع الكاملة والتفاصيل</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {selectedSector.description}
              </p>

              {/* Professions Display Grid strictly fulfilling prompt condition */}
              <div>
                <h4 className="text-sm font-bold text-[#0D3B2E] mb-3 flex items-center gap-2">
                  <span>المهن المتاحة للاستقدام في هذا القطاع ({currentProfessions.length}):</span>
                </h4>

                {currentProfessions.length === 0 ? (
                  <div className="p-6 bg-white rounded-xl text-center text-sm text-gray-500">
                    لا توجد مهن مطابقة لبحثك في هذا القطاع. جرب كلمة أخرى أو اختر قطاعاً آخر.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentProfessions.map((prof, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-3.5 border border-gray-200/80 hover:border-[#107C41] shadow-2xs flex items-center justify-between gap-3 group transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#107C41] flex items-center justify-center shrink-0 group-hover:bg-[#0D3B2E] group-hover:text-[#E5C158] transition-colors">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-[#0D3B2E]">
                            {prof}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleOrderProfession(prof)}
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-[#0D3B2E] text-[#0D3B2E] hover:text-[#E5C158] text-xs font-semibold transition-colors shrink-0"
                          title="طلب استقدام هذه المهنة"
                        >
                          طلب
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right sidebar: Sector Key Highlights & Quick Action */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-6">
              <div>
                <h4 className="text-sm font-bold text-[#0D3B2E] font-heading mb-3">
                  مميزات عمالة {selectedSector.title}:
                </h4>
                <div className="space-y-2.5">
                  {selectedSector.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#107C41] mt-1.5 shrink-0"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button
                  id={`request-sector-quote-btn-${selectedSector.id}`}
                  type="button"
                  onClick={() => {
                    const formElement = document.getElementById('request-form-section');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' });
                      const input = document.getElementById('form-profession-input') as HTMLInputElement | null;
                      if (input) input.value = `عمالة قطاع ${selectedSector.title}`;
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
                >
                  <span>اطلب عمالة لهذا القطاع</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <a
                  id={`whatsapp-sector-btn-${selectedSector.id}`}
                  href={getWhatsappUrl(`السلام عليكم ورحمة الله، أرغب في الاستفسار عن استقدام عمالة في قطاع: ${selectedSector.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#075E54] border border-[#25D366]/30 text-xs sm:text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>استفسار واتساب سريع</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
