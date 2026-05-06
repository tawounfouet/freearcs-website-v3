import React from 'react';

export const GreenWave = ({ className = "", position = "bottom" }) => {
  const positionStyles = position === "top" 
    ? "top-0 rotate-180" 
    : "bottom-0";

  return (
    <div className={`absolute left-0 right-0 ${positionStyles} w-full overflow-hidden leading-none ${className}`}>
      <svg
        className="relative block w-full h-[60px] md:h-[80px] lg:h-[100px]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C120,80 240,20 360,50 C480,80 600,30 720,40 C840,50 960,80 1080,50 C1200,20 1320,60 1440,40 L1440,100 L0,100 Z"
          fill="#2E9013"
          fillOpacity="0.15"
        />
        <path
          d="M0,60 C180,20 360,80 540,50 C720,20 900,70 1080,40 C1260,10 1350,50 1440,30 L1440,100 L0,100 Z"
          fill="#2E9013"
          fillOpacity="0.25"
        />
        <path
          d="M0,70 C240,40 480,90 720,60 C960,30 1200,70 1440,50 L1440,100 L0,100 Z"
          fill="#2E9013"
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
};

export const GreenWaveHeader = ({ className = "" }) => {
  return (
    <div className={`absolute left-0 right-0 top-0 w-full overflow-hidden leading-none pointer-events-none ${className}`}>
      <svg
        className="relative block w-full h-[120px] md:h-[150px] lg:h-[180px]"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L1440,0 L1440,80 C1320,120 1200,60 1080,90 C960,120 840,70 720,100 C600,130 480,80 360,110 C240,140 120,90 0,120 Z"
          fill="#2E9013"
          fillOpacity="0.08"
        />
        <path
          d="M0,0 L1440,0 L1440,60 C1260,100 1080,50 900,80 C720,110 540,60 360,90 C180,120 90,70 0,100 Z"
          fill="#2E9013"
          fillOpacity="0.12"
        />
      </svg>
    </div>
  );
};

// Vagues haut/bas pour le Hero — gradient vert brand
export const HeroWaveTop = ({ className = "" }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10 ${className}`}>
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full h-[120px] md:h-[160px] lg:h-[200px]"
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#2E9013" stopOpacity="0.55" />
          <stop offset="50%"  stopColor="#4a8c6a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a7c9bb" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#a7c9bb" stopOpacity="0.38" />
          <stop offset="50%"  stopColor="#4a8c6a" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2E9013" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <path fill="url(#heroGrad1)" d="M0,0 L1440,0 L1440,80 C1200,160 900,20 600,100 C300,180 0,60 0,120 Z" />
      <path fill="url(#heroGrad2)" d="M0,0 L1440,0 L1440,40 C1100,120 800,0 500,80 C200,160 0,40 0,80 Z" />
    </svg>
  </div>
);

export const HeroWaveBottom = ({ className = "" }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10 ${className}`}>
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full h-[120px] md:h-[160px] lg:h-[200px]"
      style={{ transform: 'scaleY(-1)' }}
    >
      <path fill="url(#heroGrad1)" d="M0,0 L1440,0 L1440,60 C1100,140 800,20 500,100 C200,180 0,60 0,100 Z" />
      <path fill="url(#heroGrad2)" d="M0,0 L1440,0 L1440,100 C1200,40 900,160 600,80 C300,0 0,120 0,60 Z" />
    </svg>
  </div>
);

export const GreenWaveDivider = ({ className = "", flip = false }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        className="relative block w-full h-[40px] md:h-[60px]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 Q360,0 720,30 T1440,30 L1440,60 L0,60 Z"
          fill="#2E9013"
          fillOpacity="0.1"
        />
        <path
          d="M0,40 Q360,20 720,40 T1440,40 L1440,60 L0,60 Z"
          fill="#2E9013"
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
};
