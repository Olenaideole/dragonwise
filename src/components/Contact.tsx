import React, { useState } from 'react';
import { MapPin, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    telegram: ''
  });

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

  return (
    <>
      <section id="contact" className="py-20 bg-gray-900 text-white">
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
                Связаться с менеджером
              </button>

              <p className="text-gray-400 text-sm mt-4 text-center">
                Отвечаем в течение 30 минут в рабочее время
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Готовы оптимизировать торговлю с Китаем?
              </h3>
              <p className="text-red-100 mb-6">
                Получите бесплатную консультацию и расчет стоимости ваших задач
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Бесплатная консультация
                </button>
              </div>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Связаться с нами</h3>
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
                      placeholder="Опишите какой товар вы ищете..."
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
    </>
  );
};

export default Contact;