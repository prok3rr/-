import React from 'react';
import { MessageCircle, Phone, ArrowLeft, Shield, CheckCircle2, Users, Star, Sparkles, Building, Wrench } from 'lucide-react';
import { CONTACT_INFO, getWhatsappUrl, getTelUrl } from '../data/recruitmentData';

interface HeroProps {
  onRequestClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestClick }) => {
  const handleOrderClick = () => {
    if (onRequestClick) {
      onRequestClick();
      return;
    }
    const formElement = document.getElementById('request-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B3327] via-[#0D3B2E] to-[#08261D] text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Bangladesh subtle geometric aesthetic */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E54B4B]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#1A775C]/20 blur-3xl pointer-events-none"></div>
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right space-y-6">
            
            {/* Trust badge with subtle Bangladesh inspired emblem */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#124B3B]/80 border border-[#1D6350] text-emerald-200 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E54B4B] animate-pulse"></span>
              <span className="text-[#E5C158] font-bold">استقدام موثوق ومعتمد</span>
              <span className="text-emerald-300/40">|</span>
              <span>عمالة بنجلاديش المهنية للمملكة والخليج</span>
            </div>

            {/* Single H1 Title strictly matching prompt requirements */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white font-heading leading-[1.25] tracking-tight">
              استقدام من بنجلاديش{' '}
              <span className="text-[#E5C158] inline-block relative">
                للعمالة المهنية والماهرة
                <svg className="absolute -bottom-2 right-0 w-full h-2 text-[#E5C158]/40" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 7C50 2 150 2 200 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              نوفر خدمات استقدام العمالة من بنجلاديش لمختلف المهن والقطاعات، مع حلول مناسبة للشركات والمؤسسات وأصحاب الأعمال في السعودية ودول الخليج.
            </p>

            {/* Key feature pills */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5 bg-[#124536] px-3 py-1.5 rounded-lg border border-[#1B5C49]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
                فحص مهني واختبار كفاءة
              </span>
              <span className="flex items-center gap-1.5 bg-[#124536] px-3 py-1.5 rounded-lg border border-[#1B5C49]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
                إنجاز وتأشيرات نظامية
              </span>
              <span className="flex items-center gap-1.5 bg-[#124536] px-3 py-1.5 rounded-lg border border-[#1B5C49]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
                أفراد ومؤسسات ومشاريع
              </span>
            </div>

            {/* Action Buttons as explicitly requested */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              {/* Button 1: Order recruitment */}
              <button
                id="hero-order-cta-btn"
                type="button"
                onClick={handleOrderClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5C158] hover:bg-[#D6B046] text-[#0A2E24] font-bold text-sm sm:text-base shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span>اطلب استقدام عمالة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              {/* Button 2: WhatsApp in new window */}
              <a
                id="hero-whatsapp-cta-btn"
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>تواصل عبر واتساب</span>
              </a>

              {/* Button 3: Direct Call */}
              <a
                id="hero-call-cta-btn"
                href={getTelUrl()}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#124739] hover:bg-[#175747] text-white border border-[#206E58] font-semibold text-sm sm:text-base transition-all duration-200"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#E5C158]" />
                <span>اتصل الآن: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Sub-note on availability */}
            <p className="text-xs text-emerald-300/80 pt-1">
              متاحون للرد السريع وتزويدكم بالسير الذاتية وتفاصيل الاستقدام عبر الواتساب والمكالمات.
            </p>
          </div>

          {/* Side Column Visual (5 cols on lg) - Composite Visual Cards representing diverse professions */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E5C158]/10 via-[#107C41]/20 to-transparent rounded-3xl filter blur-2xl"></div>

              {/* Main Visual Frame */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#124A3B] to-[#0A2920] p-5 sm:p-6 border border-[#206954] shadow-2xl overflow-hidden">
                
                {/* Header of the visual showcase */}
                <div className="flex items-center justify-between border-b border-[#1A5C4A] pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#092B21] border border-[#1F6B55] flex items-center justify-center text-[#E5C158]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">كوادر بنجلاديش المهنية</div>
                      <div className="text-xs text-emerald-300">جاهزية وفحص مهني معتمد</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#E5C158]/20 text-[#E5C158] border border-[#E5C158]/40 text-xs font-semibold">
                    مرخصة ومضمونة
                  </span>
                </div>

                {/* Composite Grid of Key Professions */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-right mb-4">
                  
                  {/* Construction & Masonry */}
                  <div className="p-3 rounded-xl bg-[#0A2D23]/80 border border-[#175241] hover:border-[#E5C158]/50 transition-colors">
                    <div className="flex items-center gap-2 text-[#E5C158] mb-1">
                      <Building className="w-4 h-4" />
                      <span className="text-xs font-bold">المقاولات والبناء</span>
                    </div>
                    <p className="text-[11px] text-emerald-100 leading-tight">
                      حدادون، نجارون، عمال بناء وبلوك، وفنيو تلييس
                    </p>
                  </div>

                  {/* Electricity & AC */}
                  <div className="p-3 rounded-xl bg-[#0A2D23]/80 border border-[#175241] hover:border-[#E5C158]/50 transition-colors">
                    <div className="flex items-center gap-2 text-[#E5C158] mb-1">
                      <Wrench className="w-4 h-4" />
                      <span className="text-xs font-bold">الكهرباء والتكييف</span>
                    </div>
                    <p className="text-[11px] text-emerald-100 leading-tight">
                      فنيو كهرباء، تبريد وتكييف سبليت ومركزي
                    </p>
                  </div>

                  {/* Restaurants & Chefs */}
                  <div className="p-3 rounded-xl bg-[#0A2D23]/80 border border-[#175241] hover:border-[#E5C158]/50 transition-colors">
                    <div className="flex items-center gap-2 text-[#E5C158] mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-bold">المطاعم والكافيهات</span>
                    </div>
                    <p className="text-[11px] text-emerald-100 leading-tight">
                      طهاة، باريستا، خبازون، ومساعدو مطبخ
                    </p>
                  </div>

                  {/* Factories & Logistics */}
                  <div className="p-3 rounded-xl bg-[#0A2D23]/80 border border-[#175241] hover:border-[#E5C158]/50 transition-colors">
                    <div className="flex items-center gap-2 text-[#E5C158] mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-bold">المصانع واللوجستيات</span>
                    </div>
                    <p className="text-[11px] text-emerald-100 leading-tight">
                      مشغلو ماكينات، سائقو نقل، وعمال مستودعات
                    </p>
                  </div>

                </div>

                {/* Live Stats Floating Box */}
                <div className="rounded-2xl bg-[#092B21] border border-[#1E6753] p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#144E3E] flex items-center justify-center text-[#E5C158]">
                      <Star className="w-5 h-5 fill-[#E5C158]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">مطابقة دقيقة للمواصفات</div>
                      <div className="text-[11px] text-emerald-300">سير ذاتية مفروزة مع تجارب عمل فعلية</div>
                    </div>
                  </div>

                  <span className="text-sm font-black text-[#E5C158] font-heading">
                    100% نظامي
                  </span>
                </div>

                {/* Sub-label banner */}
                <div className="mt-4 pt-3 border-t border-[#174F3F] flex items-center justify-between text-[11px] text-emerald-300/90">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-[#E5C158]" />
                    كافة الفحوصات الطبية والمهنية
                  </span>
                  <span className="font-semibold text-white">خدمة مباشرة</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
