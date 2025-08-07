import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Scale',
      title: 'Гражданское право',
      description: 'Защита прав и интересов в гражданских спорах, составление договоров, представительство в суде'
    },
    {
      icon: 'Building2',
      title: 'Корпоративное право',
      description: 'Юридическое сопровождение бизнеса, регистрация компаний, корпоративные споры'
    },
    {
      icon: 'FileText',
      title: 'Семейное право',
      description: 'Расторжение брака, раздел имущества, вопросы опеки и алиментов'
    },
    {
      icon: 'Car',
      title: 'Автоюрист',
      description: 'Споры со страховыми компаниями, возмещение ущерба, лишение прав'
    },
    {
      icon: 'Home',
      title: 'Жилищное право',
      description: 'Сделки с недвижимостью, выселение, коммунальные споры'
    },
    {
      icon: 'CreditCard',
      title: 'Банкротство',
      description: 'Процедура банкротства физических лиц, списание долгов'
    }
  ];

  const advantages = [
    {
      icon: 'Users',
      title: 'Более 15 лет опыта',
      description: 'Команда опытных юристов с успешной практикой'
    },
    {
      icon: 'Award',
      title: '95% выигранных дел',
      description: 'Высокий процент положительных исходов'
    },
    {
      icon: 'Clock',
      title: '24/7 поддержка',
      description: 'Круглосуточная юридическая помощь'
    },
    {
      icon: 'Shield',
      title: 'Конфиденциальность',
      description: 'Полная защита персональных данных'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">ЮрЗащита</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Консультация
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональная
              <span className="block text-yellow-300">юридическая защита</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Защищаем ваши права и интересы с 2008 года. 
              Бесплатная консультация и гарантия результата.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 text-lg font-semibold">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                <Icon name="FileText" className="w-5 h-5 mr-2" />
                Наши кейсы
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-blue-200">Выигранных дел</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300">15+</div>
                <div className="text-blue-200">Лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-300">24/7</div>
                <div className="text-blue-200">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексное юридическое сопровождение для физических и юридических лиц
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионализм, надежность и индивидуальный подход к каждому клиенту
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon} className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Нужна юридическая помощь?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Получите бесплатную консультацию прямо сейчас. 
              Мы поможем разобраться в вашей ситуации и найти оптимальное решение.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 text-lg font-semibold">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                +7 (999) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                <Icon name="Mail" className="w-5 h-5 mr-2" />
                Написать нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold">ЮрЗащита</span>
              </div>
              <p className="text-gray-300">
                Профессиональные юридические услуги с гарантией результата
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Гражданское право</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Семейное право</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Банкротство</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@защита.рф</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="text-gray-300 space-y-1">
                <div>Пн-Пт: 9:00 - 20:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
                <div className="text-yellow-400 font-semibold">
                  Экстренная помощь: 24/7
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЮрЗащита. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;