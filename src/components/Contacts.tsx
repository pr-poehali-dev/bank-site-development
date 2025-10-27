import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const offices = [
    {
      city: 'Москва',
      address: 'ул. Тверская, д. 12, стр. 1',
      hours: 'Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00',
      phone: '+7 (495) 123-45-67'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский проспект, д. 24',
      hours: 'Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00',
      phone: '+7 (812) 234-56-78'
    },
    {
      city: 'Новосибирск',
      address: 'Красный проспект, д. 35',
      hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-17:00',
      phone: '+7 (383) 345-67-89'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Card className="bg-secondary">
              <CardContent className="pt-8 pb-8">
                <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Горячая линия</h3>
                <p className="text-2xl font-semibold mb-1">8 800 555-00-00</p>
                <p className="text-sm text-muted-foreground">Бесплатно по России 24/7</p>
              </CardContent>
            </Card>

            <Card className="bg-secondary">
              <CardContent className="pt-8 pb-8">
                <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-xl font-semibold mb-1">support@t-bank.ru</p>
                <p className="text-sm text-muted-foreground">Ответ в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="bg-secondary">
              <CardContent className="pt-8 pb-8">
                <Icon name="MessageCircle" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Онлайн-чат</h3>
                <p className="text-xl font-semibold mb-1">В приложении</p>
                <p className="text-sm text-muted-foreground">Ответ за 1 минуту 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Наши офисы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Icon name="MapPin" size={24} className="mr-3 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">{office.city}</h4>
                      <p className="text-muted-foreground mb-3">{office.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <Icon name="Clock" size={20} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{office.hours}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="Phone" size={20} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{office.phone}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-primary to-yellow-400 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-lg mb-6 opacity-90">
            Наша служба поддержки работает круглосуточно и готова помочь вам в любое время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:88005550000"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </a>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
