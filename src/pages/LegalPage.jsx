import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '@/components/SEO';

const CONTENT = {
  fr: {
    title: "Conditions Générales d'Utilisation",
    legalRef: "Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), telle que modifiée par la loi n° 2024-449 du 21 mai 2024 (SREN), et aux dispositions du Code civil relatives aux contrats.",
    lastUpdated: 'Dernière mise à jour : [date de mise en ligne]',
    s1: {
      title: "1. Objet et champ d'application",
      p1: "Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les modalités et conditions d'accès et d'utilisation du site internet de Freearcs Pharma Services (ci-après « le Site »), ainsi que les droits et obligations respectifs de Freearcs Pharma Services et de tout utilisateur du Site.",
      company: 'Dénomination sociale :', companyValue: 'Freearcs Pharma Services',
      legal: 'Forme juridique :', legalValue: 'Société par actions simplifiée unipersonnelle (SASU)',
      capital: 'Capital social :', capitalValue: '1 000 €',
      address: 'Siège social :', addressValue: '50 Avenue des Champs-Élysées, 75008 Paris, France',
      rcs: 'RCS :', rcsValue: 'Paris 924 914 062',
      contact: 'Contact :',
      p2: "Le Site est un site à caractère professionnel (B2B) destiné à présenter les activités et prestations de Freearcs Pharma Services en qualité de prestataire de services en recherche clinique (Contract Research Organization — CRO). Il ne constitue pas un site de commerce électronique et n'intègre aucune fonctionnalité de vente en ligne.",
      p3: "L'accès au Site et son utilisation impliquent l'acceptation pleine et entière des présentes CGU. Tout utilisateur qui n'accepte pas les présentes CGU doit s'abstenir d'utiliser le Site.",
    },
    s2: {
      title: '2. Accès au site',
      p1: "Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Les frais liés à l'accès au Site, qu'il s'agisse des frais de connexion ou du coût du matériel informatique, sont à la charge exclusive de l'utilisateur.",
      p2: "Freearcs Pharma Services se réserve le droit de modifier, suspendre ou interrompre l'accès à tout ou partie du Site, à tout moment et sans préavis, notamment pour des raisons de maintenance, de mise à jour ou de force majeure, sans que cette interruption ne puisse donner lieu à une quelconque indemnisation.",
      p3: "Freearcs Pharma Services ne saurait être tenue responsable des difficultés d'accès au Site résultant de perturbations du réseau internet, de défaillances techniques des équipements de l'utilisateur, ou de tout événement indépendant de sa volonté.",
    },
    s3: {
      title: '3. Utilisation du formulaire de contact et de la transmission de documents',
      s31: "3.1 Conditions d'utilisation",
      s31p1: "Le Site met à disposition un formulaire de contact assorti d'une fonctionnalité permettant de joindre un document (ci-après « le Formulaire »). L'utilisation du Formulaire est réservée à des fins strictement professionnelles et légitimes, en lien avec les activités de Freearcs Pharma Services.",
      s31p2: "L'utilisateur s'engage à fournir des informations exactes, complètes et à jour, et à ne transmettre que des documents dont il détient les droits ou pour lesquels il dispose des autorisations nécessaires.",
      s32: '3.2 Documents contenant des données de santé',
      s32p1: "L'utilisateur qui transmet des documents susceptibles de contenir des données à caractère personnel, notamment des données de santé au sens de l'article 9 du RGPD, déclare et garantit disposer de l'ensemble des autorisations requises, notamment du consentement explicite des personnes concernées ou de tout autre fondement juridique applicable.",
      s32p2: "Freearcs Pharma Services ne saurait être tenue responsable des conséquences résultant de la transmission de documents contenant des données personnelles sans fondement juridique valable, cette responsabilité incombant exclusivement à l'utilisateur émetteur.",
      s33: '3.3 Contenus prohibés',
      s33intro: "Il est strictement interdit d'utiliser le Formulaire aux fins suivantes :",
      s33items: [
        'transmission de contenus illicites, diffamatoires, injurieux ou portant atteinte aux droits de tiers',
        'transmission de fichiers contenant des virus informatiques ou tout code malveillant',
        'utilisation à des fins de démarchage commercial non sollicité ou de spam',
        "usurpation d'identité ou fourniture de données erronées",
        'toute utilisation contraire aux dispositions légales et réglementaires en vigueur',
      ],
    },
    s4: {
      title: '4. Propriété intellectuelle',
      p1: "L'ensemble des éléments composant le Site — textes, visuels, logos, architecture, base de données, charte graphique — est la propriété exclusive de Freearcs Pharma Services ou fait l'objet d'une autorisation d'utilisation accordée à celle-ci, conformément aux articles L. 111-1 et suivants du Code de la propriété intellectuelle.",
      p2: "Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du Site est strictement interdite sans l'autorisation écrite préalable de Freearcs Pharma Services, sous peine de poursuites judiciaires fondées sur les articles L. 335-2 et suivants du Code de la propriété intellectuelle.",
      p3: "La dénomination sociale Freearcs Pharma Services ainsi que tous les signes distinctifs associés constituent des éléments d'identification protégés. Toute utilisation non autorisée est susceptible de constituer un acte de contrefaçon ou de concurrence déloyale.",
    },
    s5: {
      title: '5. Liens hypertextes',
      s51: '5.1 Liens vers des sites tiers',
      s51p: "Le Site peut contenir des liens hypertextes renvoyant vers des sites internet tiers. Ces liens sont fournis à titre informatif uniquement. Freearcs Pharma Services n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de protection des données personnelles, ou leur disponibilité.",
      s52: '5.2 Liens vers le Site',
      s52p: "Tout lien hypertexte pointant vers le Site est soumis à l'autorisation préalable et écrite de Freearcs Pharma Services. Les demandes d'autorisation peuvent être adressées à :",
    },
    s6: {
      title: '6. Limitation de responsabilité',
      p1: "Freearcs Pharma Services s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le Site. Toutefois, elle ne saurait garantir l'exhaustivité, la précision ou l'actualité des informations publiées, celles-ci étant fournies à titre purement indicatif et ne constituant en aucun cas un conseil juridique, médical, réglementaire ou commercial.",
      p2: "Freearcs Pharma Services décline toute responsabilité quant aux dommages directs ou indirects résultant de l'utilisation du Site, de l'accès ou de l'impossibilité d'accès au Site, de la transmission de documents via le Formulaire, ou de la confiance accordée aux informations publiées sur le Site.",
    },
    s7: {
      title: '7. Protection des données personnelles',
      p1: "Le traitement des données personnelles collectées via le Site est régi par la Politique de confidentialité de Freearcs Pharma Services, accessible depuis le Site et dont les présentes CGU font partie intégrante par référence.",
      p2: 'Pour toute question relative à la protection de vos données personnelles :',
      privacyLink: 'Politique de confidentialité',
    },
    s8: {
      title: '8. Cookies',
      p: "L'utilisation de cookies et autres traceurs sur le Site est régie par la Politique de cookies de Freearcs Pharma Services, accessible depuis le Site et dont les présentes CGU font partie intégrante par référence.",
      cookiesLink: 'Politique de cookies',
    },
    s9: {
      title: '9. Modifications des CGU',
      p1: "Freearcs Pharma Services se réserve le droit de modifier les présentes CGU à tout moment, notamment afin de se conformer à toute évolution législative, réglementaire ou jurisprudentielle. La date de dernière mise à jour figurant en tête du présent document sera actualisée à chaque modification.",
      p2: "L'utilisation du Site après toute modification des CGU vaut acceptation de ces modifications par l'utilisateur. Il appartient à l'utilisateur de consulter régulièrement les présentes CGU.",
    },
    s10: {
      title: '10. Droit applicable et juridiction compétente',
      p: "Les présentes CGU sont soumises au droit français. En cas de litige relatif à leur interprétation ou à leur exécution, et à défaut de résolution amiable dans un délai de 30 jours à compter de la notification du litige par la partie la plus diligente, les tribunaux compétents seront ceux du ressort du Tribunal de Commerce de Paris, auquel les parties attribuent expressément compétence.",
    },
    s11: {
      title: '11. Entrée en vigueur',
      p: 'Les présentes CGU entrent en vigueur à compter de leur mise en ligne sur le Site.',
    },
  },
  en: {
    title: 'Terms of Use',
    legalRef: 'In accordance with French Law No. 2004-575 of 21 June 2004 on trust in the digital economy (LCEN), as amended by Law No. 2024-449 of 21 May 2024 (SREN), and the provisions of the Civil Code relating to contracts.',
    lastUpdated: 'Last updated: [publication date]',
    s1: {
      title: '1. Purpose and Scope',
      p1: 'These Terms of Use define the terms and conditions for accessing and using the Freearcs Pharma Services website (hereinafter "the Site"), as well as the respective rights and obligations of Freearcs Pharma Services and any user of the Site.',
      company: 'Company name:', companyValue: 'Freearcs Pharma Services',
      legal: 'Legal form:', legalValue: 'Simplified single-member joint-stock company (SASU)',
      capital: 'Share capital:', capitalValue: '€1,000',
      address: 'Registered office:', addressValue: '50 Avenue des Champs-Élysées, 75008 Paris, France',
      rcs: 'RCS:', rcsValue: 'Paris 924 914 062',
      contact: 'Contact:',
      p2: 'The Site is a professional (B2B) website designed to present the activities and services of Freearcs Pharma Services as a clinical research services provider (Contract Research Organization — CRO). It is not an e-commerce site and does not include any online sales functionality.',
      p3: 'Accessing and using the Site implies full and unreserved acceptance of these Terms of Use. Any user who does not accept these Terms must refrain from using the Site.',
    },
    s2: {
      title: '2. Access to the Site',
      p1: 'The Site is freely accessible to any user with internet access. Costs related to accessing the Site, whether connection fees or hardware costs, are the sole responsibility of the user.',
      p2: 'Freearcs Pharma Services reserves the right to modify, suspend or interrupt access to all or part of the Site at any time and without notice, particularly for maintenance, updates or force majeure, without such interruption giving rise to any compensation.',
      p3: 'Freearcs Pharma Services shall not be liable for difficulties accessing the Site resulting from internet network disruptions, technical failures of user equipment, or any event beyond its control.',
    },
    s3: {
      title: '3. Use of the Contact Form and Document Upload Feature',
      s31: '3.1 Terms of Use',
      s31p1: 'The Site provides a contact form with a document attachment feature (hereinafter "the Form"). Use of the Form is reserved for strictly professional and legitimate purposes related to the activities of Freearcs Pharma Services.',
      s31p2: 'The user undertakes to provide accurate, complete and up-to-date information, and to transmit only documents for which they hold the rights or have the necessary authorisations.',
      s32: '3.2 Documents Containing Health Data',
      s32p1: 'Any user transmitting documents that may contain personal data, including health data within the meaning of Article 9 of the GDPR, declares and warrants that they hold all required authorisations, including the explicit consent of the data subjects or any other applicable legal basis.',
      s32p2: 'Freearcs Pharma Services shall not be liable for the consequences of transmitting documents containing personal data without a valid legal basis, such liability resting exclusively with the transmitting user.',
      s33: '3.3 Prohibited Content',
      s33intro: 'It is strictly prohibited to use the Form for the following purposes:',
      s33items: [
        'transmission of unlawful, defamatory, abusive or third-party rights-infringing content',
        'transmission of files containing computer viruses or malicious code',
        'use for unsolicited commercial canvassing or spam',
        'identity theft or provision of false data',
        'any use contrary to applicable laws and regulations',
      ],
    },
    s4: {
      title: '4. Intellectual Property',
      p1: 'All elements comprising the Site — texts, visuals, logos, architecture, database, graphic charter — are the exclusive property of Freearcs Pharma Services or are subject to a use authorisation granted to it, in accordance with Articles L. 111-1 et seq. of the French Intellectual Property Code.',
      p2: 'Any reproduction, representation, modification, publication, adaptation or exploitation of all or part of the Site elements is strictly prohibited without the prior written authorisation of Freearcs Pharma Services, under penalty of legal proceedings.',
      p3: 'The corporate name Freearcs Pharma Services and all associated distinctive signs are protected identifiers. Any unauthorised use may constitute an act of counterfeiting or unfair competition.',
    },
    s5: {
      title: '5. Hyperlinks',
      s51: '5.1 Links to Third-party Sites',
      s51p: 'The Site may contain hyperlinks to third-party websites. These links are provided for information purposes only. Freearcs Pharma Services exercises no control over the content of these sites and disclaims any liability regarding their content, data protection practices, or availability.',
      s52: '5.2 Links to the Site',
      s52p: 'Any hyperlink pointing to the Site requires the prior written authorisation of Freearcs Pharma Services. Authorisation requests may be sent to:',
    },
    s6: {
      title: '6. Limitation of Liability',
      p1: 'Freearcs Pharma Services strives to ensure the accuracy and currency of the information published on the Site. However, it cannot guarantee the completeness, accuracy or timeliness of the information, which is provided for information purposes only and does not constitute legal, medical, regulatory or commercial advice.',
      p2: 'Freearcs Pharma Services disclaims any liability for direct or indirect damages resulting from the use of the Site, access to or inability to access the Site, transmission of documents via the Form, or reliance on information published on the Site.',
    },
    s7: {
      title: '7. Personal Data Protection',
      p1: 'The processing of personal data collected via the Site is governed by the Freearcs Pharma Services Privacy Policy, accessible from the Site and incorporated into these Terms by reference.',
      p2: 'For any question regarding the protection of your personal data:',
      privacyLink: 'Privacy Policy',
    },
    s8: {
      title: '8. Cookies',
      p: 'The use of cookies and other trackers on the Site is governed by the Freearcs Pharma Services Cookie Policy, accessible from the Site and incorporated into these Terms by reference.',
      cookiesLink: 'Cookie Policy',
    },
    s9: {
      title: '9. Amendments to the Terms of Use',
      p1: 'Freearcs Pharma Services reserves the right to amend these Terms at any time, in particular to comply with legislative, regulatory or case law developments. The last updated date at the top of this document will be updated with each amendment.',
      p2: 'Use of the Site following any amendment to the Terms constitutes acceptance of those amendments by the user. Users are responsible for regularly consulting these Terms.',
    },
    s10: {
      title: '10. Applicable Law and Jurisdiction',
      p: 'These Terms are governed by French law. In the event of a dispute relating to their interpretation or performance, and failing amicable resolution within 30 days of notification by the most diligent party, the competent courts shall be those within the jurisdiction of the Commercial Court of Paris, to which the parties expressly confer jurisdiction.',
    },
    s11: {
      title: '11. Entry into Force',
      p: 'These Terms of Use enter into force upon their publication on the Site.',
    },
  },
};

const CARD = "bg-white rounded-xl p-6 shadow-sm text-sm";

const LegalPage = () => {
  const { language } = useLanguage();
  const c = CONTENT[language] || CONTENT.fr;

  return (
    <div className="min-h-screen bg-muted py-20 px-4">
      <SEO
        title={c.title}
        description="Conditions Générales d'Utilisation de Freearcs Pharma Services"
        url="/legal"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-raleway text-3xl font-bold text-[#573D4E] mb-2">{c.title}</h1>
        <p className="text-xs text-[#9CA3AF] mb-2 leading-relaxed">{c.legalRef}</p>
        <p className="text-sm text-[#6B7280] mb-10">{c.lastUpdated}</p>

        <div className="space-y-10 text-[#374151]">

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s1.title}</h2>
            <div className={CARD}>
              <div className="space-y-3">
                <p>{c.s1.p1}</p>
                <div className="bg-muted rounded-lg p-4 space-y-1">
                  <p><span className="font-semibold">{c.s1.company}</span> {c.s1.companyValue}</p>
                  <p><span className="font-semibold">{c.s1.legal}</span> {c.s1.legalValue}</p>
                  <p><span className="font-semibold">{c.s1.capital}</span> {c.s1.capitalValue}</p>
                  <p><span className="font-semibold">{c.s1.address}</span> {c.s1.addressValue}</p>
                  <p><span className="font-semibold">{c.s1.rcs}</span> {c.s1.rcsValue}</p>
                  <p>
                    <span className="font-semibold">{c.s1.contact}</span>{' '}
                    <a href="mailto:contact@freearcs.com" className="text-[#2E9013] hover:underline">contact@freearcs.com</a>
                  </p>
                </div>
                <p>{c.s1.p2}</p>
                <p>{c.s1.p3}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s2.title}</h2>
            <div className={CARD}>
              <div className="space-y-3">
                <p>{c.s2.p1}</p>
                <p>{c.s2.p2}</p>
                <p>{c.s2.p3}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s3.title}</h2>
            <div className="space-y-4">
              <div className={CARD}>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#573D4E]">{c.s3.s31}</h3>
                  <p>{c.s3.s31p1}</p>
                  <p>{c.s3.s31p2}</p>
                </div>
              </div>
              <div className={CARD}>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#573D4E]">{c.s3.s32}</h3>
                  <p>{c.s3.s32p1}</p>
                  <p>{c.s3.s32p2}</p>
                </div>
              </div>
              <div className={CARD}>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#573D4E]">{c.s3.s33}</h3>
                  <p>{c.s3.s33intro}</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    {c.s3.s33items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s4.title}</h2>
            <div className={CARD}>
              <div className="space-y-3">
                <p>{c.s4.p1}</p>
                <p>{c.s4.p2}</p>
                <p>{c.s4.p3}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s5.title}</h2>
            <div className="space-y-4">
              <div className={CARD}>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#573D4E]">{c.s5.s51}</h3>
                  <p>{c.s5.s51p}</p>
                </div>
              </div>
              <div className={CARD}>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[#573D4E]">{c.s5.s52}</h3>
                  <p>
                    {c.s5.s52p}{' '}
                    <a href="mailto:contact@freearcs.com" className="text-[#2E9013] hover:underline">contact@freearcs.com</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s6.title}</h2>
            <div className={CARD}>
              <div className="space-y-3">
                <p>{c.s6.p1}</p>
                <p>{c.s6.p2}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s7.title}</h2>
            <div className={CARD}>
              <div className="space-y-2">
                <p>{c.s7.p1}</p>
                <p>
                  {c.s7.p2}{' '}
                  <a href="mailto:contact@freearcs.com" className="text-[#2E9013] hover:underline">contact@freearcs.com</a>
                  {' — '}
                  <Link to="/privacy" className="text-[#2E9013] hover:underline">{c.s7.privacyLink}</Link>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s8.title}</h2>
            <div className={CARD}>
              <p>
                {c.s8.p}{' — '}
                <Link to="/cookies" className="text-[#2E9013] hover:underline">{c.s8.cookiesLink}</Link>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s9.title}</h2>
            <div className={CARD}>
              <div className="space-y-2">
                <p>{c.s9.p1}</p>
                <p>{c.s9.p2}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s10.title}</h2>
            <div className={CARD}><p>{c.s10.p}</p></div>
          </section>

          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">{c.s11.title}</h2>
            <div className={CARD}><p>{c.s11.p}</p></div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalPage;
