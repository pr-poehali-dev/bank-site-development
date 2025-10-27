import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', href: '#home' },
    { name: 'Продукты', href: '#products' },
    { name: 'Тарифы', href: '#tariffs' },
    { name: 'Карты', href: '#cards' },
    { name: 'Кредиты', href: '#credits' },
    { name: 'Вклады', href: '#deposits' },
    { name: 'О банке', href: '#about' },
    { name: 'Поддержка', href: '#support' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-primary text-2xl font-bold">₽</span>
            </div>
            <span className="text-2xl font-bold">T-Bank</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">
              Войти
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" className="font-medium w-full">
              Войти
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
