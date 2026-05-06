import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroBanner = ({ title, subtitle, breadcrumbs = [], testId }) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#573D4E] overflow-hidden py-8 lg:py-12" data-testid={testId}>
      {/* Geometric polygon overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <polygon points="1100,0 1440,0 1440,280"      fill="rgba(255,255,255,0.04)" />
        <polygon points="1200,420 1440,320 1440,420"  fill="rgba(255,255,255,0.05)" />
        <polygon points="-60,0 280,0 180,200 -60,140" fill="rgba(46,144,19,0.08)" />
        <polygon points="0,320 200,420 0,420"          fill="rgba(255,255,255,0.04)" />
        <polygon points="180,60 340,20 420,120 300,180 160,140" fill="rgba(245,166,23,0.07)" />
        <polygon points="850,20 1020,0 1060,160 920,190 800,100" fill="rgba(255,255,255,0.03)" />
        <polygon points="560,340 750,300 800,420 520,420"        fill="rgba(46,144,19,0.06)" />
        <polygon points="1100,180 1280,140 1350,280 1160,310"    fill="rgba(245,166,23,0.05)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
        <h1 className="font-raleway text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 mt-8 flex items-center justify-center gap-1.5 text-sm text-white/60">
        <Link to="/" className="hover:text-white transition-colors">
          {t('nav.home')}
        </Link>
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            <ChevronRight className="w-3.5 h-3.5" />
            {crumb.path ? (
              <Link to={crumb.path} className="hover:text-white transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white/90 font-medium">{crumb.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
