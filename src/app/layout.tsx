import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ThemeProvider, ThemeTransitionProvider, ThemeToggle } from "@/components/ThemeSystem";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IPR Tech | Projetamos experiências digitais",
  description: "Consultoria premium de desenvolvimento web. Sites que constroem marcas. Nova York. Foco. Resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-brand-creme text-brand-black dark:bg-brand-black dark:text-brand-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ThemeTransitionProvider>
            <header className="w-full px-6 py-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-brand-gray-light dark:border-brand-gray-dark">
          <a href="/" className="flex items-center gap-4 group">
            <Image 
              src="/logo-transparent.png" 
              alt="IPR Tech Logo" 
              width={64} 
              height={64} 
              className="dark:brightness-100 brightness-0 mix-blend-normal group-hover:opacity-80 transition-all"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
            <a href="#sobre" className="hover:opacity-60 transition-opacity">Sobre Nós</a>
            <a href="#servicos" className="hover:opacity-60 transition-opacity">Serviços</a>
            <a href="#contato" className="hover:opacity-60 transition-opacity">Contato</a>
            <div className="border-l border-brand-gray-light dark:border-brand-gray-dark h-4 mx-2"></div>
            <ThemeToggle />
          </nav>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>

        <footer className="w-full bg-brand-black text-brand-white dark:bg-[#050505] dark:text-brand-gray-light px-6 py-16 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-12 md:mb-0">
            <div className="mb-6">
              <Image 
                src="/logo-transparent.png" 
                alt="IPR Tech Logo" 
                width={80} 
                height={80} 
                className="opacity-90"
              />
            </div>
            <p className="text-xs text-brand-gray-medium max-w-xs uppercase tracking-widest leading-relaxed">
              Sites que constroem marcas.<br />
              Nova York. Foco. Resultados.
            </p>
          </div>
          <div className="text-xs text-brand-gray-dark uppercase tracking-widest text-right">
            &copy; {new Date().getFullYear()} IPR Tech.<br/>
            Todos os direitos reservados.
          </div>
        </footer>
        </ThemeTransitionProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
