import Link from 'next/link'

const posts = [
  {
    slug: "croche-moda-consciente",
    title: "O Papel do Crochê Artesanal na Moda Consciente",
    content: `
      <p><strong>A moda rápida (fast fashion) dominou o mundo</strong>, mas seu custo ambiental e social está sendo cada vez mais questionado. Nesse cenário, surge um movimento forte e belo em direção ao slow fashion, e o crochê artesanal se posiciona como um dos pilares mais importantes dessa revolução. Mais do que uma tendência, é uma escolha consciente por peças com alma, história e um impacto positivo no mundo.</p>

      <h2>Como o Crochê se conecta com o movimento slow fashion?</h2>

      <p><strong> Cada peça de crochê é feita à mão, uma a uma.</strong> Isso significa horas de dedicação, cuidado e amor investidos em um único item. É o oposto completo das linhas de produção robotizadas e anônimas da indústria tradicional.</p>
     
      <p>Peças artesanais são feitas para durar. Diferente das roupas descartáveis de baixa qualidade, uma peça de crochê bem cuidada pode se tornar um item hereditário, uma peça-atemporal que transcende as tendências passageiras de cada estação.</p>

      <p>Ao comprar de um artesão, você está valorizando diretamente o trabalho, a habilidade e o tempo de uma pessoa real. Você sabe de onde veio a peça e quem a fez, criando uma conexão única entre consumidor e criador.</p>

      <p>O artesão tem a liberdade de escolher fios de origens responsáveis, como algodão orgânico, linho, bambu ou mesmo fios feitos de garrafas PET recicladas. Além disso, a prática do "upcycling" (transformar fios de peças antigas em novas) é muito comum.</p>

      <h2>O Consumidor Consciente:</h2>
      <p>O novo consumidor não quer apenas um produto; ele quer uma experiência, uma história e a certeza de que sua compra está alinhada com seus valores. Vestir uma peça de crochê artesanal é uma declaração de apoio à criatividade individual, à sustentabilidade e à moda com propósito.</p>

      <h2>ou seja...</h2>
      <p>O crochê manual não é um retorno ao passado, mas um passo necessário em direção a um futuro mais ético e sustentável para a moda. Ele nos lembra o valor do feito à mão, da paciência e da singularidade. Escolher o crochê é escolher qualidade sobre quantidade, história sobre anonimato e consciência sobre consumo desenfreado.</p>
    `,
    date: "13 de setembro de 2025",
    category: "Moda Sustentável",
    author: "Lô Gurgel"
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