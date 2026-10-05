# Design System & UI/UX Guidelines
# Personal Portfolio Website - Zaira Nur Rojabiyah

---

## 1. Design Overview & Philosophy

### 1.1 Brand & Personality
Website portfolio personal untuk **Zaira Nur Rojabiyah** dirancang untuk mencerminkan identitas seorang **Junior Software Engineer** muda yang kompeten, teliti, kreatif, dan *approachable*. 

- **Target Persona:** Siswa/lulusan SMK berprestasi dengan spesialisasi Rekayasa Perangkat Lunak / Pemrograman yang siap memasuki dunia industri profesional maupun kolaborasi proyek.
- **Core Design Tone:**
  - **Modern:** Mengikuti standar estetika web terkini dengan whitespace lapang dan tipografi jernih.
  - **Clean:** Tata letak rapi, terstruktur, tidak bising, dan mudah dicerna dalam sekali pandang (*scannable*).
  - **Cute & Friendly:** Sentuhan visual hangat dan manis yang mencerminkan usia muda tanpa terkesan kekanak-kanakan.
  - **Professional:** Menegaskan kredibilitas teknis dalam pengembangan web, desktop, database, dan API.

### 1.2 The "Do's & Don'ts"
| Do (Dianjurkan) | Don't (Hindari) |
| :--- | :--- |
| Warna pastel lembut (*blush pink*, *sky/periwinkle blue*) | Warna neon menyilaukan mata (*fluorescent*) |
| Gradasi lembut dengan opasitas rendah (*subtle glow*) | Gradient tebal dan agresif ala pop-art |
| Sudut membulat yang manis & modern (*radius 12–24px*) | Radius ekstrem bulat lingkaran penuh (*bubble look*) |
| Tata letak terstruktur dengan hierarki visual kuat | Desain korporat kaku/monoton (*corporate grey*) |
| Kartu (*cards*) dengan soft shadow berelevasi rendah | Desain kekanak-kanakan (*overly childish cartoon*) |
| Informasi faktual sesuai CV tanpa klaim berlebihan | Menambahkan link palsu, persentase skill fiktif, atau klaim tanpa data |

---

## 2. Color Palette & Design Tokens

Sistem warna dibangun menggunakan palet pastel yang seimbang, menggabungkan kehangatan **Pastel Pink** dengan ketenangan dan profesionalitas **Pastel Blue**, didukung oleh warna latar netral dan kontras teks yang memenuhi standar aksesibilitas WCAG AA.

### 2.1 Color Tokens Reference

```css
:root {
  /* --- Primary: Pastel Pink (Warmth, Energy, Friendliness) --- */
  --color-primary-50:  #FFF0F5;   /* Very soft pink tint / background accent */
  --color-primary-100: #FFE4EC;   /* Light pastel pink / hover badges */
  --color-primary-200: #FFCCD9;   /* Soft pink border / active states */
  --color-primary-400: #F48FB1;   /* Base pastel pink */
  --color-primary-500: #E57399;   /* Deep pastel pink for interactive accents */
  --color-primary-600: #C24A75;   /* High contrast pink for text links */

  /* --- Secondary: Pastel Blue (Tech, Trust, Professionalism) --- */
  --color-secondary-50:  #F0F7FF; /* Very light ice blue background */
  --color-secondary-100: #E1EFFE; /* Soft pastel blue badge background */
  --color-secondary-200: #BADBFC; /* Pastel blue border / subtle divider */
  --color-secondary-400: #7CB9F5; /* Base pastel blue */
  --color-secondary-500: #4B9EEA; /* Primary interactive blue */
  --color-secondary-600: #2563EB; /* High contrast text accent */

  /* --- Backgrounds & Surfaces --- */
  --color-bg-body:      #FCFDFE;  /* Clean, crisp off-white with hint of blue/pink */
  --color-bg-surface:   #FFFFFF;  /* Pure white for card elevation */
  --color-bg-subtle:    #F7FAFD;  /* Alternating section background */
  --color-bg-elevated:  #FFFFFF;  /* Modal / navbar floating surface */

  /* --- Text & Content --- */
  --color-text-main:    #1E293B;  /* Slate/Dark Charcoal - high contrast & soft on eyes */
  --color-text-body:    #334155;  /* Muted charcoal for reading body text */
  --color-text-muted:   #64748B;  /* Secondary/caption metadata */
  --color-text-inverse: #FFFFFF;  /* Text on dark/solid buttons */

  /* --- Borders & Dividers --- */
  --color-border-light: #E2E8F0;  /* Standard UI border */
  --color-border-subtle:#EDF2F7;  /* Light container border */
  --color-border-pink:  #FFDBE5;  /* Themed pink border */
  --color-border-blue:  #D4E7FE;  /* Themed blue border */

  /* --- Status / Functional Colors --- */
  --color-success:      #10B981;  /* Soft emerald green (ready, active) */
  --color-info:         #3B82F6;  /* Soft info blue */
}
```

### 2.2 Semantic Color Usage Guidelines
- **Primary Buttons:** Background `--color-primary-400` dengan transisi hover ke `--color-primary-500`, teks putih.
- **Secondary Buttons / Ghost:** Background `--color-secondary-50` dengan border `--color-secondary-200` dan teks `--color-secondary-600`.
- **Card Highlights:** Menggabungkan border tipis `1px solid var(--color-border-blue)` dengan gradasi latar putih ke `--color-secondary-50`.
- **Section Badges:** Pill badge kecil dengan background `--color-primary-100` dan teks `--color-primary-600`.

---

## 3. Typography System

Tipografi mengutamakan keterbacaan tinggi (*high legibility*) dengan karakter yang modern, bersih, dan sedikit *playful*.

### 3.1 Font Families
- **Heading Font:** `'Plus Jakarta Sans'`, `'Outfit'`, atau `'Poppins'`, sans-serif.
  - Karakter: Geometris, ramah, sudut ramah (*friendly geometric curves*).
- **Body Font:** `'Inter'`, `'Plus Jakarta Sans'`, atau `'Segoe UI'`, sans-serif.
  - Karakter: Sangat jernih pada ukuran kecil, netral, rendering tajam di semua OS.
- **Code/Tech Tags:** `'JetBrains Mono'`, `'Fira Code'`, monospace (opsional untuk badge teknologi seperti `C#`, `SQL`).

### 3.2 Type Scale (Responsive Clamp)

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Kegunaan |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display / H1** | `48px` (`3rem`) | `32px` (`2rem`) | `800` (Bold) | `1.15` | `-0.02em` | Nama Utama Zaira di Hero |
| **Section Title / H2** | `32px` (`2rem`) | `24px` (`1.5rem`) | `700` (Bold) | `1.25` | `-0.01em` | Judul Section (About, Projects, dll) |
| **Card Title / H3** | `22px` (`1.375rem`) | `18px` (`1.125rem`) | `600` (Semi-bold) | `1.35` | `0` | Nama Project, Judul Institusi Edukasi |
| **Subtitle / Lead** | `18px` (`1.125rem`) | `16px` (`1rem`) | `500` (Medium) | `1.6` | `0` | Deskripsi pengantar hero & section |
| **Body Text** | `16px` (`1rem`) | `15px` (`0.9375rem`) | `400` (Regular) | `1.65` | `0` | Paragraf deskripsi, penjelasan project |
| **Small / Caption** | `13px` (`0.8125rem`) | `12px` (`0.75rem`) | `500` (Medium) | `1.5` | `+0.02em` | Metadata, tanggal, tag teknologi |
| **Button Text** | `15px` (`0.9375rem`) | `14px` (`0.875rem`) | `600` (Semi-bold) | `1` | `+0.01em` | CTA Button Labels |

---

## 4. Elevation, Shadows, & Border Radius

### 4.1 Border Radius Tokens
Sudut kurva dirancang melengkung lembut (*soft rounded*) untuk menghasilkan estetika yang bersahabat (*welcoming*) namun tetap kokoh.

```css
:root {
  --radius-sm:   8px;   /* Tag, pills kecil, input elements */
  --radius-md:  12px;   /* Button, badge utama, dropdown items */
  --radius-lg:  18px;   /* Cards standar, education timeline card */
  --radius-xl:  24px;   /* Project showcase cards, Hero visual containers */
  --radius-full: 9999px;/* Pill buttons, avatar ring, floating badges */
}
```

### 4.2 Elevation & Shadow Tokens
Bayangan menggunakan dispersi lebar dengan opasitas rendah dan sentuhan rona biru/pink (*colored soft ambient glow*) alih-alih abu-abu gelap mati.

```css
:root {
  /* Hover pada link / kartu datar */
  --shadow-xs: 0 1px 3px rgba(30, 41, 59, 0.04);

  /* Kartu default */
  --shadow-sm: 0 4px 12px -2px rgba(75, 158, 234, 0.08), 
               0 2px 6px -1px rgba(244, 143, 177, 0.06);

  /* Kartu saat di-hover */
  --shadow-md: 0 12px 24px -4px rgba(75, 158, 234, 0.12), 
               0 6px 16px -2px rgba(244, 143, 177, 0.10);

  /* Floating navbar & modal drawer */
  --shadow-floating: 0 10px 30px -5px rgba(30, 41, 59, 0.08);

  /* Primary CTA Glow */
  --shadow-btn-primary: 0 4px 14px rgba(244, 143, 177, 0.35);
}
```

---

## 5. Spacing System & Grid Layout

### 5.1 Spacing Scale (8pt Grid System)
```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}
```

### 5.2 Container Constraints
- **Container Max-Width:** `1200px` (terpusat dengan `margin: 0 auto`).
- **Gutter Padding Horizontal:**
  - Desktop: `40px`
  - Tablet: `24px`
  - Mobile: `20px`

### 5.3 Section Vertical Spacing
- Desktop: `padding: 96px 0;` (atau `80px 0;` untuk section yang lebih ringkas)
- Tablet: `padding: 64px 0;`
- Mobile: `padding: 48px 0;`

---

## 6. Layout & Breakpoints Strategy

Sistem tata letak dirancang dengan pendekatan **Mobile-First Responsive Design**.

```
+-------------------------------------------------------------+
| Desktop (>= 1024px)                                         |
| Container: 1200px max | Hero: 2 Kolom | Projects: 3 Kolom   |
+-------------------------------------------------------------+
| Tablet (768px - 1023px)                                     |
| Container: 100% | Hero: 2 / 1 Kolom | Projects: 2 Kolom     |
+-------------------------------------------------------------+
| Mobile (< 768px)                                            |
| Container: 100% | Single Column | Projects: 1 Kolom Stack  |
+-------------------------------------------------------------+
```

### 6.1 Breakpoint Variables
- **Mobile Small:** `320px` - `480px`
- **Mobile Standard:** `481px` - `767px`
- **Tablet:** `768px` - `1023px`
- **Desktop Standard:** `1024px` - `1279px`
- **Desktop Wide:** `1280px` ke atas

---

## 7. Component Specifications

### 7.1 Navigation Bar (Header)
Navbar menjaga orientasi navigasi tetap mudah diakses sepanjang penjelajahan.

- **Struktur:**
  - Kiri: Logo / Identitas Text (`Zaira.dev` atau `Zaira Nur Rojabiyah` dengan badge titik pastel hijau/pink).
  - Kanan (Desktop): Nav Menu Links (`Home`, `About`, `Education`, `Projects`, `Skills`, `Contact`).
  - Kanan (Mobile): Tombol Hamburger Menu interaktif.
- **Visual Style:**
  - Sticky at top: `backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.85);`
  - Border bawah: `1px solid var(--color-border-subtle)`
  - Tinggi: `72px` (Desktop) / `60px` (Mobile)
- **Menu States:**
  - *Default:* Teks warna `--color-text-body`, font-weight 500.
  - *Hover:* Teks berubah menjadi `--color-primary-500`, background pill lembut `--color-primary-50`.
  - *Active:* Teks warna `--color-secondary-600` dengan aksen titik atau underline pastel.
- **Mobile Menu Drawer:**
  - Muncul halus dari atas atau samping dengan latar belakang blur penuh.
  - Menu vertikal berjarak sentuh lega (`padding: 14px 20px`).

### 7.2 Button Components
Tombol merupakan pendorong utama aksi pengunjung (*Call to Action*).

#### A. Primary Button (*View Projects*)
- **Default:** Background gradasi linear lembut `linear-gradient(135deg, #F48FB1 0%, #E57399 100%)`, teks putih, font-weight 600, border radius `14px`, box-shadow `--shadow-btn-primary`.
- **Hover:** Transformasi `translateY(-2px)`, shadow sedikit melebar, saturasi meningkat lembut.
- **Active:** Transformasi `translateY(0px)`, shadow mengecil.
- **Focus-Visible:** Outline `2px solid var(--color-primary-400)` dengan offset 2px.

#### B. Secondary / Outline Button (*Contact Me*)
- **Default:** Background `--color-surface`, border `1.5px solid var(--color-secondary-200)`, teks `--color-secondary-600`, border radius `14px`.
- **Hover:** Background `--color-secondary-50`, border `--color-secondary-400`, teks `--color-secondary-600`, `translateY(-2px)`.
- **Active / Focus:** Mengikuti standar aksesibilitas interaksi sentuh.

---

### 7.3 Hero Section
Bagian pembuka yang paling menarik secara visual, menggabungkan personalitas hangat dan identitas teknis.

- **Layout Desktop:** 2 Kolom seimbang (55% Kolom Teks Pengantar, 45% Visual Card Showcase).
- **Layout Mobile:** 1 Kolom bertumpuk (Teks di atas, visual dekoratif di bawah).
- **Elemen Teks:**
  - Badge Status: `✨ Available for Junior Software Engineer Roles` (background pastel pink soft).
  - Greeting: *"Halo, saya"*
  - Main Heading (H1): **Zaira Nur Rojabiyah**
  - Title Tag: **Junior Software Engineer**
  - Bio Ringkas: Lulusan SMK Tunas Harapan Pati jurusan TJKT (konsentrasi pemrograman) dengan minat dan pengalaman dalam pengembangan web, aplikasi desktop, manajemen database, dan integrasi API.
  - CTA Group: Flex horizontal (Primary CTA "View Projects" + Secondary CTA "Contact Me").
- **Elemen Visual:**
  - Card representasi modern dengan ilustrasi/mockup clean bernuansa pastel pink dan pastel blue.
  - Floating mini-chips di sekeliling ilustrasi: `💻 Web & Desktop`, `🗄️ Database`, `⚡ Clean Code`.

---

### 7.4 About Section
Menyajikan informasi komprehensif tanpa menghadirkan blok teks yang membosankan.

- **Layout:** Kombinasi narasi terstruktur dengan **Highlight Cards Grid**.
- **Highlight Cards (3-4 kartu sorotan):**
  1. **Pendidikan & Kejuruan:** SMK Tunas Harapan Pati (TJKT - Pemrograman).
  2. **Spektrum Teknis:** Pengembangan Web, Desktop, Database & API Integration.
  3. **Pendekatan Kerja:** Problem Solving & Teamwork yang solid.
  4. **Etos Belajar:** Antusiasme tinggi mempelajari teknologi dan framework terkini.
- **Card Style:** Latar putih bersih, border `1px solid var(--color-border-subtle)`, sudut membulat `18px`, icon pastel di dalam lingkaran lembut.

---

### 7.5 Education Section
Menampilkan perjalanan akademik dengan timeline atau education cards yang elegan.

- **Layout:** Vertical Connected Timeline atau Dual Education Cards.
- **Institusi 1:**
  - Institusi: **SMK Tunas Harapan Pati**
  - Bidang: Teknik Jaringan Komputer dan Telekomunikasi (TJKT)
  - Peminatan: **Konsentrasi Pemrograman**
  - Badge: Kejuruan Menengah
- **Institusi 2:**
  - Institusi: **MTS Ihyaul Ulum**
  - Badge: Pendidikan Dasar & Menengah
- **Gaya Visual:** Marker lingkaran bertema pastel blue/pink dengan garis penghubung putus-putus lembut (*soft dashed connector*).

---

### 7.6 Projects Section
Katalog karya utama untuk mendemonstrasikan kapabilitas nyata.

- **Layout:** Grid 3 kolom (Desktop), 2 kolom (Tablet), 1 kolom (Mobile).
- **Struktur Tiap Project Card:**
  1. **Visual Preview / Header Banner:** Mockup grafis bernuansa pastel pink/blue dengan ikon representatif:
     - Project 1: *Website SI-UKS* (Ikon browser / sistem kesehatan sekolah)
     - Project 2: *Aplikasi Desktop SI-UKS* (Ikon jendela desktop Windows / C#)
     - Project 3: *Website To-Do List* (Ikon checklist tugas interaktif)
  2. **Project Title (H3):** Judul proyek dengan kontras jelas.
  3. **Description:** Ringkasan fungsi sistem dan fokus pengerjaan:
     - *SI-UKS Web:* Perancangan antarmuka & implementasi fitur administrasi UKS.
     - *SI-UKS Desktop:* Aplikasi desktop menggunakan C# dan Windows Forms.
     - *To-Do List:* Manajemen daftar tugas dengan HTML, CSS, dan JavaScript.
  4. **Tech Badges (Tags):** Pills kecil berlatar `--color-secondary-50` dengan border lembut (contoh: `HTML`, `CSS`, `JavaScript`, `C#`, `WinForms`, `Database`).
  5. **Footer Card Action:** Tombol "View Project" hanya ditampilkan apabila link tersedia. Jika belum ada link publik, tampilkan label status *"Academic / Portfolio Showcase"* (tidak membuat link palsu/broken).
- **Interaksi Hover:** Card sedikit terangkat (`translateY(-6px)`), bayangan bertransisi ke `--shadow-md`, border warna pastel pink/blue sedikit menguat.

---

### 7.7 Skills Section
Penyajian kemampuan teknis dan kemampuan interpersonal secara transparan tanpa manipulasi data persentase.

> [!IMPORTANT]
> **Strict Guideline:** Tidak menggunakan progress-bar persentase (contoh: "80%") maupun rating bintang karena tidak tercantum dalam CV resmi.

- **Kategori Penyajian:**
  - **Kelompok 1: Software & Web Development**
    - Front-end & Back-end
    - Database Management
    - Desain Web (UI Design)
  - **Kelompok 2: Professional & Interpersonal Skills**
    - Mampu Bekerja dalam Tim (Teamwork)
    - Manajemen Waktu (Time Management)
- **Komponen Visual:**
  - **Interactive Skill Cards:** Kartu kotak atau kapsul berukuran pas (*compact*) dengan ikon ilustratif, nama skill berbobot semi-bold, dan indikator fokus praktis.
  - Border tipis pastel, hover efek scale lembut `scale(1.03)`.

---

### 7.8 Contact Section
Menghubungkan pengunjung langsung ke Zaira dengan saluran yang valid dan fungsional.

- **Layout:** Centered Showcase Box atau 3-Column Contact Cards.
- **Saluran Kontak Resmi:**
  1. **Email:**
     - Teks: `zairaatjkt@gmail.com`
     - Action: Tombol/Tautan interaktif `mailto:zairaatjkt@gmail.com`
     - Ikon: Surat pastel pink
  2. **WhatsApp / Telepon:**
     - Teks: `+62 851-9834-7567`
     - Action: Tombol/Tautan interaktif `tel:+6285198347567`
     - Ikon: Telepon pastel blue
  3. **LinkedIn:**
     - Teks: `linkedin.com/in/zairanurrojabiyah`
     - Action: Link eksternal `https://www.linkedin.com/in/zairanurrojabiyah` (membuka tab baru)
     - Ikon: Lambang jejaring profesional
- **Alamat:** Jika disinggung, cukup diletakkan sebagai teks sekunder (*subtle secondary note*) tanpa mendominasi call-to-action kontak digital.

---

### 7.9 Footer Component
- **Elemen:**
  - Copyright: `© 2026 Zaira Nur Rojabiyah. All rights reserved.`
  - Role: `Junior Software Engineer`
  - Tautan navigasi pintas ke atas (*Back to top* dengan icon panah melengkung halus).
  - Tautan sosial media / LinkedIn yang selaras.
- **Styling:** Latar belakang off-white lembut, border atas `1px solid var(--color-border-subtle)`, teks muted yang tidak mengalihkan perhatian.

---

## 8. Micro-Interactions & Animation Guidelines

Gerakan (*motion*) digunakan semata-mata untuk meningkatkan kenyamanan penjelajahan dan memberikan kesan hidup (*lively*), bukan sebagai distraksi.

### 8.1 Motion Timing & Easing
- **Durasi Standar:** `200ms` - `300ms` (responsif dan terasa instan).
- **Timing Function:** `cubic-bezier(0.16, 1, 0.3, 1)` (efek ease-out lembut).
- **Hover Lift:** `transform: translateY(-4px);` pada kartu.
- **Scroll Behavior:** `scroll-behavior: smooth;` pada level root HTML.

### 8.2 Accessibility: Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Accessibility (a11y) Standards

1. **Rasio Kontras Warna (Contrast Ratio):**
   - Teks utama (`--color-text-main`) di atas latar putih/pastel memiliki rasio kontras > `7:1` (melebihi standar WCAG AAA).
   - Teks muted (`--color-text-muted`) memiliki rasio kontras > `4.5:1` (memenuhi WCAG AA).
2. **Navigasi Keyboard:**
   - Semua elemen interaktif (`<a>`, `<button>`, `input`) memiliki `:focus-visible` outline yang kontras dan jelas (tidak dihilangkan dengan `outline: none`).
3. **Semantic HTML:**
   - Menggunakan elemen struktural standar: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
4. **Target Sentuh Layar Mobile:**
   - Semua tombol dan link pada mode mobile memiliki area tap minimal `44px x 44px`.
5. **Screen Readers:**
   - Semua ikon interaktif memiliki atribut `aria-label` yang deskriptif.

---

## 10. Design Checklist & Alignment Summary

Sebelum tahap implementasi kode dilakukan, pastikan desain memenuhi kriteria evaluasi berikut:

- [x] **Tema Pastel Harmonis:** Menggunakan Pastel Pink (#F48FB1) dan Pastel Blue (#7CB9F5) dengan latar putih/soft neutral.
- [x] **Karakter Visual Seimbang:** Tampil modern, rapi (*clean*), manis (*cute*), dan tetap mencerminkan kompetensi teknis seorang *software engineer*.
- [x] **Kepatuhan Data CV:** Tidak ada manipulasi data (tanpa rating persentase skill, tanpa URL dummy, tanpa riwayat kerja fiktif).
- [x] **Responsif Total:** Transisi tata letak yang mulus antara Desktop (3 kolom), Tablet (2 kolom), dan Mobile (1 kolom) tanpa horizontal scrolling.
- [x] **Tipografi Bersih & Terbaca:** Kombinasi Plus Jakarta Sans / Inter dengan skala ukuran yang proporsional.
- [x] **Aksesibilitas Terjamin:** Kontras teks aman, ramah navigasi keyboard, dan mendukung *reduced motion*.
