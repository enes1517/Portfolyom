// ===== EMBEDDED PROJECTS DATA FOR MODAL =====
const projectsData = {
    "rentflow": {
        "name": "RentFlow — Dağıtık Kira Yönetim Sistemi",
        "badge": "Enterprise Mikroservis",
        "url": "https://github.com/enes1517/RentFlow_Microservice_Project",
        "desc": ".NET 10 ve Angular 22 ile geliştirilmiş akıllı ve dağıtık kira yönetim ekosistemi. Keycloak 24.0 (OAuth2/OIDC) merkezi kimlik doğrulama, RabbitMQ asenkron mesajlaşma, API Gateway ve Docker Compose multi-container orkestrasyonu içerir.",
        "tags": [".NET 10", "Angular 22", "Microservices", "RabbitMQ", "Docker Compose", "Keycloak 24", "Clean Architecture", "PostgreSQL"],
        "highlights": [
            ".NET 10 ve Angular 22 ile tam dağıtık mikroservis mimarisi",
            "Keycloak 24.0 ile OAuth2 & OpenID Connect merkezi kimlik ve token yönetimi",
            "RabbitMQ ile event-driven servisler arası asenkron kuyruk iletişimi",
            "Docker Compose ile tek komutla ayağa kaldırılabilen multi-container ortamı",
            "Clean Architecture ve Domain-Driven Design (DDD) prensipleri"
        ]
    },
    "urban-news": {
        "name": "Kentsel Haber İzleme Sistemi (Urban News)",
        "badge": "Event-Driven & AI",
        "url": "https://github.com/enes1517/Urban_News_Monitoring_Project",
        "desc": "Kocaeli yerel haber sitelerini gerçek zamanlı kazıyan (scraping), ML.NET 3.0 (TF-IDF + SdcaMaximumEntropy) ile kentsel olayları sınıflandıran, Cosine Similarity ile kopya haberleri engelleyen ve Google Maps üzerinde konumlandıran mikroservis platformu.",
        "tags": [".NET 10", "MassTransit", "RabbitMQ", "ML.NET 3.0", "MongoDB", "Google Maps API", "NLP"],
        "highlights": [
            "RabbitMQ ve MassTransit ile olay güdümlü (event-driven) mikroservis ekosistemi",
            "ML.NET 3.0 hibrit NLP sınıflandırma hattı (TF-IDF + SdcaMaximumEntropy)",
            "URL normalizasyonu ve Cosine Similarity ile 3 katmanlı kopya haber engelleme",
            "MongoDB üzerinde çoklu kaynak raporlama ve Google Maps koordinat görselleştirme",
            "Arka plan Worker servisleri ile kesintisiz veri toplama"
        ]
    },
    "social-library": {
        "name": "Web Tabanlı Sosyal Kütüphane Platformu",
        "badge": "Full-Stack SPA",
        "url": "https://github.com/enes1517/Social_Library_.Net_React",
        "desc": "Kitap ve film tutkunlarını bir araya getiren sosyal katalog ve keşif platformu. ASP.NET Web API backend, N-Tier mimari, Entity Framework Core, kriptografik JWT kimlik doğrulama ve modern React tek sayfa (SPA) arayüzü.",
        "tags": ["ASP.NET API", "React", "Entity Framework", "N-Tier", "JWT Auth", "SQL Server"],
        "highlights": [
            "N-Tier Architecture ile temiz katman ayrımı (API, BLL, DAL)",
            "Kriptografik parola hashleme ve güvenli JWT Authentication/Authorization",
            "Entity Framework Core ile optimize edilmiş ilişkisel veritabanı sorguları",
            "Kullanıcı kitap & film listeleri, yorum ve etkileşim sistemi",
            "Modern, hızlı ve responsive React frontend arayüzü"
        ]
    },
    "trtek-ideapool": {
        "name": "TrTek Fikir Havuzu (Idea Pool)",
        "badge": "Kurumsal Staj Projesi",
        "url": "https://github.com/enes1517/TRtek-Ideapool",
        "desc": "TRtek stajında geliştirilen kurumsal inovasyon platformu. Şirket çalışanlarının web ve mobil üzerinden fikir önerip oylayabildiği cross-platform Flutter/Dart uygulaması ve N-Tier ASP.NET Core Web API backend altyapısı.",
        "tags": ["Flutter", "Dart", "ASP.NET Core Web API", "PostgreSQL", "Docker", "JWT RBAC", "Unit of Work"],
        "highlights": [
            "Çapraz platform (iOS, Android, Web) Flutter & Dart kullanıcı deneyimi",
            "N-Tier Architecture, Repository ve Unit of Work tasarım desenleri",
            "AutoMapper nesne eşleme ve Role-Based Access Control (RBAC)",
            "Multi-container ortamı (API, Client, PostgreSQL) Docker orkestrasyonu",
            "Gerçek kurumsal ortamda canlı kullanılan inovasyon süreci yönetimi"
        ]
    },
    "aihach": {
        "name": "AiHach — AI & NLP Destekli Akıllı Ürün Öneri Motoru",
        "badge": "Yapay Zeka & LLM",
        "url": "https://github.com/enes1517/AiHach",
        "desc": "Doğal Dil İşleme (NLP) ve LLM mantık zincirleri ile serbest metin girdilerini analiz edip Trendyol üzerinden en uygun ürünleri eşleştiren ve öneren akıllı sistem.",
        "tags": ["Gemini AI", "LangChain", "LangGraph", "ASP.NET MVC", "Selenium", "NLP"],
        "highlights": [
            "Gemini AI ile doğal dil isteklerinin anlamsal (semantic) çözümlenmesi",
            "LangChain & LangGraph ile dinamik karar ağacı ve akış yönetimi",
            "Selenium ile e-ticaret sitelerinden dinamik veri kazıma (scraping)",
            "Kullanıcı dostu filtreleme ve ASP.NET MVC arayüz entegrasyonu",
            "Geleneksel anahtar kelime araması yerine anlamsal filtreleme mimarisi"
        ]
    },
    "car-body-classifier": {
        "name": "Araç Gövde Tipi Sınıflandırma (AI / Vision)",
        "badge": "Computer Vision",
        "url": "https://github.com/enes1517/car_body_type_classifier",
        "desc": "Görüntü işleme ve derin öğrenme teknikleri kullanılarak araçların gövde tiplerini (Sedan, SUV, Hatchback vb.) yüksek doğrulukla sınıflandıran uçtan uca yapay zeka sistemi. FastAPI REST API ve ASP.NET Core entegrasyonu.",
        "tags": ["Deep Learning", "Computer Vision", "FastAPI", "ASP.NET Core", "Python", "CNN"],
        "highlights": [
            "Evrişimli Sinir Ağları (CNN) ile model eğitimi ve ağırlık optimizasyonu",
            "FastAPI ile yüksek performanslı çıkarım (inference) REST servisi",
            "ASP.NET Core ve modern web ön yüzü ile uçtan uca sistem entegrasyonu",
            "Görüntü ön işleme, veri artırma (augmentation) ve doğrulama metrikleri",
            "Gerçek zamanlı araç tipi tespiti ve sınıf güvenilirlik skoru üretimi"
        ]
    },
    "trtek-mailapp": {
        "name": "MailApp — Kurumsal Toplu E-Posta Yönetimi",
        "badge": "Kurumsal Çözüm",
        "url": "https://github.com/enes1517/TRtek-MailApp",
        "desc": "ASP.NET Core 8 MVC mimarisi ile geliştirilmiş, kullanıcıların abone listelerini yönetebileceği, HTML tabanlı özel e-posta şablonları tasarlayabileceği ve arka planda toplu e-posta gönderimleri yapabileceği yönetim paneli.",
        "tags": ["ASP.NET Core 8", "MVC", "Email Engine", "HTML Templates", "C#"],
        "highlights": [
            "Dinamik abone listesi ve alıcı grupları yönetimi",
            "Özel HTML e-posta şablon motoru ve dinamik değişken bağlama",
            "Arka plan asenkron gönderim kuyrukları"
        ]
    },
    "microservice-project": {
        "name": "Microservices Architecture Demo",
        "badge": "Mikroservis",
        "url": "https://github.com/enes1517/Microservice_Project",
        "desc": ".NET 10 ve Angular 18 ile geliştirilmiş; Ocelot API Gateway, Orchestrator Pattern, Refit type-safe REST istemcisi ve Clean Architecture prensiplerini uygulayan mikroservis mimari referans projesi.",
        "tags": [".NET 10", "Ocelot Gateway", "Refit", "Clean Architecture", "Angular 18"],
        "highlights": [
            "Ocelot API Gateway ile merkezi istek rotalama ve yük dengeleme",
            "Refit ile type-safe deklaratif RESTful mikroservis iletişimi",
            "Orchestrator Pattern ile karmaşık iş süreçlerinin koordinasyonu"
        ]
    },
    "diabetes-system": {
        "name": "Diyabet Takip ve Yönetim Sistemi",
        "badge": "Sağlık Bilişimi",
        "url": "https://github.com/enes1517/Diabetes-System-Mvc",
        "desc": "Diyabet hastalarının kan şekeri ölçümlerini, ilaç saatlerini ve doktor takip süreçlerini yöneten tam kapsamlı ASP.NET MVC sağlık sistemi. Hasta yönetimi, ölçüm grafikleri ve doktor onay modülü.",
        "tags": ["ASP.NET MVC", "C#", "Healthcare", "Hasta Yönetimi", "SQL Server"],
        "highlights": [
            "Hasta ve doktor panelleri ayrımı",
            "Kan şekeri ölçüm verilerinin analizi ve grafiksel takibi",
            "Otomatik ilaç ve muayene hatırlatma mekanizmaları"
        ]
    },
    "dynamic-exam": {
        "name": "Dinamik Sınav Takvimi & Oturma Planı",
        "badge": "Optimizasyon",
        "url": "https://github.com/enes1517/Dynamic_Exam_Schedule_Creation_System",
        "desc": "Üniversite sınav takvimlerini ve öğrenci oturma planlarını çakışmasız biçimde optimize eden masaüstü yazılımı. PyQt5 GUI, SQLite3, Pandas Excel entegrasyonu ve ReportLab PDF döküm motoru.",
        "tags": ["Python", "PyQt5", "SQLite3", "Pandas", "Optimizasyon", "ReportLab PDF"],
        "highlights": [
            "Excel ders ve öğrenci listelerinden otomatik veri çekimi",
            "Çakışmasız sınav tarihi ve salon oturma planı optimizasyonu",
            "ReportLab ile resmi sınav listelerinin otomatik PDF dökümü"
        ]
    },
    "word-crush": {
        "name": "Word Crush — Akıllı Kelime Oyunu",
        "badge": "Oyun Motoru",
        "url": "https://github.com/enes1517/Word_Crush_Project",
        "desc": "C# .NET Core oyun motoru mantığı ile geliştirilmiş; yerçekimi simülasyonu, kombo algoritmaları, market mekanikleri ve akıllı kelime sözlüğü içeren bulmaca oyunu.",
        "tags": ["C# .NET Core", "JavaScript", "Game Engine", "Physics", "HTML5"],
        "highlights": [
            "C# ile yazılmış oyun mantığı ve kural motoru",
            "Yerçekimi, blok kayma ve kombo zincirleme simülasyonu",
            "Market, skor tablosu ve güçlendirme mekanikleri"
        ]
    },
    "war-simulation": {
        "name": "Savaş Simülasyonu (OpenGL & GLUT)",
        "badge": "Sistem & Grafik",
        "url": "https://github.com/enes1517/War-Simulation-Project",
        "desc": "C diliyle geliştirilen; İnsanlar ve Orklar arasındaki taktiksel savaş senaryolarını uzaktan cURL ile çekip hesaplayan ve OpenGL (GLUT) ile görselleştiren gerçek zamanlı savaş simülasyonu.",
        "tags": ["C Language", "OpenGL GLUT", "cURL", "Memory Management", "Simülasyon"],
        "highlights": [
            "Uzak üniversite sunucularından cURL ile dinamik senaryo verisi indirme",
            "Pointer tabanlı dinamik bellek yönetimi ve veri yapıları",
            "OpenGL GLUT ile 2D/3D savaş alanının anlık görselleştirilmesi"
        ]
    },
    "route-planning": {
        "name": "Ulaşım Rota Planlama Sistemi",
        "badge": "Graf Teorisi",
        "url": "https://github.com/enes1517/Ulasim-Rota-Planlama-Sistemi",
        "desc": "Toplu taşıma ve lojistik durakları arasındaki en kısa ve en az aktarmalı yolları hesaplayan C# Windows Forms optimizasyon yazılımı. Dijkstra algoritması ve dinamik graf çizimi.",
        "tags": ["C#", "Dijkstra Algoritması", "Graf Teorisi", "Windows Forms", "Lojistik"],
        "highlights": [
            "Dijkstra en kısa yol algoritması implementasyonu",
            "İnteraktif durak seçimi ve aktarma optimizasyonu",
            "Graf görselleştirme ve rota mesafe hesaplama paneli"
        ]
    },
    "management-system": {
        "name": "Proje ve Öğrenci Yönetim Sistemi",
        "badge": "Full-Stack SPA",
        "url": "https://github.com/enes1517/Management_System-Asp.net.api-react",
        "desc": "Öğrencilerin bitirme ve araştırma projelerine başvurmasını, danışmanların ise başvuruları değerlendirmesini sağlayan ASP.NET Core Web API backend ve React frontend sistemi.",
        "tags": ["ASP.NET API", "React", "N-Tier", "Entity Framework", "Role Auth"],
        "highlights": [
            "Rol tabanlı yetkilendirme (Öğrenci / Akademisyen / Yönetici)",
            "Proje başvuru, revizyon ve onay iş akışları",
            "Modern ve akıcı React tek sayfa (SPA) arayüzü"
        ]
    },
    "store-app": {
        "name": "E-Ticaret Mağaza Uygulaması",
        "badge": "E-Ticaret",
        "url": "https://github.com/enes1517/Store_App-Mvc",
        "desc": "ASP.NET Core MVC mimarisiyle geliştirilmiş tam teşekküllü mağaza sistemi. Ürün kataloğu, sepet yönetimi, kullanıcı sipariş döngüsü ve admin CRUD paneli.",
        "tags": ["ASP.NET Core MVC", "C#", "E-Commerce", "Entity Framework", "Razor"],
        "highlights": [
            "Kategori bazlı filtreleme ve ürün detay sayfaları",
            "Oturum bazlı sepet yönetimi ve sipariş tamamlama adımları",
            "Admin için ürün, stok ve sipariş yönetim paneli"
        ]
    },
    "library-tracking": {
        "name": "Kütüphane Takip Sistemi",
        "badge": "Masaüstü Veritabanı",
        "url": "https://github.com/enes1517/Library-Tracking-System",
        "desc": "Kitap envanteri, üye kayıtları, ödünç alma/iade süreleri ve ceza takibi işlemlerini gerçekleştiren C# Windows Forms masaüstü yönetim yazılımı.",
        "tags": ["C#", "WinForms", "SQL Server", "CRUD", "Envanter"],
        "highlights": [
            "İlişkisel veritabanı CRUD operasyonları",
            "Ödünç alma sürelerinin otomatik takibi ve ceza hesaplama",
            "Kullanıcı dostu arama ve filtreleme ızgarası"
        ]
    },
    "phone-directory-cs": {
        "name": "Telefon Rehberi CRUD (Windows Forms)",
        "badge": "EF Core Desktop",
        "url": "https://github.com/enes1517/Phone_Directory_Project",
        "desc": "C# Windows Forms ve Entity Framework Core kullanılarak geliştirilmiş; anlık arama, rehber kişileri yönetimi ve ilişkisel veri tabanı CRUD operasyonları.",
        "tags": ["C#", "Entity Framework", "WinForms", "CRUD", "Search Engine"],
        "highlights": [
            "Entity Framework Core Code-First / Db-First veri erişimi",
            "Tuşa basıldıkça tetiklenen anlık rehber arama mekanizması",
            "Modern arayüz ve veri doğrulama kuralları"
        ]
    },
    "phone-directory-c": {
        "name": "Telefon Rehberi (C Dili & Bellek)",
        "badge": "Düşük Seviye C",
        "url": "https://github.com/enes1517/Phone_Directory",
        "desc": "C dilinde dinamik bellek tahsisi (malloc/free), çift yönlü bağlı listeler ve dosya I/O operasyonları ile geliştirilmiş yüksek performanslı rehber uygulaması.",
        "tags": ["C Language", "Pointers", "Dynamic Memory", "File I/O", "Bağlı Liste"],
        "highlights": [
            "Pointer aritmetiği ve manuel bellek yönetimi",
            "Dosya tabanlı kalıcılık (serialization / deserialization)",
            "Çift yönlü bağlı liste (doubly linked list) veri yapısı"
        ]
    },
    "graph-project": {
        "name": "Graf Veri Yapıları ve Algoritmaları",
        "badge": "Veri Yapıları",
        "url": "https://github.com/enes1517/graph_project",
        "desc": "C# ile nesne yönelimli olarak geliştirilen graf veri yapısı kütüphanesi. Derinlik öncelikli (DFS) ve genişlik öncelikli (BFS) arama algoritmaları.",
        "tags": ["C#", "Graph Data Structure", "BFS", "DFS", "Algoritmalar"],
        "highlights": [
            "Adjacency list & matrix graf modelleri",
            "Breadth-First Search (BFS) ve Depth-First Search (DFS) algoritmaları",
            "Döngü tespiti ve en kısa yol hesaplamaları"
        ]
    },
    "card-game": {
        "name": "Strateji Kart Oyunu",
        "badge": "Oyun Mantığı",
        "url": "https://github.com/enes1517/Card_Game",
        "desc": "Nesne Yönelimli Programlama (OOP) prensipleri, durum makineleri ve oyun kuralları motoru içeren C# kart strateji oyunu.",
        "tags": ["C#", "OOP", "Game Loop", "Tasarım Desenleri", "State Machine"],
        "highlights": [
            "Kapsamlı nesne yönelimli kart ve deste sınıfları",
            "Tur tabanlı oyun döngüsü ve kurallar motoru",
            "Yapay zeka bot hamle karar mekanizması"
        ]
    },
    "web-mvc-book": {
        "name": "Web MVC Kitap Kataloğu ve İnceleme",
        "badge": "MVC Web",
        "url": "https://github.com/enes1517/Web-Mvc-Book",
        "desc": "Kitap kataloğu, yazar sayfaları, kullanıcı yorumları ve puanlama mekanizmalarını barındıran ASP.NET MVC web uygulaması.",
        "tags": ["ASP.NET MVC", "C#", "HTML/CSS", "Razor", "CRUD"],
        "highlights": [
            "ASP.NET MVC Controller, Model ve Razor View mimarisi",
            "Kitap inceleme, yıldızlama ve kullanıcı yorum sistemi",
            "Responsive Bootstrap / HTML5 arayüzü"
        ]
    },
    "mvc-api": {
        "name": "MVC & RESTful API Entegrasyonu",
        "badge": "Servis Katmanı",
        "url": "https://github.com/enes1517/Mvc-Api",
        "desc": "Modern ASP.NET Core üzerinde MVC ön yüzü ile RESTful Web API servislerinin entegrasyonunu, repository modelini ve HttpClient veri tüketimini modelleyen proje.",
        "tags": ["C#", "ASP.NET Core", "RESTful API", "HttpClient", "Repository Pattern"],
        "highlights": [
            "HttpClientFactory ile asenkron API tüketimi",
            "Repository Pattern ve servis katmanı soyutlaması",
            "Hata yakalama (error handling) ve DTO eşleme yapıları"
        ]
    },
    "active-record-demo": {
        "name": "Active Record ORM Pattern Mimarisi",
        "badge": "Tasarım Deseni",
        "url": "https://github.com/enes1517/ActiveRecordDemo",
        "desc": "Kurumsal mimarilerde kullanılan Active Record tasarım deseninin implementasyonu; veri erişim mantığı ile iş nesnelerinin birleşimi üzerine eğitici mimari çalışma.",
        "tags": ["Design Pattern", "Active Record", "Software Architecture", "ORM"],
        "highlights": [
            "Active Record tasarım deseni ilkelerinin C# implementasyonu",
            "İş mantığı ve veri kalıcılığının aynı sınıfta kapsüllenmesi",
            "Mimari desenlerin karşılaştırmalı analizi"
        ]
    },
    "portfolyom": {
        "name": "Kişisel Portfolyo Web Sitesi",
        "badge": "Modern UI/UX",
        "url": "https://github.com/enes1517/Portfolyom",
        "desc": "Modern cam efektleri (glassmorphism), karanlık tema, dinamik filtreleme & anlık arama motoru, etkileşimli proje modalları ve tam duyarlı tasarıma sahip kişisel portfolyo.",
        "tags": ["HTML5", "CSS3 Glassmorphism", "Vanilla JavaScript", "Responsive Design"],
        "highlights": [
            "Sıfır bağımlılık: Hızlı, modern ve saf (Vanilla) JS & CSS",
            "Canlı arama motoru, dinamik kategori filtreleme ve modal sistemi",
            "Mobil, tablet ve masaüstü için optimize edilmiş responsive tasarım"
        ]
    }
};

// ===== TYPEWRITER EFFECT =====
const roles = [
    'Software Developer',
    'Microservices Architect',
    '.NET 10 & ASP.NET Core Developer',
    'Event-Driven Systems (RabbitMQ)',
    'Full-Stack Developer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleText = document.getElementById('roleText');

function typeWriter() {
    if (!roleText) return;
    const current = roles[roleIndex];

    if (!isDeleting) {
        roleText.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2200);
            return;
        }
    } else {
        roleText.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeWriter, isDeleting ? 40 : 80);
}

setTimeout(typeWriter, 400);

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current);
    }, 16);
}

// ===== NAVBAR SCROLL & ACTIVE LINK =====
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function handleScrollNavbar() {
    if (!navbar) return;
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.id;
        if (scrollY >= top && scrollY < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', handleScrollNavbar);

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksEl = document.getElementById('navLinks');

if (mobileMenuBtn && navLinksEl) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinksEl.classList.toggle('open');
    });

    navLinksEl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksEl.classList.remove('open');
        });
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const navH = 72;
            const y = target.getBoundingClientRect().top + window.scrollY - navH;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// ===== BACK TO TOP =====
const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== PROJECT FILTER & REAL-TIME SEARCH =====
const searchInput = document.getElementById('projectSearchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const activeCountDisplay = document.getElementById('activeProjectCount');
const noResultsState = document.getElementById('noResultsState');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const allCards = document.querySelectorAll('.project-card, .featured-card');
const featuredSection = document.getElementById('featuredSection');

let currentFilter = 'all';
let searchQuery = '';

function filterProjects() {
    let visibleCount = 0;
    const query = searchQuery.trim().toLowerCase();

    allCards.forEach(card => {
        const cardCategory = card.dataset.category || '';
        const cardLang = card.dataset.lang || '';
        const cardTitle = card.querySelector('h4')?.textContent.toLowerCase() || '';
        const cardDesc = card.querySelector('p')?.textContent.toLowerCase() || '';
        const cardTags = Array.from(card.querySelectorAll('.tag, .pc-tags span'))
            .map(t => t.textContent.toLowerCase()).join(' ');

        // Category check
        let matchesCategory = false;
        if (currentFilter === 'all') {
            matchesCategory = true;
        } else if (currentFilter === 'microservices') {
            matchesCategory = (cardCategory === 'microservices' || cardTags.includes('microservices') || cardTags.includes('rabbitmq') || cardTags.includes('ocelot'));
        } else if (currentFilter === 'csharp') {
            matchesCategory = (cardCategory === 'csharp' || cardLang === 'csharp' || cardTags.includes('.net') || cardTags.includes('c#'));
        } else if (currentFilter === 'ai') {
            matchesCategory = (cardCategory === 'ai' || cardTags.includes('ai') || cardTags.includes('gemini') || cardTags.includes('nlp') || cardTags.includes('vision') || cardTags.includes('ml.net'));
        } else if (currentFilter === 'web') {
            matchesCategory = (cardCategory === 'web' || cardTags.includes('react') || cardTags.includes('angular') || cardTags.includes('mvc') || cardTags.includes('html'));
        } else if (currentFilter === 'mobile') {
            matchesCategory = (cardCategory === 'mobile' || cardLang === 'dart' || cardTags.includes('flutter') || cardTags.includes('game') || cardTags.includes('oyun'));
        } else if (currentFilter === 'system') {
            matchesCategory = (cardCategory === 'system' || cardCategory === 'algorithm' || cardLang === 'c' || cardLang === 'python' || cardTags.includes('dijkstra') || cardTags.includes('opengl') || cardTags.includes('graph'));
        }

        // Search text check
        let matchesSearch = true;
        if (query) {
            matchesSearch = cardTitle.includes(query) || cardDesc.includes(query) || cardTags.includes(query) || cardLang.includes(query);
        }

        if (matchesCategory && matchesSearch) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update count display
    if (activeCountDisplay) {
        activeCountDisplay.textContent = visibleCount;
    }

    // Show/hide empty state
    if (noResultsState) {
        if (visibleCount === 0) {
            noResultsState.classList.add('visible');
        } else {
            noResultsState.classList.remove('visible');
        }
    }

    // Toggle Clear button in search input
    if (searchClearBtn) {
        if (query.length > 0) {
            searchClearBtn.classList.add('visible');
        } else {
            searchClearBtn.classList.remove('visible');
        }
    }
}

// Search input events
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterProjects();
    });
}

if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        filterProjects();
        if (searchInput) searchInput.focus();
    });
}

// Filter button clicks
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter || 'all';
        filterProjects();
    });
});

if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
        currentFilter = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        filterBtns.forEach(b => b.classList.remove('active'));
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
        filterProjects();
    });
}

// ===== PROJECT DETAILS MODAL =====
const modalOverlay = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalBadge = document.getElementById('modalBadge');
const modalDesc = document.getElementById('modalDesc');
const modalHighlights = document.getElementById('modalHighlights');
const modalTags = document.getElementById('modalTags');
const modalRepoBtn = document.getElementById('modalRepoBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');

function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modalOverlay) return;

    if (modalTitle) modalTitle.textContent = data.name;
    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalDesc) modalDesc.textContent = data.desc;
    if (modalRepoBtn) modalRepoBtn.href = data.url;

    if (modalHighlights) {
        modalHighlights.innerHTML = (data.highlights || [])
            .map(h => `<li>${h}</li>`)
            .join('');
    }

    if (modalTags) {
        modalTags.innerHTML = (data.tags || [])
            .map(t => `<span class="tag">${t}</span>`)
            .join('');
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Modal triggers on cards
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-details-btn');
    if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.dataset.id;
        if (id) openProjectModal(id);
    }
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
if (modalCloseActionBtn) modalCloseActionBtn.addEventListener('click', closeProjectModal);

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeProjectModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
});

// ===== COPY EMAIL TO CLIPBOARD =====
const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyToast = document.getElementById('copyToast');

if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
        const email = 'huseyinenesipek@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            if (copyToast) {
                copyToast.classList.add('show');
                setTimeout(() => {
                    copyToast.classList.remove('show');
                }, 3000);
            }
        }).catch(err => {
            console.error('Kopyalama hatası:', err);
        });
    });
}

// ===== INTERSECTION OBSERVER FOR FADE-IN & STATS =====
let countersAnimated = false;
let barsAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Hero stats counter animation
            if (!countersAnimated && entry.target.closest('#hero')) {
                countersAnimated = true;
                document.querySelectorAll('.stat-num').forEach(el => {
                    setTimeout(() => animateCounter(el), 200);
                });
            }

            // Language distribution bars
            if (!barsAnimated && entry.target.closest('.skills-section')) {
                barsAnimated = true;
                document.querySelectorAll('.lang-bar-fill').forEach(bar => {
                    const width = bar.dataset.width;
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 250);
                });
            }
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '-30px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in, .fade-left, .fade-right, .hero-stats, .skills-section, .lang-bars').forEach(el => {
        observer.observe(el);
    });
});

// Fallback counter trigger if already in view
window.addEventListener('load', () => {
    setTimeout(() => {
        if (!countersAnimated) {
            countersAnimated = true;
            document.querySelectorAll('.stat-num').forEach(el => animateCounter(el));
        }
        if (!barsAnimated) {
            barsAnimated = true;
            document.querySelectorAll('.lang-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
        }
    }, 600);
});

console.log('%c👋 Hüseyin Enes İpek — Full-Stack & Microservices Architect', 'color: #6c63ff; font-size: 16px; font-weight: bold;');
console.log('%c24 GitHub Projesi Yüklendi | https://github.com/enes1517', 'color: #4ade80; font-size: 12px;');
