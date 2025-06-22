import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const ProblemsTable = () => {
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

  const problems = [
    {
      problem: "Много перекупщиков и неясных поставщиков",
      solution: "Проверяем и выбираем надежных производителей напрямую"
    },
    {
      problem: "Несоответствие товара описанию",
      solution: "Контроль качества на месте и перед отправкой"
    },
    {
      problem: "Сложности с доставкой и сроками",
      solution: "Выбираем оптимальный маршрут и перевозчика"
    },
    {
      problem: "Таможенные задержки и ошибки",
      solution: "Полное сопровождение и опытная команда таможенников"
    },
    {
      problem: "Скрытые платежи и комиссии",
      solution: "Прозрачное ценообразование и фиксированные тарифы"
    },
    {
      problem: "Языковой барьер с китайскими поставщиками",
      solution: "Ваш персональный переводчик и посредник"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Часто встречающиеся проблемы и как мы решаем их
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Превращаем типичные сложности торговли с Китаем в конкурентные преимущества
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-red-50 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <X className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-bold text-red-800">Проблема</h3>
                  </div>
                </div>
                <div className="bg-green-50 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Check className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-green-800">Как решаем мы</h3>
                  </div>
                </div>
              </div>

              {problems.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-0 border-t border-gray-200">
                  <div className="p-6 bg-red-25 hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{item.problem}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-green-25 hover:bg-green-50 transition-colors duration-300 border-l border-gray-200">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-800 font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
            >
              Решить мои проблемы с Китаем
            </button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Решить проблемы с Китаем</h3>
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

export default ProblemsTable;