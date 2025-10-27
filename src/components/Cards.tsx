import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Cards = () => {
  const cards = [
    {
      name: 'Black',
      cashback: '30%',
      percent: '15%',
      price: '0 ₽',
      color: 'bg-gradient-to-br from-black to-gray-800',
      features: [
        'Кэшбэк до 30% в категориях',
        'До 15% на остаток',
        'Бесплатное обслуживание',
        'Premium поддержка 24/7',
        'Lounge-зоны в аэропортах'
      ],
      popular: true
    },
    {
      name: 'Platinum',
      cashback: '10%',
      percent: '10%',
      price: '0 ₽',
      color: 'bg-gradient-to-br from-gray-300 to-gray-500',
      features: [
        'Кэшбэк до 10% в категориях',
        'До 10% на остаток',
        'Бесплатное обслуживание',
        'Приоритетная поддержка',
        'Cashback в ресторанах'
      ],
      popular: false
    },
    {
      name: 'Standard',
      cashback: '5%',
      percent: '8%',
      price: '0 ₽',
      color: 'bg-gradient-to-br from-primary to-yellow-400',
      features: [
        'Кэшбэк до 5% в категориях',
        'До 8% на остаток',
        'Бесплатное обслуживание',
        'Поддержка в приложении',
        'Выгодные курсы валют'
      ],
      popular: false
    }
  ];

  return (
    <section id="cards" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Дебетовые карты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите карту под свой образ жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-shadow ${card.popular ? 'ring-2 ring-primary' : ''}`}>
              {card.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-black font-semibold px-4 py-1">
                    Популярная
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className={`w-full h-48 ${card.color} rounded-xl mb-6 flex flex-col justify-between p-6 text-white`}>
                  <div>
                    <CardTitle className="text-3xl text-white">{card.name}</CardTitle>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm opacity-80">•••• •••• •••• 4242</p>
                    </div>
                    <Icon name="CreditCard" size={32} className="opacity-80" />
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Кэшбэк до</p>
                    <p className="text-2xl font-bold">{card.cashback}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">На остаток до</p>
                    <p className="text-2xl font-bold">{card.percent}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Обслуживание</p>
                    <p className="text-2xl font-bold">{card.price}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full font-semibold" size="lg">
                  Заказать карту
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
