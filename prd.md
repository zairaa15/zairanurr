# Product Requirement Document (PRD)
# Personal Portfolio Website - Zaira Nur Rojabiyah

---

## 1. Product Overview

- **Nama Produk:** Personal Portfolio Website - Zaira Nur Rojabiyah
- **Tipe Produk:** Responsive personal portfolio landing page
- **Tujuan:** Membuat sebuah website portfolio yang memperkenalkan Zaira Nur Rojabiyah sebagai Junior Software Engineer serta menampilkan latar belakang pendidikan, kemampuan, dan project yang pernah dibuat.
- **Fungsi Utama:** Website harus dapat digunakan sebagai personal branding dan portfolio untuk menunjukkan kemampuan di bidang software development.

---

## 2. User Profile

**Primary User:** Orang yang ingin mengenal kemampuan dan portfolio Zaira.

**Contoh Target Pengguna:**
- Recruiter / HRD
- Guru / Tenaga Pendidik
- Teman / Rekan Kolaborator
- Calon Client
- Orang yang ingin melihat project dan skill

---

## 3. Content Source

Semua informasi utama website **harus berasal dari CV**.

### Data yang Tersedia dari CV:
- **Nama:** Zaira Nur Rojabiyah
- **Role:** Junior Software Engineer
- **Pendidikan:** SMK Tunas Harapan Pati
- **Jurusan:** Teknik Jaringan Komputer dan Telekomunikasi
- **Konsentrasi:** Pemrograman
- **Pengalaman / Project:**
  - Website SI-UKS
  - Aplikasi Desktop SI-UKS
  - Website To-Do List
- **Skills:**
  - Front-end & Back-end
  - Database
  - Desain Web
  - Mampu bekerja dalam tim
  - Manajemen waktu
- **Contact:**
  - Email: zairaatjkt@gmail.com
  - Nomor telepon: +62 851-9834-7567
  - LinkedIn: https://www.linkedin.com/in/zairanurrojabiyah

> [!IMPORTANT]
> **Aturan Integritas Data:** Jangan membuat data baru yang tidak terdapat pada CV.

---

## 4. Product Goals

### Primary Goals
1. Memperkenalkan Zaira secara singkat.
2. Menampilkan kemampuan software development.
3. Menampilkan project yang pernah dibuat.
4. Menyediakan informasi kontak.
5. Membuat portfolio yang mudah digunakan pada desktop dan mobile.

### Secondary Goals
1. Membangun personal branding.
2. Membuat project lebih mudah dipahami.
3. Memberikan pengalaman browsing yang modern dan nyaman.

---

## 5. Non-Goals

Website **tidak perlu** memiliki:
- Sistem login.
- Register.
- Dashboard.
- Database backend.
- Admin panel.
- CMS (Content Management System).
- Sistem komentar.
- Sistem pembayaran.
- Blog management.
- Fitur upload project oleh user.

*Catatan: Website merupakan portfolio statis/interaktif, bukan aplikasi CRUD.*

---

## 6. Site Structure

Website memiliki struktur satu halaman (*single-page layout*) yang terdiri dari:

1. **Home** (`#home`)
2. **About** (`#about`)
3. **Education** (`#education`)
4. **Projects** (`#projects`)
5. **Skills** (`#skills`)
6. **Contact** (`#contact`)
7. **Footer**

Semua section dapat diakses melalui menu navigasi.

---

## 7. Navigation

- **Desktop:**
  - Navbar berada di bagian atas viewport.
  - Menggunakan sticky positioning (`position: sticky` atau `position: fixed`).
  - Berisi menu:
    - Home
    - About
    - Education
    - Projects
    - Skills
    - Contact
- **Mobile:**
  - Menggunakan hamburger menu yang dapat dibuka dan ditutup.
  - Menu drawer/overlay menampilkan seluruh link section.
- **Interaksi:**
  - Navigation harus menggunakan smooth scrolling ketika berpindah ke section.
  - Memperhitungkan offset navbar agar header section tidak terpotong saat di-scroll.

---

## 8. Home / Hero

- **Elemen Konten:**
  - Nama: Zaira Nur Rojabiyah
  - Role: Junior Software Engineer
  - Short introduction yang padat dan jelas mengenai dedikasi di bidang software development.
- **Call to Action (CTA):**
  - Tombol Utama: *View Projects* (mengarah ke `#projects`)
  - Tombol Sekunder: *Contact Me* (mengarah ke `#contact`)
- **Tampilan Visual:**
  - Hero harus menjadi bagian yang paling menarik secara visual.
  - Gunakan visual style pastel pink dan pastel blue sesuai design system.
  - Layout 2 kolom pada desktop dan 1 kolom pada mobile.

---

## 9. About

About section berisi ringkasan profil berdasarkan CV.

- **Informasi Utama:**
  - Zaira merupakan lulusan SMK Tunas Harapan Pati jurusan Teknik Jaringan Komputer dan Telekomunikasi dengan konsentrasi pemrograman.
  - Memiliki pengalaman mengembangkan aplikasi berbasis web dan desktop, mengelola database, serta melakukan integrasi API.
- **Nilai Tambahan:**
  - Kemampuan problem solving
  - Teamwork (bekerja sama dalam tim)
  - Keinginan kuat untuk terus mengembangkan skill teknologi dan pemrograman

---

## 10. Education

Menampilkan riwayat pendidikan secara sederhana menggunakan format timeline atau card.

**Data Pendidikan:**
- **SMK Tunas Harapan Pati**
  - Jurusan: Teknik Jaringan Komputer dan Telekomunikasi
  - Konsentrasi: Pemrograman
- **MTS Ihyaul Ulum**

---

## 11. Projects

Menampilkan 3 project utama dalam bentuk card yang rapi dan terstruktur.

### Project 1
- **Nama:** Website SI-UKS
- **Deskripsi:** Mengembangkan website SI-UKS untuk mendukung pengelolaan informasi dan administrasi UKS.
- **Detail Tambahan:** Perancangan tampilan antarmuka (UI) dan implementasi fitur sistem sesuai kebutuhan pengguna.

### Project 2
- **Nama:** Aplikasi Desktop SI-UKS
- **Deskripsi:** Mengembangkan aplikasi desktop SI-UKS menggunakan C# dan Windows Forms.

### Project 3
- **Nama:** Website To-Do List
- **Deskripsi:** Membuat website To-Do List untuk membantu pengguna mencatat dan mengelola daftar tugas.
- **Teknologi:** Menerapkan HTML, CSS, dan JavaScript.

> [!NOTE]
> **Ketentuan Card & Link:**
> - Setiap project harus memiliki card.
> - Jika project URL tidak tersedia, jangan membuat link palsu.

---

## 12. Skills

Menampilkan daftar skill yang ada pada CV:
- Front-end & Back-end
- Database
- Desain Web
- Teamwork (Mampu bekerja dalam tim)
- Manajemen waktu

> [!WARNING]
> **Aturan Tampilan Skill:**
> Skill **tidak boleh** ditampilkan menggunakan persentase (misalnya 90%) atau rating bintang (misalnya 4/5) karena CV tidak menyediakan data tersebut. Gunakan badge, card, atau icon-based layout.

---

## 13. Contact

Contact section menyediakan cara langsung dan mudah untuk menghubungi Zaira.

**Data Kontak:**
- **Email:** `zairaatjkt@gmail.com`
- **Nomor Telepon / WhatsApp:** `+62 851-9834-7567`
- **LinkedIn:** `https://www.linkedin.com/in/zairanurrojabiyah`

**Interaksi:**
- Email dapat menggunakan protokol `mailto:zairaatjkt@gmail.com`.
- Nomor telepon dapat menggunakan protokol `tel:+6285198347567`.
- LinkedIn membuka halaman profil LinkedIn di tab baru (`target="_blank"`).

*Catatan: Alamat tidak harus menjadi informasi utama pada contact section.*

---

## 14. Responsive Requirements

Website wajib sepenuhnya responsive di berbagai ukuran perangkat.

### Target Breakpoints:
- **Mobile:** sekitar 320px sampai 767px
- **Tablet:** sekitar 768px sampai 1023px
- **Desktop:** 1024px ke atas

### Requirements:
- Tidak boleh ada horizontal scrolling pada semua ukuran layar.
- Semua section harus menyesuaikan ukuran layar secara proporsional.
- Navigation berubah menjadi hamburger menu pada mobile.
- **Grid Project:**
  - Desktop: 3 kolom
  - Tablet: 2 kolom
  - Mobile: 1 kolom
- **Hero Section:**
  - Desktop: dapat menggunakan 2 kolom
  - Mobile: menjadi 1 kolom
- Button harus tetap mudah ditekan pada touchscreen (ukuran touch target nyaman).
- Text tidak boleh keluar dari container (*no overflow / text clipping*).

---

## 15. User Experience

Website harus dirancang dengan kriteria:
- Cepat dipahami oleh pengunjung dalam sekali lihat.
- Mudah dinavigasi ke bagian yang dituju.
- Memiliki batasan section yang jelas dan rapi.
- Memiliki CTA yang kontras dan mudah ditemukan.
- Memiliki animasi ringan (*micro-interactions* pada hover, transisi halus).
- Tidak menggunakan animasi berlebihan yang mengganggu atau memperlambat load.
- Tetap usable dan konten tetap dapat diakses jika animasi tidak berjalan (*graceful fallback*).
- Menggunakan smooth scrolling saat berpindah section dan subtle reveal animation jika memungkinkan.

---

## 16. Functional Requirements

- **FR-01 Navigation:** User dapat berpindah antar section menggunakan navbar.
- **FR-02 Smooth Scroll:** Klik navigation mengarahkan user ke section yang sesuai dengan smooth scrolling.
- **FR-03 Mobile Navigation:** Pada mobile, user dapat membuka dan menutup hamburger menu.
- **FR-04 Project Display:** User dapat melihat daftar project dan deskripsi masing-masing project.
- **FR-05 Contact:** User dapat mengakses email, nomor telepon, dan LinkedIn secara langsung melalui link interaktif.
- **FR-06 Responsive Layout:** Website harus menyesuaikan tampilan secara otomatis berdasarkan ukuran layar.

---

## 17. Non-Functional Requirements

- **Performance:** Website harus ringan, waktu muat cepat, dan tidak menggunakan asset berukuran besar yang tidak diperlukan.
- **Accessibility:** Menggunakan semantic HTML, alt text pada gambar, keyboard navigation support, dan focus state yang jelas.
- **Responsiveness:** Website harus nyaman dan konsisten digunakan pada mobile, tablet, dan desktop.
- **Maintainability:** Struktur kode harus modular, bersih, terdokumentasi, dan mudah dikembangkan lebih lanjut.
- **Consistency:** Menggunakan design token (CSS variables) untuk warna, typography, spacing, border-radius, dan shadow.

---

## 18. Acceptance Criteria

Website dianggap selesai jika memenuhi seluruh kriteria berikut:

- [ ] Hero section menampilkan nama dan role.
- [ ] About section tersedia.
- [ ] Education section tersedia.
- [ ] Tiga project SI-UKS dan To-Do List ditampilkan.
- [ ] Skills section tersedia.
- [ ] Contact section tersedia.
- [ ] Email dapat diklik.
- [ ] Nomor telepon dapat diklik.
- [ ] LinkedIn dapat dibuka.
- [ ] Navbar berfungsi.
- [ ] Hamburger menu berfungsi pada mobile.
- [ ] Smooth scrolling berfungsi.
- [ ] Tidak ada horizontal scrolling.
- [ ] Tampilan responsive pada mobile.
- [ ] Tampilan responsive pada tablet.
- [ ] Tampilan responsive pada desktop.
- [ ] Tema pastel pink dan pastel blue diterapkan secara konsisten.
- [ ] Tidak ada informasi yang dibuat-buat di luar CV.

---

## 19. Technical Direction

Website harus dibuat dengan pendekatan responsive dan component-based jika framework digunakan.

**Teknologi & Standar Implementasi:**
- Semantic HTML (HTML5)
- CSS responsive
- Flexbox
- CSS Grid
- CSS variables / design tokens
- Responsive typography (menggunakan unit fluid atau rem/clamp)
- Accessible interactive elements (aksesibel via keyboard dan screen reader)

*Catatan: Framework/library boleh digunakan jika sesuai kebutuhan project, tetapi jangan menambahkan dependency yang tidak diperlukan.*

---

## 20. Design Reference

Visual design harus mengikuti spesifikasi pada `design.md`.

- **Tema Warna:** Pastel Pink + Pastel Blue
- **Style Visual:** Modern + Cute + Clean + Professional
- **Prioritas Desain:**
  1. Readability (Keterbacaan teks)
  2. Responsive layout (Tata letak responsif)
  3. Personal branding (Karakter profesional dan ramah)
  4. Project presentation (Penyajian portfolio yang menarik dan jelas)
  5. Accessibility (Kemudahan akses untuk semua pengguna)
  6. Visual consistency (Konsistensi palet warna dan komponen visual)
