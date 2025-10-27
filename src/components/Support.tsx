import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Support = () => {
  const channels = [
    {
      icon: 'MessageCircle',
      title: 'Онлайн-чат',
      description: 'Ответим на вопросы в течение минуты',
      action: 'Написать в чат',
      available: '24/7'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      description: '8 800 555-00-00 (звонок бесплатный)',
      action: 'Позвонить',
      available: '24/7'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'support@t-bank.ru',
      action: 'Написать письмо',
      available: 'Ответ в течение 24 часов'
    },
    {
      icon: 'MapPin',
      title: 'Офисы',
      description: 'Более 500 офисов по всей России',
      action: 'Найти ближайший',
      available: 'Пн-Пт 9:00-18:00'
    }
  ];

  const faqs = [
    {
      question: 'Как открыть счёт онлайн?',
      answer: 'Скачайте наше приложение, пройдите простую регистрацию с паспортом и откройте счёт за 5 минут. Вам не нужно идти в банк или заполнять бумажные документы.'
    },
    {
      question: 'Сколько стоит обслуживание карты?',
      answer: 'Все наши дебетовые карты обслуживаются бесплатно. Никаких скрытых комиссий или платежей за выпуск карты.'
    },
    {
      question: 'Как получить кэшбэк?',
      answer: 'Кэшбэк начисляется автоматически за каждую покупку по карте. Выберите категории с повышенным кэшбэком в приложении и получайте до 30% от суммы покупок.'
    },
    {
      question: 'Как долго рассматривается заявка на кредит?',
      answer: 'Решение по кредиту принимается за 2 минуты онлайн. После одобрения деньги поступают на карту в течение нескольких минут.'
    },
    {
      question: 'Защищены ли мои вклады?',
      answer: 'Да, все вклады застрахованы в системе страхования вкладов (АСВ) на сумму до 1,4 млн рублей на каждого вкладчика.'
    },
    {
      question: 'Можно ли снимать наличные бесплатно?',
      answer: 'Да, вы можете бесплатно снимать наличные в любых банкоматах России. Без комиссии и ограничений по сумме.'
    }
  ];

  return (
    <section id="support" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Поддержка</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда на связи, чтобы помочь вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {channels.map((channel, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={channel.icon} size={28} />
                </div>
                <CardTitle className="text-xl">{channel.title}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{channel.available}</p>
                <Button variant="outline" className="w-full font-medium">
                  {channel.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Частые вопросы</h3>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Support;
