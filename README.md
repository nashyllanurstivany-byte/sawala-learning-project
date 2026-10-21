# Sawala Learning Project - Progress PKL

Repo ini berisi progress belajaar selama PKL, mengikuti roadmap 10 minggu (JavaScript, TypeScript, Node.Js, React, Next.Js + Strapi).

## Struktur Milestone

| Milestone | Folder                            | Fokus                       | Status  |
| --------- | --------------------------------- | --------------------------- | ------- |
| 1         | `01-javascript-fundamentals/`     | Fondasi & JavaScript Modern | Selesai |
| 2         | `02-async-api-typescript/`        | Async JS, API & TypeScript  | Belum   |
| 3         | `03-nodejs-fundamentals/`         | Node.js Fundamentals        | Belum   |
| 4         | `04-react-fundamentals/`          | React Fundamentals          | Belum   |
| 5         | `05-nextjs-strapi-final-project/` | Next.js + Strapi            | Belum   |

## Progress Minggu 1-2 (Selesai)

- [x] Variabel & tipe data
- [x] Kondisi & Function (mini exercise: kalkulator)
- [x] Object & Array
- [x] Looping & array methods
- [x] Destructuring & spread
- [x] ES Modules
- [x] Mini project: daftar produk dengan filter & pencarian

## Cara menjalankan salah satu file:

\`\`\`bash
node 01-javascript-fundamentals/01-variabel-tipe-data/index.js
\`\`\`

## Progress Minggu 3-4 (Selesai)

- [x] Promise & Async/Await
- [x] Fetch API untuk request data
- [x] Dasar HTTP (method, status code, format JSON)
- [x] Error handling (try-catch)
- [x] TypeScript basic: type & interface
- [x] Mini project: konsumsi public API dengan state loading/error/data

## Cara menjalankan (Minggu 3-4)

Contoh menjalankan file JavaScript:
\`\`\`bash
node 02-async-api-typescript/01-promise-async-await/index.js
\`\`\`

Contoh menjalankan file TypeScript (pakai tsx):
\`\`\`bash
tsx 02-async-api-typescript/mini-project-consume-api/index.ts
\`\`\`

# Mini Project REST API

REST API sederhana untuk mengelola artikel (CRUD) menggunakan Node.js dan Express.

## Cara Menjalankan

1. `npm install`
2. Copy `.env.example` ke `.env`
3. `npm start`

Server jalan di `http://localhost:4000`.

## Endpoint

| Method | Endpoint      | Deskripsi           |
| ------ | ------------- | ------------------- |
| GET    | /articles     | Ambil semua artikel |
| GET    | /articles/:id | Ambil 1 artikel     |
| POST   | /articles     | Buat artikel baru   |
| PUT    | /articles/:id | Update artikel      |
| DELETE | /articles/:id | Hapus artikel       |
