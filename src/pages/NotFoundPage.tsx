import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../utils/router';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAF9] px-4 py-20">
      <SeoHead
        title="الصفحة غير موجودة | استقدام من بنجلاديش"
        description="الصفحة المطلوبة غير موجودة. يمكنك العودة إلى الصفحة الرئيسية أو تصفح خدمات وقطاعات الاستقدام."
        canonicalPath="/404"
      />
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-gray-200 shadow-xl text-center space-y-5">
        <span className="text-6xl font-black text-[#0D3B2E] font-heading block">404</span>
        <h1 className="text-2xl font-bold text-gray-900 font-heading">الصفحة غير موجودة</h1>
        <p className="text-sm text-gray-600">
          عذراً، الرابط الذي تحاول الوصول إليه غير متوفر أو تم نقله.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <Link
            to="/sectors"
            className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>تصفح القطاعات</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
