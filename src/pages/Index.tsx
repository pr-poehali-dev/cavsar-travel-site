import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const destinations = [
    {
      id: 1,
      title: 'Мальдивы',
      subtitle: 'Райские острова',
      price: 'от 89 000 ₽',
      image: 'https://cdn.poehali.dev/projects/b1ba91a7-ab8e-4f98-9d55-c1106d845680/files/36de2f1e-12a6-492f-a1f2-b0a48e76c148.jpg',
    },
    {
      id: 2,
      title: 'Прага',
      subtitle: 'Европейская сказка',
      price: 'от 42 000 ₽',
      image: 'https://cdn.poehali.dev/projects/b1ba91a7-ab8e-4f98-9d55-c1106d845680/files/2080c9a1-793e-4587-bd7a-39e3fe2b891d.jpg',
    },
    {
      id: 3,
      title: 'Токио',
      subtitle: 'Мегаполис будущего',
      price: 'от 65 000 ₽',
      image: 'https://cdn.poehali.dev/projects/b1ba91a7-ab8e-4f98-9d55-c1106d845680/files/fb82cd34-2711-439f-b840-98e6d1fb6bea.jpg',
    },
  ];

  const faqItems = [
    {
      question: 'Как забронировать билет?',
      answer: 'Введите маршрут и дату в форме поиска, выберите подходящий рейс и следуйте инструкциям для оплаты. Билет придет на вашу электронную почту.',
    },
    {
      question: 'Можно ли вернуть билет?',
      answer: 'Да, возврат билета возможен в соответствии с тарифом. Невозвратные тарифы возврату не подлежат, частично возвратные позволяют вернуть часть стоимости.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем карты Visa, Mastercard, МИР, а также платежи через СБП, Apple Pay и Google Pay.',
    },
    {
      question: 'Нужна ли виза для поездки?',
      answer: 'Визовые требования зависят от страны назначения и вашего гражданства. Рекомендуем проверить требования на сайте посольства или консульства.',
    },
  ];

  const handleSearch = () => {
    console.log('Поиск билетов:', { from, to, date });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Plane" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">Cavsar Travel</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#destinations" className="text-foreground hover:text-primary transition-colors">
              Направления
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О компании
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2"
            >
              <Icon name="User" size={16} />
              Войти
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Откройте мир с Cavsar Travel
            </h2>
            <p className="text-xl text-muted-foreground">
              Бронируйте авиабилеты по лучшим ценам в любую точку планеты
            </p>
          </div>

          <Card className="max-w-5xl mx-auto shadow-2xl animate-scale-in">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <label className="text-sm font-medium mb-2 block">Откуда</label>
                  <div className="relative">
                    <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      placeholder="Москва"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-medium mb-2 block">Куда</label>
                  <div className="relative">
                    <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      placeholder="Токио"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:col-span-1">
                  <label className="text-sm font-medium mb-2 block">Дата</label>
                  <div className="relative">
                    <Icon name="Calendar" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:col-span-1 flex items-end">
                  <Button onClick={handleSearch} className="w-full h-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="destinations" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные направления</h2>
            <p className="text-lg text-muted-foreground">Путешествуйте в самые удивительные места планеты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card
                key={dest.id}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{dest.title}</h3>
                    <p className="text-sm opacity-90">{dest.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Цена билета</p>
                      <p className="text-2xl font-bold text-primary">{dest.price}</p>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      Выбрать
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">О компании Cavsar Travel</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Мы — современная платформа для бронирования авиабилетов, которая объединяет сотни авиакомпаний и
                  предлагает лучшие цены на рынке.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  С 2020 года мы помогли более 500 000 путешественникам найти идеальные рейсы в любую точку мира.
                  Наша миссия — сделать путешествия доступными и комфортными для каждого.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Авиакомпаний</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Направлений</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                  <Icon name="Shield" size={40} className="text-primary mb-4" />
                  <h3 className="font-bold mb-2">Безопасность</h3>
                  <p className="text-sm text-muted-foreground">Защита данных и безопасные платежи</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <Icon name="Clock" size={40} className="text-secondary mb-4" />
                  <h3 className="font-bold mb-2">24/7 Поддержка</h3>
                  <p className="text-sm text-muted-foreground">Помощь в любое время суток</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5">
                  <Icon name="CreditCard" size={40} className="text-accent mb-4" />
                  <h3 className="font-bold mb-2">Лучшие цены</h3>
                  <p className="text-sm text-muted-foreground">Гарантия низкой стоимости</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5">
                  <Icon name="Star" size={40} className="text-primary mb-4" />
                  <h3 className="font-bold mb-2">Качество</h3>
                  <p className="text-sm text-muted-foreground">Проверенные авиакомпании</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-lg text-muted-foreground">Ответы на самые популярные вопросы наших клиентов</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Мы всегда рады помочь вам с выбором путешествия</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name="Mail" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">support@cavsar.travel</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name="Phone" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (800) 555-35-35</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name="MessageCircle" size={40} className="text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Чат</h3>
                <p className="text-muted-foreground">Онлайн поддержка 24/7</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">Cavsar Travel</h3>
              </div>
              <p className="text-sm opacity-80">Ваш надежный помощник в мире путешествий</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнеры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат билетов</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Cavsar Travel. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {activeTab === 'profile' && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveTab('')}
        >
          <Card className="w-full max-w-md animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Личный кабинет</h3>
                <Button variant="ghost" size="icon" onClick={() => setActiveTab('')}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Пароль</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Войти</Button>
                <p className="text-center text-sm text-muted-foreground">
                  Нет аккаунта?{' '}
                  <a href="#" className="text-primary hover:underline">
                    Зарегистрироваться
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
