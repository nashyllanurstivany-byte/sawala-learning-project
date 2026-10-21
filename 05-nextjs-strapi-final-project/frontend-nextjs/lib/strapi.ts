// frontend-nextjs/lib/strapi.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getArticles() {
  const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`, {
    next: { revalidate: 0 }, // Ubah bagian ini
  });
  
  if (!res.ok) {
    throw new Error('Gagal mengambil data artikel');
  }
  
  return res.json();
}

export async function getArticleBySlug(slug: string) {
  const res = await fetch(`${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
    next: { revalidate: 0 }, // Ubah bagian ini juga
  });
  
  if (!res.ok) {
    throw new Error('Gagal mengambil detail artikel');
  }
  
  return res.json();
}