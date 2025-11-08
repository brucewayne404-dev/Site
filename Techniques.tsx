import { Microscope, Shuffle, Syringe, FlaskConical, Dna } from 'lucide-react';

export default function Techniques() {
  const techniques = [
    {
      icon: Shuffle,
      title: 'Seleção Artificial',
      description: 'Escolha dos melhores animais para reprodução',
      details: [
        'Identificação de animais com características superiores',
        'Avaliação de desempenho produtivo e reprodutivo',
        'Registro e controle genealógico',
        'Processo contínuo de melhoria ao longo das gerações',
      ],
      color: 'emerald',
    },
    {
      icon: Dna,
      title: 'Cruzamentos Planejados',
      description: 'Combinação entre raças para gerar híbridos com vantagens específicas',
      details: [
        'Cruzamento absorvente para incorporar genes desejados',
        'Cruzamento industrial para produção comercial',
        'Heterose ou vigor híbrido',
        'Complementaridade entre raças',
      ],
      color: 'teal',
    },
    {
      icon: Syringe,
      title: 'Inseminação Artificial',
      description: 'Aplicação controlada de sêmen de machos geneticamente superiores',
      details: [
        'Uso intensivo de reprodutores de elite',
        'Controle de doenças reprodutivas',
        'Sincronização de cios',
        'Facilita o melhoramento em larga escala',
      ],
      color: 'cyan',
    },
    {
      icon: FlaskConical,
      title: 'Transferência de Embriões e Clonagem',
      description: 'Técnicas modernas que aceleram a multiplicação de animais com alto valor genético',
      details: [
        'Superovulação de fêmeas doadoras',
        'Coleta e transferência de embriões',
        'Clonagem por transferência nuclear',
        'Multiplicação rápida de genética superior',
      ],
      color: 'blue',
    },
    {
      icon: Microscope,
      title: 'Marcadores Moleculares e Análise de DNA',
      description: 'Permitem prever e selecionar características desejadas com precisão',
      details: [
        'Seleção genômica usando SNPs',
        'Identificação de genes de interesse',
        'Predição de valor genético desde o nascimento',
        'Redução do intervalo entre gerações',
      ],
      color: 'emerald',
    },
  ];

  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600',
    teal: 'from-teal-500 to-teal-600',
    cyan: 'from-cyan-500 to-cyan-600',
    blue: 'from-blue-500 to-blue-600',
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Técnicas de Melhoramento</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As principais práticas utilizadas hoje combinam métodos tradicionais com tecnologias de ponta
          </p>
        </div>

        <div className="space-y-8">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colorClasses[technique.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center shadow-lg`}>
                    <technique.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{technique.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{technique.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {technique.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Integração de Técnicas</h3>
          <p className="text-gray-700 leading-relaxed">
            O melhoramento genético moderno não se limita a uma única técnica. Os melhores resultados são obtidos
            quando há <strong>integração entre métodos tradicionais e biotecnologias</strong>. Por exemplo, a seleção
            genômica pode identificar os melhores animais desde cedo, que são então multiplicados via transferência
            de embriões e inseminação artificial, acelerando o progresso genético do rebanho.
          </p>
        </div>
      </div>
    </div>
  );
}
