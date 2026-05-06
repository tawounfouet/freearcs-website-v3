import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import HeroBanner from '../components/HeroBanner';
import { ArrowRight, Globe, CheckCircle, Building2 } from 'lucide-react';
import SEO from '@/components/SEO';

const LOGO_WHITE = "/freearcs-pharma-services_logo-white.svg";

const LegalRepresentationPage = () => {
  const { t } = useLanguage();

  const targetRegions = t('legalRepresentation.targetRegions');
  const typesOfOrgs = t('legalRepresentation.typesOfOrgs');
  const benefits = t('legalRepresentation.benefits');

  return (
    <div className="min-h-screen bg-muted" data-testid="legal-representation-page">
      <SEO
        title={t('legalRepresentation.metaTitle')}
        description={t('legalRepresentation.metaDescription')}
        url="/legal-representation"
      />

      <HeroBanner
        title={t('nav.legalRepresentation')}
        subtitle={t('legalRepresentation.heroSubtitle')}
        breadcrumbs={[
          { label: t('nav.services'), path: '/services' },
          { label: t('nav.legalRepresentation') },
        ]}
        testId="legal-rep-hero"
      />

      {/* CTA */}
      <div className="bg-white py-8 flex justify-center" data-testid="legal-rep-cta-section">
        <Button
          asChild
          className="bg-[#2E9013] hover:bg-[#573D4E] text-white font-semibold px-8 py-6 rounded-full text-lg"
          data-testid="legal-rep-cta"
        >
          <Link to="/contact?subject=legal-representation">
            {t('legalRepresentation.requestAssessment')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>

      {/* Target Sponsors Section */}
      <section className="py-16 bg-muted" data-testid="target-sponsors-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E] mb-6">
                {t('legalRepresentation.targetTitle')}
              </h2>
              <p className="text-[#4B5563] leading-relaxed mb-8">
                {t('legalRepresentation.targetText')}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {Array.isArray(targetRegions) && targetRegions.map((region) => (
                  <div
                    key={region.name}
                    className="bg-white p-4 rounded-xl shadow flex items-center gap-3"
                  >
                    <span className="text-2xl">{region.flag}</span>
                    <span className="text-[#573D4E] font-medium">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-8 h-8 text-[#2E9013]" />
                    <h3 className="font-raleway text-xl font-bold text-[#573D4E]">
                      {t('legalRepresentation.typesOfOrgsTitle')}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {Array.isArray(typesOfOrgs) && typesOfOrgs.map((org) => (
                      <li key={org} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2E9013] flex-shrink-0 mt-0.5" />
                        <span className="text-[#4B5563]">{org}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-16 bg-white" data-testid="benefits-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-[#573D4E] flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-[#573D4E]">
              {t('legalRepresentation.whatWeProvideTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(benefits) && benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-muted p-6 rounded-xl flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-[#2E9013] flex-shrink-0" />
                <span className="text-[#4B5563]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-16 bg-[#573D4E]" data-testid="regulatory-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
            {t('legalRepresentation.regulatoryFrameworkTitle')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
              <p className="text-[#F5A617] font-bold text-lg mb-2">EU CTR 536/2014</p>
              <p className="text-white/80 text-sm">Clinical Trials Regulation</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
              <p className="text-[#F5A617] font-bold text-lg mb-2">MDR 745/2017</p>
              <p className="text-white/80 text-sm">Medical Devices Regulation</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
              <p className="text-[#F5A617] font-bold text-lg mb-2">CTIS</p>
              <p className="text-white/80 text-sm">Clinical Trials Information System</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-[#573D4E] overflow-hidden" data-testid="legal-cta-section">
        <img
          src={LOGO_WHITE}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-64 lg:w-80 pointer-events-none select-none"
          style={{ opacity: 0.07 }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-white mb-6">
            {t('legalRepresentation.talkToUs')}
          </h2>
          <Button
            asChild
            className="bg-[#2E9013] hover:bg-white hover:text-[#573D4E] text-white font-semibold px-10 py-6 rounded-full text-lg"
            data-testid="legal-contact-btn"
          >
            <Link to="/contact?subject=legal-representation">
              {t('legalRepresentation.requestAssessment')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LegalRepresentationPage;
