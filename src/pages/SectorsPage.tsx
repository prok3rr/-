import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { SECTORS, getWhatsappUrl } from '../data/recruitmentData';
import { RequestForm } from '../components/RequestForm';
import {
  Building2,
  Zap,
  Factory,
  UtensilsCrossed,
  Hotel,
  Truck,
  Wrench,
  Trees,
  ArrowLeft,
  ChevronLeft,
  CheckCircle2,
} from 'lucide-react';

export const SectorsPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title="قطاعات العمالة المهنية من بنجلاديش | مقاولات، مطاعم، مصانع، كهرباء وصيانة"
        description="استكشف قطاعات العمالة المهنية من بنجلاديش: قطاع المقاولات والبناء، الكهرباء والميكانيكا، المصانع، المطاعم، الفنادق، النقل، الصيانة، والزراعة."
        canonicalPath="/sectors"
      />

      {/* Header */}
      <div className="bg-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">القطاعات المهنية</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-heading">
            دليل قطاعات العمالة المهنية
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            نوفر طواقم متخصصة وكوادر مؤهلة في 8 قطاعات إنتاجية وخدمية رئيسية، مع مرونة تامة في توريد الأفراد أو الطواقم المتكاملة.
          </p>
        </div>
      </div>

      {/* Sectors Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECTORS.map((sector) => {
            const Icon = getSectorIcon(sector.iconName);
            return (
              <div
                key={sector.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D3B2E] text-[#E5C158] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#107C41] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      {sector.professions.length} تخصصات متاحة
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#0D3B2E] font-heading mb-3">
                    {sector.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {sector.shortDesc}
                  </p>

                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <h3 className="text-xs font-bold text-gray-700 mb-2.5">
                      أبرز المهن المتاحة للاستقدام في هذا القطاع:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {sector.professions.slice(0, 4).map((prof, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#107C41] shrink-0" />
                          <span className="truncate">{prof}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Link
                    to={`/sectors/${sector.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white text-xs sm:text-sm font-bold text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <span>تفاصيل القطاع والمهن</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <a
                    href={getWhatsappUrl(`السلام عليكم، أرغب في الاستفسار عن استقدام عمالة لقطاع: ${sector.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0D3B2E] border border-emerald-200 text-xs sm:text-sm font-bold transition-colors"
                  >
                    واتساب
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Request Form */}
      <RequestForm />
    </div>
  );
};
