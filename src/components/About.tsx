import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { value: '15+ млн', label: 'Клиентов' },
    { value: '2006', label: 'Год основания' },
    { value: '500+', label: 'Офисов по России' },
    { value: 'Top-3', label: 'Среди банков РФ' }
  ];

  const values = [
    {
      icon: 'Users',
      title: 'Клиентоориентированность',
      description: 'Мы создаём продукты, которые решают реальные задачи людей'
    },
    {
      icon: 'Zap',
      title: 'Инновации',
      description: 'Используем передовые технологии для удобства клиентов'
    },
    {
      icon: 'Heart',
      title: 'Простота',
      description: 'Делаем банковские услуги понятными и доступными каждому'
    },
    {
      icon: 'Award',
      title: 'Надёжность',
      description: 'Обеспечиваем безопасность средств и данных клиентов'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">О банке</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            T-Bank — один из крупнейших цифровых банков в России, создающий удобные финансовые сервисы для миллионов людей
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">Наша миссия</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Мы стремимся сделать финансовые услуги простыми, доступными и понятными для каждого человека. 
              Используя современные технологии, мы создаём продукты, которые помогают людям управлять своими деньгами 
              эффективно и без лишних сложностей.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наши ценности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
