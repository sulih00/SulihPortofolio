export interface ArchitectureNode {
  title: string;
  role: string;
  tech: string;
  icon: string;
}

export interface ProjectArchitecture {
  pattern: string;
  layers: ArchitectureNode[];
  flowDescription: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'government' | 'healthcare' | 'enterprise';
  categoryLabel: string;
  organization: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  featured?: boolean;
  architecture?: ProjectArchitecture;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; icon: string; highlight?: boolean }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  pdfUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'devops';
  categoryLabel: string;
  description: string;
  courses?: string[];
  skills: string[];
  featured?: boolean;
  logo: string;
}


export const personalInfo = {
  name: "SULIH",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications, modern UIs, and robust enterprise backend systems.",
  location: "Bekasi, Indonesia",
  email: "sulih055@gmail.com",
  phone: "+6285728818103",
  linkedin: "https://www.linkedin.com/in/sulih-aa749313b",
  github: "https://github.com",
  cvUrl: "/cv-sulih-fullstack.pdf",
  education: {
    institution: "STMIK-AUB Surakarta",
    degree: "S1 Sistem Informasi (System Information)",
  },
  bio: `Saya adalah seorang Full Stack Developer berpengalaman dalam merancang arsitektur perangkat lunak yang efisien, skalabel, dan modern. Memiliki keahlian kuat di bidang PHP, JavaScript, TypeScript, Vue.js, Laravel, serta pengembangan backend API, manajemen database, dan optimasi performa server. Berpengalaman mengerjakan proyek skala pemerintah daerah (Pusdatin BPAD DKI Jakarta), fasilitas kesehatan (RSUD Jati Padang, RS Jantung Jakarta), hingga sistem ERP perusahaan (QDC Technologies).`
};

export const projects: Project[] = [
  {
    id: "mpsbmd",
    title: "MPSBMD & LBMD BPAD DKI Jakarta",
    category: "government",
    categoryLabel: "Government & Aset Daerah",
    organization: "Pusdatin Aset BPAD DKI Jakarta",
    description: "Sistem informasi manajemen dan penetapan pemanfaatan Barang Milik Daerah (BMD) untuk Pemprov DKI Jakarta.",
    longDescription: "Aplikasi tingkat provinsi untuk pengelolaan, permohonan rekomendasi, notulen rapat penetapan, hingga pelaporan aset daerah DKI Jakarta dengan alur persetujuan multi-level dan validasi dokumen digital.",
    tags: ["Vue.js", "TypeScript", "Tailwind CSS", "Laravel/PHP", "Docker"],
    features: [
      "Alur kerja rekomendasi & rapat penetapan aset daerah",
      "Dashboard statistik aset real-time & ekspor laporan PDF/Excel",
      "Validasi berkas permohonan & berita acara digital",
      "Arsitektur SPA terintegrasi dengan REST API Docker"
    ],
    featured: true,
    architecture: {
      pattern: "Decoupled SPA + Containerized REST API Gateway Architecture",
      layers: [
        { title: "Client Layer", role: "SPA User Interface", tech: "Vue 3 + TypeScript", icon: "devicon-vuejs-plain colored" },
        { title: "Gateway Layer", role: "Reverse Proxy & Route", tech: "Nginx / API Gateway", icon: "devicon-nginx-original colored" },
        { title: "Backend API", role: "Microservices Engine", tech: "Laravel / Docker", icon: "devicon-laravel-original colored" },
        { title: "Database Layer", role: "Asset Data Engine", tech: "MySQL Database Cluster", icon: "devicon-mysql-plain colored" }
      ],
      flowDescription: "Pengguna SKPD mengajukan permohonan pemanfaatan aset via SPA Vue 3. Request melalui API Gateway terenkripsi ke backend microservice Docker untuk otentikasi multi-level, verifikasi berkas digital, dan persetujuan rapat penetapan."
    }
  },
  {
    id: "e-reklame",
    title: "E-Reklame CMS & E-Reklame Mitra",
    category: "government",
    categoryLabel: "Government & Aset Daerah",
    organization: "Pusdatin Aset BPAD DKI Jakarta",
    description: "Platform CMS manajemen dan portal mitra perizinan titik reklame di wilayah DKI Jakarta.",
    longDescription: "Sistem terpadu untuk pengajuan izin reklame oleh mitra/vendor swasta serta pengawasan lokasi titik reklame oleh BPAD DKI Jakarta.",
    tags: ["Vue.js", "Tailwind CSS", "REST API", "Docker", "Postman"],
    features: [
      "Portal Mitra untuk pengajuan perizinan titik reklame",
      "CMS Admin untuk verifikasi lokasi dan administrasi retribusi",
      "Peta titik lokasi reklame & pemantauan status izin",
      "Integrasi API terenkripsi & containerization Docker"
    ],
    featured: true,
    architecture: {
      pattern: "Dual-Portal SPA Architecture + Docker Microservices",
      layers: [
        { title: "Portal Swasta", role: "Mitra Submission Web App", tech: "Vue.js + Tailwind", icon: "devicon-vuejs-plain colored" },
        { title: "Admin Portal", role: "BPAD Verification CMS", tech: "Vue.js SPA Admin", icon: "devicon-javascript-plain colored" },
        { title: "Container Layer", role: "API Environment", tech: "Docker Containers", icon: "devicon-docker-plain colored" },
        { title: "Data Storage", role: "Relational & Spatial DB", tech: "PostgreSQL / MySQL", icon: "devicon-postgresql-plain colored" }
      ],
      flowDescription: "Mitra swasta mengajukan perizinan lokasi reklame via Portal Mitra. Data divalidasi oleh API Gateway Docker, lalu admin BPAD memverifikasi koordinat geografis dan dokumen retribusi pada CMS Admin."
    }
  },
  {
    id: "rs-jantung-appointment",
    title: "Mobile Doctor Appointment & WhatsApp API",
    category: "healthcare",
    categoryLabel: "Healthcare & SIMRS",
    organization: "RS Jantung Jakarta",
    description: "Backend API reservasi dokter untuk aplikasi mobile dan sistem notifikasi otomatis WhatsApp API.",
    longDescription: "Pengembangan web portal RS Jantung Jakarta dan layanan RESTful API pendukung aplikasi mobile pasien untuk reservasi jadwal dokter secara real-time disertai pengiriman reminder otomatis via WhatsApp.",
    tags: ["Laravel", "PHP", "WhatsApp API", "MySQL", "Bootstrap"],
    features: [
      "API Reservasi Jadwal Dokter untuk Aplikasi Mobile",
      "Integrasi WhatsApp API untuk notifikasi janji medis & reminder",
      "Web Portal Informasi & Profil Layanan RS",
      "Manajemen Database MySQL terstruktur dengan performa tinggi"
    ],
    featured: true,
    architecture: {
      pattern: "Event-Driven REST API Gateway + Messaging Engine",
      layers: [
        { title: "Mobile Client", role: "Patient iOS/Android App", tech: "REST Mobile API Consumer", icon: "devicon-chrome-plain colored" },
        { title: "Backend API", role: "Reservation Engine", tech: "Laravel Framework", icon: "devicon-laravel-original colored" },
        { title: "Notification", role: "Automated Message Service", tech: "WhatsApp Gateway API", icon: "devicon-whatsapp-plain colored" },
        { title: "Database Layer", role: "Medical Record Data", tech: "MySQL Database", icon: "devicon-mysql-plain colored" }
      ],
      flowDescription: "Aplikasi mobile pasien mengirimkan permintaan reservasi jadwal dokter ke Backend REST API. Sistem memverifikasi slot janji pada MySQL dan memicu event otomatis ke WhatsApp Gateway untuk notifikasi konfirmasi ke pasien."
    }
  },
  {
    id: "rsud-jati-padang-simrs",
    title: "System Kepegawaian RSUD Jati Padang",
    category: "healthcare",
    categoryLabel: "Healthcare & SIMRS",
    organization: "RSUD Jati Padang",
    description: "Sistem informasi manajemen data pegawai & tenaga medis RSUD Jati Padang.",
    longDescription: "Aplikasi internal RSUD untuk efisiensi administrasi kepegawaian, pengarsipan data nakes, jadwal piket, dan integrasi API internal.",
    tags: ["PHP", "Bootstrap", "MySQL", "Docker", "Postman"],
    features: [
      "Modul pendataan pegawai & tenaga kesehatan",
      "Pengaturan jadwal dinas & riwayat jabatan",
      "Dokumentasi API menggunakan Postman & Docker environment",
      "Optimasi query database MySQL untuk pencarian cepat"
    ],
    architecture: {
      pattern: "Modular Enterprise Web App + Internal Service Layer",
      layers: [
        { title: "UI Interface", role: "Internal Admin Console", tech: "Bootstrap + JS", icon: "devicon-bootstrap-plain colored" },
        { title: "Service Engine", role: "Business Logic Service", tech: "PHP Web Engine", icon: "devicon-php-plain colored" },
        { title: "Environment", role: "Public Testing Proxy", tech: "Docker Environment", icon: "devicon-docker-plain colored" },
        { title: "Database", role: "Staff Record Storage", tech: "MySQL Database", icon: "devicon-mysql-plain colored" }
      ],
      flowDescription: "Staf kepegawaian mengelola riwayat jabatan dan jadwal nakes. Backend PHP memproses validasi berkas dan menjalankan query teroptimasi ke database MySQL internal RSUD Jati Padang."
    }
  },
  {
    id: "qdc-erp",
    title: "Enterprise ERP System",
    category: "enterprise",
    categoryLabel: "Enterprise ERP",
    organization: "QDC Technologies",
    description: "Sistem ERP terintegrasi untuk pengelolaan operasional, inventaris, dan keuangan perusahaan.",
    longDescription: "Pengembangan modul-modul bisnis ERP dan RESTful API untuk mendukung otomasi proses bisnis perusahaan secara scalable.",
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "REST API"],
    features: [
      "Arsitektur REST API ERP yang modular & aman",
      "Manajemen stok, pembelian, dan laporan transaksi",
      "Desain UI responsive berbantuan Bootstrap",
      "Skalabilitas data dengan optimasi skema MySQL"
    ],
    architecture: {
      pattern: "Modular Monolith ERP + Inter-Module REST APIs",
      layers: [
        { title: "Console UI", role: "Enterprise Admin Panel", tech: "Bootstrap UI Console", icon: "devicon-bootstrap-plain colored" },
        { title: "ERP Engine", role: "Inventory & Billing Logic", tech: "Laravel Engine", icon: "devicon-laravel-original colored" },
        { title: "API Service", role: "Inter-Module REST Bridge", tech: "RESTful Service API", icon: "devicon-fastapi-plain colored" },
        { title: "Database", role: "Enterprise Transaction Data", tech: "MySQL Engine", icon: "devicon-mysql-plain colored" }
      ],
      flowDescription: "Modul inventaris, transaksi, dan keuangan saling berkomunikasi melalui internal REST API. Setiap modul mengeksekusi logika bisnis terisolasi dengan integritas transaksi database MySQL yang konsisten."
    }
  }
];

export const experiences: Experience[] = [
  {
    id: "pusdatin-bpad",
    role: "Full Stack Developer",
    company: "Pusdatin Aset BPAD DKI Jakarta",
    location: "Jakarta, Indonesia",
    period: "Proyek Pemerintah Daerah",
    description: "Mengembangkan aplikasi web pengelolaan aset dan perizinan reklame Pemprov DKI Jakarta skala provinsi.",
    achievements: [
      "Mengembangkan SPA E-Reklame CMS, E-Reklame Mitra, LBMD, dan MPSBMD menggunakan Vue.js dan Tailwind CSS.",
      "Merancang dan menguji REST API menggunakan Postman dan lingkungan kontainer Docker.",
      "Berkolaborasi dalam tim untuk efisiensi sistem pencarian dan alur persetujuan aset daerah."
    ],
    techStack: ["Vue.js", "TypeScript", "Tailwind CSS", "Docker", "Postman", "Laravel"]
  },
  {
    id: "rsud-jati-padang",
    role: "Web & API Developer",
    company: "RSUD Jati Padang",
    location: "Jakarta, Indonesia",
    period: "Proyek SIMRS",
    description: "Mengembangkan sistem informasi kepegawaian dan integrasi data internal rumah sakit.",
    achievements: [
      "Mendesain dan membangun aplikasi kepegawaian menggunakan PHP dan Bootstrap.",
      "Mengimplementasikan database MySQL yang efisien untuk penyimpanan data medis dan staf.",
      "Menggunakan Docker untuk eksposur public URL testing API saat fase verifikasi."
    ],
    techStack: ["PHP", "Bootstrap", "MySQL", "Docker", "Postman"]
  },
  {
    id: "rs-jantung",
    role: "Backend & Web Developer",
    company: "RS Jantung Jakarta",
    location: "Jakarta, Indonesia",
    period: "Proyek Sistem Kesehatan",
    description: "Mengembangkan website resmi rumah sakit, integrasi API WhatsApp, dan API aplikasi mobile reservasi dokter.",
    achievements: [
      "Membangun website utama rumah sakit menggunakan Laravel dan Bootstrap.",
      "Mengimplementasikan integrasi WhatsApp API untuk notifikasi otomatis kepada pasien.",
      "Mengembangkan REST API reservasi dokter untuk dikonsumsi oleh aplikasi mobile iOS/Android."
    ],
    techStack: ["Laravel", "PHP", "MySQL", "WhatsApp API", "Bootstrap"]
  },
  {
    id: "qdc-tech",
    role: "Software Developer",
    company: "QDC Technologies",
    location: "Indonesia",
    period: "Proyek ERP Enterprise",
    description: "Membangun aplikasi web dan modul-modul sistem Enterprise Resource Planning (ERP).",
    achievements: [
      "Mengembangkan aplikasi web berbantuan Laravel & Bootstrap.",
      "Mengimplementasikan REST API untuk modul-modul ERP yang saling terhubung.",
      "Optimasi kueri dan struktur database MySQL."
    ],
    techStack: ["Laravel", "PHP", "Bootstrap", "MySQL", "REST API"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Go / Golang", level: 85, icon: "devicon-go-plain colored", highlight: true },
      { name: "JavaScript", level: 95, icon: "devicon-javascript-plain colored", highlight: true },
      { name: "TypeScript", level: 90, icon: "devicon-typescript-plain colored", highlight: true },
      { name: "PHP", level: 92, icon: "devicon-php-plain colored", highlight: true },
      { name: "Java", level: 80, icon: "devicon-java-plain colored" },
      { name: "HTML5 & CSS3", level: 95, icon: "devicon-html5-plain colored" }
    ]
  },
  {
    title: "Frontend Frameworks",
    icon: "layout",
    skills: [
      { name: "Vue.js (Vue 2 & 3)", level: 95, icon: "devicon-vuejs-plain colored", highlight: true },
      { name: "Tailwind CSS", level: 92, icon: "devicon-tailwindcss-original colored", highlight: true },
      { name: "Bootstrap", level: 90, icon: "devicon-bootstrap-plain colored" },
      { name: "Astro", level: 88, icon: "devicon-astro-plain colored", highlight: true },
      { name: "SPA Architecture", level: 92, icon: "devicon-chrome-plain colored" }
    ]
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "Golang", level: 85, icon: "devicon-go-plain colored", highlight: true },
      { name: "Laravel", level: 92, icon: "devicon-laravel-original colored", highlight: true },
      { name: "Node.js", level: 88, icon: "devicon-nodejs-plain colored", highlight: true },
      { name: "RESTful API Design", level: 95, icon: "devicon-fastapi-plain colored", highlight: true },
      { name: "WhatsApp API", level: 85, icon: "devicon-whatsapp-plain colored" },
      { name: "Postman Documentation", level: 92, icon: "devicon-postman-plain colored" }
    ]
  },
  {
    title: "Databases & DevOps",
    icon: "database",
    skills: [
      { name: "MySQL", level: 92, icon: "devicon-mysql-plain colored", highlight: true },
      { name: "PostgreSQL", level: 85, icon: "devicon-postgresql-plain colored" },
      { name: "SQL Server", level: 82, icon: "devicon-microsoftsqlserver-plain colored" },
      { name: "MongoDB", level: 80, icon: "devicon-mongodb-plain colored" },
      { name: "Docker", level: 88, icon: "devicon-docker-plain colored", highlight: true }
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: "meta-frontend-developer",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    platform: "Coursera",
    issueDate: "30 Agustus 2024",
    credentialId: "AU48N1KCWL5V",
    credentialUrl: "https://coursera.org/verify/professional-cert/AU48N1KCWL5V",
    pdfUrl: "/certificates/meta-frontend-developer.pdf",
    category: "frontend",
    categoryLabel: "Frontend Engineering",
    description: "Program sertifikasi profesional 9-kursus resmi dari Meta yang membekali keahlian mendalam dalam React.js, JavaScript modern, HTML5/CSS3, UX/UI Design, Version Control (Git/GitHub), serta kesiapan wawancara koding.",
    courses: [
      "Introduction to Front-End Development",
      "Programming with JavaScript",
      "Version Control (Git & GitHub)",
      "HTML and CSS in depth",
      "React Basics",
      "Advanced React",
      "Principles of UX/UI Design",
      "Front-End Developer Capstone Project",
      "Coding Interview Preparation"
    ],
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Git & GitHub", "UX/UI Design", "Frontend Architecture"],
    featured: true,
    logo: "meta"
  }
];

