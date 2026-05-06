import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { GreenWaveHeader } from '../components/GreenWave';
import LogoCarousel from '../components/LogoCarousel';
import { ArrowRight, Award, TrendingUp, Users } from 'lucide-react';
import SEO from '@/components/SEO';

const LOGO_WHITE = "/freearcs-pharma-services_logo-white.svg";

const ReferencesPage = () => {
  const { t } = useLanguage();

  const studyTypes = t('references.studyTypes');

  const stats = [
    {
      icon: Award,
      value: '30+',
      label: t('references.stats.projects'),
      color: '#2E9013'
    },
    {
      icon: TrendingUp,
      value: '25',
      label: t('references.stats.success'),
      color: '#F5A617'
    },
    {
      icon: Users,
      value: '65%',
      label: t('references.stats.retention'),
      color: '#573D4E'
    },
  ];

  return (
    <div className="min-h-screen bg-muted" data-testid="references-page">
      <SEO
        title={t('references.metaTitle')}
        description={t('references.metaDescription')}
        url="/references"
      />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden" data-testid="references-hero">
        <GreenWaveHeader />
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 pt-10 pb-20">
          <div className="max-w-3xl">
            <h1 className="font-raleway text-3xl sm:text-4xl lg:text-5xl font-bold text-[#573D4E] mb-6" data-testid="references-title">
              {t('references.title')}
            </h1>
            <p className="text-[#4B5563] text-lg leading-relaxed">
              {t('references.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#573D4E]" data-testid="stats-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center"
                data-testid={`stat-${index}`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${stat.color}30` }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners / Client Logos Section — Carrousel Swiper.js · directive médias v1.0 */}
      <section className="py-20 bg-muted" data-testid="clients-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-4">
              {t('references.trustedPartnersTitle')}
            </h2>
            <p className="text-[#4B5563]">
              {t('references.trustedPartnersSubtitle')}
            </p>
          </div>

          {/* Carrousel logos clients — défilement automatique continu */}
          <LogoCarousel />
        </div>
      </section>

      {/* AFCROs Member Section */}
      <section className="py-16 bg-white" data-testid="afcros-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="bg-[#EAF5E1] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-raleway text-2xl font-bold text-[#573D4E] mb-2">
                {t('references.afcrosMemberTitle')}
              </h2>
              <p className="text-[#4B5563]">
                {t('references.afcrosMemberSubtitle')}
              </p>
            </div>
            <div className="bg-white px-8 py-4 rounded-xl shadow">
              <img src={"/AFCROs.png"} alt="AFCROs" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Study Types Section */}
      <section className="py-16 bg-muted" data-testid="study-types-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-8 text-center">
            {t('references.studyTypesTitle')}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {Array.isArray(studyTypes) && studyTypes.map((type) => (
              <span
                key={type}
                className="px-6 py-3 bg-white rounded-full shadow text-[#573D4E] font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-[#573D4E] overflow-hidden" data-testid="references-cta-section">
        <img
          src={LOGO_WHITE}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-64 lg:w-80 pointer-events-none select-none"
          style={{ opacity: 0.07 }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-6">
            {t('home.talkToUs')}
          </h2>
          <Button
            asChild
            className="bg-[#2E9013] hover:bg-white hover:text-[#573D4E] text-white font-semibold px-10 py-6 rounded-full text-lg"
            data-testid="references-contact-btn"
          >
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

export default ReferencesPage;
