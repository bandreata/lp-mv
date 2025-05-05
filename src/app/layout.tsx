import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planejamento Digital - Maria Victoria",
  description: "Planejamento estratégico de comunicação digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { href: "/", label: "Início" },
    { href: "/analise-demografica", label: "Análise Demográfica" },
    { href: "/temas-prioritarios", label: "Temas Prioritários" },
    { href: "/plano-conteudo", label: "Plano de Conteúdo" },
    { href: "/estrategias-crescimento", label: "Estratégias de Crescimento" },
    { href: "/campanhas-tematicas", label: "Campanhas Temáticas" },
    { href: "/kpis-monitoramento", label: "KPIs e Monitoramento" },
  ];

  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-700">Planejamento Digital MV</h1>
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-blue-700 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-200 text-center py-4 mt-8">
          <p className="text-gray-600 text-sm">© 2025 - Planejamento Estratégico Digital</p>
        </footer>
      </body>
    </html>
  );
}

