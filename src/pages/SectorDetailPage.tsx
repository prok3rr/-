import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { SECTORS, PROFESSIONS, getWhatsappUrl, getTelUrl, CONTACT_INFO } from '../data/recruitmentData';
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
  ChevronLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';

interface SectorDetailPageProps {
  slug: string;
}

export const SectorDetailPage: React.FC<SectorDetailPageProps> = ({ slug }) => {
  const sector = SECTORS.find((s) => s.slug === slug) || SECTORS[0];

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

  const Icon = getSectorIcon(sector.iconName);

  // Find related individual profession pages
  const relatedProfessions = PROFESSIONS.filter((p) => p.sectorId === sector.id);

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: 'https://recruitment-bangladesh.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'القطاعات المهنية',
        item: 'https://recruitment-bangladesh.com/sectors',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: sector.title,
        item: `https://recruitment-bangladesh.com/sectors/${sector.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title={`استقدام عمالة ${sector.title} من بنجلاديش | كوادر مهنية وفنية`}
        description={`نوفر خدمات استقدام عمالة ${sector.title} من بنجلاديش لكافة التخصصات والمهن. عمالة مدربة، فحص مهني معتمد، حلول متكاملة للشركات والمؤسسات بالسعودية والخليج.`}
        canonicalPath={`/sectors/${sector.slug}`}
        jsonLd={breadcrumbSchema}
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#0B3327] to-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link to="/sectors" className="hover:text-white">القطاعات المهنية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">{sector.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#144F3F] text-[#E5C158] flex items-center justify-center border border-[#1E6753]">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-heading">
                استقدام عمالة {sector.title} من بنجلاديش
              </h1>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1">
                كوادر ماهرة ومحترفة تلبي متطلبات سوق العمل السعودي والخليجي
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-3xl leading-relaxed">
            {sector.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <a
              id={`sector-whatsapp-cta-${sector.id}`}
              href={getWhatsappUrl(`السلام عليكم ورحمة الله، أرغب في الاستفسار عن استقدام عمالة في قطاع: ${sector.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>طلب عمالة {sector.title} عبر واتساب</span>
            </a>

            <a
              id={`sector-tel-cta-${sector.id}`}
              href={getTelUrl()}
              className="px-6 py-3 rounded-xl bg-[#144F3F] hover:bg-[#1A5F4C] text-emerald-100 border border-[#206E58] text-xs sm:text-sm font-semibold flex items-center gap-2"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#E5C158]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Detailed Professions in this sector */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D3B2E] font-heading mb-4">
                قائمة المهن والتخصصات المتاحة في قطاع {sector.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                نوفر كوادر مدربة في التخصصات التالية مع إمكانية توفير أعداد حسب احتياج المشروع:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {sector.professions.map((prof, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#F8FAF9] border border-gray-200/80 flex items-center justify-between gap-3 group hover:border-[#107C41] hover:bg-white transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#107C41] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-gray-800">
                        {prof}
                      </span>
                    </div>

                    <a
                      href={getWhatsappUrl(`السلام عليكم، أرغب في استقدام: ${prof} لقطاع ${sector.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-[#0D3B2E] text-[#E5C158] text-xs font-semibold hover:bg-[#107C41] transition-colors shrink-0"
                    >
                      طلب
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Specific Profession Pages if any */}
            {relatedProfessions.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm">
                <h3 className="text-lg font-bold text-[#0D3B2E] font-heading mb-4">
                  صفحات تفصيلية لأبرز مهن هذا القطاع:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedProfessions.map((p) => (
                    <Link
                      key={p.id}
                      to={`/professions/${p.slug}`}
                      className="p-4 rounded-2xl border border-gray-200 hover:border-[#107C41] hover:bg-emerald-50/40 transition-all flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-bold text-[#0D3B2E]">{p.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{p.experienceLevel}</div>
                      </div>
                      <ArrowLeft className="w-4 h-4 text-[#107C41]" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Key Strengths & Quality Guarantees */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm">
              <h2 className="text-xl font-bold text-[#0D3B2E] font-heading mb-4">
                لماذا تختار عمالة {sector.title} من بنجلاديش؟
              </h2>
              <div className="space-y-3">
                {sector.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#107C41] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-[#0D3B2E] text-white rounded-3xl p-6 border border-[#175240] shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#E5C158] text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>طلب فوري ومباشر</span>
              </div>

              <h3 className="text-lg font-bold font-heading">
                احصل على عرض استقدام لقطاع {sector.title}
              </h3>

              <p className="text-xs text-emerald-100/90 leading-relaxed">
                تواصل معنا لتحديد المواصفات والأعداد المطلوبة، وسنزودكم بالسير الذاتية ومواعيد الإنجاز.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={getWhatsappUrl(`السلام عليكم، أود استشارة وعرض أسعار لاستقدام عمالة في قطاع: ${sector.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>محادثة واتساب مخصصة</span>
                </a>

                <a
                  href={getTelUrl()}
                  className="w-full py-3 rounded-xl bg-[#144F3F] text-emerald-100 border border-[#206E58] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-[#E5C158]" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Other Sectors Navigation */}
            <div className="bg-white rounded-3xl p-6 border border-emerald-950/10 shadow-sm">
              <h3 className="text-sm font-bold text-[#0D3B2E] font-heading mb-3 border-b border-gray-100 pb-2">
                تصفح باقي القطاعات المهنية:
              </h3>
              <div className="space-y-1.5">
                {SECTORS.filter((s) => s.id !== sector.id).map((s) => (
                  <Link
                    key={s.id}
                    to={`/sectors/${s.slug}`}
                    className="block p-2.5 rounded-xl hover:bg-emerald-50 text-xs font-bold text-gray-700 hover:text-[#0D3B2E] transition-colors"
                  >
                    • {s.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Sector Request Form */}
      <RequestForm initialProfession={`عمالة قطاع ${sector.title}`} />
    </div>
  );
};
