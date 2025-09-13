import PostCard from '@/components/PostCard'

const posts = [
  {
    id: 1,
    title: "O Papel do Crochê Artesanal na Moda Consciente",
    excerpt: "VEM HAVENDO uma transformação significativa na indústria da moda, com o crochê artesanal emergindo como resposta sustentável à fast fashion. Em decorrência disso, marcas estão reavaliando suas práticas de produção.",
    date: "13 de setembro de 2025",
    slug: "croche-moda-consciente",
    category: "Moda Sustentável"
  },
  {
    id: 2,
    title: "Desmistificando o Crochê: Por Que Essa Arte Não é Só 'Coisa de Vó'",
    excerpt: "VEM HAVENDO uma queda impressionante nos estereótipos associados ao crochê. Segundo dados de pesquisas recentes, a prática conquistou espaço entre jovens e na cultura contemporânea.",
    date: "10 de janeiro de 2024", 
    slug: "desmistificando-croche",
    category: "Cultura"
  },
  {
    id: 3,
    title: "Crochê Terapêutico: Os Benefícios Mentais de Tecer com as Mãos",
    excerpt: "VEM HAVENDO um aumento significativo no interesse pelo crochê como ferramenta terapêutica. Em meio ao estresse da era digital, a prática manual oferece refúgio e benefícios mentais comprovados.",
    date: "5 de janeiro de 2024",
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