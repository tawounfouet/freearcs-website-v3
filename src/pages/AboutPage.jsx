import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight, Eye, Target, Sparkles, Users } from 'lucide-react';
import SEO from '@/components/SEO';

const VISION_IMAGE = "/main-ampoule-succes.webp";
const MISSION_IMAGE = "/famille-tablette-capsules.webp";

const VALUE_ICONS = [Users, Sparkles, Eye, Target];

const AboutPage = () => {
  const { t } = useLanguage();
  const values = t('about.values');

  return (
    <div className="min-h-screen bg-[#F9FAFD]" data-testid="about-page">
      <SEO
        title={t('about.metaTitle')}
        description={t('about.metaDescription')}
        url="/about"
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/img/background-2.jpg)' }}
        />
        <div className="absolute inset-0 bg-[#2B2B2B]/60" /> {/* Overlay */}

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="pt-24 pb-20 lg:pt-32 lg:pb-24">
            <div className="w-full text-center">
              <div className="overflow-hidden">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-0 leading-none">
                  Qui sommes-nous ?
                </h1>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-2">
                  <div className="flex items-center justify-center gap-2 text-white/80 font-bold text-lg">
                    <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
                    <span className="text-white/60">/</span>
                    <span className="text-white">Qui sommes-nous ?</span>
                  </div>
                  <span className="hidden sm:inline-block text-white/40">|</span>
                  <span className="text-[#2E9013] text-lg font-medium italic">
                    {/* {t('about.heroTagline')} */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Présentation (Company Overview) ────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Présentation</h3>
            <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4 mb-8"></div>
          </div>

          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-xl shadow-sm">
            <h5 className="text-[#2B2B2B] text-xl font-bold mb-6">CRO indépendante · France · Depuis 2020</h5>
            <p className="text-[#4B5563] text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#2E9013] first-letter:mr-3 first-letter:float-left">
              {t('about.intro')}
            </p>

            <p className="text-[#4B5563] text-lg leading-relaxed mt-6">
              {t('about.introText2')}
            </p>

            <blockquote className="my-10 ml-0 lg:ml-12 border-l-4 border-[#2E9013] pl-6 max-w-4xl">
              <h5 className="font-medium text-xl md:text-2xl text-[#573D4E] italic leading-relaxed">
                "{t('about.introText3')}"
              </h5>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission (Message from CEO Layouts Combined) ────────── */}
      <section className="py-16 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col shadow-sm rounded-xl overflow-hidden bg-white">

            {/* Vision Row */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-5/12 relative min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${VISION_IMAGE})` }}
                />
              </div>
              <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex items-center bg-white">
                <div>
                  <h5 className="font-raleway text-2xl font-bold text-[#573D4E] mb-6">
                    {t('about.visionTitle')}
                  </h5>
                  <p className="text-[#4B5563] text-lg leading-relaxed">
                    {t('about.visionText')}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Row */}
            <div className="flex flex-col lg:flex-row-reverse border-t border-gray-100">
              <div className="lg:w-5/12 relative min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${MISSION_IMAGE})` }}
                />
              </div>
              <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex items-center bg-white">
                <div>
                  <h5 className="font-raleway text-2xl font-bold text-[#573D4E] mb-6">
                    {t('about.missionTitle')}
                  </h5>
                  <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                    {t('about.missionText')}
                  </p>
                  <p className="text-[#2E9013] text-xl italic font-semibold">
                    "{t('about.signature')}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Valeurs (Global Leadership Card Grid) ──────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#573D4E]">{t('about.valuesTitle')}</h3>
            <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
              return (
                <div key={value.title} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#EDE8EB] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#573D4E]" />
                </div>
                <h5 className="font-raleway text-xl font-bold text-[#573D4E] mb-3">
                  {value.title}
                </h5>
                <p className="text-[#4B5563] text-base leading-relaxed">
                  {value.text}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Meet the Founder (Card) ────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="bg-[#EAF5E1] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="lg:w-8/12">
              <h2 className="font-raleway text-3xl font-bold text-[#573D4E] mb-4">{t('about.meetFounder')}</h2>
              <p className="text-[#4B5563] text-lg leading-relaxed">{t('founder.intro')}</p>
            </div>
            <div className="lg:w-auto flex-shrink-0">
              <Button asChild className="bg-[#2E9013] hover:bg-[#573D4E] text-white font-semibold px-8 py-4 rounded-full shadow-lg">
                <Link to="/about/founder">{t('about.meetFounder')}<ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      {/* <section className="bg-[#2E9013] py-16 text-center lg:text-left">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-8/12">
              <h4 className="text-white text-2xl lg:text-3xl font-bold mb-0 leading-tight">
                {t('about.ctaTitle')}
              </h4>
            </div>
            <div className="lg:w-auto">
              <Link
                to="/contact"
                className="inline-block bg-white text-[#2E9013] hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg transition-all"
              >
                {t('about.ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
