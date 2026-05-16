import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, ArrowRight, FlaskConical, Brain, Stethoscope } from 'lucide-react';
import SEO from '@/components/SEO';

const TherapeuticExpertisePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F9FAFD]" data-testid="therapeutic-expertise-page">
      <SEO
        title="Expertise Thérapeutique — Oncologie, SNC, Maladies Rares | Freearcs Pharma Services"
        description="Expertise CRO sur les aires thérapeutiques complexes : oncologie, SNC, maladies rares, dermatologie, cardiologie, pneumologie. Études interventionnelles, observationnelles et RWE."
        url="/therapeutic-expertise"
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/img/background-2.jpg)' }}
        />
        <div className="absolute inset-0 bg-[#2B2B2B]/60" />
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="pt-24 pb-20 lg:pt-32 lg:pb-24">
            <div className="w-full text-center">
              <div className="overflow-hidden">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-0 leading-none">
                  Expertise Thérapeutique
                </h1>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-center gap-2">
                  <div className="flex items-center justify-center gap-2 text-white/80 font-bold text-lg">
                    <Link to="/" className="text-white hover:text-white/80 transition-colors">{t('nav.home')}</Link>
                    <span className="text-white/60">/</span>
                    <span className="text-white">Expertise Thérapeutique</span>
                  </div>
                  {/* <span className="hidden sm:inline-block text-white/40">|</span>
                  <span className="text-[#2E9013] text-lg font-medium italic">
                    Oncologie, SNC, maladies rares, en France et à l'international.
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Introduction ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 lg:p-16">
            <p className="text-[#4B5563] text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#2E9013] first-letter:mr-3 first-letter:float-left mb-6">
              Nous soutenons nos partenaires dans la conduite d'études interventionnelles, observationnelles et épidémiologiques, incluant des projets sur les données de vie réelle (RWD/RWE). Notre expertise couvre les médicaments, les dispositifs médicaux, et les Hors Produits de Santé.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              {/* Types d'études */}
              <div>
                <h3 className="text-[#573D4E] font-bold text-xl mb-5">L'entreprise intervient sur</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Études interventionnelles', detail: "étude de dérisquage, POC, First in Human, Essais cliniques contrôlés (Phase I à IV), investigations cliniques, PMCF" },
                    { label: 'Études observationnelles', detail: "Cohortes, registres, études post-AMM, suivi long terme" },
                    { label: 'Études épidémiologiques', detail: "Études de prévalence, d'incidence, facteurs de risque" },
                    { label: 'Projets Real-World Evidence (RWE)', detail: "sur les Données de vie réelle" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E9013] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4B5563] leading-relaxed">
                        <strong className="text-[#2B2B2B]">{item.label} :</strong> {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Domaines couverts */}
              <div>
                <h3 className="text-[#573D4E] font-bold text-xl mb-5">Domaines couverts</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Médicaments', detail: "produits de santé soumis à Autorisation de Mise sur le Marché" },
                    { label: 'Dispositifs médicaux', detail: "pré-marquage CE et suivi post-marquage" },
                    { label: 'Produits hors santé', detail: "études cliniques sur produits cosmétiques, compléments, nutraceutiques" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#2E9013] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4B5563] leading-relaxed">
                        <strong className="text-[#2B2B2B]">{item.label} :</strong> {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Aires thérapeutiques prioritaires ───────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Aires Thérapeutiques Prioritaires</h2>
            <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card Oncologie */}
            <div className="bg-[#F9FAFD] rounded-xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-6 h-6 text-[#2E9013]" />
                <h3 className="font-bold text-[#573D4E] text-2xl">Oncologie</h3>
              </div>
              <p className="text-[#4B5563] italic mb-6">Expertise en Phases précoces (I & II)</p>

              <div className="space-y-3 mb-8">
                <p className="text-[#4B5563] leading-relaxed">
                  <strong className="text-[#2B2B2B]">Innovation et First-in-Human :</strong> pilotage de Phase I et II, immunothérapies, vaccins thérapeutiques, cibles innovantes (ex. CLDN1+)
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  <strong className="text-[#2B2B2B]">Protocoles complexes :</strong> designs adaptatifs, populations vulnérables (pédiatrie, sujets âgés)
                </p>
              </div>

              <h5 className="font-semibold text-[#2B2B2B] mb-3">Indications couvertes</h5>
              <div className="flex flex-wrap gap-2">
                {['Tumeurs solides', 'Lymphomes', 'Myélome multiple', 'Leucémies (LLC, LAM)', 'Cancer de la vessie', 'GIST', 'Implants mammaires', 'Radiothérapie'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-[#EAF5E1] text-[#2E9013] text-sm font-medium rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Card SNC & Maladies Rares */}
            <div className="bg-[#F9FAFD] rounded-xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-6 h-6 text-[#573D4E]" />
                <h3 className="font-bold text-[#573D4E] text-2xl">SNC et Maladies Rares</h3>
              </div>
              <p className="text-[#4B5563] italic mb-6">Phases précoces et études pivots</p>

              <div className="space-y-3 mb-8">
                <p className="text-[#4B5563] leading-relaxed">
                  <strong className="text-[#2B2B2B]">Pathologies neurodégénératives :</strong> pilotage d'études complexes sur populations à inclusion difficile
                </p>
                <p className="text-[#4B5563] leading-relaxed">
                  <strong className="text-[#2B2B2B]">Maladies orphelines :</strong> expertise des designs adaptés aux faibles effectifs
                </p>
              </div>

              <h5 className="font-semibold text-[#2B2B2B] mb-3">Indications couvertes</h5>
              <div className="flex flex-wrap gap-2">
                {["Maladie d'Alzheimer", 'Maladie de Parkinson', 'Sclérose latérale amyotrophique (SLA)', 'Troubles neurodéveloppementaux', 'Spasticité', 'Dystrophie musculaire de Duchenne', 'Maladie de Wilson', 'FAOD', 'Atrophie multisystématisée'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-[#EDE8EB] text-[#573D4E] text-sm font-medium rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Autres domaines ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Stethoscope className="w-6 h-6 text-[#F5A617]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Autres Domaines Couverts</h2>
            </div>
            <div className="w-16 h-1 bg-[#F5A617] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Dermatologie', detail: 'psoriasis, lupus, dermatite atopique' },
              { label: 'Maladies infectieuses et vaccins', detail: '' },
              { label: 'Pneumologie', detail: 'BPCO' },
              { label: 'Rhumatologie', detail: '' },
              { label: 'Cardiologie', detail: 'PAF, LVAD' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#F5A617] flex-shrink-0 mt-0.5" />
                <span className="text-[#4B5563] leading-relaxed">
                  <strong className="text-[#2B2B2B]">{item.label}</strong>
                  {item.detail && ` : ${item.detail}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="bg-[#2E9013] rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: 'url(/assets/img/background-2.jpg)' }}
            />
            <div className="relative z-10">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Vous préparez une étude clinique ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Partagez-nous votre projet, nous vous proposerons l'approche adaptée à votre situation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#2E9013] hover:bg-gray-100 font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg"
                data-testid="therapeutic-contact-btn"
              >
                Discutons de votre projet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TherapeuticExpertisePage;
