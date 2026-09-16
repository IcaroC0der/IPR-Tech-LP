"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize, Minimize } from "lucide-react";

const PROTOTYPES = [
  { name: "Studio V8", path: "/prototypes/02-PROT-studio-v8/index.html" },
  { name: "Iron Razor", path: "/prototypes/04-PROT-iron_razor/index.html" },
  { name: "IBS Implantes", path: "/prototypes/05-PROT-ibsimplantes/index.html" },
  { name: "Monolito", path: "/prototypes/06-PROT-monolito/index.html" },
  { name: "Oak", path: "/prototypes/08-PROT-oak/index.html" },
  { name: "Taniguti", path: "/prototypes/17-PROT-taniguti_scuderia/index.html" },
  { name: "Aurelia", path: "/prototypes/09-PROT-aurelia/index.html" },
  { name: "Psicofagia", path: "/prototypes/16-PROT-psicofagia/index.html" },
  { name: "Void Club", path: "/prototypes/11-PROT-void_club/index.html" },
  { name: "Shiva Alt Bar", path: "/prototypes/13-PROT-shiva_altbar/index.html" }
];

export function PrototypeShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Erro ao ativar tela cheia: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <section className="section-padding bg-brand-creme dark:bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            Portfólio Interativo
          </h2>
          <p className="text-sm text-[#333333] dark:text-brand-gray-medium tracking-widest uppercase">
            Explore nossos últimos projetos
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto">
          
          {/* Sidebar de Seleção */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            <h3 className="text-xs font-bold tracking-widest uppercase text-brand-gray-dark mb-4">
              Selecione o Projeto
            </h3>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {PROTOTYPES.map((p, index) => (
                <button
                  key={p.name}
                  onClick={() => setCurrentIndex(index)}
                  className={`text-left px-4 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                    currentIndex === index 
                      ? "bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black" 
                      : "hover:bg-brand-gray-light dark:hover:bg-[#1a1a1a] text-[#333333] dark:text-brand-gray-dark"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Browser Window (Mockup) */}
          <div className="w-full lg:w-3/4 flex flex-col">
            <div 
              ref={containerRef}
              className={`w-full bg-brand-white dark:bg-[#111] overflow-hidden flex flex-col relative transition-all ${
                isFullscreen 
                  ? "h-full rounded-none" 
                  : "aspect-video rounded-lg shadow-2xl border border-brand-gray-light dark:border-[#222]"
              }`}
            >
              {/* Top Bar - Mac Style */}
              <div className="w-full h-10 bg-brand-gray-light dark:bg-[#1a1a1a] flex items-center px-4 justify-between border-b border-brand-gray-light dark:border-[#222] shrink-0">
                <div className="flex items-center gap-2 w-1/3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                
                {/* Project Name (instead of URL) */}
                <div className="w-1/3 text-center text-xs font-bold tracking-widest uppercase text-[#222] dark:text-brand-gray-light truncate">
                  {PROTOTYPES[currentIndex].name}
                </div>

                <div className="w-1/3 flex justify-end">
                  <button 
                    onClick={handleFullscreen}
                    className="p-1.5 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors text-brand-gray-dark dark:text-brand-gray-medium"
                    title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
                  >
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                  </button>
                </div>
              </div>

              <div className="w-full flex-grow relative bg-brand-creme dark:bg-[#0a0a0a]">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    src={PROTOTYPES[currentIndex].path}
                    className="absolute inset-0 w-full h-full border-none"
                    title={`Protótipo ${PROTOTYPES[currentIndex].name}`}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
