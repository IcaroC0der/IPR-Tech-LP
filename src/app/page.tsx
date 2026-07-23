import { CityLights } from "@/components/CityLights";
import { PrototypeShowcase } from "@/components/PrototypeShowcase";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <section className="section-padding flex flex-col justify-center min-h-[85vh] relative overflow-hidden bg-brand-creme dark:bg-[#0a0a0a]">
        <CityLights />
        <div className="container-custom relative z-10 w-full flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 max-w-5xl uppercase">
            Projetamos <br />
            experiências <br />
            digitais.
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-wide mb-12 max-w-xl text-[#222222] dark:text-brand-gray-light">
            Consultoria premium para marcas que exigem autoridade, precisão e luxo no ambiente digital.
          </p>
          <a href="#contato" className="bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-brand-gray-dark transition-colors">
            Iniciar Projeto
          </a>
        </div>
      </section>

      {/* Sobre Nós Section (Placeholder) */}
      <section id="sobre" className="section-padding bg-brand-white dark:bg-[#0a0a0a] border-t border-brand-gray-light dark:border-brand-gray-dark">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
              Nossa Visão
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl leading-relaxed text-[#222222] dark:text-brand-gray-light font-medium">
              Construímos presença. Tecnologia com propósito e estética incomparável.
            </p>
            <p className="text-base text-[#333333] dark:text-brand-gray-medium">
              Nascemos da necessidade de excelência absoluta. A IPR Tech alia a precisão do design editorial à engenharia de software de alto desempenho. Não entregamos apenas sites; desenvolvemos ativos digitais robustos, criados para marcas que não aceitam o medíocre. Foco rigoroso. Resultados inquestionáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase de Protótipos */}
      <PrototypeShowcase />

      {/* Serviços Section (Placeholder) */}
      <section id="servicos" className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-16">
            Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 border-t border-brand-gray-light dark:border-brand-gray-dark pt-12">
            
            {/* Serviço 1 */}
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-brand-gray-dark mb-4">01</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Desenvolvimento Web</h3>
              <p className="text-sm text-[#333333] dark:text-brand-gray-medium leading-relaxed">
                Arquiteturas escaláveis e código de alta performance. Desenvolvemos plataformas que carregam instantaneamente e operam com precisão técnica irretocável.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-brand-gray-dark mb-4">02</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Design de Interface</h3>
              <p className="text-sm text-[#333333] dark:text-brand-gray-medium leading-relaxed">
                Estética pautada no luxo discreto e na funcionalidade. Interfaces projetadas sob rigorosos grids modulares, intenso uso de espaço negativo e tipografia de alto impacto.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-brand-gray-dark mb-4">03</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">SEO Avançado</h3>
              <p className="text-sm text-[#333333] dark:text-brand-gray-medium leading-relaxed">
                Engenharia de busca orientada a dados. Estrutura HTML semântica impecável para garantir autoridade técnica máxima e domínio nos resultados de pesquisa.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contato Section (Placeholder) */}
      <section id="contato" className="section-padding bg-brand-white dark:bg-[#0a0a0a] border-t border-brand-gray-light dark:border-brand-gray-dark">
        <div className="container-custom max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
            Pronto para o Próximo Nível?
          </h2>
          <p className="text-lg text-[#222222] dark:text-brand-gray-medium mb-12 max-w-xl font-medium">
            Projetos de alto calibre exigem parcerias à altura. Agende uma reunião executiva para discutirmos a arquitetura da sua próxima plataforma.
          </p>
          <a href="mailto:contato@iprtech.com" className="bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black px-12 py-5 text-sm font-bold tracking-widest uppercase hover:bg-brand-gray-dark transition-colors">
            Falar com a IPR Tech
          </a>
        </div>
      </section>

    </div>
  );
}
