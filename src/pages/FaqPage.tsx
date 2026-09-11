import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { FAQSection } from '../components/FAQSection';
import { RequestForm } from '../components/RequestForm';
import { ChevronLeft } from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <SeoHead
        title="الأسئلة الشائعة حول استقدام العمالة من بنجلاديش | كل ما تود معرفته"
        description="إجابات عن كافة الأسئلة المتعلقة باستقدام العمالة من بنجلاديش: المهن، الرسوم، الإجراءات، طلب عمالة للشركات، وكيفية بدء الاستقدام."
        canonicalPath="/faq"
      />

      {/* Header */}
      <div className="bg-[#0D3B2E] text-white py-14 border-b border-[#144A3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-4">
            <Link to="/" className="hover:text-white">الرئيسية</Link>
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="text-[#E5C158] font-bold">الأسئلة الشائعة</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold font-heading">
            الأسئلة الشائعة حول استقدام العمالة
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            دليل إرشادي للإجابة على جميع تساؤلات أصحاب العمل والشركات حول الإجراءات والمهن وتوفير العمالة.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Request Form */}
      <RequestForm />
    </div>
  );
};
