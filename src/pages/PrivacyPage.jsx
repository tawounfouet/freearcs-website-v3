import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '@/components/SEO';

const PrivacyPage = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <div className="min-h-screen bg-muted py-20 px-4">
      <SEO
        title={isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}
        description={isFr ? 'Politique de confidentialité de Freearcs Pharma Services' : 'Privacy policy of Freearcs Pharma Services'}
        url="/privacy"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-raleway text-3xl font-bold text-[#573D4E] mb-2">
          {isFr ? 'Politique de Confidentialité' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-[#6B7280] mb-10">
          {isFr ? 'Dernière mise à jour : avril 2026' : 'Last updated: April 2026'}
        </p>

        <div className="space-y-10 text-[#374151]">
          {/* Responsable de traitement */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '1. Responsable du traitement' : '1. Data Controller'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
              <p>
                {isFr
                  ? 'Le responsable du traitement des données à caractère personnel collectées via ce site est :'
                  : 'The data controller for personal data collected through this site is:'}
              </p>
              <p><span className="font-semibold">Freearcs Pharma Services</span></p>
              <p>[Adresse complète], Paris, France</p>
              <p>
                <a href="mailto:contact@freearcs-pharma.com" className="text-[#2E9013] hover:underline">
                  contact@freearcs-pharma.com
                </a>
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '2. Données collectées' : '2. Data Collected'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-3">
              <p className="font-semibold">
                {isFr ? 'Via le formulaire de contact (RFI) :' : 'Via the contact form (RFI):'}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>{isFr ? 'Nom et prénom' : 'First and last name'}</li>
                <li>{isFr ? 'Adresse e-mail professionnelle' : 'Professional email address'}</li>
                <li>{isFr ? "Nom de l'entreprise" : 'Company name'}</li>
                <li>{isFr ? 'Numéro de téléphone (optionnel)' : 'Phone number (optional)'}</li>
                <li>{isFr ? 'Contenu du message' : 'Message content'}</li>
                <li>{isFr ? 'Documents joints (optionnel)' : 'Attached documents (optional)'}</li>
              </ul>
              <p className="font-semibold mt-3">
                {isFr ? "Via les outils d'analyse, uniquement après consentement :" : 'Via analytics tools, only after consent:'}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>{isFr ? 'Adresse IP anonymisée' : 'Anonymised IP address'}</li>
                <li>{isFr ? 'Pages visitées, durée de session' : 'Pages visited, session duration'}</li>
                <li>{isFr ? "Type de navigateur et système d'exploitation" : 'Browser type and operating system'}</li>
              </ul>
            </div>
          </section>

          {/* Finalités et base légale */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '3. Finalités et base légale du traitement' : '3. Purposes and Legal Basis'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-2 pr-4 font-semibold">{isFr ? 'Finalité' : 'Purpose'}</th>
                    <th className="pb-2 font-semibold">{isFr ? 'Base légale (RGPD)' : 'Legal Basis (GDPR)'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-4">{isFr ? 'Répondre aux demandes de contact' : 'Responding to contact requests'}</td>
                    <td className="py-2">{isFr ? 'Intérêt légitime (Art. 6.1.f)' : 'Legitimate interest (Art. 6.1.f)'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">{isFr ? "Analyse d'audience du site" : 'Website audience analytics'}</td>
                    <td className="py-2">{isFr ? 'Consentement (Art. 6.1.a)' : 'Consent (Art. 6.1.a)'}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">{isFr ? 'Amélioration du service' : 'Service improvement'}</td>
                    <td className="py-2">{isFr ? 'Intérêt légitime (Art. 6.1.f)' : 'Legitimate interest (Art. 6.1.f)'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '4. Durée de conservation' : '4. Retention Period'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
              <p>
                {isFr
                  ? 'Les données issues du formulaire de contact sont conservées pendant 3 ans à compter du dernier contact, sauf obligation légale contraire. Les données analytiques, si l’utilisateur y consent, sont conservées 12 mois.'
                  : 'Data from the contact form is retained for 3 years from the last contact, unless otherwise required by law. Analytics data, if the user consents, is retained for 12 months.'}
              </p>
            </div>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '5. Destinataires des données' : '5. Data Recipients'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
              <p>
                {isFr
                  ? 'Vos données ne sont pas cédées ni vendues à des tiers. Elles peuvent être transmises aux prestataires techniques suivants, dans le cadre strict de leur mission :'
                  : 'Your data is not sold or transferred to third parties. It may be shared with the following technical service providers, strictly within the scope of their services:'}
              </p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>{isFr ? "Prestataire d'analyse d'audience — uniquement si l'utilisateur accepte les cookies analytiques" : 'Audience analytics provider — only if the user accepts analytics cookies'}</li>
                <li>{isFr ? 'Hébergeur du site — [À compléter]' : 'Website hosting provider — [To be completed]'}</li>
              </ul>
            </div>
          </section>

          {/* Droits */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '6. Vos droits' : '6. Your Rights'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm space-y-2">
              <p>
                {isFr
                  ? 'Conformément au RGPD, vous disposez des droits suivants sur vos données : accès, rectification, effacement, opposition, limitation du traitement, portabilité.'
                  : 'In accordance with the GDPR, you have the following rights regarding your data: access, rectification, erasure, objection, restriction of processing, and portability.'}
              </p>
              <p>
                {isFr
                  ? 'Pour exercer ces droits, contactez-nous à : '
                  : 'To exercise these rights, contact us at: '}
                <a href="mailto:contact@freearcs-pharma.com" className="text-[#2E9013] hover:underline">
                  contact@freearcs-pharma.com
                </a>
              </p>
              <p>
                {isFr
                  ? 'Vous pouvez également introduire une réclamation auprès de la CNIL : '
                  : 'You may also lodge a complaint with the CNIL (French data protection authority): '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#2E9013] hover:underline">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

          {/* Transferts hors UE */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '7. Transferts hors Union européenne' : '7. Transfers Outside the EU'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm">
              <p>
                {isFr
                  ? "Aucun traceur tiers n'est chargé avant consentement. Si un prestataire situé hors de l’Union européenne est activé pour l’analyse d’audience, les transferts seront encadrés par les garanties appropriées prévues par le RGPD, notamment les clauses contractuelles types ou tout mécanisme d’adéquation applicable."
                  : 'No third-party tracker is loaded before consent. If a provider located outside the European Union is enabled for audience analytics, transfers will be governed by appropriate safeguards under the GDPR, including standard contractual clauses or any applicable adequacy mechanism.'}
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="font-raleway text-xl font-bold text-[#573D4E] mb-4">
              {isFr ? '8. Modifications de la politique' : '8. Policy Updates'}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-sm">
              <p>
                {isFr
                  ? 'Freearcs Pharma Services se réserve le droit de modifier la présente politique à tout moment. La version en vigueur est toujours accessible à cette adresse. Nous vous encourageons à la consulter régulièrement.'
                  : 'Freearcs Pharma Services reserves the right to modify this policy at any time. The current version is always available at this address. We encourage you to review it regularly.'}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
