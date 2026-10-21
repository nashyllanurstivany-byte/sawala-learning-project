import { useState, useEffect } from 'react';
import Card from './components/Card';
import Button from './components/Button';

export default function App() {
  // 3. STATE
  const [articles, setArticles] = useState<{id: number, title: string, body: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTitle, setNewTitle] = useState("");

  // 4. USEFFECT DASAR (Fetch API)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
        setIsLoading(false);
      });
  }, []);

  // 5. EVENT HANDLING
  const handleAddArticle = () => {
    if (!newTitle) return;
    const newArticle = {
      id: Date.now(),
      title: newTitle,
      body: "Artikel baru dari form."
    };
    setArticles([newArticle, ...articles]);
    setNewTitle(""); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Dashboard Artikel</h1>

      {/* Form Tambah */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Judul artikel baru..." 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <Button text="Tambah Artikel" onClick={handleAddArticle} />
      </div>

      {/* 6. CONDITIONAL RENDERING */}
      {isLoading ? (
        <p>Loading data dari API...</p>
      ) : (
        // 7. LIST RENDERING
        <div>
          {articles.map((article) => (
            <Card key={article.id} title={article.title} body={article.body} />
          ))}
        </div>
      )}
    </div>
  );
}