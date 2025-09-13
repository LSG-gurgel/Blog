import Link from 'next/link'

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
  readTime: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-white rounded-3xl p-8 soft-shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Categoria delicada */}
      <span className="font-nunito text-gray-600 mb-6 leading-relaxed text-lg">
        {post.category}
      </span>
      
      {/* Título suave */}
      <h2 className="font-cormorant text-2xl text-gray-800 mb-4 hover:text-rose-500 transition-colors leading-tight">
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      
      {/* Resumo delicado */}
      <p className="font-nunito text-gray-600 mb-6 leading-relaxed text-lg">
        {post.excerpt}
      </p>
      
      {/* Rodapé suave */}
      <div className="flex justify-between items-center pt-6 border-t border-rose-100">
        <div className="flex items-center gap-4">
          <time className="font-nunito text-sm text-gray-500">
            {post.date}
          </time>
          <span className="text-rose-200">•</span>
          <span className="font-nunito text-sm text-gray-500">
            {post.readTime}
          </span>
        </div>
        <Link 
          href={`/posts/${post.slug}`}
          className="font-nunito text-rose-500 hover:text-rose-700 text-sm font-semibold flex items-center gap-2 group"
        >
          Vem ver!
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </article>
  )
}