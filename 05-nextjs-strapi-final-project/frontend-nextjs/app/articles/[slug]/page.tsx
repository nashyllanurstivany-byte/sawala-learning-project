// frontend-nextjs/app/articles/[slug]/page.tsx
import { getArticleBySlug } from '@/lib/strapi';
import Link from 'next/link';

export default async function DetailArticle({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  let article = null;
  
  try {
    const response = await getArticleBySlug(slug);
    // STRAPI V5: data[0] langsung berisi datanya
    article = response.data[0]; 
  } catch (error) {
    console.error("Error fetching article:", error);
  }

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Artikel Tidak Ditemukan</h1>
        <Link href="/" className="text-blue-600 hover:underline">Kembali ke Home</Link>
      </div>
    );
  }

  const imageUrl = article.cover?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.cover.url}` 
    : null;

  return (
    <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
      <Link href="/" className="text-blue-600 text-sm mb-4 inline-block hover:underline">
        &larr; Kembali ke Daftar Artikel
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
      
      {imageUrl && (
        <img src={imageUrl} alt={article.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8" />
      )}
      
      <div 
        className="prose prose-lg max-w-none text-gray-700" 
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
    </article>
  );
}