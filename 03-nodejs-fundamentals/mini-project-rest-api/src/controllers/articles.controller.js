// src/controllers/articles.controller.js

let articles = [
  { id: 1, title: 'Belajar Node.js', body: 'Node.js itu keren' },
  { id: 2, title: 'Belajar Express', body: 'Express bikin hidup mudah' },
];

export function getAllArticles(req, res) {
  res.json({
    message: 'Berhasil ambil semua artikel',
    total: articles.length,
    data: articles,
  });
}

export function getArticleById(req, res) {
  const id = Number(req.params.id);
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return res.status(404).json({ message: `Artikel id ${id} tidak ditemukan` });
  }

  res.json({ message: 'Berhasil ambil artikel', data: article });
}

export function createArticle(req, res) {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ message: 'title dan body wajib diisi' });
  }

  const newArticle = {
    id: articles.length ? articles[articles.length - 1].id + 1 : 1,
    title,
    body,
  };

  articles.push(newArticle);
  res.status(201).json({ message: 'Artikel berhasil dibuat', data: newArticle });
}

export function updateArticle(req, res) {
  const id = Number(req.params.id);
  const { title, body } = req.body;

  const article = articles.find((a) => a.id === id);
  if (!article) {
    return res.status(404).json({ message: `Artikel id ${id} tidak ditemukan` });
  }

  if (title) article.title = title;
  if (body) article.body = body;

  res.json({ message: 'Artikel berhasil diupdate', data: article });
}

export function deleteArticle(req, res) {
  const id = Number(req.params.id);
  const index = articles.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `Artikel id ${id} tidak ditemukan` });
  }

  const deleted = articles.splice(index, 1)[0];
  res.json({ message: 'Artikel berhasil dihapus', data: deleted });
}