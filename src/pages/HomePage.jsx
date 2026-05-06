import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GreenWave, GreenWaveDivider, HeroWaveTop, HeroWaveBottom } from '../components/GreenWave';
import LogoCarousel from '../components/LogoCarousel';
import SEO from '../components/SEO';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  ClipboardList,
  FileText,
  DollarSign,
  Search,
  Users,
  GraduationCap,
  ArrowRight,
  Beaker,
  Brain,
  Heart,
  Microscope,
  Bug,
  Wind
} from 'lucide-react';

const HERO_IMAGE = "/reunion-equipe_gemini.webp";

// ─── Animation variants ───────────────────────────────────────────────────────

const ease = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 48, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease, delay: 0.15 } },
};

const staggerContainer = (stagger = 0.1, delayStart = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delayStart } },
});

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const heroStagger = staggerContainer(0.12, 0.1);

// ─── Rotating hero title ──────────────────────────────────────────────────────

const HERO_TITLES = [
  {
    line1: "L\u2019expertise au service de",
    accent: 'la recherche clinique',
    line3: '',
  },
  {
    line1: 'Élargissons le choix thérapeutique',
    accent: 'pour chaque patient.',
    line3: '',
  },
  {
    line1: 'Un périmètre complet',
    accent: 'pour vos études cliniques.',
    line3: '',
  },
];

const RotatingTitle = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const current = HERO_TITLES[titleIndex];
  // fullText = "line1 accent" — on sépare ensuite pour le style
  const fullText = `${current.line1} ${current.accent}`;
  const splitAt = current.line1.length + 1; // indice de début de la partie accent

  useEffect(() => {
    let timeout;
    if (!isDeleting) {
      if (displayCount < fullText.length) {
        // Frappe caractère par caractère
        timeout = setTimeout(() => setDisplayCount((c) => c + 1), 48);
      } else {
        // Pause avant effacement
        timeout = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayCount > 0) {
        // Effacement plus rapide que la frappe
        timeout = setTimeout(() => setDisplayCount((c) => c - 1), 22);
      } else {
        // Passe au titre suivant
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % HERO_TITLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayCount, isDeleting, fullText]);

  // Partie normale vs partie en accent (italique vert)
  const shownLine1   = fullText.slice(0, Math.min(displayCount, splitAt));
  const shownAccent  = displayCount > splitAt ? fullText.slice(splitAt, displayCount) : '';

  return (
    <div className="mb-8 text-center">
      <h1
        className="font-raleway text-3xl sm:text-4xl lg:text-5xl font-bold text-[#573D4E] leading-tight inline"
        data-testid="hero-title"
      >
        {shownLine1}
        {shownAccent && (
          <span className="italic font-normal text-[#2E9013]">{shownAccent}</span>
        )}
        {/* Curseur clignotant */}
        <span className="inline-block w-[3px] h-[1em] bg-[#2E9013] ml-1 align-middle animate-[blink_0.9s_step-end_infinite]" />
      </h1>
    </div>
  );
};

// ─── Animated counter ─────────────────────────────────────────────────────────

const Counter = ({ target, suffix = '', duration = 1.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
};

// ─── Reusable scroll-reveal wrapper ──────────────────────────────────────────

const Reveal = ({ children, className = '', variants = fadeUp, delay = 0 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={delay ? { ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay } } } : variants}
  >
    {children}
  </motion.div>
);

// ─── Component ────────────────────────────────────────────────────────────────

const HomePage = () => {
  const { t } = useLanguage();

  const services = [
    { icon: ClipboardList, title: t('home.projectManagement'), desc: t('home.projectManagementDesc') },
    { icon: FileText, title: t('home.regulatoryAffairs'), desc: t('home.regulatoryAffairsDesc') },
    { icon: DollarSign, title: t('home.contractBudget'), desc: t('home.contractBudgetDesc') },
    { icon: Search, title: t('home.feasibilityMonitoring'), desc: t('home.feasibilityMonitoringDesc') },
    { icon: Users, title: t('home.siteSupport'), desc: t('home.siteSupportDesc') },
    { icon: GraduationCap, title: t('home.investigatorCompliance'), desc: t('home.investigatorComplianceDesc') },
  ];

  const operationalItems = [
    t('home.embeddedExecution'),
    t('home.sponsorOversight'),
    t('home.flexibleMonitoring'),
    t('home.independentStructure'),
  ];

  const therapeuticAreas = [
    { icon: Beaker, title: t('home.oncology'), color: '#2E9013' },
    { icon: Brain, title: t('home.cnsRareDiseases'), color: '#573D4E' },
    { icon: Heart, title: t('home.cardiology'), color: '#D81C20' },
    { icon: Microscope, title: t('home.dermatology'), color: '#F5A617' },
    { icon: Bug, title: t('home.infectiousDiseases'), color: '#2E9013' },
    { icon: Wind, title: t('home.pulmonology'), color: '#573D4E' },
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="home-page">
      <SEO
        title={t('home.heroTitleLine1') || t('home.heroTitle')}
        description={t('home.heroSubtitle')}
        url="/"
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden pt-32 pb-32 xl:pt-48 xl:pb-48 bg-white"
        data-testid="hero-section"
      >
        <HeroWaveTop />
        <HeroWaveBottom />

        <div className="relative z-20 max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Text column */}
            <motion.div
              className="lg:w-7/12 text-center flex flex-col items-center"
              initial="hidden"
              animate="visible"
              variants={heroStagger}
            >
              <RotatingTitle />

              <motion.div className="max-w-2xl mb-10 mx-auto" variants={staggerItem}>
                <p className="text-[#4B5563] text-lg leading-relaxed">
                  {t('home.heroSubtitle')}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                variants={staggerItem}
              >
                <Button
                  asChild
                  className="bg-[#2E9013] hover:bg-[#1f6b0d] text-white font-semibold px-8 py-4 rounded shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  data-testid="hero-cta-discuss"
                >
                  <Link to="/contact">
                    {t('home.ctaDiscuss')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-gray-50 border border-gray-200 text-[#2B2B2B] hover:bg-white hover:shadow-md font-semibold px-8 py-4 rounded transition-all duration-200"
                  data-testid="hero-cta-explore"
                >
                  <Link to="/services">
                    {t('home.ctaExplore')}
                    <ArrowRight className="ml-2 w-4 h-4 opacity-50" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-4 opacity-70"
                variants={staggerItem}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">{t('home.memberOf')}</span>
                <div className="h-8 w-px bg-gray-300" />
                <img src={"/AFCROs.png"} alt="AFCROs" className="h-8 w-auto object-contain" />
              </motion.div>
            </motion.div>

            {/* Image column */}
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
                    alt="Équipe Freearcs Pharma Services en réunion"
                    className="w-full h-[340px] lg:h-[440px] object-cover object-top"
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
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      {/* ── Who We Are / What We Do ──────────────────────────────────────── */}
      <section className="py-24 bg-white relative" data-testid="who-we-are-section">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-16 xl:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            <Reveal variants={fadeLeft} data-testid="what-we-do-section">
              <div data-testid="what-we-do-section">
                <h2 className="font-raleway text-3xl font-bold text-[#573D4E] mb-2">
                  {t('home.whoWeAre')}
                </h2>
                <p className="text-[#2E9013] font-semibold italic mb-6">
                  {t('home.whoWeAreTagline')}
                </p>
                <p className="text-[#4B5563] mb-4 leading-relaxed">
                  {t('home.whoWeAreText')}
                </p>
                <p className="text-[#4B5563] mb-8 leading-relaxed">
                  {t('home.whoWeAreText2')}
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-[#2E9013] hover:text-[#1a5a0b] font-medium"
                >
                  {t('home.whoWeAreLink')}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal variants={fadeRight}>
              <div className="bg-white rounded-2xl p-10 relative overflow-hidden shadow-sm border border-gray-100">
                <h2 className="font-raleway text-3xl font-bold text-[#2E9013] mb-6">
                  {t('home.whatWeDo')}
                </h2>
                <ul className="space-y-3 relative z-10">
                  {(t('home.whatWeDoItems') || []).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#2E9013] font-bold text-base leading-relaxed flex-shrink-0">▸</span>
                      <span className="text-[#4B5563] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 400 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  style={{ height: '80px', opacity: 0.15 }}
                >
                  <path fill="#2E9013" d="M0,80 C100,20 200,120 400,60 L400,100 L0,100 Z" />
                </svg>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <GreenWaveDivider />

      {/* ── Operational Model ────────────────────────────────────────────── */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <Reveal>
            <div className="bg-[#573D4E] rounded-2xl px-10 py-8 text-white">
              <h3 className="font-raleway text-lg font-bold mb-6">
                {t('home.operationalModel')}
              </h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={staggerContainer(0.1, 0.2)}
              >
                {operationalItems.map((item) => (
                  <motion.div key={item} className="flex items-start gap-3" variants={staggerItem}>
                    <span className="text-[#F5A617] font-bold text-base leading-relaxed flex-shrink-0">▸</span>
                    <span className="text-white/90 text-base leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* ── Core Services ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white" data-testid="services-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-[#573D4E] mb-4">
                {t('home.coreServices')}
              </h2>
            </div>
          </Reveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer(0.08)}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={staggerItem} data-testid={`service-card-${index}`}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                  transition={{ duration: 0.25, ease }}
                >
                  <Card className="group h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#EAF5E1] flex items-center justify-center mb-4 group-hover:bg-[#2E9013] transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-[#2E9013] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-raleway text-lg font-bold text-[#573D4E] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <Link
                        to="/services"
                        className="inline-flex items-center text-[#2E9013] hover:text-[#1a5a0b] text-sm font-medium"
                      >
                        {t('home.learnMore')}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2}>
            <div className="text-center mt-10">
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#2E9013] text-[#2E9013] hover:bg-[#573D4E] hover:text-white hover:border-[#573D4E] font-semibold px-8 py-3 rounded-full"
                data-testid="view-all-services"
              >
                <Link to="/services">
                  {t('home.viewAllServices')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ANSM Fast-Track ──────────────────────────────────────────────── */}
      {/* <section className="py-16 bg-[#FEF3DC]" data-testid="ansm-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            <Reveal variants={fadeLeft}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-raleway text-2xl font-bold text-[#573D4E] mb-2">
                  {t('home.ansm.title')}
                </h3>
                <p className="text-[#F5A617] font-semibold mb-4">{t('home.ansm.subtitle')}</p>
                <p className="text-[#4B5563] leading-relaxed mb-4">
                  {t('home.ansm.text')}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-[#2E9013] hover:text-[#1a5a0b] font-medium"
                >
                  {t('home.learnMore')}
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal variants={fadeRight}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="font-semibold text-[#573D4E] mb-3">Procedures:</h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {t('home.ansm.procedures')}
                </p>
                <div className="mt-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#2E9013] hover:text-[#1a5a0b] font-medium"
                  >
                    {t('home.learnMore')}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section> */}

      <GreenWaveDivider flip />

      {/* ── Therapeutic Expertise ────────────────────────────────────────── */}
      {/* <section className="py-20 bg-white" data-testid="therapeutic-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold text-[#573D4E] mb-4">
                {t('home.therapeuticExpertise')}
              </h2>
            </div>
          </Reveal>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer(0.07)}
          >
            {therapeuticAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.04 }}
                transition={{ duration: 0.2, ease }}
                className="text-center p-5 rounded-2xl bg-white border border-gray-100 cursor-default"
                data-testid={`therapeutic-area-${index}`}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${area.color}20` }}
                >
                  <area.icon className="w-6 h-6" style={{ color: area.color }} />
                </div>
                <h3 className="font-raleway text-sm font-bold text-[#573D4E] leading-tight">
                  {area.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2}>
            <div className="text-center mt-10">
              <Button
                asChild
                variant="ghost"
                className="text-[#2E9013] hover:text-[#1a5a0b] font-semibold"
                data-testid="explore-expertise"
              >
                <Link to="/therapeutic-expertise">
                  {t('home.exploreExpertise')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* ── References & Stats ───────────────────────────────────────────── */}
      <section className="py-16 bg-white" data-testid="references-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

          <Reveal>
            <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] text-center mb-10">
              Ils nous font confiance
            </h2>
            <div className="py-8">
              <LogoCarousel />
            </div>
          </Reveal>

          {/* Indicateurs clés */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer(0.15)}
          >
            {/* Carte 1 — Projets */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(46,144,19,0.10)' }}
              transition={{ duration: 0.2 }}
              className="text-center p-8 bg-white border border-gray-100 rounded-2xl"
            >
              <p className="text-4xl font-bold text-[#2E9013] mb-1 font-raleway">
                <Counter target={30} suffix="+" />
              </p>
              <p className="text-xs uppercase tracking-widest text-[#2E9013]/60 font-semibold mb-2">Depuis 2020</p>
              <p className="text-sm text-[#4B5563]">Projets cliniques supervisés</p>
            </motion.div>

            {/* Carte 2 — Fidélisation */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(87,61,78,0.10)' }}
              transition={{ duration: 0.2 }}
              className="text-center p-8 bg-white border border-gray-100 rounded-2xl"
            >
              <p className="text-4xl font-bold text-[#573D4E] mb-1 font-raleway">
                <Counter target={65} suffix=" %" />
              </p>
              <p className="text-xs uppercase tracking-widest text-[#573D4E]/60 font-semibold mb-2">Rétention</p>
              <p className="text-sm text-[#4B5563]">Taux de fidélisation client</p>
            </motion.div>

            {/* Carte 3 — International */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(245,166,23,0.10)' }}
              transition={{ duration: 0.2 }}
              className="text-center p-8 bg-white border border-gray-100 rounded-2xl"
            >
              <p className="text-4xl font-bold text-[#F5A617] mb-1 font-raleway">International</p>
              <p className="text-xs uppercase tracking-widest text-[#F5A617]/60 font-semibold mb-2">Présence</p>
              <p className="text-sm text-[#4B5563] leading-relaxed">France · Belgique · UK<br />Irlande · Suisse · Burkina-Faso</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#EAF5E1] mb-12 mx-4 sm:mx-8 lg:mx-16 rounded-3xl" data-testid="cta-section">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-8 text-center">
          <Reveal>
            <p className="font-raleway text-2xl sm:text-3xl font-bold text-[#573D4E] mb-3">
              {t('home.scheduleTitle')}
            </p>
            <p className="font-raleway text-base text-[#4B5563] mb-10">
              {t('home.scheduleSubtitle')}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Button
              asChild
              className="bg-[#2E9013] hover:bg-[#1f6b0d] text-white font-semibold px-10 py-6 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              data-testid="cta-contact"
            >
              <Link to="/contact">
                {t('home.bookMeeting')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
