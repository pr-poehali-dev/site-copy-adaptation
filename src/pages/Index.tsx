import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка данных
    console.log('Заявка отправлена:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    {
      icon: 'Banknote',
      title: 'Высокая зарплата',
      description: 'От 180 000 рублей в месяц + выплаты за выполнение задач',
      highlight: 'от 180 000 ₽'
    },
    {
      icon: 'Shield',
      title: 'Социальные гарантии',
      description: 'Полное медобслуживание, страхование жизни, льготы семье',
      highlight: '100% гарантии'
    },
    {
      icon: 'GraduationCap',
      title: 'Профессиональное развитие',
      description: 'Обучение военным специальностям, карьерный рост',
      highlight: 'Обучение'
    },
    {
      icon: 'Home',
      title: 'Жилищная программа',
      description: 'Предоставление жилья или субсидии на покупку недвижимости',
      highlight: 'Свое жилье'
    }
  ];

  const requirements = [
    'Возраст: 18-50 лет',
    'Гражданство РФ или стран СНГ',
    'Годность по состоянию здоровья',
    'Отсутствие судимостей',
    'Среднее образование'
  ];

  const ApplicationForm = ({ title, size = 'default' }: { title: string; size?: 'default' | 'compact' }) => (
    <Card className={`${size === 'compact' ? 'p-4' : 'p-6'} bg-white/95 backdrop-blur border-red-200`}>
      <CardHeader className={size === 'compact' ? 'pb-3' : 'pb-4'}>
        <CardTitle className={`${size === 'compact' ? 'text-lg' : 'text-xl'} font-bold text-gray-900 text-center`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="border-gray-300 focus:border-red-500"
          />
          <Input
            placeholder="Номер телефона"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="border-gray-300 focus:border-red-500"
          />
          <Button 
            type="submit" 
            className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold ${size === 'compact' ? 'py-2' : 'py-3'} pulse-red`}
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Заявка отправлена!' : 'Подать заявку'}
          </Button>
        </form>
        <p className="text-xs text-gray-500 text-center mt-3">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Icon name="Shield" className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Контракт.РФ</span>
                <p className="text-sm text-gray-600">Служба по контракту</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="text-gray-700 hover:text-red-600 transition-colors">Преимущества</a>
              <a href="#requirements" className="text-gray-700 hover:text-red-600 transition-colors">Требования</a>
              <a href="#application" className="text-gray-700 hover:text-red-600 transition-colors">Подать заявку</a>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Позвонить
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Служи по контракту —
                <span className="block text-yellow-300">защищай Родину!</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Стань частью профессиональной армии России. 
                Высокая зарплата, социальные гарантии, достойная служба.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300">от 180 000₽</div>
                  <div className="text-blue-200">Зарплата в месяц</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300">100%</div>
                  <div className="text-blue-200">Социальные гарантии</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 text-lg font-semibold pulse-red">
                  <Icon name="FileCheck" className="w-5 h-5 mr-2" />
                  Подать заявку сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  8-800-100-00-29
                </Button>
              </div>
            </div>
            
            <div className="lg:block">
              <ApplicationForm title="Оставить заявку на службу" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Преимущества службы по контракту
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная военная служба — это стабильный доход, 
              социальные гарантии и возможность служить Родине
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-red-100">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                    <Icon name={benefit.icon} className="w-10 h-10 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-2">
                    {benefit.highlight}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Требования к кандидатам
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Мы ищем надежных людей, готовых профессионально служить России
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Важно знать</h4>
                    <p className="text-blue-800">
                      Иностранные граждане также могут поступить на службу по контракту 
                      с получением российского гражданства в ускоренном порядке.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ApplicationForm title="Узнать о возможности поступления" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 patriotic-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готов служить России?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Подай заявку прямо сейчас и получи подробную консультацию 
              о поступлении на военную службу по контракту
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Icon name="Clock" className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Быстрый отбор</h4>
                <p className="text-blue-100">Процедура отбора занимает 1-2 недели</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Icon name="Users" className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Поддержка</h4>
                <p className="text-blue-100">Помощь на всех этапах оформления</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <Icon name="MapPin" className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">По всей России</h4>
                <p className="text-blue-100">Пункты отбора в каждом регионе</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 text-lg font-semibold pulse-red">
                <Icon name="FileCheck" className="w-6 h-6 mr-2" />
                Подать заявку на службу
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg">
                <Icon name="Phone" className="w-6 h-6 mr-2" />
                Горячая линия: 8-800-100-00-29
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
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">Контракт.РФ</span>
                  <p className="text-sm text-gray-400">Служба по контракту</p>
                </div>
              </div>
              <p className="text-gray-300">
                Официальный сайт набора на военную службу по контракту 
                в Вооруженных Силах Российской Федерации
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Условия службы</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Часто задаваемые вопросы</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>8-800-100-00-29</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@контракт.рф</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" className="w-4 h-4" />
                  <span>24/7 - круглосуточно</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Важно</h4>
              <div className="text-gray-300 space-y-2 text-sm">
                <div>Горячая линия работает круглосуточно</div>
                <div>Консультации бесплатно</div>
                <div>Помощь в оформлении документов</div>
                <div className="bg-red-600/20 p-3 rounded border-l-4 border-red-600 mt-4">
                  <div className="text-yellow-400 font-semibold mb-1">Срочно!</div>
                  <div className="text-sm">Идет набор. Подавайте заявки!</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 Контракт.РФ. Официальный сайт набора.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Пользователь​ское соглашение
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;