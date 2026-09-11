import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { ChevronLeft, ShieldCheck, Award, Users, CheckCircle2, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl } from '../data/recruitmentData';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title="من نحن | استقدام من بنجلاديش للعمالة المهنية والماهرة"
        description="تعرف علينا: منصة متخصصة في توفير واستقدام العمالة المهنية والفنية من بنجلاديش للمملكة والخليج. نلتزم بأعلى معايير الشفافية واختبار الكفاءة والامتثال النظامي."
        canonicalPath="/about"
      />

      {/* Header */}
      <div className="bg-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">من نحن</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-heading">
            عن «استقدام من بنجلاديش»
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            شريككم الموثوق في توفير واستقدام الكوادر والعمالة المهنية والماهرة من بنجلاديش للمملكة العربية السعودية ودول الخليج.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        {/* Story & Philosophy */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-950/10 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-[#0D3B2E] font-heading">
            رؤيتنا ومنهجية العمل
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            انطلاقاً من النمو المتسارع في مختلف القطاعات الاقتصادية بالمملكة العربية السعودية ودول الخليج العربي، تتزايد الحاجة إلى كوادر مهنية وحرفية مدربة قادرة على تلبية متطلبات المشاريع بجودة وموثوقية عالية.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            نركز بشكل دقيق على سوق العمالة في بنجلاديش باعتباره أحد أخصب الأسواق بالخبرات العملية في مجالات البناء والمقاولات، الكهرباء والتبريد، خدمات المطاعم والفنادق، وسلاسل الإمداد، مما يمكننا من انتقاء أفضل السير الذاتية ومطابقتها مع الاحتياج الفعلي لصاحب العمل.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#107C41] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D3B2E] font-heading">الفحص الدقيق</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              اختبارات مهنية وعملية وفحوصات طبية معتمدة قبل إتمام التأشيرة.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#107C41] flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D3B2E] font-heading">النظامية والشفافية</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              إجراءات متوافقة كلياً مع منصات الاستقدام الرسمية وقوانين العمل.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#107C41] flex items-center justify-center mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0D3B2E] font-heading">متابعة مستمرة</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              خدمة عملاء مباشرة ومتابعة حثيثة من لحظة الطلب وحتى مباشرة العمل.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-[#0D3B2E] to-[#124B3B] text-white rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            هل لديك استفسار أو طلب استقدام؟
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-md mx-auto">
            تواصل معنا عبر واتساب أو الاتصال المباشر وسنكون سعداء بالإجابة على كافة تفاصيل الاستقدام.
          </p>
          <div className="pt-2">
            <a
              id="about-cta-whatsapp"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow"
            >
              <span>محادثة واتساب مباشرة</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
