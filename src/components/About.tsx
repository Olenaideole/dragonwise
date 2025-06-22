import React from 'react';
import { Globe, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            О компании
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            DragonWise — эксперт в организации бизнеса между Россией и Китаем. 
            Мы — ваш проверенный партнёр с офисами в Москве и Гуанчжоу, который берет на себя 
            все сложности поиска производителей, контроля качества, логистики и таможенного оформления.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Международный опыт</h3>
              <p className="text-gray-600">Работаем на рынке России и Китая более 10 лет</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Гарантия качества</h3>
              <p className="text-gray-600">Проверяем каждого поставщика и контролируем качество</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Персональный подход</h3>
              <p className="text-gray-600">Каждому клиенту выделяется персональный менеджер</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;