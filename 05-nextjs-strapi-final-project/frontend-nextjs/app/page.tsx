// frontend-nextjs/app/page.tsx
import { getArticles } from '@/lib/strapi';
import ArticleList from '@/components/organisms/ArticleList';

export default async function Home() {
  let articles = [];
  
  try {
    const response = await getArticles();
    articles = response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Artikel Terbaru</h1>
        <p className="text-gray-600">Kumpulan tulisan seputar teknologi dan pemrograman.</p>
      </div>
      
      <ArticleList articles={articles} />
    </div>
  );
}