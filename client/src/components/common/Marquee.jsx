function Marquee({ items, renderItem, speed = 30, reverse = false, gap = 'gap-6', className = '' }) {
  return (
    <div className={`group/marquee overflow-hidden ${className}`}>
      <div
        className="flex items-stretch w-max animate-marquee group-hover/marquee:[animation-play-state:paused]"
        style={{ '--marquee-duration': `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className={`flex items-stretch ${gap} shrink-0 pr-6`}>
            {items.map((item, i) => (
              <div key={`${copy}-${i}`} className="shrink-0">
                {renderItem(item, i)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
