// frontend-nextjs/components/organisms/ArticleList.tsx
import ArticleCard from '../molecules/ArticleCard';

export default function ArticleList({ articles }: { articles: any[] }) {
  if (!articles || articles.length === 0) {
    return <p className="text-center text-gray-500 py-10">Belum ada artikel yang dipublikasikan.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}