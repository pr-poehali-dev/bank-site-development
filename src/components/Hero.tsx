import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Банк для{' '}
            <span className="text-primary">современной</span> жизни
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Открывайте счета онлайн, получайте карты с кэшбэком и управляйте финансами в одном приложении
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 font-semibold">
              Открыть счёт
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold">
              Заказать карту
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-scale-in">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <Icon name="Percent" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">До 15% на остаток</h3>
            <p className="text-muted-foreground">
              Получайте процент на остаток по счёту каждый месяц
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <Icon name="CreditCard" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Кэшбэк до 30%</h3>
            <p className="text-muted-foreground">
              Возвращаем деньги с каждой покупки по карте
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <Icon name="Smartphone" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Всё в приложении</h3>
            <p className="text-muted-foreground">
              Управляйте картами, счетами и инвестициями онлайн
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
