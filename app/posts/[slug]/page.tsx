import Link from 'next/link'

const posts = [
  {
    slug: "croche-moda-consciente",
    title: "O Papel do Crochê Artesanal na Moda Consciente",
    content: `
      <p><strong>VEM HAVENDO</strong> uma transformação significativa na indústria da moda, com o crochê artesanal emergindo como resposta sustentável à fast fashion. Em decorrência disso, marcas estão reavaliando suas práticas de produção.</p>

      <p>Segundo dados de relatórios recentes do setor, o mercado de peças artesanais tem crescido consistentemente, mostrando uma <strong>queda impressionante</strong> no interesse por produtos em massa. Ao mesmo tempo, percebe-se um engajamento cada vez maior de consumidores conscientes.</p>

      <p>O aumento do valor percebido das peças artesanais coloca em números a crescente valorização da autenticidade e sustentabilidade. Os dados são divididos em várias categorias, mostrando o crescimento anual do mercado artesanal desde 2023.</p>

      <h2>Impacto na Cadeia Produtiva</h2>
      <p>Em meio à crescente conscientização ambiental, artesãos estão sendo reconhecidos como agentes de transformação. As peças em crochê, ao mesmo tempo em que preservam técnicas tradicionais, incorporam designs contemporâneos que dialogam com o mercado atual.</p>

      <h2>Perspectivas Futuras</h2>
      <p>Fornecido por especialistas do setor, o panorama atual indica uma consolidação do espaço do artesanato na moda sustentável. Cada vez mais, percebe-se a toxicidade da produção em massa sendo combatida por alternativas conscientes.</p>
    `,
    date: "13 de setembro de 2025",
    category: "Moda Sustentável",
    author: "Redação Crochetando"
  }
]

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)
  
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="font-source-serif text-2xl mb-4">Artigo não encontrado</h1>
        <Link href="/" className="text-gray-600 hover:text-gray-800">
          ← Voltar para home
        </Link>
      </div>
    )
  }
  
  return (
    <article className="max-w-3xl mx-auto">
      {/* Voltar */}
      <Link href="/" className="inline-block text-gray-600 hover:text-gray-800 mb-8 text-sm">
        ← Voltar para home
      </Link>

      {/* Cabeçalho */}
      <div className="mb-8">
        <span className="inline-block text-xs uppercase tracking-wider text-gray-500 mb-4">
          {post.category}
        </span>
        
        <h1 className="font-source-serif text-3xl font-semibold mb-6">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <time>{post.date}</time>
          <span>•</span>
          <span>Por {post.author}</span>
        </div>
      </div>

      <hr className="article-divider mb-8" />

      {/* Conteúdo */}
      <div 
        className="article-body prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <hr className="article-divider mt-12" />
    </article>
  )
}