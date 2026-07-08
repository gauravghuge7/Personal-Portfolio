import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, Minimize2 } from 'lucide-react';

const SLIDE_DURATION = 5000;

const photos = [
  'IMG_0397.JPG.jpeg',
  'IMG_1094.JPG.jpeg',
  'IMG_1436.JPG.jpeg',
  'IMG_2203.JPG.jpeg',
  'IMG_2277.JPG.jpeg',
  'IMG_2483.JPG.jpeg',
  'IMG_2720.JPG.jpeg',
  'IMG_2727.JPG.jpeg',
  'IMG_2805.JPG.jpeg',
  'IMG_2864.JPG.jpeg',
  'IMG_2959.JPEG',
  'IMG_4381.JPG.jpeg',
  'IMG_5020.JPG.jpeg',
  'IMG_5204.JPG.jpeg',
  'IMG_6151.JPG.jpeg',
  'IMG_6155.JPG.jpeg',
  'IMG_6171.JPG.jpeg',
  'IMG_6945.JPG.jpeg',
  'IMG_6989.JPG.jpeg',
  'IMG_7010.JPG.jpeg',
  'IMG_7333.JPG.jpeg',
  'IMG_8365.JPG.jpeg',
].map((file, i) => ({ id: i, src: `/personal_photos/${file}` }));

function Gallery() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const thumbRefs = useRef([]);

  const isRunning = isPlaying && !isHovering;

  const goTo = useCallback((i) => {
    setIndex(((i % photos.length) + photos.length) % photos.length);
  }, []);
  const goNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const goPrev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Preload the next photo so the crossfade never flashes a blank frame
  useEffect(() => {
    const next = photos[(index + 1) % photos.length];
    const img = new Image();
    img.src = next.src;
  }, [index]);

  useEffect(() => {
    thumbRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [index]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === ' ') { e.preventDefault(); setIsPlaying((p) => !p); }
      if (e.key === 'Escape') setIsExpanded(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isExpanded]);

  const kenBurnsClass = index % 2 === 0 ? 'animate-ken-burns-a' : 'animate-ken-burns-b';

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-fg tracking-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Gallery
          </span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted mt-6 text-lg leading-relaxed"
        >
          Moments beyond the code
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`group overflow-hidden bg-black border border-border shadow-2xl ${
            isExpanded ? 'fixed inset-0 z-[100] rounded-none border-0' : 'relative rounded-2xl h-[60vh] sm:h-[70vh]'
          }`}
        >
          {/* Story-style progress bar */}
          <div className="absolute top-0 inset-x-0 z-20 flex gap-1.5 p-3">
            {photos.map((p, i) => (
              <div key={p.id} className="h-1 flex-1 rounded-full bg-white/25 overflow-hidden">
                {i < index && <div className="h-full w-full bg-white" />}
                {i === index && (
                  <div
                    onAnimationEnd={() => isRunning && goNext()}
                    className="h-full bg-white rounded-full"
                    style={{
                      animation: `gallery-progress ${SLIDE_DURATION}ms linear forwards`,
                      animationPlayState: isRunning ? 'running' : 'paused',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Crossfading, Ken-Burns-animated photo */}
          <AnimatePresence>
            <motion.div
              key={photos[index].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={photos[index].src}
                alt=""
                className={`w-full h-full object-contain ${kenBurnsClass}`}
                style={{
                  animationDuration: `${SLIDE_DURATION + 400}ms`,
                  animationPlayState: isRunning ? 'running' : 'paused',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev / next */}
          <button
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white/90 opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white/90 opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all"
          >
            <ChevronRight size={28} />
          </button>

          {/* Bottom bar */}
          <div className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
            <span className="text-white/80 text-xs font-mono">{index + 1} / {photos.length}</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="text-white/80 hover:text-white transition-colors"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                onClick={() => setIsExpanded((e) => !e)}
                aria-label={isExpanded ? 'Exit fullscreen' : 'View fullscreen'}
                className="text-white/80 hover:text-white transition-colors"
              >
                {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail filmstrip */}
        {!isExpanded && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {photos.map((p, i) => (
              <button
                key={p.id}
                ref={(el) => (thumbRefs.current[i] = el)}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`shrink-0 h-16 w-24 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  i === index ? 'border-accent scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={p.src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes gallery-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes ken-burns-a {
          from { transform: scale(1) translate(0, 0); }
          to { transform: scale(1.12) translate(-2%, -1%); }
        }
        @keyframes ken-burns-b {
          from { transform: scale(1.1) translate(2%, 1%); }
          to { transform: scale(1) translate(0, 0); }
        }
        .animate-ken-burns-a {
          animation-name: ken-burns-a;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
        .animate-ken-burns-b {
          animation-name: ken-burns-b;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}

export default Gallery;
