import { AlertTriangle, DollarSign, Scale, Sprout } from 'lucide-react';

export default function Risks() {
  const risks = [
    {
      icon: Sprout,
      title: 'Redução da Variabilidade Genética',
      description: 'Animais muito semelhantes podem ficar mais vulneráveis a doenças',
      challenges: [
        {
          subtitle: 'Problema do Gargalo Genético',
          text: 'O uso intensivo de poucos reprodutores de elite pode reduzir drasticamente a diversidade genética. Em bovinos leiteiros, apenas 10% dos touros são responsáveis por 90% das inseminações.',
        },
        {
          subtitle: 'Aumento da Consanguinidade',
          text: 'Cruzamentos entre animais aparentados elevam a taxa de endogamia, causando depressão endogâmica: menor fertilidade, maior mortalidade e menor resistência a doenças.',
        },
        {
          subtitle: 'Perda de Raças Locais',
          text: 'Raças nativas e adaptadas estão sendo substituídas por raças comerciais, resultando na perda de características valiosas como rusticidade e adaptação a ambientes específicos.',
        },
      ],
      mitigation: [
        'Programas de conservação de raças locais e bancos de germoplasma',
        'Monitoramento da consanguinidade e acasalamentos planejados',
        'Manutenção de populações de referência com alta variabilidade',
        'Uso de cruzamentos para restaurar heterozigosidade',
      ],
      color: 'amber',
    },
    {
      icon: Scale,
      title: 'Problemas Éticos',
      description: 'Questões relacionadas à clonagem e manipulação genética',
      challenges: [
        {
          subtitle: 'Clonagem e Bem-estar Animal',
          text: 'A clonagem apresenta baixas taxas de sucesso (5-10%) e alta incidência de anomalias fetais, gestações complicadas e problemas pós-natais em clones.',
        },
        {
          subtitle: 'Edição Genética (CRISPR)',
          text: 'Embora promissora, a edição gênica levanta questões sobre efeitos de longo prazo, segurança alimentar e aceitação social de produtos de animais geneticamente editados.',
        },
        {
          subtitle: 'Seleção para Características Extremas',
          text: 'Busca por máxima produtividade pode comprometer o bem-estar: vacas com úberes muito grandes sofrem com mastite, frangos de crescimento rápido têm problemas locomotores.',
        },
      ],
      mitigation: [
        'Inclusão de características de bem-estar nos programas de seleção',
        'Regulamentação rigorosa de biotecnologias reprodutivas',
        'Avaliação de impacto ético em novas tecnologias',
        'Seleção balanceada entre produção, saúde e longevidade',
      ],
      color: 'purple',
    },
    {
      icon: DollarSign,
      title: 'Custos Elevados',
      description: 'Dependência de tecnologia e investimentos significativos',
      challenges: [
        {
          subtitle: 'Barreiras de Acesso',
          text: 'Tecnologias avançadas (seleção genômica, transferência de embriões) requerem investimentos altos, limitando o acesso a pequenos produtores. Um teste genômico custa R$ 200-500 por animal.',
        },
        {
          subtitle: 'Infraestrutura e Capacitação',
          text: 'Implementação de programas de melhoramento exige laboratórios, técnicos especializados, sistemas de registro e avaliação genética, nem sempre disponíveis em regiões remotas.',
        },
        {
          subtitle: 'Dependência Tecnológica',
          text: 'Produtores podem se tornar dependentes de empresas fornecedoras de genética, sêmen e tecnologias, reduzindo autonomia e aumentando custos operacionais.',
        },
      ],
      mitigation: [
        'Programas governamentais de apoio a pequenos produtores',
        'Cooperativas para acesso coletivo a tecnologias',
        'Desenvolvimento de tecnologias de baixo custo e adaptadas localmente',
        'Capacitação técnica e assistência rural',
      ],
      color: 'orange',
    },
    {
      icon: AlertTriangle,
      title: 'Impactos Ambientais',
      description: 'Risco de consequências ecológicas se mal conduzido',
      challenges: [
        {
          subtitle: 'Intensificação Produtiva',
          text: 'Busca por maior produtividade pode levar à intensificação excessiva, com maior uso de grãos, água e energia, e concentração de dejetos em áreas limitadas.',
        },
        {
          subtitle: 'Escape Genético',
          text: 'Animais melhorados que escapam para ambientes naturais podem se cruzar com populações selvagens ou ferais, alterando o pool genético de espécies nativas.',
        },
        {
          subtitle: 'Monocultura Genética',
          text: 'Uso massivo de poucas linhagens genéticas cria uniformidade que pode ter impactos sistêmicos: surto de doenças pode devastar populações inteiras.',
        },
      ],
      mitigation: [
        'Avaliação de impacto ambiental em sistemas intensivos',
        'Biossegurança para evitar escape de material genético',
        'Programas de melhoramento adaptados a sistemas sustentáveis',
        'Diversificação de bases genéticas',
      ],
      color: 'red',
    },
  ];

  const colorClasses = {
    amber: {
      bg: 'from-amber-500 to-amber-600',
      light: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      light: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-700',
    },
    red: {
      bg: 'from-red-500 to-red-600',
      light: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-700',
    },
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Riscos e Desafios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O melhoramento genético deve ser conduzido com responsabilidade para minimizar riscos potenciais
          </p>
        </div>

        <div className="space-y-12">
          {risks.map((risk, index) => {
            const colors = colorClasses[risk.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <risk.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{risk.title}</h3>
                      <p className="text-gray-600">{risk.description}</p>
                    </div>
                  </div>

                  <div className="mb-8 space-y-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">Desafios Identificados:</h4>
                    {risk.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        className={`${colors.light} rounded-xl p-5 border ${colors.border}`}
                      >
                        <h5 className={`font-bold mb-2 ${colors.text}`}>{challenge.subtitle}</h5>
                        <p className="text-sm text-gray-700 leading-relaxed">{challenge.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      Estratégias de Mitigação:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {risk.mitigation.map((strategy, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></span>
                          <span className="text-sm text-gray-700">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Abordagem Equilibrada</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Os riscos do melhoramento genético não devem impedir seu uso, mas sim guiar sua aplicação de forma
            <strong> responsável, ética e sustentável</strong>. A chave está no equilíbrio entre produtividade,
            bem-estar animal, preservação genética e sustentabilidade ambiental.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Programas de melhoramento modernos cada vez mais incorporam <strong>objetivos múltiplos</strong>,
            considerando não apenas produção, mas também saúde, longevidade, eficiência reprodutiva e características
            relacionadas ao bem-estar animal.
          </p>
        </div>
      </div>
    </div>
  );
}
