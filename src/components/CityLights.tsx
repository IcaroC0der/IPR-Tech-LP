"use client";

import { useEffect, useState } from "react";

export function CityLights() {
  const [mounted, setMounted] = useState(false);
  const [lights, setLights] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    // Gerar as luzes apenas no client-side para evitar erro de hidratação (Math.random)
    const generatedLights = Array.from({ length: 12 }).map((_, i) => {
      const isFast = Math.random() > 0.5;
      const duration = isFast ? Math.random() * 2 + 3 : Math.random() * 6 + 5;
      const top = Math.random() * 100; // Espalhado verticalmente
      const width = Math.random() * 200 + 100; // Comprimento do rastro (carro rápido)
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.15 + 0.05; // Opacidade bem baixa e elegante
      const direction = Math.random() > 0.5 ? "normal" : "reverse";

      return {
        id: i,
        duration,
        top,
        width,
        delay,
        opacity,
        direction,
      };
    });
    setLights(generatedLights);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-creme dark:to-brand-black z-10"></div>
      
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute h-[1px] md:h-[2px] bg-brand-black dark:bg-brand-creme rounded-full blur-[2px] animate-light-trail"
          style={{
            top: `${light.top}%`,
            width: `${light.width}px`,
            opacity: light.opacity,
            animationDuration: `${light.duration}s`,
            animationDelay: `${light.delay}s`,
            animationDirection: light.direction as any,
          }}
        />
      ))}
    </div>
  );
}
