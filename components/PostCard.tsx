import Link from 'next/link'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="mb-12">
      {/* Categoria */}
      <span className="inline-block text-xs uppercase tracking-wider text-gray-500 mb-2">
        {post.category}
      </span>
      
      {/* Título estilo Intercept */}
      <h2 className="font-source-serif text-2xl font-semibold mb-4 hover:text-gray-600 transition-colors">
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      
      {/* Resumo */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      
      {/* Data e link */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <time>{post.date}</time>
        <Link 
          href={`/posts/${post.slug}`}
          className="hover:text-gray-700 transition-colors"
        >
          Ler mais →
        </Link>
      </div>

      <hr className="article-divider mt-8" />
    </article>
  )
}