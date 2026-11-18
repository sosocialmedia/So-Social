import React from 'react';
import { Instagram } from 'lucide-react';

interface FeedCard {
  id: string;
  client: string;
  handle: string;
  image: string;
  rotation: string;
  zIndex: number;
}

const feedsList: FeedCard[] = [
  {
    id: 'onpoint',
    client: 'On Point Schilder & Tegelwerk',
    handle: '@onpoint.schilderwerken',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-11_at_23.59.28__2__5438e53e.jpeg',
    rotation: '-rotate-8 sm:-rotate-10 translate-y-4',
    zIndex: 10
  },
  {
    id: 'schuyren',
    client: 'Schuyren Installatietechniek',
    handle: '@schuyren.installatie',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-11_at_23.59.28__1__298daad4.jpeg',
    rotation: '-rotate-2 -translate-y-2',
    zIndex: 20
  },
  {
    id: 'jules',
    client: 'Grand Café Jules',
    handle: 'Grand Café Jules',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-11_at_23.59.28_753017fc.jpeg',
    rotation: 'rotate-6 sm:rotate-8 translate-y-3',
    zIndex: 30
  }
];

export default function FeedShowcase() {
  return (
    <section 
      id="feeds-showcase" 
      aria-label="Instagram Feed Portfolio van SO SOCIAL"
      className="scroll-mt-20 md:scroll-mt-28 relative py-20 sm:py-28 md:py-32 bg-[#FAF9F5] border-y border-[#E2DFD8] overflow-hidden select-none"
    >
      {/* Subtle warm organic ambient background glows (radial gradient without blur-3xl repaint cost) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(177,154,120,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(177,154,120,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT: Overlapping fan-out cards positioned side-by-side (naast elkaar) matching reference screenshot */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="flex items-center justify-center -space-x-10 sm:-space-x-14 md:-space-x-16 lg:-space-x-12 xl:-space-x-14 py-8 px-4 w-full max-w-2xl overflow-visible">
              {feedsList.map((feed) => (
                <div
                  key={feed.id}
                  style={{ zIndex: feed.zIndex }}
                  className={`flex-shrink-0 ${feed.rotation} pointer-events-none cursor-default [transform-style:preserve-3d] [backface-visibility:hidden]`}
                >
                  {/* Smartphone App / Polaroid Style Card */}
                  <div className="w-[175px] sm:w-[215px] md:w-[235px] lg:w-[210px] xl:w-[230px] bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E8E5DF]">
                    
                    {/* 9-grid screenshot */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-100">
                      <img
                        src={feed.image}
                        alt={`Instagram feed voor ${feed.client} door SO SOCIAL`}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Footer with Client Name */}
                    <div className="pt-2.5 pb-0.5 px-1 text-center">
                      <p className="text-[11px] sm:text-xs font-medium text-zinc-700 tracking-tight truncate">
                        {feed.client}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Typography & Text matching reference visual precisely */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#B19A78]">
                EVEN GLUREN
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-serif text-zinc-900 leading-[1.15]">
              Een paar feeds die we{' '}
              <span className="font-serif italic font-normal text-[#B19A78]">
                maakten.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-sans font-light">
              Van losse beelden naar een feed die klopt. Zo ziet het eruit als alles samenkomt.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
