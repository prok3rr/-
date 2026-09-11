import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { PROFESSIONS, getWhatsappUrl, getTelUrl, CONTACT_INFO } from '../data/recruitmentData';
import { RequestForm } from '../components/RequestForm';
import {
  Briefcase,
  ChevronLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  Building,
  ShieldCheck,
  ArrowLeft,
} from 'lucide-react';

interface ProfessionDetailPageProps {
  slug: string;
}

export const ProfessionDetailPage: React.FC<ProfessionDetailPageProps> = ({ slug }) => {
  const profession = PROFESSIONS.find((p) => p.slug === slug) || PROFESSIONS[0];

  // Related professions from same sector
  const related = PROFESSIONS.filter(
    (p) => p.sectorId === profession.sectorId && p.id !== profession.id
  ).slice(0, 3);

  // Breadcrumb schema
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
        name: 'المهن المطلوبة',
        item: 'https://recruitment-bangladesh.com/professions',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: profession.title,
        item: `https://recruitment-bangladesh.com/professions/${profession.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title={profession.seoTitle}
        description={profession.shortDesc}
        canonicalPath={`/professions/${profession.slug}`}
        jsonLd={breadcrumbSchema}
      />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#0B3327] to-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <Link to="/professions" className="hover:text-white">المهن المطلوبة</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">{profession.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#134D3D] text-[#E5C158] border border-[#1F6753] text-xs font-bold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>قطاع {profession.sectorName}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">
            {profession.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            {profession.shortDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a
              id={`prof-whatsapp-cta-${profession.id}`}
              href={getWhatsappUrl(`السلام عليكم ورحمة الله، أرغب في الاستفسار عن ${profession.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>طلب استقدام عبر واتساب</span>
            </a>

            <a
              id={`prof-tel-cta-${profession.id}`}
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
          
          {/* Main info (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Responsibilities and Key Tasks */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D3B2E] font-heading mb-4">
                المهام والمسؤوليات الأساسية
              </h2>
              <div className="space-y-3.5">
                {profession.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#107C41] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications and Criteria */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D3B2E] font-heading mb-4">
                معايير واشتراطات الكفاءة
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-gray-200">
                  <div className="text-xs text-gray-500 font-semibold mb-1">الخبرة الميدانية</div>
                  <div className="text-sm font-bold text-[#0D3B2E]">{profession.experienceLevel}</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-gray-200">
                  <div className="text-xs text-gray-500 font-semibold mb-1">ملائم لـ</div>
                  <div className="text-sm font-bold text-[#0D3B2E]">{profession.suitableFor}</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray-700 mb-2">المتطلبات الإضافية:</h3>
                <div className="space-y-2">
                  {profession.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#107C41]"></div>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Professions */}
            {related.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm">
                <h3 className="text-lg font-bold text-[#0D3B2E] font-heading mb-4">
                  مهن ذات صلة في قطاع {profession.sectorName}:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/professions/${rel.slug}`}
                      className="p-4 rounded-2xl border border-gray-200 hover:border-[#107C41] hover:bg-emerald-50/50 transition-all flex flex-col justify-between"
                    >
                      <div className="text-sm font-bold text-[#0D3B2E] mb-2">{rel.title}</div>
                      <div className="text-xs font-bold text-[#107C41] flex items-center gap-1">
                        <span>عرض التفاصيل</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#0D3B2E] text-white rounded-3xl p-6 border border-[#175240] shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#E5C158] text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>جاهزية للاستقدام</span>
              </div>

              <h3 className="text-lg font-bold font-heading">
                طلب {profession.title}
              </h3>

              <p className="text-xs text-emerald-100/90 leading-relaxed">
                تواصل معنا لتحديد عدد الكوادر المطلوبة والشروط التفصيلية، لنبدأ فرز السير الذاتية واختبار الكفاءة.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={getWhatsappUrl(`السلام عليكم ورحمة الله، أرغب في طلب استقدام: ${profession.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>طلب عبر الواتساب فوراً</span>
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

            {/* Quick sector overview */}
            <div className="bg-white rounded-3xl p-6 border border-emerald-950/10 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">القطاع التابع له:</div>
              <div className="text-base font-bold text-[#0D3B2E] mb-2">{profession.sectorName}</div>
              <Link
                to={`/sectors/${profession.sectorId}`}
                className="text-xs font-bold text-[#107C41] hover:underline flex items-center gap-1"
              >
                <span>تصفح كافة مهن هذا القطاع</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Pre-filled Request Form */}
      <RequestForm initialProfession={profession.title} />
    </div>
  );
};
