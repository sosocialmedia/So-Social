import React from 'react';

interface ServicesMarqueeProps {
  onNavigate?: (path: string) => void;
}

const marqueeItems = [
  { name: 'Strategie', path: '/diensten/social-media-marketing' },
  { name: 'Contentcreatie', path: '/diensten/content-creatie' },
  { name: 'Foto- & videografie', path: '/diensten/content-creatie' },
  { name: 'Socialmediabeheer', path: '/diensten/social-media-beheer' },
  { name: 'Vastgoed', path: '/diensten/content-creatie' },
  { name: 'Bouw', path: '/diensten/social-media-beheer' },
  { name: 'Interieur', path: '/diensten/content-creatie' },
  { name: 'Webdesign', path: '/diensten/webdesign' },
  { name: 'Social Advertising', path: '/diensten/social-media-advertenties' },
  { name: 'Website Laten Maken', path: '/diensten/website-laten-maken' },
  { name: 'Horeca & Lifestyle', path: '/diensten/social-media-beheer' },
  { name: 'Reels & TikTok Video', path: '/diensten/content-creatie' },
  { name: 'City Marketing & PR', path: '/diensten/social-media-marketing' }
];

export default function ServicesMarquee({ onNavigate }: ServicesMarqueeProps) {
  // Duplicate array 3 times to ensure infinite smooth marquee loop without any gap
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-5 bg-[#EAEAE6] -mt-7 sm:-mt-9 mb-4 sm:mb-8 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Dark capsule pill container matching example screenshot from mydreamsocials.nl */}
        <div className="relative w-full bg-[#181614] rounded-full py-3 sm:py-4 px-4 sm:px-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)] border border-black/20 overflow-hidden flex items-center">
          
          {/* Subtle side gradient edge masks for seamless entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#181614] via-[#181614]/80 to-transparent z-10 pointer-events-none rounded-l-full" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#181614] via-[#181614]/80 to-transparent z-10 pointer-events-none rounded-r-full" />

          {/* Marquee Ticker Track */}
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {displayItems.map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="inline-flex items-center">
                <button
                  type="button"
                  onClick={() => onNavigate?.(item.path)}
                  className="font-serif italic font-normal text-base sm:text-lg md:text-xl text-[#EDE8E1] tracking-wide hover:text-white transition-colors cursor-pointer select-none"
                >
                  {item.name}
                </button>
                
                {/* Elegant 4-pointed golden/champagne diamond star separator */}
                <span className="text-[#C08B7A] mx-4 sm:mx-7 text-xs sm:text-sm select-none opacity-90 inline-block scale-110">
                  ✦
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
