import { Dna, ArrowRight } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const quickLinks = [
    { id: 'tecnicas', label: 'Técnicas de melhoramento', icon: '🧬' },
    { id: 'beneficios', label: 'Benefícios', icon: '🌿' },
    { id: 'riscos', label: 'Riscos e desafios', icon: '⚠️' },
    { id: 'exemplos', label: 'Exemplos práticos', icon: '🐄' },
  ];

  const handleQuickLink = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-8 transform hover:scale-110 transition-transform duration-300">
              <Dna className="w-10 h-10 text-emerald-600" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Melhoramento Genético Animal
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Bem-vindo(a)! O <strong>melhoramento genético animal</strong> é o conjunto de técnicas que permite{' '}
              <strong>aperfeiçoar características de interesse</strong> nos animais, como produção de leite, carne, ovos,
              resistência a doenças e adaptação ao ambiente.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Desde os primeiros cruzamentos seletivos até o uso de <strong>biotecnologia e análise de DNA</strong>,
              o objetivo principal é <strong>aumentar a produtividade e melhorar a qualidade</strong> sem perder a
              diversidade genética.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleQuickLink(link.id)}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors duration-200">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </div>
  );
}
