import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { GreenWaveDivider } from '../components/GreenWave';
import HeroBanner from '../components/HeroBanner';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  ArrowRight,
  ClipboardList,
  FileText,
  DollarSign,
  Search,
  Users,
  GraduationCap,
  CheckCircle,
  Zap
} from 'lucide-react';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    { icon: ClipboardList, title: t('services.projectManagement.title'),    items: t('services.projectManagement.items'),    color: '#2E9013' },
    { icon: FileText,      title: t('services.regulatoryAffairs.title'),    items: t('services.regulatoryAffairs.items'),    color: '#573D4E' },
    { icon: DollarSign,    title: t('services.contractBudget.title'),       items: t('services.contractBudget.items'),       color: '#F5A617' },
    { icon: Search,        title: t('services.feasibilityMonitoring.title'),items: t('services.feasibilityMonitoring.items'),color: '#2E9013' },
    { icon: Users,         title: t('services.siteSupport.title'),          items: t('services.siteSupport.items'),          color: '#573D4E' },
    { icon: GraduationCap, title: t('services.investigatorCompliance.title'),items: t('services.investigatorCompliance.items'),color: '#F5A617' },
  ];

  return (
    <div className="min-h-screen bg-muted" data-testid="services-page">
      <SEO
        title={t('services.metaTitle')}
        description={t('services.metaDescription')}
        url="/services"
      />

      <HeroBanner
        title={t('nav.services')}
        subtitle={t('services.heroSubtitle')}
        breadcrumbs={[{ label: t('nav.services') }]}
        testId="services-hero"
      />

      {/* <GreenWaveDivider /> */}

      {/* Services Grid */}
      <section className="py-20" data-testid="services-grid-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-4 text-center">
            {t('services.allServicesTitle')}
          </h2>
          <p className="text-[#4B5563] text-center max-w-2xl mx-auto mb-12">
            {t('services.allServicesSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <CardTitle className="font-raleway text-xl font-bold text-[#573D4E]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#2E9013] flex-shrink-0 mt-1" />
                        <span className="text-[#4B5563] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center text-[#2E9013] hover:text-[#1a5a0b] text-sm font-medium mt-4">
                    {t('home.learnMore')}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="bg-[#EAF5E1] rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#2E9013] flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-4">
                  {t('services.training.title')}
                </h2>
                <ul className="space-y-3">
                  {t('services.training.items').map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E9013] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4B5563]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Button asChild className="bg-[#2E9013] hover:bg-[#573D4E] text-white font-semibold px-8 py-3 rounded-full" data-testid="training-contact-btn">
                  <Link to="/contact">
                    {t('nav.contactUs')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANSM Fast-Track Section */}
      <section className="py-16 bg-[#FEF3DC]" data-testid="ansm-fast-track-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-[#D81C20]" />
                <h3 className="font-raleway text-xl font-bold text-[#573D4E]">
                  {t('home.ansm.title')}
                </h3>
              </div>
              <p className="text-[#F5A617] font-semibold mb-4">{t('home.ansm.subtitle')}</p>
              <p className="text-[#4B5563] leading-relaxed">{t('home.ansm.text')}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-semibold text-[#573D4E] mb-4">{t('services.ansmApplicableTitle')}</h4>
              <ul className="space-y-2 text-[#4B5563]">
                {t('services.ansmApplicableItems').map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E9013] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#EAF5E1] rounded-lg">
                <p className="text-sm text-[#2E9013] font-medium">{t('services.ansmReducedTimeline')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-[#573D4E] overflow-hidden" data-testid="services-cta-section">
        <img
          src={"/freearcs-pharma-services_logo-white.svg"}
          alt="" aria-hidden="true"
          className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-auto pointer-events-none select-none"
          style={{ opacity: 0.07 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-4">
            {t('services.talkToUs')}
          </h2>
          <Button asChild className="bg-[#2E9013] hover:bg-white hover:text-[#573D4E] text-white font-semibold px-10 py-6 rounded-full text-lg" data-testid="services-contact-btn">
            <Link to="/contact">
              {t('nav.contactUs')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
