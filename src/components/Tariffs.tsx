import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Tariffs = () => {
  const services = [
    {
      category: 'Переводы и платежи',
      items: [
        { name: 'Переводы между своими счетами', price: 'Бесплатно' },
        { name: 'Переводы по номеру телефона', price: 'Бесплатно' },
        { name: 'Переводы в другие банки', price: '0-1%' },
        { name: 'Платежи за услуги', price: 'Бесплатно' }
      ]
    },
    {
      category: 'Снятие наличных',
      items: [
        { name: 'В банкоматах T-Bank', price: 'Бесплатно' },
        { name: 'В банкоматах других банков', price: 'Бесплатно' },
        { name: 'В кассах других банков', price: '1% (мин. 200 ₽)' }
      ]
    },
    {
      category: 'Обслуживание карт',
      items: [
        { name: 'Выпуск дебетовой карты', price: 'Бесплатно' },
        { name: 'Годовое обслуживание', price: 'Бесплатно' },
        { name: 'Перевыпуск карты', price: 'Бесплатно' },
        { name: 'SMS-уведомления', price: 'Бесплатно' }
      ]
    },
    {
      category: 'Кредиты',
      items: [
        { name: 'Рассмотрение заявки', price: 'Бесплатно' },
        { name: 'Досрочное погашение', price: 'Бесплатно' },
        { name: 'Изменение графика платежей', price: 'Бесплатно' },
        { name: 'Выдача справок', price: 'Бесплатно' }
      ]
    },
    {
      category: 'Счета и вклады',
      items: [
        { name: 'Открытие счёта', price: 'Бесплатно' },
        { name: 'Ведение счёта', price: 'Бесплатно' },
        { name: 'Открытие вклада', price: 'Бесплатно' },
        { name: 'Досрочное закрытие вклада', price: 'Бесплатно' }
      ]
    },
    {
      category: 'Дополнительные услуги',
      items: [
        { name: 'Онлайн-банк и мобильное приложение', price: 'Бесплатно' },
        { name: 'Техподдержка 24/7', price: 'Бесплатно' },
        { name: 'Push-уведомления', price: 'Бесплатно' },
        { name: 'Выписки по счетам', price: 'Бесплатно' }
      ]
    }
  ];

  return (
    <section id="tariffs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачные условия без скрытых комиссий
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-primary to-yellow-400 rounded-3xl p-8 md:p-12 text-center">
            <Icon name="Sparkles" size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Большинство услуг — бесплатно!</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Мы не берём плату за стандартные операции. Вы платите только за специфические услуги, 
              которыми пользуетесь редко.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-start text-sm">
                      <span className="text-muted-foreground flex-1">{item.name}</span>
                      <span className="font-semibold ml-2 whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-secondary">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Важная информация</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Тарифы действительны для физических лиц — резидентов РФ</li>
                    <li>• Условия могут меняться, актуальные тарифы всегда доступны в приложении</li>
                    <li>• Для юридических лиц действуют отдельные тарифные планы</li>
                    <li>• При снятии наличных в банкоматах других банков комиссия не взимается при любой сумме</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
