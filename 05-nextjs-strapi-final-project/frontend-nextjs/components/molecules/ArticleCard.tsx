// frontend-nextjs/components/molecules/ArticleCard.tsx
import Link from 'next/link';
import Button from '../atoms/Button';

export default function ArticleCard({ article }: { article: any }) {
  // STRAPI V5: Langsung ambil dari article, tanpa .attributes
  const { title, slug, cover, content } = article;
  
  // Ambil URL gambar dari Strapi (Strapi v5: cover.url langsung)
  const imageUrl = cover?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.url}` 
    : 'https://via.placeholder.com/400x200?text=No+Image';

  // Potong teks konten
  const excerpt = content ? content.substring(0, 100) + '...' : 'Tidak ada deskripsi.';

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col [flex-grow]">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4 [flex-grow]">{excerpt}</p>
        <Link href={`/articles/${slug}`} className="mt-auto">
          <Button className="w-full">Baca Selengkapnya</Button>
        </Link>
      </div>
    </div>
  );
}