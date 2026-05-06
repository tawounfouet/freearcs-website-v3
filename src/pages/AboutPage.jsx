import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HeroWaveTop, HeroWaveBottom } from '../components/GreenWave';
import { Button } from '../components/ui/button';
import { ArrowRight, Eye, Target, Sparkles, Users } from 'lucide-react';
import SEO from '@/components/SEO';

const VISION_IMAGE  = "/main-ampoule-succes.webp";
const MISSION_IMAGE = "/famille-tablette-capsules.webp";


const ease = [0.25, 0.46, 0.45, 0.94];
const fadeUp    = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
const fadeLeft  = { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } } };
const fadeRight = { hidden: { opacity: 0, x: 48 },  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease, delay: 0.15 } } };
const heroStagger     = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const staggerChildren = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const VALUE_ICONS  = [Users, Sparkles, Eye, Target];
const VALUE_COLORS = [
  { bg: 'bg-[#EAF5E1]', icon: 'text-[#2E9013]' },
  { bg: 'bg-[#FEF3DC]', icon: 'text-[#F5A617]'  },
  { bg: 'bg-[#EDE8EB]', icon: 'text-[#573D4E]'  },
  { bg: 'bg-[#EAF5E1]', icon: 'text-[#2E9013]'  },
];

const AboutPage = () => {
  const { t } = useLanguage();
  const values = t('about.values');

  return (
    <div className="min-h-screen bg-muted" data-testid="about-page">
      <SEO
        title={t('about.metaTitle')}
        description={t('about.metaDescription')}
        url="/about"
      />

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden pt-28 pb-24 xl:pt-40 xl:pb-36 bg-white"
        data-testid="about-hero"
      >
        <HeroWaveTop />
        <HeroWaveBottom />
        <div className="relative z-20 max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 w-full">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={heroStagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#EAF5E1] text-[#2E9013] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              CRO indépendante · France · Depuis 2020
            </motion.div>
            <motion.h1 className="font-raleway text-4xl sm:text-5xl lg:text-6xl font-bold text-[#573D4E] leading-tight mb-4" variants={fadeUp} data-testid="about-title">
              Qui sommes-nous ?
            </motion.h1>
            <motion.p className="text-xl sm:text-2xl italic text-[#2E9013] font-medium mb-10" variants={fadeUp}>
              {t('about.heroTagline')}
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-4" variants={fadeUp}>
              <Button asChild className="bg-[#2E9013] hover:bg-[#1f6b0d] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-200" data-testid="about-cta-founder">
                <Link to="/about/founder">{t('about.meetFounder')}<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="bg-gray-50 border border-gray-200 text-[#2B2B2B] hover:bg-white hover:shadow-md font-semibold px-8 py-4 rounded-full transition-all duration-200">
                <Link to="/contact">{t('about.ctaButton')}<ArrowRight className="ml-2 w-4 h-4 opacity-50" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Présentation ── */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div
            className="grid lg:grid-cols-3 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          >
            {/* Bloc 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-muted rounded-2xl p-8 flex flex-col gap-4"
            >
              {/* <div className="w-10 h-10 rounded-full bg-[#EAF5E1] flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#2E9013]" />
              </div> */}
              <p className="text-[#4B5563] text-base leading-relaxed">{t('about.intro')}</p>
            </motion.div>

            {/* Bloc 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-muted rounded-2xl p-8 flex flex-col gap-4"
            >
              {/* <div className="w-10 h-10 rounded-full bg-[#FEF3DC] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-[#F5A617]" />
              </div> */}
              <p className="text-[#4B5563] text-base leading-relaxed">{t('about.introText2')}</p>
            </motion.div>

            {/* Bloc 3 — signature */}
            <motion.div
              variants={fadeUp}
              className="bg-[#573D4E] rounded-2xl p-8 flex flex-col gap-4"
            >
              {/* <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-white" />
              </div> */}
              <p className="text-white/90 text-base leading-relaxed italic">{t('about.introText3')}</p>
              {/* <div className="mt-auto pt-4 flex items-center gap-3">
                <img src="/AFCROs.png" alt="AFCROs" className="h-6 w-auto object-contain brightness-0 invert" />
                <span className="text-white/60 text-xs">{t('about.memberOf')}</span>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-20 bg-muted" data-testid="vision-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.div className="lg:w-5/12" variants={fadeLeft}>
              <div className="rounded-3xl overflow-hidden shadow-xl border-[8px] border-white">
                <img src={VISION_IMAGE} alt="Notre Vision — Freearcs Pharma Services" className="w-full h-[320px] lg:h-[400px] object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div className="lg:w-7/12" variants={fadeRight}>
              <div className="w-14 h-14 rounded-full bg-[#EAF5E1] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#2E9013]" />
              </div>
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-[#573D4E] mb-6">{t('about.visionTitle')}</h2>
              <p className="text-[#4B5563] text-lg leading-relaxed">{t('about.visionText')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 bg-white" data-testid="mission-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.div className="lg:w-5/12" variants={fadeRight}>
              <div className="rounded-3xl overflow-hidden shadow-xl border-[8px] border-gray-100">
                <img src={MISSION_IMAGE} alt="Notre Mission — Freearcs Pharma Services" className="w-full h-[320px] lg:h-[400px] object-cover" loading="lazy" />
              </div>
            </motion.div>
            <motion.div className="lg:w-7/12" variants={fadeLeft}>
              <div className="w-14 h-14 rounded-full bg-[#FEF3DC] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#F5A617]" />
              </div>
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-[#573D4E] mb-6">{t('about.missionTitle')}</h2>
              <p className="text-[#4B5563] text-lg leading-relaxed mb-6">{t('about.missionText')}</p>
              <p className="text-[#573D4E] text-xl italic font-semibold">"{t('about.signature')}"</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-20 bg-muted" data-testid="values-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-[#573D4E]">{t('about.valuesTitle')}</h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerChildren}>
            {values.map((value, index) => {
              const Icon  = VALUE_ICONS[index % VALUE_ICONS.length];
              const color = VALUE_COLORS[index % VALUE_COLORS.length];
              return (
                <motion.div key={value.title} variants={fadeUp} className="bg-white rounded-2xl shadow-md p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200" data-testid={`value-card-${index}`}>
                  <div className={`w-12 h-12 rounded-full ${color.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${color.icon}`} />
                  </div>
                  <div>
                    <h3 className="font-raleway text-lg font-bold text-[#573D4E] mb-2">{value.title}</h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed">{value.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Fondatrice ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-2xl">
            <h2 className="font-raleway text-3xl font-bold text-[#573D4E] mb-4">{t('about.meetFounder')}</h2>
            <p className="text-[#4B5563] leading-relaxed mb-8">{t('founder.intro')}</p>
            <Button asChild className="bg-[#2E9013] hover:bg-[#573D4E] text-white font-semibold px-6 py-3 rounded-full" data-testid="meet-founder-btn">
              <Link to="/about/founder">{t('about.meetFounder')}<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA bas de page ── */}
      <section className="py-16 mx-4 sm:mx-8 lg:mx-16 mb-12 rounded-3xl bg-[#EAF5E1]" data-testid="about-cta-section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-8">{t('about.ctaTitle')}</h2>
          <Button asChild className="bg-[#2E9013] hover:bg-[#1f6b0d] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-200" data-testid="about-contact-btn">
            <Link to="/contact">{t('about.ctaButton')}<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
