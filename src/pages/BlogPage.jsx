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
  'Réglementaire':        { bg: '#EAF5E1', color: '#2E9013' },
  'Opérations cliniques': { bg: '#EDE8EB', color: '#573D4E' },
  'Stratégie':            { bg: '#FEF3DC', color: '#F5A617' },
};

const PolygonBg = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <polygon points="1100,0 1440,0 1440,280" fill="rgba(255,255,255,0.04)" />
    <polygon points="1200,420 1440,320 1440,420" fill="rgba(255,255,255,0.05)" />
    <polygon points="-60,0 280,0 180,200 -60,140" fill="rgba(46,144,19,0.08)" />
    <polygon points="0,320 200,420 0,420" fill="rgba(255,255,255,0.04)" />
    <polygon points="180,60 340,20 420,120 300,180 160,140" fill="rgba(245,166,23,0.07)" />
    <polygon points="850,20 1020,0 1060,160 920,190 800,100" fill="rgba(255,255,255,0.03)" />
    <polygon points="560,340 750,300 800,420 520,420" fill="rgba(46,144,19,0.06)" />
    <polygon points="1100,180 1280,140 1350,280 1160,310" fill="rgba(245,166,23,0.05)" />
  </svg>
);

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

      {/* ── Hero ── */}
      <section className="relative bg-[#573D4E] overflow-hidden py-12 lg:py-20" data-testid="blog-hero">
        <PolygonBg />
        <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
          <h1 className="font-raleway text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight" data-testid="blog-title">
            Blog
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('blog.introText')}
          </p>
        </div>
        <div className="relative z-10 mt-10 flex items-center justify-center gap-1.5 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/90 font-medium">Blog</span>
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
