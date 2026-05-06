// Carrousel logos Références — directive médias v1.0
// Swiper.js · défilement continu 1 à 1 · pauseOnMouseEnter
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const LOGOS = [
  { src: '/References/Business and decision_logo.png',     alt: 'Business and Decision' },
  { src: '/References/Catalyst Logo.png',                  alt: 'Catalyst' },
  { src: '/References/kcr_logo.jpeg',                      alt: 'KCR' },
  { src: '/References/Logo Biosenic.jpg',                  alt: 'Biosenic' },
  { src: '/References/logo Corwave.png',                   alt: 'Corwave' },
  { src: '/References/Logo IKF_1024x428.png',              alt: 'IKF' },
  { src: '/References/Logo Innovaderm-Indero.png',         alt: 'Innovaderm / Indero' },
  { src: '/References/Logo Innovativ trial.jpeg',          alt: 'Innovativ Trial' },
  { src: '/References/Logo Klinikos.jpg',                  alt: 'Klinikos' },
  { src: '/References/Logo Pharmalys LTD.png',             alt: 'Pharmalys LTD' },
  { src: '/References/logo PRA ICON.png',                  alt: 'PRA / ICON' },
  { src: '/References/Logo Premier Research.jpg',          alt: 'Premier Research' },
  { src: '/References/Logo Syneos Health.png',             alt: 'Syneos Health' },
  { src: '/References/Parexel_2021_Logo.png',              alt: 'Parexel' },
  { src: '/References/WCG_New_Logo.jpg',                   alt: 'WCG' },
];

const LogoCarousel = () => (
  <Swiper
    modules={[Autoplay, FreeMode]}
    loop={true}
    freeMode={true}
    grabCursor={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    speed={3000}
    breakpoints={{
      0:    { slidesPerView: 2, spaceBetween: 16 },
      640:  { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 24 },
    }}
    className="w-full"
  >
    {LOGOS.map(({ src, alt }) => (
      <SwiperSlide key={src}>
        <div className="flex items-center justify-center h-[64px] bg-white border border-[#E0DDD8]/50 rounded-[8px] px-6 py-2 group cursor-pointer">
          <img
            src={src}
            alt={alt}
            role="img"
            aria-label={alt}
            loading="lazy"
            className="max-h-[48px] w-auto object-contain transition-all duration-250"
            onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.5)')}
            onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default LogoCarousel;
