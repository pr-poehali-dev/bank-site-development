import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Products = () => {
  const products = [
    {
      icon: 'Wallet',
      title: 'Дебетовые карты',
      description: 'Бесплатное обслуживание, кэшбэк до 30%, процент на остаток',
      features: ['Кэшбэк до 30%', 'До 15% на остаток', 'Бесплатное обслуживание'],
      link: '#cards'
    },
    {
      icon: 'TrendingUp',
      title: 'Кредиты',
      description: 'Наличные и онлайн, низкие ставки от 4.9%, решение за 2 минуты',
      features: ['Ставка от 4.9%', 'До 5 млн рублей', 'Решение за 2 минуты'],
      link: '#credits'
    },
    {
      icon: 'PiggyBank',
      title: 'Вклады',
      description: 'Высокие проценты до 20%, гибкие условия, страхование АСВ',
      features: ['До 20% годовых', 'Страхование АСВ', 'Пополнение и снятие'],
      link: '#deposits'
    },
    {
      icon: 'LineChart',
      title: 'Инвестиции',
      description: 'Акции, облигации, фонды. Торгуйте на бирже прямо из приложения',
      features: ['Без комиссий', 'Обучающие материалы', 'Готовые стратегии'],
      link: '#'
    },
    {
      icon: 'Shield',
      title: 'Страхование',
      description: 'Защита жизни, здоровья, имущества. Оформление онлайн за 5 минут',
      features: ['Онлайн оформление', 'Выплаты до 10 млн', 'Круглосуточная поддержка'],
      link: '#'
    },
    {
      icon: 'Building2',
      title: 'Ипотека',
      description: 'Ставка от 5%, срок до 30 лет, онлайн-одобрение за 1 день',
      features: ['Ставка от 5%', 'Срок до 30 лет', 'Одобрение за 1 день'],
      link: '#'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Продукты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр банковских услуг для вашего комфорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={product.icon} size={28} />
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full font-medium" asChild>
                  <a href={product.link}>Подробнее</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
