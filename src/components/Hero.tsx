import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ваша надежная команда в{' '}
              <span className="text-yellow-400">Китае</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed max-w-3xl mx-auto">
              Офисы в Москве и Гуанчжоу — помогаем найти и проверить производителей, 
              организовать доставку и таможенное оформление.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg"
              >
                Связаться с нами
                <ArrowRight className="w-5 h-5" />
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

export default Hero;