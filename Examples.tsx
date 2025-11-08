import { Beef, Milk, Drumstick, Fish } from 'lucide-react';

export default function Examples() {
  const examples = [
    {
      icon: Milk,
      title: 'Bovinos Leiteiros',
      subtitle: 'Vacas Holandesas com alta produção de leite',
      image: '🐄',
      description: 'A raça Holandesa (Holstein-Friesian) é o resultado de séculos de seleção para produção leiteira.',
      achievements: [
        'Produção média de 10.000+ litros/lactação (recordes acima de 30.000 litros)',
        'Melhoramento para teor de proteína e gordura específicos',
        'Adaptação a diferentes sistemas de produção',
        'Desenvolvimento de linhagens para climas tropicais',
      ],
      challenges: 'Animais de alta produção requerem manejo nutricional e sanitário rigoroso. Busca-se equilibrar produção com longevidade e fertilidade.',
      case: 'No Brasil, programas como Geneplus e PMGRN avaliaram milhões de animais, aumentando a produtividade nacional em mais de 50% nas últimas três décadas.',
      color: 'blue',
    },
    {
      icon: Drumstick,
      title: 'Frangos de Corte',
      subtitle: 'Raças híbridas de crescimento rápido e carne macia',
      image: '🐔',
      description: 'O frango moderno é resultado de intenso melhoramento genético focado em eficiência.',
      achievements: [
        'Crescimento de 0 a 2,5kg em apenas 42 dias',
        'Conversão alimentar de 1,7:1 (1,7kg de ração para 1kg de carne)',
        'Rendimento de carcaça superior a 75%',
        'Carne macia e com baixo teor de gordura',
      ],
      challenges: 'Crescimento muito rápido pode causar problemas locomotores. Programas atuais incluem seleção para bem-estar e robustez.',
      case: 'Empresas como Cobb e Ross desenvolvem linhagens específicas para diferentes mercados. Na década de 1950, eram necessários 84 dias para atingir 2kg; hoje, apenas 35-40 dias.',
      color: 'amber',
    },
    {
      icon: Beef,
      title: 'Suínos',
      subtitle: 'Linhagens com menos gordura e mais rendimento',
      image: '🐷',
      description: 'O melhoramento suíno focou em atender a demanda por carne magra e de qualidade.',
      achievements: [
        'Percentual de carne magra de 60-65% (antes: 40-45%)',
        'Conversão alimentar de 2,5:1',
        'Prolificidade: mais de 14 leitões nascidos por parto',
        'Qualidade de carne com marmoreio adequado',
      ],
      challenges: 'Seleção intensa para baixa gordura pode afetar qualidade sensorial. Equilíbrio entre magreza e suculência é essencial.',
      case: 'Programas como Camborough (PIC) e Large White (Agroceres) aumentaram a eficiência produtiva em 3-4% ao ano. Brasil é o 4º maior produtor mundial.',
      color: 'pink',
    },
    {
      icon: Fish,
      title: 'Peixes e Ovinos',
      subtitle: 'Espécies adaptadas a diferentes regiões e climas',
      image: '🐟',
      description: 'Melhoramento em aquicultura e ovinocultura adaptam espécies a condições locais.',
      achievements: [
        'Tilápia: crescimento 30-40% superior em linhagens melhoradas',
        'Ovinos: dupla aptidão (carne e lã) em raças como Suffolk e Dorper',
        'Resistência a parasitas em ovinos de raças locais',
        'Salmão: resistência a doenças e melhor conversão alimentar',
      ],
      challenges: 'Aquicultura enfrenta desafios de escape genético. Ovinos necessitam adaptação a diferentes biomas brasileiros.',
      case: 'Programa de melhoramento de tilápia da Embrapa aumentou crescimento em 10% por geração. Ovinos Santa Inês destacam-se pela adaptação ao semiárido.',
      color: 'teal',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    amber: 'from-amber-500 to-amber-600',
    pink: 'from-pink-500 to-pink-600',
    teal: 'from-teal-500 to-teal-600',
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Exemplos Práticos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos reais de sucesso do melhoramento genético em diferentes espécies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-3 bg-gradient-to-r ${colorClasses[example.color as keyof typeof colorClasses]}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[example.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center shadow-lg`}>
                      <example.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{example.title}</h3>
                      <p className="text-sm text-gray-600">{example.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-5xl">{example.image}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{example.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Conquistas do Melhoramento:</h4>
                  <div className="space-y-2">
                    {example.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                  <h4 className="font-bold text-amber-800 mb-2 text-sm">Desafios:</h4>
                  <p className="text-sm text-gray-700">{example.challenges}</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-bold text-blue-800 mb-2 text-sm">Caso de Sucesso:</h4>
                  <p className="text-sm text-gray-700">{example.case}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Global</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O melhoramento genético nas principais espécies de produção foi responsável por um aumento de
              <strong> 1-4% ao ano</strong> na eficiência produtiva ao longo das últimas décadas. Este ganho
              contínuo e cumulativo permitiu que a produção de alimentos acompanhasse o crescimento populacional
              sem expansão proporcional de área.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estima-se que, sem o melhoramento genético, seria necessário <strong>50-100% mais animais</strong>
              para produzir a mesma quantidade de alimentos que temos hoje, com impactos ambientais significativamente
              maiores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3-4%</div>
              <p className="text-sm text-gray-600">Ganho genético anual médio em programas de melhoramento</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60-80%</div>
              <p className="text-sm text-gray-600">Do aumento de produtividade atribuído ao melhoramento</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">10-15x</div>
              <p className="text-sm text-gray-600">Retorno do investimento em melhoramento genético</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
