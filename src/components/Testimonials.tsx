import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Раньше теряли время и деньги на посредников, здесь нашли реальных производителей и спокойствие.",
      author: "Алексей",
      position: "продавец с Wildberries",
      rating: 5
    },
    {
      text: "DragonWise помогли с контролем качества, товар пришел без брака и в срок.",
      author: "Ирина",
      position: "владелец интернет-магазина",
      rating: 5
    },
    {
      text: "Доставка стала предсказуемой, а таможня больше не стресс.",
      author: "Дмитрий",
      position: "оптовик из Санкт-Петербурга",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят о нас предприниматели, которые уже работают с Китаем через наши услуги
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative hover:bg-white hover:shadow-xl transition-all duration-300">
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Присоединяйтесь к довольным клиентам
            </h3>
            <p className="text-red-100 mb-6">
              Более 500 предпринимателей уже оптимизировали свой бизнес с Китаем
            </p>
            <div className="flex justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-red-200">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-red-200">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99%</div>
                <div className="text-red-200">Успешных поставок</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;