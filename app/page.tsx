import PostCard from '@/components/PostCard'

const posts = [
  {
    id: 1,
    title: "O papel do Crochê artesanal na moda consciente",
    excerpt: "A resposta sustentável e elegante à fast fashion.",
    date: "12 de setembro de 2025",
    slug: "croche-moda-consciente",
    category: "Moda Sustentável"
  },
  {
    id: 2,
    title: "Desmistificando o Crochê: Por que essa arte não é só 'Coisa de Vó'",
    excerpt: "Crochê Moderno: A revolução das agulhas e da juventude.",
    date: "11 de setembro de 2025", 
    slug: "desmistificando-croche",
    category: "Cultura"
  },
  {
    id: 3,
    title: "Os Benefícios Mentais de Tecer com as Mãos",
    excerpt: " Crochê e Saúde Mental: 5 Benefícios Terapêuticos Comprovados.",
    date: "10 de setembro de 2025",
    slug: "croche-terapeutico",
    category: "Bem-Estar"
  }
]

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Cabeçalho estilo Intercept */}
      <div className="mb-12 text-center">
        <h1 className="font-source-serif text-4xl font-semibold mb-4">
          Crochetando
        </h1>
        <p className="text-gray-600 text-lg">
          Vamos falar de crochê além das linhas, agulhas e pontos
        </p>
      </div>

      <hr className="article-divider" />

      {/* Posts no estilo Intercept */}
      <div className="space-y-12">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}