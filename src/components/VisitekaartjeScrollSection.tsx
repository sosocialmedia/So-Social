import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function VisitekaartjeScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progressPercent, setProgressPercent] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 88%', 'end 52%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      setProgressPercent(Math.round(Math.min(100, Math.max(0, latest * 100))));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Progressive drawing ranges for each architectural layer
  // Layer 1: Blueprint guides & crop marks
  const guidesLength = useTransform(smoothProgress, [0.0, 0.25], [0, 1]);
  const guidesOpacity = useTransform(smoothProgress, [0.0, 0.15], [0.25, 0.75]);

  // Layer 2: Back card edge & main card outline
  const outerCardLength = useTransform(smoothProgress, [0.08, 0.42], [0, 1]);
  const backCardLength = useTransform(smoothProgress, [0.18, 0.48], [0, 1]);
  const innerFrameLength = useTransform(smoothProgress, [0.26, 0.56], [0, 1]);

  // Layer 3: Card paper fill & divider / monogram frame
  const cardFillOpacity = useTransform(smoothProgress, [0.35, 0.72], [0, 1]);
  const dividerLength = useTransform(smoothProgress, [0.36, 0.62], [0, 1]);
  const monogramFrameLength = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const monogramCurveLength = useTransform(smoothProgress, [0.48, 0.78], [0, 1]);

  // Layer 4: Brand typography & contact details
  const titleOpacity = useTransform(smoothProgress, [0.52, 0.76], [0, 1]);
  const titleY = useTransform(smoothProgress, [0.52, 0.76], [8, 0]);
  const detailLinesLength = useTransform(smoothProgress, [0.6, 0.88], [0, 1]);
  const contactOpacity = useTransform(smoothProgress, [0.68, 0.92], [0, 1]);
  const contactY = useTransform(smoothProgress, [0.68, 0.92], [6, 0]);

  // Layer 5: Finishing foil accent & dimension labels
  const finishOpacity = useTransform(smoothProgress, [0.78, 1.0], [0, 1]);
  const progressBarScaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="scroll-mt-20 md:scroll-mt-28 relative py-24 md:py-36 px-6 md:px-12 bg-[#FAF9F5] border-y border-[#E2DFD8] overflow-hidden"
    >
      {/* Subtle architectural blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(177, 154, 120, 0.11) 1px, transparent 1px), linear-gradient(to bottom, rgba(177, 154, 120, 0.11) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      {/* Soft edge fade over grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#FAF9F5_95%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Text & Scroll Progress */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#B19A78] uppercase block mb-4">
              KLAAR OM JE TE ONDERSCHEIDEN?
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 mb-7 leading-[1.14]">
              Een krachtig{' '}
              <span className="font-serif italic font-normal text-[#B19A78]">
                online visitekaartje,
              </span>{' '}
              zonder dat je er omkijken naar hebt.
            </h2>

            <div className="space-y-4 text-sm sm:text-base md:text-lg text-black/70 font-light leading-relaxed max-w-xl">
              <p>
                Wij helpen je met het beheer en de marketing van jouw socials, van contentcreatie tot planning en strategie. We nemen het volledige proces uit handen en zorgen ervoor dat jouw socialmediakanalen een krachtig online visitekaartje zijn.
              </p>
              <p>
                Of je nu meer zichtbaarheid wilt voor je bedrijf of simpelweg je social media op de juiste manier wilt beheren, dit is hét moment om door te pakken.
              </p>
            </div>

            {/* Minimal Architectural Progress Indicator matching reference */}
            <div className="mt-9 flex items-center gap-4 max-w-md">
              <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-zinc-500 shrink-0">
                VORMGEVING
              </span>
              <div className="relative flex-1 h-[1.5px] bg-[#E2DFD8] overflow-hidden rounded-full">
                <motion.div
                  style={{ scaleX: progressBarScaleX }}
                  className="absolute inset-0 origin-left bg-[#B19A78]"
                />
              </div>
              <span className="text-[11px] font-mono tracking-wider text-[#B19A78] w-9 text-right tabular-nums">
                {progressPercent}%
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Scroll-Driven Architectural Graphic Business Card */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-[560px]">
              <svg
                viewBox="0 0 560 390"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto select-none overflow-visible"
                role="img"
                aria-label="Grafisch visitekaartje van SO SOCIAL dat tijdens het scrollen steeds verder vorm krijgt"
              >
                {/* LAYER 1: Dashed Blueprint Center & Alignment Axes */}
                <motion.g style={{ opacity: guidesOpacity }}>
                  {/* Vertical center axis */}
                  <motion.line
                    x1="280"
                    y1="22"
                    x2="280"
                    y2="366"
                    stroke="#B19A78"
                    strokeWidth="0.9"
                    strokeDasharray="4 6"
                    style={{ pathLength: guidesLength }}
                  />
                  {/* Horizontal baseline */}
                  <motion.line
                    x1="26"
                    y1="322"
                    x2="534"
                    y2="322"
                    stroke="#B19A78"
                    strokeWidth="1.2"
                    style={{ pathLength: guidesLength }}
                  />
                  {/* Top & side print crop marks */}
                  <motion.path
                    d="M 52 72 L 66 72 M 72 52 L 72 66 M 508 72 L 494 72 M 488 52 L 488 66 M 52 322 L 66 322 M 72 342 L 72 328 M 508 322 L 494 322 M 488 342 L 488 328"
                    stroke="#B19A78"
                    strokeWidth="1"
                    strokeLinecap="round"
                    style={{ pathLength: guidesLength }}
                  />
                </motion.g>

                {/* LAYER 2A: Back stacked business card silhouette (editorial depth) */}
                <motion.path
                  d="M 102 72 L 102 58 Q 102 46 114 46 L 498 46 Q 510 46 510 58 L 510 278 Q 510 290 498 290 L 488 290"
                  stroke="#B19A78"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                  style={{ pathLength: backCardLength }}
                />

                {/* LAYER 3A: Luxury cream-white card fill that fades in as lines form */}
                <motion.rect
                  x="72"
                  y="72"
                  width="416"
                  height="250"
                  rx="14"
                  fill="#FFFFFF"
                  style={{ opacity: cardFillOpacity }}
                />
                {/* Soft taupe left panel tint inside card */}
                <motion.path
                  d="M 86 72 L 222 72 L 222 322 L 86 322 Q 72 322 72 308 L 72 86 Q 72 72 86 72 Z"
                  fill="#B19A78"
                  fillOpacity="0.08"
                  style={{ opacity: cardFillOpacity }}
                />

                {/* LAYER 2B: Main business card outer frame */}
                <motion.rect
                  x="72"
                  y="72"
                  width="416"
                  height="250"
                  rx="14"
                  stroke="#B19A78"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ pathLength: outerCardLength }}
                />

                {/* LAYER 2C: Inner hairline editorial border */}
                <motion.rect
                  x="86"
                  y="86"
                  width="388"
                  height="222"
                  rx="8"
                  stroke="#B19A78"
                  strokeWidth="0.9"
                  strokeOpacity="0.55"
                  style={{ pathLength: innerFrameLength }}
                />

                {/* LAYER 3B: Vertical architectural divider between monogram & details */}
                <motion.line
                  x1="222"
                  y1="106"
                  x2="222"
                  y2="288"
                  stroke="#B19A78"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  style={{ pathLength: dividerLength }}
                />

                {/* LAYER 3C: Brand Monogram Badge on Left Side of Card */}
                <motion.rect
                  x="114"
                  y="144"
                  width="76"
                  height="106"
                  rx="38"
                  stroke="#B19A78"
                  strokeWidth="1.2"
                  fill="#B19A78"
                  fillOpacity="0.1"
                  style={{ pathLength: monogramFrameLength }}
                />
                {/* Stylized calligraphic double-S architectural strokes */}
                <motion.path
                  d="M 164 176 C 164 166, 140 166, 140 177 C 140 187, 165 186, 165 198 C 165 208, 141 208, 140 199"
                  stroke="#1A1A1A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  style={{ pathLength: monogramCurveLength }}
                />
                <motion.path
                  d="M 164 202 C 164 192, 140 192, 140 203 C 140 213, 165 212, 165 224 C 165 234, 141 234, 140 225"
                  stroke="#B19A78"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  style={{ pathLength: monogramCurveLength }}
                />

                {/* LAYER 4A: Card Brand Title & Subtitle */}
                <motion.g style={{ opacity: titleOpacity, y: titleY }}>
                  <text
                    x="248"
                    y="148"
                    fill="#1A1A1A"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize="26"
                    fontWeight="700"
                    letterSpacing="0.06em"
                  >
                    SO SOCIAL
                  </text>
                  <text
                    x="248"
                    y="168"
                    fill="#B19A78"
                    fontFamily="'Inter', sans-serif"
                    fontSize="8.5"
                    fontWeight="600"
                    letterSpacing="0.28em"
                  >
                    ONLINE VISITEKAARTJE
                  </text>
                </motion.g>

                {/* Accent rule under title */}
                <motion.line
                  x1="248"
                  y1="184"
                  x2="318"
                  y2="184"
                  stroke="#B19A78"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ pathLength: detailLinesLength }}
                />

                {/* LAYER 4B: Drawn editorial contact rows */}
                <motion.g style={{ opacity: contactOpacity, y: contactY }}>
                  {/* Row 1: Instagram */}
                  <circle cx="253" cy="212" r="2.2" fill="#B19A78" />
                  <text
                    x="266"
                    y="215"
                    fill="#27272A"
                    fontFamily="'Inter', sans-serif"
                    fontSize="11"
                    fontWeight="400"
                    letterSpacing="0.04em"
                  >
                    @so.social.media
                  </text>

                  {/* Row 2: Website */}
                  <circle cx="253" cy="236" r="2.2" fill="#B19A78" />
                  <text
                    x="266"
                    y="239"
                    fill="#27272A"
                    fontFamily="'Inter', sans-serif"
                    fontSize="11"
                    fontWeight="400"
                    letterSpacing="0.04em"
                  >
                    www.so-socialmedia.nl
                  </text>

                  {/* Row 3: Location */}
                  <circle cx="253" cy="260" r="2.2" fill="#B19A78" />
                  <text
                    x="266"
                    y="263"
                    fill="#71717A"
                    fontFamily="'Inter', sans-serif"
                    fontSize="10.5"
                    fontWeight="300"
                    letterSpacing="0.06em"
                  >
                    Vaals &amp; Kerkrade · Nederland
                  </text>
                </motion.g>

                {/* Subtle structural layout lines on right bottom corner */}
                <motion.path
                  d="M 248 282 L 450 282"
                  stroke="#E2DFD8"
                  strokeWidth="1"
                  style={{ pathLength: detailLinesLength }}
                />

                {/* LAYER 5: Architectural Dimension Annotations & Finishing Corner Accent */}
                <motion.g style={{ opacity: finishOpacity }}>
                  {/* Bottom dimension bar (85 mm) */}
                  <line x1="72" y1="346" x2="246" y2="346" stroke="#B19A78" strokeWidth="0.8" strokeOpacity="0.65" />
                  <line x1="314" y1="346" x2="488" y2="346" stroke="#B19A78" strokeWidth="0.8" strokeOpacity="0.65" />
                  <text
                    x="280"
                    y="350"
                    textAnchor="middle"
                    fill="#B19A78"
                    fontFamily="'Inter', sans-serif"
                    fontSize="9"
                    letterSpacing="0.2em"
                  >
                    85 MM
                  </text>

                  {/* Top-right subtle gold accent dot inside card */}
                  <circle cx="452" cy="112" r="4" fill="#B19A78" fillOpacity="0.3" />
                  <circle cx="452" cy="112" r="1.6" fill="#B19A78" />
                </motion.g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
