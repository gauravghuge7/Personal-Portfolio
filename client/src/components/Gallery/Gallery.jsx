import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

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

const tileVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 8) * 0.06, ease: 'easeOut' },
  }),
};

function GalleryTile({ photo, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      custom={index}
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.94 }}
      className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-md"
      aria-label={`Open photo ${index + 1}`}
    >
      <motion.img
        src={photo.src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.15, rotate: -1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        <span className="rounded-full bg-white/15 p-3 backdrop-blur-sm">
          <Expand size={20} className="text-white" />
        </span>
      </div>
    </motion.button>
  );
}

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const goNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % photos.length),
    []
  );
  const goPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, goNext, goPrev]);

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

      {/* Square animated grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo, i) => (
          <GalleryTile key={photo.id} photo={photo} index={i} onOpen={setActiveIndex} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-colors"
            >
              <X size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={photos[activeIndex].id}
                src={photos[activeIndex].src}
                alt=""
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </AnimatePresence>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono">
              {activeIndex + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
