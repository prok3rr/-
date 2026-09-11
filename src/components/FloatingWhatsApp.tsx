import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsappUrl } from '../data/recruitmentData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Allow closing the tooltip with the Escape key for accessibility
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && showTooltip) {
      setShowTooltip(false);
    }
  }, [showTooltip]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      id="floating-whatsapp-container"
      role="region"
      aria-label="خدمة المحادثة الفورية عبر واتساب"
      className="fixed bottom-6 left-6 z-50 flex items-end gap-3 pointer-events-none"
    >
      {/* Live Region for dynamic screen reader announcements */}
      <div
        id="whatsapp-live-announcer"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {showTooltip
          ? 'تنبيه: فريق الاستقدام متصل ومتاح الآن للرد السريع والمباشر عبر واتساب.'
          : 'تم إغلاق تنبيه واتساب. زر المحادثة متاح للاستخدام.'}
      </div>

      {/* Tooltip bubble */}
      {showTooltip && (
        <div
          role="status"
          aria-live="polite"
          className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs py-2 px-3 rounded-2xl shadow-xl border border-gray-200 pointer-events-auto animate-bounce transition-opacity duration-300"
        >
          <span className="font-semibold select-none">متاحون للرد السريع عبر واتساب</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="إغلاق تنبيه واتساب للرد السريع"
            title="إغلاق (Esc)"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label="بدء محادثة واتساب مباشرة مع مستشار الاستقدام (تفتح في نافذة جديدة)"
        aria-haspopup="dialog"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-600/50 transition-all duration-300 transform hover:scale-110 active:scale-95 pointer-events-auto relative group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true" />
        <span
          className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#E54B4B] border-2 border-white rounded-full"
          aria-hidden="true"
        />
        <span className="sr-only">واتساب متاح الآن</span>
      </a>
    </div>
  );
};

