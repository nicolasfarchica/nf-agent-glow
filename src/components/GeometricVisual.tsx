const GeometricVisual = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Central Circuit Board Inspired Element */}
      <div className="relative">
        {/* Main geometric shape */}
        <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-3xl transform rotate-45 relative animate-float">
          {/* Inner elements */}
          <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl"></div>
          <div className="absolute inset-8 bg-primary/40 rounded-xl"></div>
        </div>

        {/* Connecting lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Horizontal lines */}
          <div className="absolute w-32 h-0.5 bg-primary animate-pulse-glow" style={{ left: '-8rem', top: '-1rem' }}></div>
          <div className="absolute w-24 h-0.5 bg-primary-glow animate-pulse-glow" style={{ right: '-6rem', top: '1rem', animationDelay: '0.5s' }}></div>
          
          {/* Vertical lines */}
          <div className="absolute w-0.5 h-20 bg-primary animate-pulse-glow" style={{ top: '-5rem', left: '2rem', animationDelay: '1s' }}></div>
          <div className="absolute w-0.5 h-16 bg-primary-glow animate-pulse-glow" style={{ bottom: '-4rem', right: '1rem', animationDelay: '1.5s' }}></div>
        </div>

        {/* Floating nodes */}
        <div className="absolute w-3 h-3 bg-primary rounded-full animate-float" style={{ top: '-2rem', left: '3rem', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ bottom: '-1rem', right: '4rem', animationDelay: '2.5s' }}></div>
        <div className="absolute w-4 h-4 bg-primary rounded-full animate-float" style={{ top: '1rem', right: '-3rem', animationDelay: '3s' }}></div>
        <div className="absolute w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ bottom: '2rem', left: '-2rem', animationDelay: '3.5s' }}></div>
      </div>

      {/* Additional floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GeometricVisual;