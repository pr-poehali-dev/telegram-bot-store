import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const bots = [
    {
      name: "Магазин-бот",
      description: "Автоматизация продаж с каталогом товаров, корзиной и оплатой",
      price: "15 000 ₽",
      features: ["Каталог товаров", "Корзина", "Оплата", "Уведомления"],
      demo: "Попробовать демо"
    },
    {
      name: "CRM-бот",
      description: "Управление клиентами, заявками и задачами",
      price: "25 000 ₽", 
      features: ["База клиентов", "Заявки", "Аналитика", "Отчеты"],
      demo: "Попробовать демо"
    },
    {
      name: "Поддержка-бот",
      description: "Автоматические ответы и переадресация к операторам",
      price: "12 000 ₽",
      features: ["FAQ", "Тикеты", "Переадресация", "История"],
      demo: "Попробовать демо"
    }
  ];

  const reviews = [
    {
      name: "Алексей Р.",
      company: "Интернет-магазин",
      text: "Магазин-бот увеличил продажи на 40%. Клиенты довольны удобством заказов.",
      rating: 5
    },
    {
      name: "Мария С.", 
      company: "Служба доставки",
      text: "CRM-бот помог организовать работу с клиентами. Теперь ничего не теряется.",
      rating: 5
    },
    {
      name: "Дмитрий К.",
      company: "IT-компания", 
      text: "Поддержка-бот обрабатывает 80% запросов автоматически. Супер!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="MessageSquare" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">TelegramBots</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#bots" className="text-gray-600 hover:text-gray-900">Боты</a>
              <a href="#reviews" className="text-gray-600 hover:text-gray-900">Отзывы</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Готовые телеграм-боты<br />
                <span className="text-blue-600">для вашего бизнеса</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Увеличьте продажи и автоматизируйте процессы с помощью умных ботов. 
                Протестируйте перед покупкой.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Play" size={20} className="mr-2" />
                  Попробовать демо
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Заказать бота
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/244f04e3-2530-4ba2-b2a1-4419e486b27f.jpg" 
                alt="Telegram Bot Demo"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bots Section */}
      <section id="bots" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши телеграм-боты
            </h2>
            <p className="text-xl text-gray-600">
              Попробуйте любого бота бесплатно перед покупкой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bots.map((bot, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-gray-900">{bot.name}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {bot.price}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{bot.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Возможности:</h4>
                      <div className="flex flex-wrap gap-2">
                        {bot.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Icon name="Play" size={16} className="mr-2" />
                        {bot.demo}
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Купить бота
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <div>
                    <p className="font-medium text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Обсудим ваш проект и подберем подходящего бота
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-gray-200">
              <CardContent className="pt-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MessageSquare" size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">Telegram</h3>
                    <p className="text-gray-600">@botsdeveloper</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Mail" size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">hello@telegrambots.ru</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="MessageSquare" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">TelegramBots</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная разработка телеграм-ботов для вашего бизнеса.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Разработка ботов</li>
                <li>Интеграция с CRM</li>
                <li>Техническая поддержка</li>
                <li>Обучение персонала</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Telegram: @botsdeveloper</li>
                <li>Email: hello@telegrambots.ru</li>
                <li>Время работы: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TelegramBots. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;