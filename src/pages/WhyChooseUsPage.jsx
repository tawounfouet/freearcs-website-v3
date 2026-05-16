import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  Building2,
  FlaskConical,
  Handshake,
  ShieldCheck,
  Settings,
  ArrowRight
} from 'lucide-react';

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFD]" data-testid="why-choose-us-page">
      <SEO
        title="Pourquoi choisir Freearcs Pharma Services | CRO française indépendante"
        description="Une CRO française indépendante au service des biotechs, startups HealthTech et laboratoires pharmaceutiques. Expertise technique, proximité humaine et maîtrise réglementaire."
        url="/why-choose-us"
      />

      {/* ── 1. Hero ────────────────────────────────────────────────────── */}
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
                  Pourquoi nous choisir ?
                </h1>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-2">
                  <div className="flex items-center justify-center gap-2 text-white/80 font-bold text-lg">
                    <Link to="/" className="text-white hover:text-white/80 transition-colors">Home</Link>
                    <span className="text-white/60">/</span>
                    <span className="text-white">Pourquoi nous choisir ?</span>
                  </div>
                  <span className="hidden sm:inline-block text-white/40">|</span>
                  {/* <span className="text-[#2E9013] text-lg font-medium italic">
                    Une CRO indépendante, pensée pour les promoteurs qui innovent.
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 & 3. Le contexte & Notre approche ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Le contexte & Notre approche</h3>
            <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4 mb-8"></div>
          </div>

          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-xl shadow-sm">
            <p className="text-[#4B5563] text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#2E9013] first-letter:mr-3 first-letter:float-left mb-6">
              Le développement scientifique a fait émerger une nouvelle génération de biotechs et de startups HealthTech, qui innovent aujourd'hui aux côtés des laboratoires pharmaceutiques établis tels que Pfizer, Novartis, Sanofi, Roche, AstraZeneca.
            </p>
            <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
              Ces structures ont en commun une expertise technologique de pointe. Beaucoup d'entre elles sont en revanche moins outillées sur la dimension réglementaire et opérationnelle : autorisations, délais, conventions hospitalières, conformité aux Bonnes Pratiques Cliniques. C'est précisément à cette jonction que Freearcs Pharma Services intervient.
            </p>

            <h5 className="text-[#2B2B2B] text-xl font-bold mt-10 mb-4">Un accompagnement humain, main dans la main avec vos équipes.</h5>
            <p className="text-[#4B5563] text-lg leading-relaxed mb-4">
              Notre modèle associe l'expertise technique et la proximité humaine d'un partenaire de terrain. Concrètement, cela signifie :
            </p>
            <ul className="list-disc pl-6 mb-8 text-[#4B5563] text-lg leading-relaxed space-y-2">
              <li>Nous prenons le temps de comprendre votre technologie, vos contraintes et vos enjeux avant toute proposition.</li>
              <li>Nous travaillons en transparence avec vos équipes, sans les écarter du pilotage.</li>
              <li>Nous expliquons chaque étape réglementaire et opérationnelle, pour que vous gardiez la maîtrise scientifique et la maîtrise réglementaire de votre projet.</li>
            </ul>

            <blockquote className="my-10 ml-0 lg:ml-12 border-l-4 border-[#2E9013] pl-6 max-w-4xl">
              <h5 className="font-medium text-xl md:text-2xl text-[#573D4E] italic leading-relaxed">
                « Les équipes des biotechs sont expertes sur leur technologie, mais souvent perdues sur la partie réglementaire — autorisations, délais, conventions hospitalières. Notre travail, c'est de vous aider à comprendre et anticiper ces étapes, pour que le projet avance sereinement et suivant la réglementation. »
              </h5>
              <footer className="mt-4 text-[#2E9013] font-bold text-lg">— Nadège KAMBOU, Fondatrice</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 4. Cinq engagements concrets (Grid) ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#573D4E]">Cinq engagements concrets</h3>
            <div className="w-16 h-1 bg-[#2E9013] mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDE8EB] flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#573D4E]" />
              </div>
              <h5 className="font-raleway text-xl font-bold text-[#573D4E] mb-3">Modèle CRO indépendant, agile et flexible</h5>
              <p className="text-[#4B5563] text-base leading-relaxed">Une structure indépendante, sans chaîne hiérarchique étendue. Vous avez un interlocuteur direct qui connaît votre étude, et nous adaptons notre organisation à l'évolution de votre projet.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDE8EB] flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-[#573D4E]" />
              </div>
              <h5 className="font-raleway text-xl font-bold text-[#573D4E] mb-3">Méthodes éprouvées sur protocoles complexes</h5>
              <p className="text-[#4B5563] text-base leading-relaxed">Phase I, études pivots, oncologie, maladies rares ; des protocoles sur lesquels nos équipes développent une expertise durable, transmise et capitalisée projet après projet.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDE8EB] flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-[#573D4E]" />
              </div>
              <h5 className="font-raleway text-xl font-bold text-[#573D4E] mb-3">Accompagnement sur mesure</h5>
              <p className="text-[#4B5563] text-base leading-relaxed">Chaque mission est alignée sur vos contraintes et vos objectifs. Que vos équipes soient déjà structurées ou pas, nous nous adaptons à votre niveau de maturité opérationnelle.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center lg:col-start-1 lg:col-span-1 lg:ml-auto w-full">
              <div className="w-12 h-12 rounded-full bg-[#EDE8EB] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[#573D4E]" />
              </div>
              <h5 className="font-raleway text-xl font-bold text-[#573D4E] mb-3">Maîtrise réglementaire</h5>
              <p className="text-[#4B5563] text-base leading-relaxed">France, UE, exigences internationales. ANSM, CPP, CNIL, CTR 536/2014, MDR 745/2017, exigences FDA selon les juridictions. Nous suivons activement les évolutions réglementaires pour vous en tenir informés.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center lg:col-start-2 lg:col-span-1 lg:mr-auto w-full">
              <div className="w-12 h-12 rounded-full bg-[#EDE8EB] flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-[#573D4E]" />
              </div>
              <h5 className="font-raleway text-xl font-bold text-[#573D4E] mb-3">Expertise opérationnelle</h5>
              <p className="text-[#4B5563] text-base leading-relaxed">Chaque mission est portée par une supervision opérationnelle dédiée, qui assure la cohérence du pilotage, la qualité de l'exécution et la continuité de l'interlocution avec votre équipe.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5 & 6. Conformité et Pédagogie (Combined Sections) ─────────── */}
      {/* <section className="py-16 bg-[#F9FAFD]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col shadow-sm rounded-xl overflow-hidden bg-white">

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-5/12 relative min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/assets/img/interior-6.jpg)' }}
                />
              </div>
              <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex items-center bg-white">
                <div>
                  <h5 className="font-raleway text-2xl font-bold text-[#573D4E] mb-2">Conformité : adaptation au niveau de maturité de votre organisation</h5>
                  <h6 className="text-[#2E9013] text-xl italic font-semibold mb-6">Vos procédures, ou les nôtres.</h6>
                  <p className="text-[#4B5563] text-lg leading-relaxed mb-6">
                    Toutes les organisations n'ont pas le même niveau de structuration qualité. Notre approche s'adapte :
                  </p>
                  <div className="space-y-4">
                    <p className="text-[#4B5563] text-lg leading-relaxed">
                      <strong>Pour les organisations déjà structurées :</strong> Nous nous intégrons à vos SOPs et à votre cadre qualité existant. Notre travail respecte vos procédures internes, vos circuits de validation et votre gouvernance documentaire.
                    </p>
                    <p className="text-[#4B5563] text-lg leading-relaxed">
                      <strong>Pour les organisations en cours de structuration :</strong> Nous mettons en œuvre un cadre qualité adapté au périmètre de notre intervention, conforme aux Bonnes Pratiques Cliniques et aux exigences réglementaires applicables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse border-t border-gray-100">
              <div className="lg:w-5/12 relative min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/assets/img/medecin-bebe-capsules.webp)' }}
                />
              </div>
              <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex items-center bg-white">
                <div>
                  <h5 className="font-raleway text-2xl font-bold text-[#573D4E] mb-2">La dimension pédagogique</h5>
                  <h6 className="text-[#F5A617] text-xl italic font-semibold mb-6">Comprendre pour décider en toute autonomie.</h6>
                  <p className="text-[#4B5563] text-lg leading-relaxed mb-4">
                    L'accompagnement Freearcs Pharma Services inclut une dimension pédagogique. Sur la base des besoins identifiés avec vous, nous proposons des formations sur mesure pour que vos équipes :
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-[#4B5563] text-lg leading-relaxed space-y-2">
                    <li>Comprennent le cadre réglementaire applicable à votre projet</li>
                    <li>Anticipent les étapes critiques (soumissions, autorisations, délais d'inclusion, conventions hospitalières)</li>
                    <li>Pilotent le développement de votre technologie en toute maîtrise réglementaire et scientifique</li>
                  </ul>
                  <p className="text-[#2B2B2B] font-bold text-lg leading-relaxed">
                    Notre objectif : que vous compreniez chaque décision réglementaire et opérationnelle prise sur votre étude, et que vous puissiez la défendre devant un investisseur, une autorité ou un partenaire académique.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* ── Indicateurs clés (Stats Banner) ────────────────────────────── */}
      <section className="relative overflow-hidden py-16 lg:py-24 mb-16 lg:mb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/img/background-15.jpg)' }}
        />
        <div className="absolute inset-0 bg-[#2B2B2B]/70 mix-blend-multiply" /> {/* Overlay-elixir */}

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex items-start mr-8">
              <img src="/assets/img/checkmark.png" alt="Checkmark" className="w-14" />
            </div>
            <div className="flex-1">
              <h2 className="text-[#F5A617] text-3xl lg:text-4xl font-bold mb-8">
                Des résultats concrets,<br />
                <span className="text-white">une expertise démontrée.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pr-20">
                <div>
                  <div className="text-3xl lg:text-5xl font-bold text-white mb-2">Depuis 2020</div>
                  <h6 className="text-white/80 font-medium uppercase tracking-wider text-sm">Plus de 30 projets cliniques supervisés</h6>
                </div>
                <div>
                  <div className="text-3xl lg:text-5xl font-bold text-white mb-2">65 %</div>
                  <h6 className="text-white/80 font-medium uppercase tracking-wider text-sm">Taux de fidélisation client</h6>
                </div>
                <div>
                  <div className="text-3xl lg:text-5xl font-bold text-white mb-2">International</div>
                  <h6 className="text-white/80 font-medium uppercase tracking-wider text-sm">France · Belgique · UK · Irlande · Suisse · Burkina-Faso</h6>
                </div>
              </div>
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
                Si vous avez des questions concernant votre projet clinique...<br className="hidden lg:block" />
                nous sommes disponibles pour vous accompagner.
              </h4>
            </div>
            <div className="lg:w-auto">
              <Link
                to="/contact"
                className="inline-block bg-white text-[#2E9013] hover:bg-gray-100 font-bold px-8 py-3 rounded-full shadow-lg transition-all"
              >
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default WhyChooseUsPage;
