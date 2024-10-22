const ProjectsData = [
  {
    id: '1',
    title: 'Customer App',
    summary: 'Kullanıcı ekleyip çıkarabileceğimiz bir uygulama',
    content:
      'Bu uygulamada kullanıcı ekleyip silebiliyoruz. Fotoğraflar da kullandığım bir link üzerinden rastgele geliyor. Öğrenme sürecinde geliştirdiğim basit bir uygulama.',
    imageUrl: '/projects/customer.png',
    tec: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: '2',
    title: 'Product App',
    summary: 'Ürün ekleyip çıkarabildiğimiz, counter ile fiyat değiştirebileceğimiz bir uygulama',
    content:
      'Bu uygulamada ürün ekleyip çıkarabiliyoruz. Ürünün fiyatını counter sayesinde değiştirebiliyoruz. Ekleme yapmak istemiyorsak "vazgeç" butonuna bastığımızda yukardaki Ekle kısmı kapanıyor. Öğrenme sürecimde geliştirdiğim basit uygulamalardan bir tanesi.',
    imageUrl: '/projects/react-app.png',
    tec: ['React JS', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: '3',
    title: 'Weather App',
    summary: 'İstenilen şehirdeki anlık hava durumunu bir api üzerinden öğrenebileceğimiz bir uygulama.',
    content:
      'Bu uygulamada aratılan şehrin anlık hava durumunu görüntüleyebiliyoruz. Bir api yardımı ile veri çekiyoruz.',
    imageUrl: '/projects/weather.png',
    tec: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: '4',
    title: 'Movie App',
    summary: 'İstenilen filmi anlık bir api üzerinden bulabileceğimiz bir uygulama.',
    content:
      'Bu uygulamada aratılan filmi anında görüntüleyebiliyoruz. Film hakkındaki detayları da detaylar sayfasında görüntüleyebiliyoruz. Bir api yardımı ile veri çekiyoruz.',
    imageUrl: '/projects/movie-app.png',
    tec: ['ReactJS', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS'],
  },
  {
    id: '5',
    title: 'Netflix Clone',
    summary: 'Bu projede Netflix sitesini klonladım.',
    content:
      'Bu uygulamada öncelikle giriş yapmamız gerekiyor. Burada google hesabı, github hesabı veya normal kayıt olabileceğimiz üç seçenek mevcut. Giriş yaptıktan sonra istedğimiz herhangi bir film hakkındaki detaylara ulaşabiliyor, kendi favori film listemize ekleme / çıkarma işlemleri yapabiliyoruz. İstediğimiz zaman da hesabımızdan çıkış yapabiliyoruz. Kullanıcı kayıtları için MongoDB kullandım.',
    imageUrl: '/projects/netflix.png',
    tec: ['ReactJS', 'MongoDB', 'TypeScript', 'Prisma', 'TailwindCSS', 'HTML', 'CSS'],
  },
];

export default ProjectsData;
