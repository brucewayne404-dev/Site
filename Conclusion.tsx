import { Target, Heart, Leaf, TrendingUp, Shield, Scale } from 'lucide-react';

export default function Conclusion() {
  const keyPoints = [
    {
      icon: Target,
      title: 'Essencial para Agropecuária',
      text: 'O melhoramento genético é fundamental para o avanço da produção animal moderna.',
      color: 'emerald',
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      text: 'Responsável por 60-80% dos ganhos produtivos nas últimas décadas.',
      color: 'blue',
    },
    {
      icon: Heart,
      title: 'Bem-estar Animal',
      text: 'Promove saúde, longevidade e melhores condições de vida para os animais.',
      color: 'rose',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      text: 'Permite produzir mais alimentos usando menos recursos naturais.',
      color: 'teal',
    },
    {
      icon: Scale,
      title: 'Ética e Responsabilidade',
      text: 'Deve ser conduzido com princípios éticos e respeito ao bem-estar animal.',
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'Preservação Genética',
      text: 'Necessita manter diversidade genética para resiliência futura.',
      color: 'amber',
    },
  ];

  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-blue-500 to-blue-600',
    rose: 'from-rose-500 to-rose-600',
    teal: 'from-teal-500 to-teal-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600',
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Conclusão</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Síntese e perspectivas do melhoramento genético animal
          </p>
        </div>

        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              O <strong>melhoramento genético animal</strong> é essencial para o avanço da agropecuária moderna,
              pois melhora a <strong>produtividade, a qualidade e o bem-estar animal</strong>. Através de técnicas
              que vão desde a seleção tradicional até biotecnologias avançadas, tem sido possível aumentar
              significativamente a eficiência da produção de alimentos de origem animal.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Os benefícios são concretos e mensuráveis: maior produção de carne, leite e ovos; animais mais
              resistentes a doenças; melhor adaptação a diferentes ambientes; e maior eficiência no uso de
              recursos naturais. Estes avanços contribuem diretamente para a <strong>segurança alimentar
              global</strong> e para a sustentabilidade da produção.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Entretanto, o melhoramento genético deve ser realizado de forma <strong>ética e sustentável</strong>,
              garantindo <strong>preservação da variabilidade genética</strong> e <strong>equilíbrio ambiental</strong>.
              Os riscos de consanguinidade, perda de raças locais e problemas de bem-estar devem ser ativamente
              gerenciados através de estratégias de conservação e seleção balanceada.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              O futuro do melhoramento genético está em encontrar o <strong>equilíbrio perfeito</strong> entre
              produtividade, sustentabilidade, bem-estar animal e preservação genética, utilizando tecnologias de
              forma responsável para beneficiar toda a sociedade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${colorClasses[point.color as keyof typeof colorClasses]}`}></div>
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[point.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 shadow-md`}>
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perspectivas Futuras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold text-lg text-blue-800 mb-3">Tecnologias Emergentes</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Edição genética (CRISPR) para resistência a doenças</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Inteligência artificial para predição genômica</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Fenômica de precisão com sensores e imagens</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Reprodução in vitro e embriões sintéticos</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg text-blue-800 mb-3">Desafios e Oportunidades</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Adaptação às mudanças climáticas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Redução de emissões de gases de efeito estufa</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Democratização do acesso a tecnologias</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span>Aceitação social de novas biotecnologias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mensagem Final</h3>
            <p className="text-gray-700 leading-relaxed">
              O melhoramento genético animal é uma ciência em constante evolução, que combina conhecimento
              tradicional com inovação tecnológica. Seu sucesso contínuo depende do <strong>compromisso com
              princípios éticos, sustentabilidade ambiental e bem-estar animal</strong>. Ao aplicar essas
              técnicas de forma responsável, podemos garantir a produção de alimentos de qualidade para as
              gerações futuras, ao mesmo tempo em que preservamos a diversidade genética e respeitamos os
              limites do planeta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
