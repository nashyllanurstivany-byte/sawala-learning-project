let articles = [{ id: 1, title: 'Belajar Node.js', body: 'Keren' }];
export function getAllArticles(req, res) {
  res.json({ message: 'Berhasil', total: articles.length, data: articles });
}
export function createArticle(req, res) {
  const { title, body } = req.body;
  const newArticle = { id: articles.length + 1, title, body };
  articles.push(newArticle);
  res.status(201).json({ message: 'Berhasil dibuat', data: newArticle });
}
