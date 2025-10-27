import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Deposits = () => {
  const deposits = [
    {
      name: 'Накопительный',
      rate: '20%',
      minAmount: '1 000 ₽',
      term: 'Бессрочный',
      features: [
        'Ставка до 20% годовых',
        'Пополнение в любое время',
        'Частичное снятие без потери процентов',
        'Капитализация процентов',
        'Страхование АСВ до 1,4 млн ₽'
      ],
      highlighted: true
    },
    {
      name: 'Максимальный доход',
      rate: '18%',
      minAmount: '50 000 ₽',
      term: 'От 3 месяцев',
      features: [
        'Ставка до 18% годовых',
        'Фиксированная ставка',
        'Выплата процентов каждый месяц',
        'Досрочное закрытие с сохранением процентов',
        'Страхование АСВ до 1,4 млн ₽'
      ],
      highlighted: false
    },
    {
      name: 'Пенсионный',
      rate: '21%',
      minAmount: '10 000 ₽',
      term: 'От 6 месяцев',
      features: [
        'Ставка до 21% годовых',
        'Для пенсионеров повышенная ставка',
        'Пополнение и снятие',
        'Льготные условия',
        'Страхование АСВ до 1,4 млн ₽'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="deposits" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Вклады</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Сохраняйте и приумножайте свои средства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deposits.map((deposit, index) => (
            <Card key={index} className={`hover:shadow-xl transition-shadow ${deposit.highlighted ? 'ring-2 ring-primary' : ''}`}>
              {deposit.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-black font-semibold px-4 py-1">
                    Выгодный
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-3xl">{deposit.name}</CardTitle>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Ставка до</p>
                    <p className="text-3xl font-bold text-primary">{deposit.rate}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Минимум</p>
                    <p className="font-semibold">{deposit.minAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Срок</p>
                    <p className="font-semibold">{deposit.term}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {deposit.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full font-semibold" size="lg">
                  Открыть вклад
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Shield" size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Защита вкладов</h3>
              <p className="text-sm text-muted-foreground">Страхование АСВ до 1,4 млн рублей</p>
            </div>
            <div>
              <Icon name="Clock" size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Быстрое открытие</h3>
              <p className="text-sm text-muted-foreground">Онлайн за 5 минут без визита в банк</p>
            </div>
            <div>
              <Icon name="TrendingUp" size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-lg mb-2">Высокие ставки</h3>
              <p className="text-sm text-muted-foreground">Одни из лучших на рынке процентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposits;
