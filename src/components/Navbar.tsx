import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown, Briefcase, Building2, ShieldCheck } from 'lucide-react';
import { Link, useRouter } from '../utils/router';
import { CONTACT_INFO, getWhatsappUrl, getTelUrl, SECTORS } from '../data/recruitmentData';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectorsDropdownOpen, setIsSectorsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSectorsDropdownOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A2E24]/95 backdrop-blur-md shadow-md border-b border-[#124D3E]'
          : 'bg-[#0D3B2E] border-b border-[#175242]'
      } text-white`}
    >
      {/* Top micro bar for phone, WhatsApp & Quick info */}
      <div className="border-b border-[#144739] text-xs py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-emerald-100">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E5C158]" />
              استقدام رسمي معتمد للعمالة المهنية والماهرة من بنجلاديش
            </span>
            <span className="text-emerald-300/40">|</span>
            <span>تغطية لجميع مناطق المملكة العربية السعودية ودول الخليج</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              id="topbar-tel-link"
              href={getTelUrl()}
              className="flex items-center gap-1.5 hover:text-[#E5C158] transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <span className="text-emerald-300/40">|</span>
            <a
              id="topbar-whatsapp-link"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>واتساب متاح 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            id="brand-logo-link"
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F5A44] to-[#08281F] border border-[#1E745A] flex items-center justify-center shadow-inner relative overflow-hidden group-hover:border-[#E5C158] transition-colors">
              {/* Subtle Bangladesh refined visual circle */}
              <div className="w-4 h-4 rounded-full bg-[#E54B4B] shadow-sm opacity-90 group-hover:scale-110 transition-transform"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading group-hover:text-[#E5C158] transition-colors">
                استقدام من بنجلاديش
              </span>
              <span className="text-xs text-emerald-200 font-medium">
                العمالة المهنية والماهرة | السعودية والخليج
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/' ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
              }`}
            >
              الرئيسية
            </Link>

            <Link
              to="/services"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/services' ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
              }`}
            >
              خدمات الاستقدام
            </Link>

            {/* Sectors Dropdown */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setIsSectorsDropdownOpen(!isSectorsDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  currentPath.startsWith('/sectors') ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
                }`}
              >
                <span>القطاعات المهنية</span>
                <ChevronDown className="w-4 h-4 opacity-75 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full right-0 mt-2 w-72 bg-[#0A2A21] border border-[#185A48] rounded-xl shadow-2xl py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="px-3 py-1.5 text-xs text-[#E5C158] font-semibold border-b border-[#144739] mb-1">
                  تصفح القطاعات الرئيسية
                </div>
                {SECTORS.map((sector) => (
                  <Link
                    key={sector.id}
                    to={`/sectors/${sector.slug}`}
                    className="block px-4 py-2 text-xs text-emerald-100 hover:bg-[#144B3D] hover:text-[#E5C158] transition-colors"
                  >
                    {sector.title}
                  </Link>
                ))}
                <div className="border-t border-[#144739] mt-1 pt-1">
                  <Link
                    to="/sectors"
                    className="block px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-[#144B3D] transition-colors"
                  >
                    عرض جميع القطاعات ←
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/professions"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath.startsWith('/professions') ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
              }`}
            >
              المهن المطلوبة
            </Link>

            <Link
              to="/companies"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/companies' ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
              }`}
            >
              للشركات والمؤسسات
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/about' ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
              }`}
            >
              من نحن
            </Link>

            <Link
              to="/faq"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/faq' ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
              }`}
            >
              الأسئلة الشائعة
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/contact' ? 'bg-[#155342] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124536] hover:text-white'
              }`}
            >
              تواصل معنا
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={getTelUrl()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#124739] hover:bg-[#165645] text-emerald-100 border border-[#1E6753] transition-all text-xs font-semibold"
              dir="ltr"
              title="اتصال مباشر"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md shadow-emerald-950/40 transition-all text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصل واتساب</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-nav-call-btn"
              href={getTelUrl()}
              className="p-2.5 rounded-lg bg-[#144739] text-[#E5C158] border border-[#1D5E4C]"
              aria-label="اتصل الآن"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#144739] text-white hover:text-[#E5C158] border border-[#1D5E4C] focus:outline-none"
              aria-label="فتح القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A281F] border-b border-[#144739] px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === '/' ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            الرئيسية
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === '/services' ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            خدمات الاستقدام
          </Link>

          <Link
            to="/sectors"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === '/sectors' ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            القطاعات المهنية (جميع القطاعات)
          </Link>

          {/* Sub-sectors for mobile */}
          <div className="pr-4 py-1 space-y-1 border-r-2 border-[#165040] my-1">
            {SECTORS.slice(0, 5).map((s) => (
              <Link
                key={s.id}
                to={`/sectors/${s.slug}`}
                onClick={closeMenu}
                className="block text-xs py-1.5 text-emerald-200 hover:text-[#E5C158]"
              >
                • {s.title}
              </Link>
            ))}
          </div>

          <Link
            to="/professions"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath.startsWith('/professions') ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            أشهر المهن المطلوبة
          </Link>

          <Link
            to="/companies"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === '/companies' ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            استقدام للشركات والمؤسسات
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === '/about' ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            عن استقدام بنجلاديش
          </Link>

          <Link
            to="/faq"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === '/faq' ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            الأسئلة الشائعة
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPath === '/contact' ? 'bg-[#144D3D] text-[#E5C158] font-bold' : 'text-emerald-100 hover:bg-[#124234]'
            }`}
          >
            تواصل معنا
          </Link>

          <div className="pt-4 border-t border-[#144739] flex flex-col gap-2.5">
            <a
              id="mobile-drawer-whatsapp-btn"
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب مباشرة</span>
            </a>

            <a
              id="mobile-drawer-tel-btn"
              href={getTelUrl()}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#144A3C] text-emerald-100 border border-[#1D6351] text-sm font-semibold"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#E5C158]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
