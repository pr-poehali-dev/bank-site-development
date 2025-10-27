import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Credits = () => {
  const [amount, setAmount] = useState([500000]);
  const [term, setTerm] = useState([24]);

  const monthlyPayment = Math.round((amount[0] * (0.049 / 12) * Math.pow(1 + 0.049 / 12, term[0])) / (Math.pow(1 + 0.049 / 12, term[0]) - 1));

  const creditTypes = [
    {
      icon: 'Wallet',
      title: 'Наличными',
      rate: 'от 4.9%',
      amount: 'До 5 млн ₽',
      term: 'До 7 лет',
      description: 'Деньги на любые цели без справок и поручителей'
    },
    {
      icon: 'ShoppingCart',
      title: 'Рефинансирование',
      rate: 'от 3.9%',
      amount: 'До 3 млн ₽',
      term: 'До 5 лет',
      description: 'Объедините кредиты и снизьте ежемесячный платёж'
    },
    {
      icon: 'Car',
      title: 'Автокредит',
      rate: 'от 5.9%',
      amount: 'До 7 млн ₽',
      term: 'До 7 лет',
      description: 'Специальные условия на покупку нового или подержанного авто'
    }
  ];

  return (
    <section id="credits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Кредиты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выгодные условия и быстрое решение
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-black to-gray-800 text-white border-0">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Кредитный калькулятор</CardTitle>
              <CardDescription className="text-gray-300">
                Рассчитайте ежемесячный платёж
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-medium">Сумма кредита</label>
                  <span className="text-2xl font-bold text-primary">{amount[0].toLocaleString()} ₽</span>
                </div>
                <Slider
                  value={amount}
                  onValueChange={setAmount}
                  min={50000}
                  max={5000000}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>50 000 ₽</span>
                  <span>5 000 000 ₽</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-medium">Срок кредита</label>
                  <span className="text-2xl font-bold text-primary">{term[0]} мес</span>
                </div>
                <Slider
                  value={term}
                  onValueChange={setTerm}
                  min={6}
                  max={84}
                  step={6}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>6 месяцев</span>
                  <span>84 месяца</span>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6 text-black">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium mb-1">Ежемесячный платёж</p>
                    <p className="text-sm opacity-70">Ставка 4.9% годовых</p>
                  </div>
                  <p className="text-4xl font-bold">{monthlyPayment.toLocaleString()} ₽</p>
                </div>
              </div>

              <Button size="lg" className="w-full bg-white text-black hover:bg-gray-100 font-semibold">
                Оформить заявку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {creditTypes.map((credit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={credit.icon} size={28} />
                </div>
                <CardTitle className="text-2xl">{credit.title}</CardTitle>
                <CardDescription className="text-base">
                  {credit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Ставка</span>
                    <span className="font-semibold text-lg">{credit.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Сумма</span>
                    <span className="font-semibold text-lg">{credit.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Срок</span>
                    <span className="font-semibold text-lg">{credit.term}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full font-medium">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credits;
