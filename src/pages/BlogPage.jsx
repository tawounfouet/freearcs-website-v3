// filepath: /Users/awf/Projects/clients/freearcs/fps-react-frontend/src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

const ARTICLES = [
  {
    tag: 'Réglementaire',
    title: 'Actualité réglementaire en recherche clinique',
    excerpt: "Analyse Freearcs Pharma Services autour des évolutions qui transforment la préparation et la conduite des études cliniques.",
    date: 'Article LinkedIn',
    readTime: '4 min',
    image: '/cardio-stethoscope-digital.webp',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7434858946802233344/',
  },
  {
    tag: 'Opérations cliniques',
    title: "Anticiper les étapes critiques d'un projet clinique",
    excerpt: "Retour terrain sur les arbitrages opérationnels, les délais et la coordination des parties prenantes dans les études complexes.",
    date: 'Article LinkedIn',
    readTime: '4 min',
    image: '/reunion-equipe_gemini.webp',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7396223126247788545/',
  },
  {
    tag: 'Stratégie',
    title: 'Accompagner les promoteurs innovants',
    excerpt: "Pourquoi les biotechs, medtechs et startups HealthTech ont besoin d'un partenaire CRO agile et pédagogique.",
    date: 'Article LinkedIn',
    readTime: '5 min',
    image: '/main-ampoule-succes.webp',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7397314048805097472/',
  },
];

const TAG_COLORS = {
  'Réglementaire': { bg: '#EAF5E1', color: '#2E9013' },
  'Opérations cliniques': { bg: '#EDE8EB', color: '#573D4E' },
  'Stratégie': { bg: '#FEF3DC', color: '#F5A617' },
};



const BlogPage = () => {
  const { t } = useLanguage();
  const topics = t('blog.topics');

  return (
    <div className="min-h-screen bg-muted" data-testid="blog-page">
      <SEO
        title={t('blog.metaTitle')}
        description={t('blog.metaDescription')}
        url="/blog"
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
                  Blog
                </h1>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-2">
                  <div className="flex items-center justify-center gap-2 text-white/80 font-bold text-lg">
                    <Link to="/" className="text-white hover:text-white/80 transition-colors">{t('nav.home')}</Link>
                    <span className="text-white/60">/</span>
                    <span className="text-white">Blog</span>
                  </div>
                  {/* <span className="hidden sm:inline-block text-white/40">|</span>
                  <span className="text-[#2E9013] text-lg font-medium italic">
                    {t('blog.introText')}
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-20" data-testid="articles-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {ARTICLES.map((article) => {
              const tagStyle = TAG_COLORS[article.tag] || { bg: '#EDE8EB', color: '#573D4E' };
              return (
                <Card key={article.url} className="group overflow-hidden border-[#E0DDD8] hover:shadow-xl transition-all duration-300">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="aspect-video overflow-hidden bg-[#F8FAF7]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-3 text-sm mb-4">
                        <span
                          className="inline-flex items-center gap-1 font-semibold px-2.5 py-1 rounded-full text-xs"
                          style={{ backgroundColor: tagStyle.bg, color: tagStyle.color }}
                        >
                          <Tag className="w-3 h-3" />
                          {article.tag}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#4B5563] text-xs">
                          <Calendar className="w-3 h-3" />
                          {article.date} · {article.readTime}
                        </span>
                      </div>
                      <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-3 group-hover:text-[#2E9013] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-[#4B5563] text-sm leading-relaxed mb-5">{article.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-[#2E9013] font-semibold text-sm">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA LinkedIn ── */}
      <section className="py-16 mx-4 sm:mx-8 lg:mx-16 mb-4 rounded-3xl bg-[#573D4E]" data-testid="newsletter-section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-4">
            {t('blog.stayUpdatedTitle')}
          </h2>
          <p className="text-white/80 mb-8">{t('blog.stayUpdatedText')}</p>
          <a
            href="https://www.linkedin.com/company/freearcs-pharma-services/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#006097] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            data-testid="blog-linkedin-btn"
          >
            {t('blog.linkedinFollow')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Topics ── */}
      <section className="py-16 bg-muted" data-testid="topics-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-6 text-center">{t('blog.topicsTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.isArray(topics) && topics.map((topic) => (
              <span key={topic} className="px-5 py-2 bg-white rounded-full shadow-sm text-[#573D4E] hover:bg-[#2E9013] hover:text-white cursor-pointer transition-colors text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
