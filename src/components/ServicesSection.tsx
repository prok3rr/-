import React from 'react';
import {
  Wrench,
  Cpu,
  Hammer,
  Utensils,
  Factory,
  Truck,
  Settings,
  Sparkles,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';
import { SERVICES, getWhatsappUrl } from '../data/recruitmentData';
import { RecruitmentService } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
  showAll?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Cpu': return Cpu;
      case 'Hammer': return Hammer;
      case 'Utensils': return Utensils;
      case 'Factory': return Factory;
      case 'Truck': return Truck;
      case 'Settings': return Settings;
      case 'Sparkles': return Sparkles;
      default: return Wrench;
    }
  };

  const handleServiceOrder = (service: RecruitmentService) => {
    if (onSelectService) {
      onSelectService(service.title);
      return;
    }
    const formElement = document.getElementById('request-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      const selectElem = document.getElementById('form-profession-input') as HTMLInputElement | null;
      if (selectElem) {
        selectElem.value = service.title;
      }
    } else {
      window.open(getWhatsappUrl(`السلام عليكم ورحمة الله، أود الاستفسار وطلب: ${service.title}`), '_blank');
    }
  };

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3B2E]/10 text-[#0D3B2E] text-xs font-bold mb-3">
            <span>حلول استقدام شاملة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B2E] font-heading">
            خدمات استقدام العمالة من بنجلاديش
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            نلبي احتياجات مختلف القطاعات والمنشآت من الكفاءات المهنية والفنية المختارة بعناية وفق أعلى معايير الكفاءة والالتزام.
          </p>
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-[#107C41]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Target Audience */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#107C41] flex items-center justify-center group-hover:bg-[#0D3B2E] group-hover:text-[#E5C158] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                      {service.targetAudience}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0D3B2E] font-heading mb-2.5 group-hover:text-[#107C41] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-gray-100">
                    {service.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-[#107C41] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button as explicitly required: زر «طلب الخدمة» */}
                <button
                  id={`order-service-btn-${service.id}`}
                  type="button"
                  onClick={() => handleServiceOrder(service)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0D3B2E] hover:bg-[#107C41] text-white text-xs sm:text-sm font-bold transition-all duration-200 group-hover:shadow-md group-hover:shadow-emerald-900/10"
                >
                  <span>طلب الخدمة</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
