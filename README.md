# Todo List — React + Tailwind CSS

Aplikasi Todo List sederhana (Single Page Application) yang dibangun untuk
memenuhi Tugas Praktikum Pemrograman Web: Modern Styling (Tailwind CSS),
React Fundamentals, dan Interactivity with Hooks.

## Struktur Komponen

```
src/
├── App.jsx                 # Menyimpan state utama (useState) & logic (CRUD todo)
├── components/
│   ├── Header.jsx           # Menampilkan judul & jumlah todo belum selesai
│   ├── TodoInput.jsx        # Form input untuk menambah todo baru
│   ├── TodoList.jsx         # Merender daftar TodoItem (menerima data via props)
│   └── TodoItem.jsx         # Satu item todo: checkbox, edit, hapus, strikethrough
```

## Checklist sesuai ketentuan tugas

**Styling (Tailwind CSS)**
- Seluruh styling memakai utility class Tailwind, tidak ada CSS biasa/inline style.
- Layout responsif (mobile → `flex-col`, desktop → `sm:flex-row`, dsb).
- Menggunakan banyak varian warna (brand/accent/slate/red), spacing (`p-3`
  s.d. `p-10`), dan typography (`text-xs` s.d. `text-4xl`, font `Poppins` &
  `Inter`).

**React Fundamentals**
- SPA murni, tanpa reload halaman.
- 4 komponen fungsional terpisah: `Header`, `TodoInput`, `TodoList`, `TodoItem`.
- Data todo dikirim antar komponen lewat **props** (`todos`, `onToggle`,
  `onDelete`, `onEdit`, `onAdd`).

**Interactivity with Hooks**
- `useState` dipakai di `App.jsx` (daftar todo) dan di `TodoInput.jsx` /
  `TodoItem.jsx` (status input/edit).
- `useEffect` di `App.jsx` untuk mengupdate `document.title` setiap jumlah
  todo yang belum selesai berubah.
- Fitur lengkap: tambah, hapus, edit (klik tombol Edit → input muncul →
  Enter/klik di luar untuk menyimpan), dan tandai selesai (checkbox +
  teks dicoret).

**Fitur wajib**
1. Input teks tambah todo ✅
2. Tombol hapus per item ✅
3. Tombol edit per item ✅
4. Checkbox selesai + strikethrough ✅
5. Counter todo belum selesai (di Header & di atas daftar) ✅

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Build untuk produksi

```bash
npm run build
npm run preview
```

## Cara upload ke GitHub

```bash
git init
git add .
git commit -m "Tugas: Todo List React + Tailwind"
git branch -M main
git remote add origin <URL_REPO_GITHUB_ANDA>
git push -u origin main
```
