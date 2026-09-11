import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Building,
  User,
  Phone,
  Briefcase,
  Users,
  MapPin,
  FileText,
} from 'lucide-react';
import { InquiryFormData } from '../types';
import { CONTACT_INFO, getWhatsappUrl } from '../data/recruitmentData';

interface RequestFormProps {
  initialProfession?: string;
}

export const RequestForm: React.FC<RequestFormProps> = ({ initialProfession = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    clientType: 'شركة',
    country: 'المملكة العربية السعودية',
    profession: initialProfession,
    workerCount: '1',
    nationality: 'بنجلاديشية (بنجلاديش)',
    phone: '',
    whatsapp: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [orderRefNumber, setOrderRefNumber] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى كتابة الاسم أو اسم المنشأة';
    }

    if (!formData.profession.trim()) {
      newErrors.profession = 'يرجى تحديد المهنة المطلوبة';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى كتابة رقم الهاتف للتواصل';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate random reference code
    const refCode = `BD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRefNumber(refCode);
    setIsSubmitted(true);

    // Build structured WhatsApp message
    const msg = `*طلب استقدام عمالة من بنجلاديش* (رقم مرجعي: ${refCode})
━━━━━━━━━━━━━━━━━━━━
• *الاسم:* ${formData.fullName}
• *نوع العميل:* ${formData.clientType}
• *الدولة:* ${formData.country}
• *المهنة المطلوبة:* ${formData.profession}
• *عدد العمال:* ${formData.workerCount}
• *الجنسية:* ${formData.nationality}
• *رقم الهاتف:* ${formData.phone}
• *رقم الواتساب:* ${formData.whatsapp || formData.phone}
${formData.notes ? `• *ملاحظات إضافية:* ${formData.notes}` : ''}
━━━━━━━━━━━━━━━━━━━━
أرجو التواصل معي لتأكيد استلام الطلب وبدء الإجراءات.`;

    // Open WhatsApp in new window automatically after brief confirmation
    setTimeout(() => {
      window.open(getWhatsappUrl(msg), '_blank');
    }, 800);
  };

  return (
    <section id="request-form-section" className="py-16 sm:py-20 bg-[#F1F5F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#107C41]/10 text-[#0D3B2E] text-xs font-bold mb-3">
            <span>نموذج الحجز والاستفسار المباشر</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] font-heading">
            اطلب استقدام عمالة من بنجلاديش
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            املأ البيانات التالية وسيقوم مستشار الاستقدام بالتواصل معك فوراً لتزويدك بالسير الذاتية وتفاصيل الإجراءات.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-950/10 shadow-xl relative overflow-hidden">
          
          {isSubmitted ? (
            <div className="text-center py-10 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#107C41] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0D3B2E] font-heading">
                  تم إرسال طلب الاستقدام بنجاح!
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  الرقم المرجعي للطلب: <span className="font-mono font-bold text-[#107C41]">{orderRefNumber}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  تم تحويل تفاصيل طلبك تلقائياً إلى واتساب للاستجابة الفورية.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  id="form-whatsapp-reopen-btn"
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>فتح محادثة واتساب الآن</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      clientType: 'شركة',
                      country: 'المملكة العربية السعودية',
                      profession: '',
                      workerCount: '1',
                      nationality: 'بنجلاديشية (بنجلاديش)',
                      phone: '',
                      whatsapp: '',
                      notes: '',
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold"
                >
                  تقديم طلب جديد
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    الاسم / اسم المنشأة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="form-fullname-input"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="مثال: شركة إعمار / محمد العتيبي"
                      className={`w-full pl-4 pr-10 py-3 rounded-xl border ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                      } text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none transition-all`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Client Type: فرد / شركة / مؤسسة */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    نوع العميل <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="form-client-type-select"
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value as any })}
                      className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none bg-white transition-all"
                    >
                      <option value="شركة">شركة</option>
                      <option value="مؤسسة">مؤسسة</option>
                      <option value="فرد">فرد / صاحب عمل</option>
                    </select>
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    الدولة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="form-country-select"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none bg-white transition-all"
                    >
                      <option value="المملكة العربية السعودية">المملكة العربية السعودية</option>
                      <option value="الإمارات العربية المتحدة">الإمارات العربية المتحدة</option>
                      <option value="الكويت">الكويت</option>
                      <option value="قطر">قطر</option>
                      <option value="سلطنة عمان">سلطنة عمان</option>
                      <option value="البحرين">البحرين</option>
                    </select>
                  </div>
                </div>

                {/* Profession Required */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    المهنة المطلوبة <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="form-profession-input"
                      type="text"
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      placeholder="مثال: كهربائي مباني / شيف / سائق نقل"
                      className={`w-full pl-4 pr-10 py-3 rounded-xl border ${
                        errors.profession ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                      } text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none transition-all`}
                    />
                  </div>
                  {errors.profession && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.profession}
                    </p>
                  )}
                </div>

                {/* Number of workers */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    عدد العمال المطلوب <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="form-workercount-input"
                      type="number"
                      min="1"
                      value={formData.workerCount}
                      onChange={(e) => setFormData({ ...formData, workerCount: e.target.value })}
                      placeholder="1"
                      className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Required Nationality */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    الجنسية المطلوبة
                  </label>
                  <input
                    id="form-nationality-input"
                    type="text"
                    readOnly
                    value="بنجلاديشية (عمالة من بنجلاديش)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-700 font-semibold cursor-not-allowed"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    رقم الهاتف <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="form-phone-input"
                      type="tel"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className={`w-full pl-4 pr-10 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                      } text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none transition-all text-right`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    رقم الواتساب (اختياري إن كان مختلفاً)
                  </label>
                  <div className="relative">
                    <MessageCircle className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="form-whatsapp-input"
                      type="tel"
                      dir="ltr"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none transition-all text-right"
                    />
                  </div>
                </div>

              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                  ملاحظات إضافية أو شروط خاصة
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5" />
                  <textarea
                    id="form-notes-input"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="أي اشتراطات خاصة مثل سنوات الخبرة، إتقان لغة معينة، رخصة قيادة، إلخ..."
                    className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#107C41] focus:ring-2 focus:ring-[#107C41]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="form-submit-btn"
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white font-bold text-base shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <span>إرسال طلب الاستقدام</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-gray-500 mt-3">
                  بالضغط على إرسال، ستتم مشاركة الطلب مع فريق الاستقدام والتواصل معك مباشرة.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
