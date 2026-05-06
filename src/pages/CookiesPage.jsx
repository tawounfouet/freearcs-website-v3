import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '@/components/SEO';
import { openCookiePreferences } from '@/lib/cookieConsent';

const CookiesPage = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <div className="min-h-screen bg-muted py-20 px-4">
      <SEO
        title={isFr ? 'Politique de Cookies et Autres Traceurs' : 'Cookie and Tracker Policy'}
        description={isFr ? 'Politique de cookies et traceurs de Freearcs Pharma Services' : 'Cookie and tracker policy of Freearcs Pharma Services'}
        url="/cookies"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-raleway text-3xl font-bold text-[#573D4E] mb-2">
          {isFr ? 'Politique de Cookies et Autres Traceurs' : 'Cookie and Tracker Policy'}
        </h1>
        <p className="text-sm text-[#6B7280] mb-2">
          {isFr
            ? 'Conformément à la délibération CNIL n° 2020-091 du 17 septembre 2020 et à la recommandation consolidée du 25 janvier 2024, ainsi qu\'à l\'article 82 de la loi Informatique et Libertés transposant la directive ePrivacy 2002/58/CE.'
            : 'In accordance with CNIL Decision No. 2020-091 of 17 September 2020 and the consolidated recommendation of 25 January 2024, and Article 82 of the French Data Protection Act transposing the ePrivacy Directive 2002/58/EC.'}
        </p>
        <p className="text-sm text-[#6B7280] mb-10">
          {isFr ? 'Dernière mise à jour : mai 2026' : 'Last updated: May 2026'}
        </p>

        <div className="space-y-10 text-[#374151]">

          {/* Section 1 */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '1. Qu\'est-ce qu\'un cookie ?' : '1. What is a Cookie?'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-3">
              <p>
                {isFr
                  ? 'Un cookie est un petit fichier texte déposé sur le terminal de l\'utilisateur (ordinateur, tablette, smartphone) lors de la consultation d\'un site internet. Les cookies permettent au site de reconnaître le terminal de l\'utilisateur lors d\'une visite ultérieure, de mémoriser ses préférences de navigation, et de collecter des données statistiques ou comportementales.'
                  : 'A cookie is a small text file placed on the user\'s device (computer, tablet, smartphone) when visiting a website. Cookies allow the site to recognise the user\'s device on subsequent visits, remember browsing preferences, and collect statistical or behavioural data.'}
              </p>
              <p>
                {isFr
                  ? 'Conformément à l\'article 82 de la loi Informatique et Libertés, le dépôt de cookies sur le terminal de l\'utilisateur est subordonné à son consentement préalable, libre, éclairé, spécifique et univoque, à l\'exception des cookies strictement nécessaires au fonctionnement du service.'
                  : 'In accordance with Article 82 of the French Data Protection Act, placing cookies on the user\'s device requires prior, free, informed, specific and unambiguous consent, except for cookies strictly necessary for the operation of the service.'}
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '2. Cookies déposés sur le site de Freearcs Pharma Services' : '2. Cookies Used on the Freearcs Pharma Services Website'}
            </h2>

            {/* 2.1 */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#573D4E] mb-3">
                {isFr
                  ? '2.1 Cookies strictement nécessaires (exemptés de consentement)'
                  : '2.1 Strictly Necessary Cookies (Exempt from Consent)'}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-3">
                <p>
                  {isFr
                    ? 'Ces cookies sont indispensables au fonctionnement technique du site et ne peuvent pas être désactivés. Ils ne collectent aucune donnée personnelle à des fins de traçage ou de ciblage. Leur dépôt ne requiert pas le consentement de l\'utilisateur, conformément à l\'article 82 alinéa 2 de la loi Informatique et Libertés.'
                    : 'These cookies are essential for the technical operation of the site and cannot be disabled. They do not collect any personal data for tracking or targeting purposes. Their placement does not require user consent, pursuant to Article 82(2) of the French Data Protection Act.'}
                </p>
                <ul className="space-y-3 mt-2">
                  <li className="pl-4 border-l-2 border-[#2E9013]">
                    <p className="font-semibold">{isFr ? 'Cookie de session' : 'Session cookie'}</p>
                    <p className="text-[#6B7280]">
                      {isFr
                        ? 'Maintient la session de navigation active et sécurise les échanges entre le terminal et le serveur.'
                        : 'Maintains the active browsing session and secures exchanges between the device and the server.'}
                    </p>
                    <p className="text-[#6B7280]">{isFr ? 'Durée : session (supprimé à la fermeture du navigateur).' : 'Duration: session (deleted on browser close).'}</p>
                  </li>
                  <li className="pl-4 border-l-2 border-[#2E9013]">
                    <p className="font-semibold">{isFr ? 'Cookie de consentement' : 'Consent cookie'}</p>
                    <p className="text-[#6B7280]">
                      {isFr
                        ? 'Enregistre les choix exprimés via le bandeau de gestion des cookies, afin d\'éviter de solliciter à nouveau le consentement à chaque visite.'
                        : 'Records the choices made via the cookie management banner, to avoid requesting consent again on every visit.'}
                    </p>
                    <p className="text-[#6B7280]">{isFr ? 'Durée : 6 mois maximum, conformément à la recommandation CNIL du 25 janvier 2024.' : 'Duration: 6 months maximum, in line with the CNIL recommendation of 25 January 2024.'}</p>
                  </li>
                  <li className="pl-4 border-l-2 border-[#2E9013]">
                    <p className="font-semibold">{isFr ? 'Cookie de sécurité du formulaire (CSRF token)' : 'Form security cookie (CSRF token)'}</p>
                    <p className="text-[#6B7280]">
                      {isFr
                        ? 'Protège le formulaire de contact contre les attaques informatiques de type Cross-Site Request Forgery.'
                        : 'Protects the contact form against Cross-Site Request Forgery attacks.'}
                    </p>
                    <p className="text-[#6B7280]">{isFr ? 'Durée : session.' : 'Duration: session.'}</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2.2 */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#573D4E] mb-3">
                {isFr ? '2.2 Cookies analytiques (soumis à consentement)' : '2.2 Analytics Cookies (Subject to Consent)'}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
                <p>
                  {isFr
                    ? 'Ces cookies permettent de mesurer l\'audience du site et d\'analyser le comportement de navigation des utilisateurs afin d\'améliorer les performances et le contenu du site. Leur dépôt est subordonné au consentement préalable de l\'utilisateur.'
                    : 'These cookies measure site audience and analyse user browsing behaviour to improve site performance and content. Their placement is subject to prior user consent.'}
                </p>
                <ul className="space-y-1 ml-2 mt-2">
                  <li><span className="font-semibold">{isFr ? 'Outil : ' : 'Tool: '}</span>{isFr ? 'PostHog ou outil équivalent, uniquement après consentement explicite.' : 'PostHog or equivalent tool, only after explicit consent.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Données collectées : ' : 'Data collected: '}</span>{isFr ? 'adresse IP anonymisée, pages visitées, durée de visite, source de trafic, type de navigateur et de terminal.' : 'anonymised IP address, pages visited, visit duration, traffic source, browser and device type.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Finalité : ' : 'Purpose: '}</span>{isFr ? 'mesure d\'audience, amélioration de l\'expérience utilisateur.' : 'audience measurement, user experience improvement.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Durée de conservation : ' : 'Retention: '}</span>{isFr ? '12 mois maximum.' : '12 months maximum.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Transfert hors UE : ' : 'Transfer outside EU: '}</span>{isFr ? 'aucun traceur analytique n’est chargé tant que l’utilisateur n’a pas accepté cette finalité.' : 'no analytics tracker is loaded until the user has accepted this purpose.'}</li>
                </ul>
              </div>
            </div>

            {/* 2.3 */}
            <div>
              <h3 className="font-semibold text-[#573D4E] mb-3">
                {isFr ? '2.3 Cookies tiers et traceurs marketing (soumis à consentement)' : '2.3 Third-party and Marketing Trackers (Subject to Consent)'}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
                <p>
                  {isFr
                    ? 'Ces cookies sont déposés par des plateformes tierces dans le cadre des actions de communication professionnelle de Freearcs Pharma Services. Leur dépôt est subordonné au consentement préalable de l\'utilisateur. Le refus de ces cookies n\'affecte pas la navigation sur le site.'
                    : 'These cookies are placed by third-party platforms as part of Freearcs Pharma Services\' professional communication activities. Their placement is subject to prior user consent. Refusing these cookies does not affect site navigation.'}
                </p>
                <ul className="space-y-1 ml-2 mt-2">
                  <li><span className="font-semibold">{isFr ? 'Outil : ' : 'Tool: '}</span>{isFr ? 'Aucun traceur marketing actif à ce jour.' : 'No active marketing tracker at this time.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Données collectées : ' : 'Data collected: '}</span>{isFr ? 'identifiant de membre LinkedIn ou équivalent, pages visitées, actions effectuées, adresse IP.' : 'LinkedIn member ID or equivalent, pages visited, actions performed, IP address.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Finalité : ' : 'Purpose: '}</span>{isFr ? 'mesure de l\'efficacité des campagnes de communication B2B, reciblage publicitaire.' : 'measuring effectiveness of B2B communication campaigns, advertising retargeting.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Durée de conservation : ' : 'Retention: '}</span>{isFr ? 'non applicable tant qu’aucun traceur marketing n’est activé.' : 'not applicable while no marketing tracker is enabled.'}</li>
                  <li><span className="font-semibold">{isFr ? 'Transfert hors UE : ' : 'Transfer outside EU: '}</span>{isFr ? 'non applicable à ce jour.' : 'not applicable at this time.'}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '3. Gestion de vos préférences' : '3. Managing Your Preferences'}
            </h2>

            {/* 3.1 */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#573D4E] mb-3">
                {isFr ? '3.1 Via le bandeau de gestion des cookies' : '3.1 Via the Cookie Management Banner'}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
                <p>
                  {isFr
                    ? 'Lors de votre première visite sur le site, un bandeau de gestion des cookies vous est présenté. Vous pouvez à ce moment accepter ou refuser le dépôt de cookies analytiques et marketing, de manière globale ou par catégorie.'
                    : 'On your first visit to the site, a cookie management banner is displayed. You can accept or refuse the placement of analytics and marketing cookies, either globally or by category.'}
                </p>
                <p>
                  {isFr
                    ? 'Conformément à la recommandation consolidée de la CNIL du 25 janvier 2024, le bouton de refus est aussi accessible que le bouton d\'acceptation. Le simple fait de poursuivre la navigation ne vaut pas consentement.'
                    : 'In accordance with the consolidated CNIL recommendation of 25 January 2024, the refuse button is as accessible as the accept button. Simply continuing to browse does not constitute consent.'}
                </p>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="text-[#2E9013] hover:underline font-medium"
                >
                  {isFr ? 'Gérer mes cookies' : 'Manage my cookies'}
                </button>
              </div>
            </div>

            {/* 3.2 */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#573D4E] mb-3">
                {isFr ? '3.2 Via les paramètres de votre navigateur' : '3.2 Via Your Browser Settings'}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-3">
                <p>
                  {isFr
                    ? 'Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies :'
                    : 'You can configure your browser to accept or refuse cookies:'}
                </p>
                <ul className="space-y-1.5 ml-2">
                  <li><span className="font-semibold">Google Chrome :</span> {isFr ? 'Paramètres › Confidentialité et sécurité › Cookies et autres données des sites' : 'Settings › Privacy and security › Cookies and other site data'}</li>
                  <li><span className="font-semibold">Mozilla Firefox :</span> {isFr ? 'Paramètres › Vie privée et sécurité › Cookies et données des sites' : 'Settings › Privacy & Security › Cookies and Site Data'}</li>
                  <li><span className="font-semibold">Safari :</span> {isFr ? 'Préférences › Confidentialité › Cookies et données des sites web' : 'Preferences › Privacy › Cookies and website data'}</li>
                  <li><span className="font-semibold">Microsoft Edge :</span> {isFr ? 'Paramètres › Cookies et autorisations de site' : 'Settings › Cookies and site permissions'}</li>
                </ul>
                <p className="text-[#F5A617] font-medium">
                  {isFr
                    ? 'Attention : la désactivation de certains cookies peut affecter le fonctionnement du site et la qualité de l\'expérience de navigation.'
                    : 'Note: disabling certain cookies may affect the operation of the site and the quality of your browsing experience.'}
                </p>
              </div>
            </div>

            {/* 3.3 */}
            <div>
              <h3 className="font-semibold text-[#573D4E] mb-3">
                {isFr ? '3.3 Outils de désactivation spécifiques' : '3.3 Specific Opt-out Tools'}
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
                <p>
                  <span className="font-semibold">PostHog : </span>
                  {isFr
                    ? 'le suivi n’est activé qu’après consentement. Vous pouvez le désactiver à tout moment via le gestionnaire de cookies.'
                    : 'tracking is enabled only after consent. You can disable it at any time through the cookie manager.'}
                </p>
                <p>
                  <span className="font-semibold">Google Analytics : </span>
                  {isFr
                    ? 'non utilisé à ce jour.'
                    : 'not used at this time.'}
                </p>
                <p>
                  <span className="font-semibold">LinkedIn Insight Tag : </span>
                  {isFr
                    ? 'non utilisé à ce jour.'
                    : 'not used at this time.'}
                </p>
                <p>
                  {isFr
                    ? 'Extension officielle Google Analytics, si cet outil était ajouté ultérieurement : '
                    : 'Official Google Analytics opt-out extension, if this tool is added later: '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E9013] hover:underline"
                  >
                    tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '4. Durée de validité du consentement' : '4. Consent Validity Period'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm">
              <p>
                {isFr
                  ? 'Conformément à la recommandation consolidée de la CNIL du 25 janvier 2024, le consentement exprimé est valable pour une durée maximale de 6 mois. À l\'expiration de ce délai, le consentement de l\'utilisateur sera à nouveau sollicité.'
                  : 'In accordance with the consolidated CNIL recommendation of 25 January 2024, expressed consent is valid for a maximum of 6 months. Upon expiry, user consent will be requested again.'}
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '5. Contact' : '5. Contact'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
              <p>
                {isFr
                  ? 'Pour toute question relative à l\'utilisation des cookies sur le site de Freearcs Pharma Services, vous pouvez contacter Madame Nadège KAMBOU PENE à l\'adresse électronique suivante :'
                  : 'For any questions regarding the use of cookies on the Freearcs Pharma Services website, you may contact Ms Nadège KAMBOU PENE at the following email address:'}
              </p>
              <p>
                <a href="mailto:contact@freearcs.com" className="text-[#2E9013] hover:underline font-medium">
                  contact@freearcs.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '6. Modifications de la politique de cookies' : '6. Cookie Policy Updates'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
              <p>
                {isFr
                  ? 'Freearcs Pharma Services se réserve le droit de modifier la présente politique à tout moment, notamment afin de se conformer à toute évolution législative, réglementaire ou jurisprudentielle, ou à toute modification des outils et traceurs utilisés sur le site. La date de dernière mise à jour figurant en tête du présent document sera actualisée à chaque modification.'
                  : 'Freearcs Pharma Services reserves the right to modify this policy at any time, in particular to comply with legislative, regulatory or case law developments, or any changes to the tools and trackers used on the site. The last updated date at the top of this document will be updated with each modification.'}
              </p>
              <p>
                {isFr
                  ? 'En cas de modification substantielle affectant les cookies soumis à consentement, le bandeau de gestion des cookies sera à nouveau présenté à l\'utilisateur.'
                  : 'In the event of a material change affecting cookies subject to consent, the cookie management banner will be displayed to the user again.'}
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
