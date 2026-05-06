// filepath: /Users/awf/Projects/clients/freearcs/fps-react-frontend/src/pages/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Phone, MapPin, Send, Upload, CheckCircle, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

const ContactPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center" data-testid="contact-success">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-[#EAF5E1] flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#2E9013]" />
          </div>
          <h1 className="font-raleway text-3xl font-bold text-[#573D4E] mb-4">
            {t('contact.successTitle')}
          </h1>
          <p className="text-[#4B5563] mb-6">{t('contact.successText')}</p>
          <Button
            onClick={() => setSubmitted(false)}
            className="bg-[#2E9013] hover:bg-[#1a5a0b] text-white font-semibold px-6 py-3 rounded-full"
          >
            {t('contact.form.anotherMessage')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted" data-testid="contact-page">
      <SEO
        title={t('contact.metaTitle')}
        description={t('contact.metaDescription')}
        url="/contact"
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#573D4E] overflow-hidden py-8 lg:py-12" data-testid="contact-hero">
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
        <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
          <h1 className="font-raleway text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight" data-testid="contact-title">
            Contact
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">{t('contact.intro')}</p>
        </div>
        <div className="relative z-10 mt-8 flex items-center justify-center gap-1.5 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/90 font-medium">Contact</span>
        </div>
      </section>

      {/* ── Formulaire + Sidebar ── */}
      <section className="py-20" data-testid="contact-form-section">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">

                    {/* Prénom + Nom */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName" name="firstName" type="text" required
                          placeholder="Marie"
                          value={formData.firstName} onChange={handleChange}
                          className="border-gray-300 focus:border-[#2E9013] focus:ring-[#2E9013]"
                          data-testid="contact-firstname-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.name')} *</Label>
                        <Input
                          id="name" name="name" type="text" required
                          placeholder={t('contact.form.namePlaceholder')}
                          value={formData.name} onChange={handleChange}
                          className="border-gray-300 focus:border-[#2E9013] focus:ring-[#2E9013]"
                          data-testid="contact-name-input"
                        />
                      </div>
                    </div>

                    {/* Email + Téléphone (obligatoire) */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')} *</Label>
                        <Input
                          id="email" name="email" type="email" required
                          placeholder={t('contact.form.emailPlaceholder')}
                          value={formData.email} onChange={handleChange}
                          className="border-gray-300 focus:border-[#2E9013] focus:ring-[#2E9013]"
                          data-testid="contact-email-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                        <Input
                          id="phone" name="phone" type="tel" required
                          placeholder={t('contact.form.phonePlaceholder')}
                          value={formData.phone} onChange={handleChange}
                          className="border-gray-300 focus:border-[#2E9013] focus:ring-[#2E9013]"
                          data-testid="contact-phone-input"
                        />
                      </div>
                    </div>

                    {/* Entreprise */}
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.form.company')}</Label>
                      <Input
                        id="company" name="company" type="text"
                        placeholder={t('contact.form.companyPlaceholder')}
                        value={formData.company} onChange={handleChange}
                        className="border-gray-300 focus:border-[#2E9013] focus:ring-[#2E9013]"
                        data-testid="contact-company-input"
                      />
                    </div>

                    {/* Sujet — champ libre */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
                      <Input
                        id="subject" name="subject" type="text" required
                        placeholder="Ex : Projet Phase I, représentation légale UE, partenariat..."
                        value={formData.subject} onChange={handleChange}
                        className="border-gray-300 focus:border-[#2E9013] focus:ring-[#2E9013]"
                        data-testid="contact-subject-input"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message')} *</Label>
                      <Textarea
                        id="message" name="message" required rows={5}
                        placeholder={t('contact.form.messagePlaceholder')}
                        value={formData.message} onChange={handleChange}
                        className="border-gray-300 focus:border-[#2E9013] focus:ring-[#2E9013] resize-none"
                        data-testid="contact-message-input"
                      />
                    </div>

                    {/* Fichier */}
                    {/* <div className="space-y-2">
                      <Label htmlFor="file">{t('contact.form.fileUpload')}</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#2E9013] transition-colors">
                        <input id="file" name="file" type="file" onChange={handleFileChange} className="hidden" data-testid="contact-file-input" />
                        <label htmlFor="file" className="cursor-pointer">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-[#4B5563]">
                            {formData.file ? formData.file.name : t('contact.form.uploadPlaceholder')}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{t('contact.form.uploadHint')}</p>
                        </label>
                      </div>
                    </div> */}

                    <Button
                      type="submit"
                      className="w-full bg-[#2E9013] hover:bg-[#573D4E] text-white font-semibold py-6 rounded-full text-lg"
                      data-testid="contact-submit-btn"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-raleway text-lg font-bold text-[#573D4E] mb-4">
                    {t('contact.contactInfoTitle')}
                  </h3>
                  <div className="space-y-4">
                    <a href="mailto:contact@freearcs.com" className="flex items-center gap-3 text-[#4B5563] hover:text-[#2E9013] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#EAF5E1] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#2E9013]" />
                      </div>
                      <span>contact@freearcs.com</span>
                    </a>
                    <a href="tel:+33179932112" className="flex items-center gap-3 text-[#4B5563] hover:text-[#2E9013] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#EAF5E1] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#2E9013]" />
                      </div>
                      <span>+33 1 79 93 21 12</span>
                    </a>
                    <div className="flex items-start gap-3 text-[#4B5563]">
                      <div className="w-10 h-10 rounded-full bg-[#EAF5E1] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#2E9013]" />
                      </div>
                      <span>50 Avenue des Champs-Élysées<br />75008 Paris</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-raleway text-lg font-bold text-[#573D4E] mb-3">
                    {t('contact.afcrosMemberTitle')}
                  </h3>
                  <img src="/AFCROs.png" alt="AFCROs" className="h-10 w-auto object-contain mb-2" />
                  <p className="text-sm text-[#4B5563]">{t('contact.afcrosMemberSubtitle')}</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
