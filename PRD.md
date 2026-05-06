# FREEARCS PHARMA SERVICES - Site Vitrine

## Problem Statement
Créer un site vitrine pour FREEARCS PHARMA SERVICES, une CRO (Contract Research Organization) française. Site statique utilisant HTML, CSS, JavaScript, Bootstrap (via Tailwind), et icônes Lucide. Template destiné à être intégré avec Django.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI (non utilisé pour ce site vitrine statique)
- **Database**: MongoDB (non utilisé pour ce site vitrine statique)
- **i18n**: Custom context-based language provider (FR/EN)

## User Personas
1. **Laboratoires pharmaceutiques**: Recherchent une CRO pour des études cliniques
2. **Biotechs/Medtech/Startups**: Besoin d'accompagnement réglementaire et opérationnel
3. **Promoteurs académiques**: Études cliniques universitaires
4. **CROs partenaires internationales**: Recherchent un partenaire français
5. **Promoteurs non-UE**: Besoin de représentation légale européenne

## Core Requirements (Static)
- Site vitrine multilingue FR/EN (FR par défaut)
- Palette couleurs stricte: Vert #2E9013, Mauve #573D4E, Ambre #F5A617, Rouge #D81C20
- Élément graphique signature: vague ondulante verte
- Formulaire de contact avec menu déroulant Subject
- Schema.org JSON-LD pour SEO
- Design responsive mobile-first

## What's Been Implemented ✅ (Décembre 2025)
### Pages créées:
- ✅ Home (Hero, Who We Are, What We Do, Services, ANSM Fast-Track, Therapeutic Expertise, Why Choose Us, References, CTA)
- ✅ About (Vision, Mission, Values)
- ✅ Founder (Nadège KAMBOU)
- ✅ Services (6 services détaillés + Training + ANSM Fast-Track)
- ✅ Legal Representation EU
- ✅ Therapeutic Expertise (Oncology, CNS, Rare Diseases, Other)
- ✅ Why Choose Us (7 avantages + comparaison CRO indépendante vs grande CRO)
- ✅ References (stats, logos clients, AFCROs)
- ✅ Blog (3 articles statiques)
- ✅ Contact (formulaire complet avec Subject dropdown)

### Fonctionnalités:
- ✅ Switch langue FR/EN (header + footer)
- ✅ Navigation responsive avec menu mobile
- ✅ Header sticky avec logo et CTA
- ✅ Footer avec liens, contact, réseaux sociaux
- ✅ Vague verte ondulante sur pages principales
- ✅ Schema.org JSON-LD (Organization, LocalBusiness)
- ✅ Images stock professionnelles (Unsplash/Pexels)
- ✅ Formulaire contact statique (template Django)

## Prioritized Backlog
### P0 - Critique (Complété)
- ✅ Toutes les pages principales
- ✅ i18n FR/EN
- ✅ Formulaire contact

### P1 - Important (Future)
- [ ] Intégration Django (remplacer React)
- [ ] Envoi email formulaire contact (SendGrid/Resend)
- [ ] Pages blog individuelles avec contenu complet
- [ ] Politique de confidentialité et mentions légales complètes
- [ ] Bandeau cookies RGPD

### P2 - Nice to have
- [ ] Animation d'entrée des sections
- [ ] Formulaire newsletter
- [ ] Intégration LinkedIn
- [ ] Google Analytics 4
- [ ] Sitemap XML automatique

## Next Tasks
1. Intégrer le template dans Django si requis
2. Ajouter l'envoi email pour le formulaire contact
3. Compléter les pages légales (mentions légales, politique de confidentialité)
4. Ajouter le bandeau cookies RGPD
