import PostCard from '@/components/PostCard'

const posts = [
  {
    id: 1,
    title: "O Papel do Crochê Artesanal na Moda Consciente",
    excerpt: "A moda rápida (fast fashion) dominou o mundo, mas seu custo ambiental e social está sendo cada vez mais questionado. Nesse cenário, surge um movimento forte e belo em direção ao slow fashion, e o crochê artesanal se posiciona como um dos pilares mais importantes dessa revolução. Mais do que uma tendência, é uma escolha consciente por peças com alma, história e um impacto positivo no mundo.",
    date: "13 de setembro de 2025",
    slug: "croche-moda-consciente",
    category: "Crochê artesanal: A resposta sustentável e elegante à fast fashion."
  },
  {
    id: 2,
    title: "Desmistificando o Crochê: Por Que Essa Arte Não é Só 'Coisa de Vó'",
    excerpt: "Descubra como o crochê se tornou uma tendência entre jovens e conquistou espaço na cultura contemporânea.",
    date: "2024-01-10", 
    slug: "desmistificando-croche",
    category: "Cultura"
  },
  {
    id: 3,
    title: "Crochê Terapêutico: Os Benefícios Mentais de Tecer com as Mãos",
    excerpt: "A prática do crochê como ferramenta de mindfulness e bem-estar mental na era digital.",
    date: "2024-01-05",
    slug: "croche-terapeutico",
    category: "Bem-Estar"
  }
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Elegante */}
      <div className="text-center mb-12">
        <h1 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
          Crochetando
        </h1>
        <p className="font-raleway text-gray-600 text-lg">
          Vamos falar de crochê  além das linhas, agulhas e pontos.
        </p>
      </div>

      {/* Posts */}
      <div className="grid gap-8">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}