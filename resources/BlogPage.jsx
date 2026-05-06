import React from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import { Card, CardContent } from '../components/ui/card';

const topics = ['Tous', 'Réglementaire', 'Stratégie', 'ANSM', 'CTIS', 'RWE', 'Essais décentralisés', 'Opérations cliniques', 'Dispositifs médicaux', 'Médicaments', 'Formation'];

const articles = [
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
    title: 'Anticiper les étapes critiques d’un projet clinique',
    excerpt: 'Retour terrain sur les arbitrages opérationnels, les délais et la coordination des parties prenantes dans les études complexes.',
    date: 'Article LinkedIn',
    readTime: '4 min',
    image: '/reunion-equipe_gemini.webp',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7396223126247788545/',
  },
  {
    tag: 'Stratégie',
    title: 'Accompagner les promoteurs innovants',
    excerpt: 'Pourquoi les biotechs, medtechs et startups HealthTech ont besoin d’un partenaire CRO agile et pédagogique.',
    date: 'Article LinkedIn',
    readTime: '5 min',
    image: '/main-ampoule-succes.webp',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7397314048805097472/',
  },
];

const BlogPage = () => (
  <div className="min-h-screen bg-white" data-testid="blog-page">
    <SEO
      absoluteTitle
      title="Blog — Actualités de la recherche clinique en France | Freearcs Pharma Services"
      description="Veille réglementaire, tendances CRO, CTIS, MDR, essais décentralisés, RWE. Analyses et publications de Freearcs Pharma Services sur la recherche clinique."
      url="/blog"
    />

    <HeroBanner
      title="Blog — Insights de la Recherche Clinique"
      subtitle="Veille réglementaire, méthodologie, retours d'expérience."
      breadcrumbs={[{ label: 'Blog' }]}
      testId="blog-hero"
    />

    <section className="bg-white py-12">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <p className="text-[#4B5563] leading-relaxed max-w-6xl">
          Restez informé des mises à jour réglementaires et sur nos analyses sur l'actualité de la recherche clinique : évolutions réglementaires (CTR, MDR, CTIS), tendances opérationnelles, retours d'expérience terrain et méthodologie. Nous y partageons des articles spécialisés, des études de cas et des actualités pertinentes pour les professionnels du secteur.
        </p>
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2" aria-label="Filtres thématiques">
          {topics.map((topic) => (
            <button key={topic} type="button" className="min-h-11 whitespace-nowrap rounded border border-[#E0DDD8] bg-white px-4 text-[#573D4E] hover:border-[#2E9013] hover:text-[#2E9013] transition-colors">
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-12" data-testid="articles-section">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.url} className="group overflow-hidden border-[#E0DDD8]">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video overflow-hidden bg-[#F8FAF7]">
                  <img src={article.image} alt={`Illustration de l'article ${article.title}`} className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105" loading="lazy" />
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3 text-sm text-[#4B5563] mb-4">
                    <span className="inline-flex items-center gap-1 text-[#2E9013] font-semibold">
                      <Tag className="w-4 h-4" />
                      {article.tag}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date} · {article.readTime}
                    </span>
                  </div>
                  <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-3 group-hover:text-[#2E9013] transition-colors">{article.title}</h2>
                  <p className="text-[#4B5563] leading-relaxed mb-5">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#2E9013] font-semibold">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-14">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center border border-[#E0DDD8] rounded p-8">
        <h2 className="font-raleway text-3xl font-bold text-[#573D4E] mb-4">Restez informé</h2>
        <p className="text-[#4B5563] mb-6">Suivez-nous sur LinkedIn pour les dernières actualités en recherche clinique et mises à jour réglementaires.</p>
        <a href="https://www.linkedin.com/company/freearcs-pharma-services/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded bg-[#2E9013] px-6 font-semibold text-white hover:bg-[#1f6b0d]">
          Suivre sur LinkedIn
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  </div>
);

export default BlogPage;
