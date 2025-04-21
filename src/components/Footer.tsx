const Footer = () => {
  const navItems = [
    { title: "Главная", href: "#hero" },
    { title: "Обо мне", href: "#about" },
    { title: "Услуги", href: "#services" },
    { title: "Отзывы", href: "#testimonials" },
    { title: "Контакты", href: "#contact" },
  ];

  return (
    <footer className="bg-tutor-spaceGray text-white py-8">
      <div className="container-tutor">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold">МатПрофи</div>
            <p className="text-gray-300 mt-1">Ваш путь к успеху в математике</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {navItems.map(item => (
              <a 
                key={item.href}
                href={item.href} 
                className="hover:text-gray-300 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center md:text-left text-gray-400 text-sm">
          © {new Date().getFullYear()} МатПрофи. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
