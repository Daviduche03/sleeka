import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after loading
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Remove component after animation completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2000ms loading + 800ms animation

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-geko-dark flex items-center justify-center transition-transform duration-[800ms] ease-in-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        transformOrigin: 'top',
      }}
    >
      <div className={`text-center transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`}>
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img 
            src="/assets/1.png" 
            alt="Sleeka" 
            className="h-16 md:h-20 w-auto mx-auto"
          />
        </div>
        
        {/* Loading text */}
        <p className="text-white/70 mt-6 text-sm tracking-wider">Loading...</p>
      </div>
    </div>
  );
};
