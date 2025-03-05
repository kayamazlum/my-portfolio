const ProjectsData = [
  {
    id: '1',
    title: 'Hava Durumu Uygulaması',
    summary: 'İstenilen şehirdeki anlık hava durumunu bir api üzerinden öğrenebileceğimiz bir uygulama.',
    content:
      'Bu uygulamada aratılan şehrin anlık hava durumunu görüntüleyebiliyoruz. Bir api yardımı ile veri çekiyoruz.',
    imageUrl: '/projects/weather.png',
    tec: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/kayamazlum/weather-app',
    siteUrl: '',
  },
  {
    id: '2',
    title: 'Online Film Platformu',
    summary: 'İstenilen filmi anlık bir api üzerinden bulabileceğimiz bir uygulama.',
    content:
      'Bu uygulamada aratılan filmi anında görüntüleyebiliyoruz. Film hakkındaki detayları da detaylar sayfasında görüntüleyebiliyoruz. Bir api yardımı ile veri çekiyoruz.',
    imageUrl: '/projects/movie-app.png',
    tec: ['ReactJS', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/kayamazlum/movie-app',
    siteUrl: '',
  },
  {
    id: '3',
    title: 'Netflix',
    summary: 'Bu projede Netflix sitesini klonladım.',
    content:
      'Bu projede, kullanıcıların Google hesabı, GitHub hesabı ya da e-posta ile kayıt olarak giriş yapabilecekleri bir platform geliştirdim. Kullanıcılar giriş yaptıktan sonra istedikleri filmin detaylarına ulaşabiliyor, favori filmlerini listelerine ekleyip çıkarabiliyorlar. Ayrıca, hesaplarından güvenli bir şekilde çıkış yapma imkanı sunuyorum. Kullanıcı kayıt işlemleri ve veri yönetimi için MongoDB kullandım.',
    imageUrl: '/projects/netflix.png',
    tec: ['ReactJS', 'MongoDB', 'TypeScript', 'Prisma', 'TailwindCSS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/kayamazlum/netflix-clone',
    siteUrl: '',
  },
  {
    id: '4',
    title: 'Todo App',
    summary: 'Bu projede full stack bir Todo uygulaması yaptım',
    content:
      'Bu projede, CRUD işlemlerini içeren bir full-stack Todo uygulaması geliştirdim. Uygulama, kullanıcıların görev ekleme, silme, güncelleme ve listeleme işlemlerini gerçekleştirmesine olanak tanır. Ayrıca, seçilen bir görevin detaylarını görüntüleyebilme özelliğine sahiptir.',
    imageUrl: '/projects/todo-app.png',
    tec: ['NextJS', 'NodeJS', 'MongoDB', 'TailwindCSS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/kayamazlum/Todo-App',
    siteUrl: '',
  },
  {
    id: '5',
    title: 'Portfolio Admin',
    summary: 'Bu projede portfolyo sitem için bir backend ve admin paneli yaptım.',
    content:
      'Bu projede, mevcutta var olan portfolyo sitem için Next js ile bir admin paneli, Node js ile de bir backend yazdım. Veritabanı olarak MongoDB kullandım. Admin paneline giriş yapmak kullanıcı adı ve şifre adımından geçiyoruz. Bu adımdan sonra sitemizdeki projelerimiz, hero kısmı ve about kısmı için CRUD (güncelleme, silme, ekleme, listeleme) işlemleri yapabiliyoruz. Son olarak giriş yaptığımız hesaptan çıkış yapma seçeneği de sundum.',
    imageUrl: '/projects/admin.png',
    tec: ['NextJS', 'NodeJS', 'MongoDB', 'TailwindCSS', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/kayamazlum/my-portfolio-admin , https://github.com/kayamazlum/my-portfolio-backend',
    siteUrl: '',
  },
  {
    id: '6',
    title: 'Travel App',
    summary: 'Bu projede bir seyahat sitesi demosunu yaptım.',
    content:
      'Bu projede, bir responsive seyahat sitesi geliştirdim. Bu projede slider için react-multi-carousel, efektler için de AOS kütüphanelerini kullandım. Projeyi tek sayfadan oluşan bir demo gibi düşünebiliriz.',
    imageUrl: '/projects/travelapp.png',
    tec: ['NextJS', 'TailwindCSS', 'Typescript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/kayamazlum/Travel-App',
    siteUrl: 'https://travel-app-xi-brown.vercel.app/',
  },
];

export default ProjectsData;
