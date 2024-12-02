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
];

export default ProjectsData;
