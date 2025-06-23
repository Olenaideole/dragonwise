import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const industries = [
    { name: 'Ткани', path: '/fabrics' },
    { name: 'Электроника', path: '/electronics' },
    { name: 'Игрушки', path: '/toys' },
    { name: 'Одежда', path: '/clothing' }
  ];

  const handleIndustryClick = (path: string) => {
    if (path === '/fabrics') {
      navigate(path);
    }
    setIsIndustriesOpen(false);
    setIsMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.industries-dropdown')) {
        setIsIndustriesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo-dragonwise.png"
              alt="DragonWise Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-red-700 transition-colors font-semibold text-lg hover:bg-red-50 px-3 py-2 rounded-lg">
              О компании
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-red-700 transition-colors font-semibold text-lg hover:bg-red-50 px-3 py-2 rounded-lg">
              Наши услуги
            </button>
            
            {/* Industries Dropdown */}
            <div className="relative industries-dropdown">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsIndustriesOpen(!isIndustriesOpen);
                }}
                className="text-gray-800 hover:text-red-700 transition-colors font-semibold text-lg hover:bg-red-50 px-3 py-2 rounded-lg flex items-center gap-1"
              >
                Отрасли
                <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {industries.map((industry, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIndustryClick(industry.path);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50 transition-colors"
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('benefits')} className="text-gray-800 hover:text-red-700 transition-colors font-semibold text-lg hover:bg-red-50 px-3 py-2 rounded-lg">
              Выгоды
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-800 hover:text-red-700 transition-colors font-semibold text-lg hover:bg-red-50 px-3 py-2 rounded-lg">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-red-700 hover:bg-red-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl border border-gray-200">
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('about')} className="text-left px-6 py-3 text-gray-800 hover:text-red-700 hover:bg-red-50 transition-colors font-semibold">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left px-6 py-3 text-gray-800 hover:text-red-700 hover:bg-red-50 transition-colors font-semibold">
                Наши услуги
              </button>
              
              {/* Mobile Industries */}
              <div className="px-6 py-3 industries-dropdown">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsIndustriesOpen(!isIndustriesOpen);
                  }}
                  className="text-gray-800 hover:text-red-700 transition-colors font-semibold flex items-center gap-1 w-full text-left"
                >
                  Отрасли
                  <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isIndustriesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {industries.map((industry, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleIndustryClick(industry.path);
                        }}
                        className="block w-full text-left py-2 px-2 text-gray-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                      >
                        {industry.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('benefits')} className="text-left px-6 py-3 text-gray-800 hover:text-red-700 hover:bg-red-50 transition-colors font-semibold">
                Выгоды
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left px-6 py-3 text-gray-800 hover:text-red-700 hover:bg-red-50 transition-colors font-semibold">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contact')} className="mx-4 mt-2 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center">
                Контакты
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;