import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HeroWaveTop, HeroWaveBottom } from '../components/GreenWave';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowRight, Beaker, Brain, Heart, Activity, Pill, Shield } from 'lucide-react';
import SEO from '@/components/SEO';

const HERO_IMAGE = "/cardio-stethoscope-digital.webp";

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeLeft  = { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fadeRight = { hidden: { opacity: 0, x: 48, scale: 0.97 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease, delay: 0.15 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } };
const heroStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

const TherapeuticExpertisePage = () => {
  const { t } = useLanguage();

  const titleParts = t('therapeuticExpertise.title').split('—');
  const titleMain  = titleParts[0].trim().split(' ');
  const titleFirst = titleMain.slice(0, -1).join(' ');
  const titleLast  = titleMain[titleMain.length - 1];
  const titleRest  = titleParts[1]?.trim();

  return (
    <div className="min-h-screen bg-muted" data-testid="therapeutic-expertise-page">
      <SEO
        title={t('therapeuticExpertise.metaTitle')}
        description={t('therapeuticExpertise.metaDescription')}
        url="/therapeutic-expertise"
      />

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden pt-32 pb-32 xl:pt-48 xl:pb-48 bg-white"
        data-testid="therapeutic-hero"
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
                data-testid="therapeutic-title"
                variants={fadeLeft}
              >
                <span className="lg:whitespace-nowrap">
                  {titleFirst}
                  <span className="italic font-normal text-[#2E9013]"> {titleLast}</span>
                </span>
                {titleRest && (
                  <>
                    <br className="hidden lg:block" />
                    {titleRest}
                  </>
                )}
              </motion.h1>

              <motion.div className="max-w-2xl mb-10 mx-auto lg:mx-0" variants={staggerItem}>
                <p className="text-[#4B5563] text-lg leading-relaxed">
                  {t('therapeuticExpertise.introText')}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
                variants={staggerItem}
              >
                <Button
                  asChild
                  className="bg-[#2E9013] hover:bg-[#1f6b0d] text-white font-semibold px-8 py-4 rounded shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  data-testid="therapeutic-cta-discuss"
                >
                  <Link to="/contact">
                    {t('therapeuticExpertise.discuss')}
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
                    src={HERO_IMAGE}
                    alt="Cardiologie et oncologie — recherche clinique sur les maladies cardiovasculaires"
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

      {/* Oncology Section */}
      <section className="py-20 bg-muted" data-testid="oncology-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <Card className="shadow-xl overflow-hidden">
            <CardHeader className="bg-[#EAF5E1] p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#2E9013] flex items-center justify-center">
                  <Beaker className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm font-medium text-[#2E9013] bg-white px-3 py-1 rounded-full">
                    {t('therapeuticExpertise.priorityArea')}
                  </span>
                  <CardTitle className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mt-2">
                    {t('therapeuticExpertise.oncology.title')}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {t('therapeuticExpertise.oncology.items').map((item) => (
                  <div key={item} className="bg-muted p-4 rounded-lg text-center">
                    <span className="text-[#573D4E] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CNS & Rare Diseases Section */}
      <section className="py-20 bg-white" data-testid="cns-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <Card className="shadow-xl overflow-hidden">
            <CardHeader className="bg-[#EDE8EB] p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#573D4E] flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm font-medium text-[#573D4E] bg-white px-3 py-1 rounded-full">
                    {t('therapeuticExpertise.priorityArea')}
                  </span>
                  <CardTitle className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mt-2">
                    {t('therapeuticExpertise.cns.title')}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              {/* Média 1 — Médecin + bébé + capsules · Pédiatrie / CNS · directive médias v1.0 */}
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {t('therapeuticExpertise.cns.items').map((item) => (
                    <div key={item} className="bg-muted p-4 rounded-lg text-center">
                      <span className="text-[#573D4E] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={"/medecin-bebe-capsules.webp"}
                    alt="Médecin avec bébé — pédiatrie, maladies rares et SNC en recherche clinique"
                    className="w-full h-[220px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Areas Section */}
      <section className="py-20 bg-muted" data-testid="other-areas-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-8">
            {t('therapeuticExpertise.other.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t('therapeuticExpertise.other.items').map((item, index) => {
              const icons = [Shield, Pill, Activity, Heart, Activity];
              const Icon = icons[index % icons.length];
              return (
                <Card key={item} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#FEF3DC] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#F5A617]" />
                    </div>
                    <p className="text-[#573D4E] font-medium">{item}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#2E9013] mb-2">30+</p>
              <p className="text-[#4B5563]">{t('therapeuticExpertise.statsProjects')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#573D4E] mb-2">10+</p>
              <p className="text-[#4B5563]">{t('therapeuticExpertise.statsAreas')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#F5A617] mb-2">I–IV</p>
              <p className="text-[#4B5563]">{t('therapeuticExpertise.statsPhases')}</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#D81C20] mb-2">EU & FR</p>
              <p className="text-[#4B5563]">{t('therapeuticExpertise.statsRegulatory')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-[#573D4E] overflow-hidden" data-testid="therapeutic-cta-section">
        <img
          src={"/freearcs-pharma-services_logo-white.svg"}
          alt="" aria-hidden="true"
          className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-auto pointer-events-none select-none"
          style={{ opacity: 0.07 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-4">
            {t('therapeuticExpertise.discuss')}
          </h2>
          <Button asChild className="bg-[#2E9013] hover:bg-white hover:text-[#573D4E] text-white font-semibold px-10 py-6 rounded-full text-lg" data-testid="therapeutic-contact-btn">
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

export default TherapeuticExpertisePage;
