import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Clock, MessageSquare, Star, Shield, Users, Eye, UserCheck, Headphones, TrendingUp, CheckCircle, Quote } from 'lucide-react';

const FabricsLanding = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 hours in seconds
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    telegram: ''
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: '',
          description: '',
          phone: '',
          email: '',
          telegram: ''
        });
      }, 3000);
    }
  };

  const benefits = [
    "Каждая вторая заявка экономит до 50% на закупке",
    "Опыт работы с тканями более 10 лет",
    "Офисы: Москва и Гуанчжоу",
    "Знаем все производства ткани в Гуандуне, Чжэцзяне, Цзянсу и Шаньдуне",
    "Полный цикл: производство, доставка, таможня, юр. и финансовые документы"
  ];

  const testimonials = [
    {
      text: "На Садоводе брали оптом, но сроки и качество постоянно подводили. Через DragonWise нашли фабрику, заказали пробную партию — качество огонь, доставка быстрее, а цена ниже почти на треть. Больше в Москву за товаром не езжу.",
      author: "Денис",
      location: "Пятигорск"
    },
    {
      text: "С первым поставщиком накосячили — пришёл брак. Через DragonWise нашли новую фабрику, сделали тестовую партию. Всё как договаривались, упаковка идеальная, доставка пришла быстрее на 4 дня.",
      author: "Илья",
      location: "оптовик из Казани"
    },
    {
      text: "Долго искали поставщика без посредников — DragonWise нашли нам фабрику на 32% дешевле! Прислали видео с производства, качество проверили перед отправкой. Огромное спасибо Олегу и Хасану за личный контроль.",
      author: "Марина",
      location: "селлер тканей на Wildberries"
    }
  ];

  const qualityControls = [
    "DUPRO",
    "PSI", 
    "CLS",
    "Видео- и фотоотчёты"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <img 
              src="/create-logo-of-logistic-company-named---dragonwise.png" 
              alt="DragonWise Logo" 
              className="h-20 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Special Offer Banner */}
      <div className="fixed top-24 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-red-700 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="font-bold text-lg">СПЕЦПРЕДЛОЖЕНИЕ (ТОЛЬКО СЕГОДНЯ)</span>
            <div className="bg-white/20 px-4 py-1 rounded-lg">
              <span className="font-mono text-xl">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 pt-48 pb-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* FOMO Block */}
            <div className="bg-yellow-500 text-red-900 px-6 py-3 rounded-lg inline-block mb-8 font-bold text-lg animate-pulse">
              Успей оставить заявку
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Полный расчет производства ткани в Китае, а также доставки и таможни — <span className="text-yellow-400">бесплатно</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed max-w-3xl mx-auto">
              Проконтролируем качество. Получите готовое предложение уже сегодня.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg shadow-2xl"
              >
                Получить предложение
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Москва</h3>
                </div>
                <p className="text-red-200">ул. Пречистенка 4 стр 2</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold">Москва</h3>
                </div>
                <p className="text-red-200">ТК Садовод, Корпус Б, Павильон Ткани, место 16</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold">Гуанчжоу</h3>
                </div>
                <p className="text-red-200">район Тяньхэ, бизнес-центр "China Hub"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-600 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 font-medium leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Контроль качества
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {qualityControls.map((control, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-lg font-semibold text-gray-800">{control}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что говорят о нас предприниматели, которые уже работают с тканями через наши услуги
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 relative hover:bg-white hover:shadow-xl transition-all duration-300">
                <Quote className="w-8 h-8 text-red-600 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Feedback and CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Вернемся с первой обратной связью уже через час
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Получите персональное предложение с расчетом стоимости
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg transform hover:scale-105"
              >
                Получить предложение
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Контакты
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы работаем в двух часовых поясах для вашего удобства
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Office Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Наши офисы</h3>
              
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Москва</h4>
                    <p className="text-gray-300 mb-2">ул. Пречистенка 4 стр 2</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Пн-Пт: 9:00-18:00 (МСК)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Москва</h4>
                    <p className="text-gray-300 mb-2">ТК Садовод, Корпус Б, Павильон Ткани, место 16</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Пн-Пт: 9:00-18:00 (МСК)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Гуанчжоу</h4>
                    <p className="text-gray-300 mb-2">район Тяньхэ, бизнес-центр "China Hub"</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Пн-Пт: 9:00-18:00 (UTC+8)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Связаться с менеджером</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@dragonwise.ru" className="text-green-400 hover:text-green-300">
                      info@dragonwise.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">Telegram/WhatsApp</p>
                    <a href="https://t.me/dragonwise" className="text-purple-400 hover:text-purple-300">
                      @dragonwise
                    </a>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsFormOpen(true)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Получить предложение
              </button>

              <p className="text-gray-400 text-sm mt-4 text-center">
                Отвечаем в течение 30 минут в рабочее время
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Получить предложение</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Описание товара
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Опишите какую ткань вы ищете..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя в Телеграме
                    </label>
                    <input
                      type="text"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="@username"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Отправить
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Отмена
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Спасибо!</h3>
                <p className="text-gray-600">Мы скоро с вами свяжемся.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FabricsLanding;