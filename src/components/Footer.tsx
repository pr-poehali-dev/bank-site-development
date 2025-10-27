import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    products: [
      { name: 'Дебетовые карты', href: '#cards' },
      { name: 'Кредиты', href: '#credits' },
      { name: 'Вклады', href: '#deposits' },
      { name: 'Инвестиции', href: '#' },
      { name: 'Страхование', href: '#' },
      { name: 'Ипотека', href: '#' }
    ],
    company: [
      { name: 'О банке', href: '#about' },
      { name: 'Пресс-центр', href: '#' },
      { name: 'Карьера', href: '#' },
      { name: 'Партнёрам', href: '#' },
      { name: 'Документы', href: '#' }
    ],
    support: [
      { name: 'Поддержка', href: '#support' },
      { name: 'Контакты', href: '#contacts' },
      { name: 'Офисы', href: '#contacts' },
      { name: 'FAQ', href: '#support' },
      { name: 'Тарифы', href: '#tariffs' }
    ]
  };

  const socials = [
    { name: 'Telegram', icon: 'Send', href: '#' },
    { name: 'VK', icon: 'MessageCircle', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' },
    { name: 'Дзен', icon: 'Rss', href: '#' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-black text-2xl font-bold">₽</span>
              </div>
              <span className="text-2xl font-bold">T-Bank</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Современный банк для современной жизни. Управляй финансами удобно и выгодно.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary hover:text-black rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Продукты</h3>
            <ul className="space-y-2">
              {links.products.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>ПАО «T-Bank». Генеральная лицензия Банка России № 2673</p>
              <p className="mt-1">© {currentYear} T-Bank. Все права защищены</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
