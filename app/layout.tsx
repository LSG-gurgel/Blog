import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Raleway, Montserrat } from 'next/font/google'
import Link from 'next/link'

// Fontes elegantes para moda
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Crochetando',
  description: 'Blog crochê além dos pontos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${raleway.variable} ${montserrat.variable}`}>
      <body className="font-montserrat bg-white text-gray-800">
        <header className="bg-black text-pink-200 p-6 border-b border-gray-300">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-playfair font-bold text-pink-300">
              Crochetando
            </Link>
            <div className="flex gap-6 text-sm uppercase tracking-wider">
              <Link href="/" className="hover:text-pink-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-pink-400 transition-colors">
                Sobre
              </Link>
            </div>
          </nav>
        </header>
        
        <main className="container mx-auto p-6 min-h-screen">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-pink-100 p-8 text-center">
          <p className="font-raleway text-sm">© 2025 - Crochetando - Lô Gurgel</p>
        </footer>
      </body>
    </html>
  )
}