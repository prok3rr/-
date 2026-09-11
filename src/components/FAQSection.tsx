import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { FAQS, getWhatsappUrl, getTelUrl, CONTACT_INFO } from '../data/recruitmentData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data FAQ Schema JSON-LD matching EXACT questions and answers
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-white">
      {/* FAQ Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#107C41]/10 text-[#0D3B2E] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#107C41]" />
            <span>إجابات واضحة ومباشرة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] font-heading">
            الأسئلة الشائعة حول استقدام عمالة بنجلاديش
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            إجابات عن أكثر الاستفسارات شيوعاً حول الإجراءات والمهن وتوفير الكوادر المهنية للأفراد والشركات.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#107C41] bg-[#F8FAF9] shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0D3B2E] font-heading leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#0D3B2E] text-[#E5C158] rotate-180'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-gray-700 leading-relaxed border-t border-emerald-950/5 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 text-center bg-[#F8FAF9] p-6 rounded-2xl border border-gray-200">
          <p className="text-sm font-semibold text-gray-700">
            لديك سؤال آخر لم تجد إجابته هنا؟
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <a
              id="faq-whatsapp-support-btn"
              href={getWhatsappUrl('السلام عليكم، لدي استفسار إضافي حول استقدام العمالة من بنجلاديش')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استفسر عبر واتساب</span>
            </a>

            <a
              id="faq-tel-support-btn"
              href={getTelUrl()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white text-xs sm:text-sm font-semibold"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#E5C158]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
