import React from 'react';
import { Search, CheckCircle, Truck, FileText, DollarSign, MessageCircle, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Поиск и проверка надежных производителей',
      description: 'Находим и тщательно проверяем производителей, работая только с проверенными партнерами'
    },
    {
      icon: CheckCircle,
      title: 'Контроль качества продукции на месте',
      description: 'Наши специалисты проверяют качество товаров непосредственно на производстве'
    },
    {
      icon: Truck,
      title: 'Организация доставки: авто, авиа, ж/д транспорт',
      description: 'Выбираем оптимальный способ доставки с учетом сроков и бюджета'
    },
    {
      icon: FileText,
      title: 'Полное таможенное сопровождение и импортные документы',
      description: 'Берем на себя все формальности и документооборот при прохождении таможни'
    },
    {
      icon: DollarSign,
      title: 'Валютные операции и прозрачное ценообразование',
      description: 'Помогаем с валютными операциями, без скрытых комиссий и переплат'
    },
    {
      icon: MessageCircle,
      title: 'Переговоры и коммуникация с поставщиками на китайском языке',
      description: 'Ведем переговоры на китайском языке, исключая недопонимания'
    },
    {
      icon: Package,
      title: 'Доставка до вашего склада или конечного получателя в России',
      description: 'Организуем доставку точно по указанному адресу в любой город России'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши сервисы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексные услуги для организации торговли между Россией и Китаем
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;