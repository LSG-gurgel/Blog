import './globals.css'
import type { Metadata } from 'next'
import { Source_Serif_4, Inter } from 'next/font/google'
import Link from 'next/link'


const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Crochetando',
  description: 'Além das linhas, agulhas e pontos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${sourceSerif.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-gray-900">
        
        <header className="border-b border-gray-300 py-6">
          <nav className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-source-serif text-2xl font-semibold">
                Tudo aqui
              </Link>
              <div className="flex gap-6 text-sm">
               
                <Link href="/about" className="hover:text-gray-600 transition-colors">
                  Por quê Crochetamos?
                </Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
       
        <footer className="border-t border-gray-300 py-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Crochetando - Lô Gurgel e Crochê da Zezé
          </p>
        </footer>
      </body>
    </html>
  )
}