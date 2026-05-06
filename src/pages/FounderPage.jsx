import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HeroWaveTop, HeroWaveBottom } from '../components/GreenWave';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, CheckCircle, Globe, Award, Beaker } from 'lucide-react';
import SEO from '@/components/SEO';

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ease = [0.25, 0.46, 0.45, 0.94];
const fadeLeft  = { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fadeRight = { hidden: { opacity: 0, x: 48, scale: 0.97 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease, delay: 0.15 } } };
const staggerItem = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } };
const heroStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

const FounderPage = () => {
  const { t } = useLanguage();

  const titleParts = t('founder.title').split('—');
  const titleMain  = titleParts[0].trim().split(' ');
  const titleFirst = titleMain.slice(0, -1).join(' ');
  const titleLast  = titleMain[titleMain.length - 1];
  const titleRest  = titleParts[1]?.trim();

  return (
    <div className="min-h-screen bg-muted" data-testid="founder-page">
      <SEO
        title={t('founder.metaTitle')}
        description={t('founder.metaDescription')}
        url="/founder"
      />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden pt-32 pb-32 xl:pt-48 xl:pb-48 bg-white"
        data-testid="founder-hero"
      >
        <HeroWaveTop />
        <HeroWaveBottom />

        <div className="relative z-20 max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left — text */}
            <motion.div
              className="lg:w-7/12 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={heroStagger}
            >
              <motion.p
                className="text-sm uppercase tracking-[0.2em] text-[#2E9013] font-semibold mb-4"
                variants={staggerItem}
              >
                {t('nav.founder')}
              </motion.p>

              <motion.h1
                className="font-raleway text-3xl sm:text-4xl lg:text-5xl font-bold text-[#573D4E] leading-tight mb-8"
                data-testid="founder-title"
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
                  {t('founder.intro')}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
                variants={staggerItem}
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006097] text-white font-semibold px-8 py-4 rounded shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  data-testid="founder-linkedin"
                >
                  <LinkedInIcon />
                  {t('founder.linkedin')}
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-50 border border-gray-200 text-[#2B2B2B] hover:bg-white hover:shadow-md font-semibold px-8 py-4 rounded transition-all duration-200"
                >
                  <Link to="/contact">
                    {t('home.ctaDiscuss')}
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

            {/* Right — portrait */}
            <motion.div
              className="lg:w-5/12 relative"
              initial="hidden"
              animate="visible"
              variants={fadeRight}
            >
              <div className="hero-float relative z-10">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2E9013]/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#a7c9bb]/30 rounded-full blur-3xl -z-10" />
                <div className="rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white relative">
                  <div
                    className="w-full h-[340px] lg:h-[440px] flex flex-col items-center justify-center gap-6"
                    style={{ background: 'linear-gradient(135deg, #573D4E 0%, #3d2b38 55%, #245f0d 100%)' }}
                  >
                    {/* Decorative rings */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10" />
                      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-white/10" />
                    </div>
                    <div className="relative w-32 h-32 rounded-full bg-white/15 backdrop-blur flex items-center justify-center shadow-2xl ring-4 ring-white/25">
                      <span className="text-white font-bold text-4xl tracking-widest">NK</span>
                    </div>
                    <div className="relative text-center px-8">
                      <p className="text-white font-bold text-xl mb-1">Nadège KAMBOU</p>
                      <p className="text-white/60 text-sm">Photo à fournir</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#2E9013] text-white px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap">
                    <Award className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-semibold">10+ {t('founder.yearsLabel')}</span>
                  </div>
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

      {/* Stats strip */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-5 bg-muted rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-[#EAF5E1] flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-[#2E9013]" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#2E9013]">10+</p>
                <p className="text-[#573D4E] font-medium text-sm mt-0.5">{t('founder.yearsLabel')}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-muted rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-[#FEF3DC] flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-[#F5A617]" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#F5A617]">CROs</p>
                <p className="text-[#573D4E] font-medium text-sm mt-0.5">{t('founder.experienceLabel')}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 bg-muted rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-[#EDE8EB] flex items-center justify-center flex-shrink-0">
                <Beaker className="w-7 h-7 text-[#573D4E]" />
              </div>
              <div>
                <p className="text-3xl font-bold text-[#573D4E]">5+</p>
                <p className="text-[#573D4E] font-medium text-sm mt-0.5">{t('founder.expertiseLabel')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio + Therapeutic areas */}
      <section className="py-20 bg-muted" data-testid="bio-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Story */}
            <div>
              <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-6">
                {t('founder.bioTitle')}
              </h2>
              <div className="space-y-4 text-[#4B5563] leading-relaxed">
                <p>{t('founder.text1')}</p>
                <p>{t('founder.text2')}</p>
              </div>
              <blockquote className="mt-8 pl-5 border-l-4 border-[#2E9013]">
                <p className="text-[#573D4E] italic font-medium text-lg leading-relaxed">
                  "{t('founder.quote')}"
                </p>
                <footer className="mt-2 text-sm text-[#2E9013] font-semibold">— Nadège KAMBOU</footer>
              </blockquote>
            </div>

            {/* Therapeutic areas */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#EAF5E1] flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-[#2E9013]" />
                  </div>
                  <h3 className="font-raleway text-xl font-bold text-[#573D4E]">
                    {t('founder.therapeuticAreasTitle')}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {t('founder.therapeuticAreas').map((area, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 bg-[#EAF5E1] text-[#2E9013] rounded-full font-medium flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      {area}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-[#573D4E] overflow-hidden" data-testid="founder-cta-section">
        <img
          src={"/freearcs-pharma-services_logo-white.svg"}
          alt="" aria-hidden="true"
          className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-auto pointer-events-none select-none"
          style={{ opacity: 0.07 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-6">
            {t('home.talkToUs')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#2E9013] hover:bg-white hover:text-[#573D4E] text-white font-semibold px-10 py-6 rounded-full text-lg"
              data-testid="founder-contact-btn"
            >
              <Link to="/contact">
                {t('nav.contactUs')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#573D4E] font-semibold px-10 py-6 rounded-full text-lg"
              data-testid="founder-services-btn"
            >
              <Link to="/services">
                {t('nav.services')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
