import React, { useState } from 'react';
import { Star, Shield, Clock, Users, TrendingUp, Eye, UserCheck, Headphones } from 'lucide-react';

const Benefits = () => {
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

  const benefits = [
    {
      icon: Star,
      title: 'Работаем напрямую с производителями, без перекупщиков',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Shield,
      title: 'Гарантируем наличие товаров и точность описания',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Eye,
      title: 'Проводим проверку качества перед отправкой',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Clock,
      title: 'Оптимизируем сроки и стоимость доставки',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: TrendingUp,
      title: 'Решаем все вопросы с таможней "под ключ"',
      color: 'text-red-700 bg-red-100'
    },
    {
      icon: Users,
      title: 'Прозрачное ценообразование, без скрытых комиссий',
      color: 'text-indigo-600 bg-indigo-100'
    },
    {
      icon: UserCheck,
      title: 'Ваш персональный менеджер в Китае и Москве',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Headphones,
      title: 'Оперативная поддержка и консультации на русском и китайском',
      color: 'text-teal-600 bg-teal-100'
    }
  ];

  return (
    <>
      <section id="benefits" className="py-20 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наши конкурентные преимущества, которые делают сотрудничество с нами выгодным и надежным
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">{benefit.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы начать сотрудничество?
              </h3>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для консультации и расчета стоимости ваших задач
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Получить консультацию
              </button>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Получить консультацию</h3>
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

export default Benefits;