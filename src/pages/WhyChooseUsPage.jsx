import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HeroWaveTop, HeroWaveBottom } from '../components/GreenWave';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  ArrowRight,
  Zap,
  Award,
  Users,
  Handshake,
  FileCheck,
  Building2,
  Eye,
  CheckCircle
} from 'lucide-react';
import SEO from '@/components/SEO';

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeLeft  = { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fadeRight = { hidden: { opacity: 0, x: 48, scale: 0.97 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease, delay: 0.15 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } };
const heroStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

const WhyChooseUsPage = () => {
  const { t } = useLanguage();

  const items = t('whyChooseUs.items');
  const icons = [Zap, Award, Users, Handshake, FileCheck, Building2, Eye];
  const colors = ['#2E9013', '#573D4E', '#F5A617', '#2E9013', '#D81C20', '#573D4E', '#F5A617'];

  return (
    <div className="min-h-screen bg-muted" data-testid="why-choose-us-page">
      <SEO
        title={t('whyChooseUs.metaTitle')}
        description={t('whyChooseUs.metaDescription')}
        url="/why-choose-us"
      />

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden pt-32 pb-32 xl:pt-48 xl:pb-48 bg-white"
        data-testid="why-choose-hero"
      >
        <HeroWaveTop />
        <HeroWaveBottom />

        <div className="relative z-20 max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Colonne gauche — texte */}
            <motion.div
              className="lg:w-7/12 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={heroStagger}
            >
              <motion.h1
                className="font-raleway text-3xl sm:text-4xl lg:text-5xl font-bold text-[#573D4E] leading-tight mb-8"
                data-testid="why-choose-title"
                variants={fadeLeft}
              >
                {t('whyChooseUs.title')}
              </motion.h1>

              <motion.div className="max-w-2xl mb-10 mx-auto lg:mx-0" variants={staggerItem}>
                <p className="text-[#4B5563] text-lg leading-relaxed">
                  {t('whyChooseUs.intro')}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
                variants={staggerItem}
              >
                <Button
                  asChild
                  className="bg-[#2E9013] hover:bg-[#1f6b0d] text-white font-semibold px-8 py-4 rounded shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  data-testid="why-choose-cta"
                >
                  <Link to="/contact">
                    {t('whyChooseUs.discuss')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-50 border border-gray-200 text-[#2B2B2B] hover:bg-white hover:shadow-md font-semibold px-8 py-4 rounded transition-all duration-200"
                >
                  <Link to="/services">
                    {t('home.ctaExplore')}
                    <ArrowRight className="ml-2 w-4 h-4 opacity-50" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 opacity-70"
                variants={staggerItem}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">{t('home.memberOf')}</span>
                <div className="h-8 w-px bg-gray-300" />
                <img src={"/AFCROs.png"} alt="AFCROs" className="h-8 w-auto object-contain" />
              </motion.div>
            </motion.div>

            {/* Colonne droite — image flottante */}
            <motion.div
              className="lg:w-5/12 relative"
              initial="hidden"
              animate="visible"
              variants={fadeRight}
            >
              <div className="hero-float relative z-10">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2E9013]/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#a7c9bb]/30 rounded-full blur-3xl -z-10" />
                <div className="rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white">
                  <img
                    src={"/famille-tablette-capsules.webp"}
                    alt="Patient et famille — engagement patient et accès aux traitements innovants"
                    className="w-full h-[340px] lg:h-[440px] object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <style>{`
        .hero-float { animation: heroFloat 8s ease-in-out infinite; }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>

      {/* Reasons Grid */}
      <section className="py-20 bg-muted" data-testid="reasons-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, index) => {
              const Icon = icons[index % icons.length];
              const color = colors[index % colors.length];
              return (
                <Card key={item.title} className="hover:shadow-xl transition-all duration-300" data-testid={`reason-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}15` }}>
                        <Icon className="w-7 h-7" style={{ color }} />
                      </div>
                      <div>
                        <h3 className="font-raleway text-xl font-bold text-[#573D4E] mb-2">{item.title}</h3>
                        <p className="text-[#4B5563] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality & Standards Section */}
      <section className="py-16 bg-white" data-testid="standards-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-6">
                {t('whyChooseUs.qualityTitle')}
              </h2>
              <ul className="space-y-4">
                {t('whyChooseUs.qualityItems').map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#2E9013] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4B5563]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#573D4E] rounded-2xl p-8 text-white">
              <h3 className="font-raleway text-xl font-bold mb-6">{t('whyChooseUs.advantagesTitle')}</h3>
              <ul className="space-y-4">
                {t('whyChooseUs.advantageItems').map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#F5A617] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-[#EAF5E1]" data-testid="comparison-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-8 text-center">
            {t('whyChooseUs.comparisonTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-raleway text-xl font-bold text-[#2E9013] mb-4">Freearcs Pharma Services</h3>
                <ul className="space-y-3">
                  {t('whyChooseUs.fpsBenefits').map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#2E9013] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4B5563]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="opacity-70">
              <CardContent className="p-8">
                <h3 className="font-raleway text-xl font-bold text-gray-500 mb-4">{t('whyChooseUs.largeCroLabel')}</h3>
                <ul className="space-y-3 text-gray-500">
                  {t('whyChooseUs.largeCroLimits').map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-5 h-5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-[#573D4E] overflow-hidden" data-testid="why-choose-cta-section">
        <img
          src={"/freearcs-pharma-services_logo-white.svg"}
          alt="" aria-hidden="true"
          className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-auto pointer-events-none select-none"
          style={{ opacity: 0.07 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-4">
            {t('whyChooseUs.discuss')}
          </h2>
          <Button asChild className="bg-[#2E9013] hover:bg-white hover:text-[#573D4E] text-white font-semibold px-10 py-6 rounded-full text-lg" data-testid="why-choose-contact-btn">
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

export default WhyChooseUsPage;
