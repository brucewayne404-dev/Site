import { TrendingUp, Award, Heart, Leaf } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento da Produtividade',
      description: 'Mais carne, leite e ovos com eficiência',
      examples: [
        {
          title: 'Produção Leiteira',
          text: 'Vacas Holandesas modernas produzem em média 10.000 litros de leite por lactação, comparado a 4.000 litros de vacas não selecionadas.',
        },
        {
          title: 'Ganho de Peso',
          text: 'Bovinos de corte melhorados ganham até 1,5 kg por dia, reduzindo o tempo de terminação de 36 para 24 meses.',
        },
        {
          title: 'Postura de Ovos',
          text: 'Galinhas poedeiras comerciais produzem mais de 300 ovos por ano, enquanto raças nativas produzem cerca de 150 ovos.',
        },
      ],
      color: 'emerald',
    },
    {
      icon: Award,
      title: 'Melhoria na Qualidade',
      description: 'Produtos de origem animal com padrões superiores',
      examples: [
        {
          title: 'Qualidade da Carne',
          text: 'Suínos melhorados apresentam maior percentual de carne magra (60-65%) e menor gordura, atendendo a demanda do consumidor moderno.',
        },
        {
          title: 'Composição do Leite',
          text: 'Seleção para teor de proteína e gordura adequados à produção de queijos e derivados de alta qualidade.',
        },
        {
          title: 'Uniformidade',
          text: 'Produtos mais padronizados facilitam a industrialização e agregação de valor.',
        },
      ],
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Resistência a Doenças',
      description: 'Animais mais saudáveis e adaptados',
      examples: [
        {
          title: 'Resistência Genética',
          text: 'Bovinos da raça Nelore apresentam resistência natural a carrapatos e doenças tropicais, reduzindo custos com medicamentos.',
        },
        {
          title: 'Tolerância ao Calor',
          text: 'Raças adaptadas a climas quentes mantêm produtividade mesmo em temperaturas acima de 35°C, essencial para regiões tropicais.',
        },
        {
          title: 'Bem-estar Animal',
          text: 'Animais saudáveis têm menor estresse, melhor comportamento e maior longevidade produtiva.',
        },
      ],
      color: 'rose',
    },
    {
      icon: Leaf,
      title: 'Eficiência e Sustentabilidade',
      description: 'Redução de custos e impacto ambiental',
      examples: [
        {
          title: 'Conversão Alimentar',
          text: 'Frangos modernos convertem 1,7 kg de ração em 1 kg de carne, comparado a 3 kg em raças não melhoradas, reduzindo custos e impacto ambiental.',
        },
        {
          title: 'Emissão de Metano',
          text: 'Animais mais eficientes produzem menos metano por kg de produto, contribuindo para a redução de gases de efeito estufa.',
        },
        {
          title: 'Uso de Recursos',
          text: 'Menor área de pasto, água e insumos necessários para produzir a mesma quantidade de alimento.',
        },
      ],
      color: 'teal',
    },
  ];

  const colorClasses = {
    emerald: {
      bg: 'from-emerald-500 to-emerald-600',
      light: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
    },
    blue: {
      bg: 'from-blue-500 to-blue-600',
      light: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
    },
    rose: {
      bg: 'from-rose-500 to-rose-600',
      light: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-200',
    },
    teal: {
      bg: 'from-teal-500 to-teal-600',
      light: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-200',
    },
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Benefícios do Melhoramento Genético</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O melhoramento genético traz vantagens concretas e mensuráveis para a produção animal
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((benefit, index) => {
            const colors = colorClasses[benefit.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefit.examples.map((example, idx) => (
                      <div
                        key={idx}
                        className={`${colors.light} rounded-xl p-6 border ${colors.border} hover:shadow-md transition-all duration-200`}
                      >
                        <h4 className={`font-bold text-lg mb-2 ${colors.text}`}>{example.title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{example.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Econômico</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O melhoramento genético é responsável por grande parte do aumento de produtividade na pecuária.
              Estudos estimam que <strong>60-80% dos ganhos produtivos</strong> nas últimas décadas são resultado
              direto da seleção genética.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para cada real investido em melhoramento genético, há um retorno estimado de <strong>10 a 15 reais</strong>
              ao longo do tempo, considerando o efeito cumulativo nas gerações.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança Alimentar</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Com a população mundial crescendo, o melhoramento genético é essencial para <strong>produzir mais
              alimentos com menos recursos</strong>, contribuindo para a segurança alimentar global.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A produtividade aumentada permite liberar áreas para conservação ambiental, reduzindo a pressão
              sobre ecossistemas naturais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
