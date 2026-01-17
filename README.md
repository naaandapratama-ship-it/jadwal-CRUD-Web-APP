# 📅 Web Application Pencatatan Jadwal (Serverless AWS)

Proyek ini adalah aplikasi web manajemen jadwal (To-Do List) yang dibangun menggunakan arsitektur **Serverless** di ekosistem **Amazon Web Services (AWS)**. Aplikasi ini memungkinkan pengelolaan data secara dinamis tanpa perlu mengelola server fisik, sehingga lebih efisien dan skalabel.
---
    ```[bash
    git clone [https://github.com/username/pencatatan-jadwal-aws.git](https://github.com/username/pencatatan-jadwal-aws.git)
    cd pencatatan-jadwal-aws](https://staging.d3q3z9rxaamyt1.amplifyapp.com/)
    ```
---

## 📌 Deskripsi Proyek
Aplikasi ini dirancang untuk membantu pengguna mencatat dan mengelola jadwal kegiatan. Dengan memanfaatkan teknologi *cloud computing*, sistem ini menjamin ketersediaan tinggi dan biaya operasional yang rendah karena sumber daya hanya digunakan saat ada permintaan (request).

### Fitur Utama:
* ➕ **Tambah Jadwal**: Membuat catatan kegiatan baru dengan judul, tanggal, dan deskripsi.
* 📋 **Tampilkan Data**: Melihat daftar semua jadwal yang tersimpan di database.
* 🔄 **Update Data**: Memperbarui detail kegiatan yang sudah ada.
* 🗑️ **Hapus Data**: Menghapus jadwal yang telah selesai atau tidak diperlukan lagi.

---

## 🛠️ Arsitektur Teknologi (Stack)
Proyek ini menggunakan kombinasi layanan AWS untuk menciptakan sistem yang sepenuhnya serverless:

* **Frontend**: [React JS](https://reactjs.org/) & [Vite](https://vitejs.dev/) – Dihosting di **Amazon S3** (Static Website Hosting).
* **API Gateway**: **Amazon API Gateway** – Sebagai gerbang masuk permintaan REST API dari frontend.
* **Compute (Backend)**: **AWS Lambda** – Menjalankan logika bisnis menggunakan Node.js secara on-demand.
* **Database**: **Amazon DynamoDB** – Database NoSQL untuk penyimpanan data jadwal yang cepat dan terukur.

---

## 🚀 Alur Kerja Sistem
1.  **Frontend** mengirimkan permintaan HTTP (GET/POST/PUT/DELETE) ke endpoint **API Gateway**.
2.  **API Gateway** meneruskan permintaan tersebut untuk memicu fungsi di **AWS Lambda**.
3.  **AWS Lambda** memproses logika (CRUD) dan berinteraksi dengan tabel di **Amazon DynamoDB**.
4.  Data dikembalikan dalam format JSON ke browser untuk ditampilkan kepada pengguna.

---

## 💻 Cara Instalasi & Penggunaan
### Prasyarat:
* Akun AWS yang aktif.
* Node.js & NPM terinstal (untuk pengembangan lokal).

### Langkah-langkah:
1.  **Clone Repositori**:
    ```bash
    git clone [https://github.com/username/pencatatan-jadwal-aws.git](https://github.com/username/pencatatan-jadwal-aws.git)
    cd pencatatan-jadwal-aws
    ```
2.  **Backend (AWS Setup)**:
    * Buat tabel di **DynamoDB** dengan Partition Key `id`.
    * Deploy kode di folder `/lambda` ke **AWS Lambda**.
    * Konfigurasi **API Gateway** dan hubungkan ke fungsi Lambda tersebut.
3.  **Frontend**:
    * Update file konfigurasi API di frontend dengan URL endpoint dari API Gateway Anda.
    * Jalankan secara lokal: `npm install && npm run dev`.
    * Atau upload build folder ke **Amazon S3** untuk hosting publik.

---

## 👥 Tim Pengembang
Proyek ini disusun oleh Kelompok Mahasiswa Teknik Informatika **Universitas Dharma Wacana**:
* **Nanda Pratama** (22010014)
* **Sabna Regita Alya Zafira** (22010015)
* **Angga Tri Antoni** (22010042)
* **Eka Wisnu Mulyana** (22010067)

---

## 📄 Lisensi
Proyek ini dibuat untuk memenuhi tugas mata kuliah *Cloud Computing* di bawah bimbingan Dosen Pengampu **Haris Setiaji, MTI., CISDE.**
