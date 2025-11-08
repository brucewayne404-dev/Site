import { BookOpen, ExternalLink, Building2, Globe } from 'lucide-react';

export default function References() {
  const references = [
    {
      category: 'Instituições Brasileiras',
      icon: Building2,
      color: 'emerald',
      items: [
        {
          title: 'Embrapa Gado de Leite',
          description: 'Pesquisas em melhoramento genético de bovinos leiteiros',
          url: 'https://www.embrapa.br/gado-de-leite',
        },
        {
          title: 'Embrapa Gado de Corte',
          description: 'Programa de melhoramento de bovinos de corte',
          url: 'https://www.embrapa.br/gado-de-corte',
        },
        {
          title: 'Embrapa Suínos e Aves',
          description: 'Pesquisas em genética e melhoramento de suínos e aves',
          url: 'https://www.embrapa.br/suinos-e-aves',
        },
        {
          title: 'MAPA - Ministério da Agricultura',
          description: 'Políticas e programas de melhoramento genético animal',
          url: 'https://www.gov.br/agricultura/pt-br',
        },
      ],
    },
    {
      category: 'Organizações Internacionais',
      icon: Globe,
      color: 'blue',
      items: [
        {
          title: 'FAO - Food and Agriculture Organization',
          description: 'Recursos genéticos animais e conservação da biodiversidade',
          url: 'https://www.fao.org/animal-genetics/en/',
        },
        {
          title: 'ICAR - International Committee for Animal Recording',
          description: 'Padrões internacionais para avaliação genética animal',
          url: 'https://www.icar.org/',
        },
        {
          title: 'Interbull',
          description: 'Centro internacional de avaliação genética de bovinos',
          url: 'https://interbull.org/',
        },
      ],
    },
    {
      category: 'Literatura Científica',
      icon: BookOpen,
      color: 'teal',
      items: [
        {
          title: 'Melhoramento Genético Animal',
          description: 'Cardellino, R. & Rovira, J. - Fundamentos teóricos e práticos',
          url: null,
        },
        {
          title: 'Principles of Animal Breeding',
          description: 'Nicholas, F. W. - Texto clássico sobre princípios de melhoramento',
          url: null,
        },
        {
          title: 'Introduction to Quantitative Genetics',
          description: 'Falconer, D. S. & Mackay, T. F. C. - Genética quantitativa aplicada',
          url: null,
        },
        {
          title: 'Genetics and Analysis of Quantitative Traits',
          description: 'Lynch, M. & Walsh, B. - Análise estatística em melhoramento',
          url: null,
        },
      ],
    },
    {
      category: 'Programas de Melhoramento',
      icon: Building2,
      color: 'purple',
      items: [
        {
          title: 'Programa Geneplus-IATF',
          description: 'Melhoramento genético de bovinos de leite no Brasil',
          url: null,
        },
        {
          title: 'PMGRN - Programa de Melhoramento Genético de Raças Naturalizadas',
          description: 'Conservação e melhoramento de raças localmente adaptadas',
          url: null,
        },
        {
          title: 'Conexão Delta G',
          description: 'Programa de avaliação genética de bovinos de corte',
          url: null,
        },
        {
          title: 'PROMEBO - Programa de Melhoramento de Bovinos',
          description: 'Avaliação genética de raças zebuínas e taurinas',
          url: null,
        },
      ],
    },
  ];

  const colorClasses = {
    emerald: {
      bg: 'from-emerald-500 to-emerald-600',
      light: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
    },
    blue: {
      bg: 'from-blue-500 to-blue-600',
      light: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      light: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-700',
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Referências</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fontes bibliográficas e recursos para aprofundamento no tema
          </p>
        </div>

        <div className="space-y-12">
          {references.map((section, index) => {
            const colors = colorClasses[section.color as keyof typeof colorClasses];
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>

                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center shadow-md`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`${colors.light} rounded-xl p-5 border ${colors.border} hover:shadow-md transition-all duration-200`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`font-bold ${colors.text}`}>{item.title}</h3>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nota sobre as Referências</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            As fontes listadas representam instituições de pesquisa, organizações internacionais, programas de
            melhoramento e literatura científica reconhecida na área de melhoramento genético animal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Para acesso a artigos científicos mais recentes, recomenda-se consultar bases de dados como:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <p className="font-semibold text-gray-800 mb-1">Google Scholar</p>
              <p className="text-sm text-gray-600">Artigos científicos e citações</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <p className="font-semibold text-gray-800 mb-1">PubMed</p>
              <p className="text-sm text-gray-600">Literatura biomédica</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-amber-200">
              <p className="font-semibold text-gray-800 mb-1">SciELO</p>
              <p className="text-sm text-gray-600">Periódicos científicos latino-americanos</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Cursos e Capacitação</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Para quem deseja se aprofundar no tema, diversas universidades brasileiras oferecem cursos de
            graduação e pós-graduação em Zootecnia, com disciplinas específicas em melhoramento genético animal:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="flex items-start space-x-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span>Universidade Federal de Viçosa (UFV)</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span>Universidade de São Paulo (USP/ESALQ)</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span>Universidade Federal do Rio Grande do Sul (UFRGS)</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
              <span>Universidade Federal de Goiás (UFG)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
