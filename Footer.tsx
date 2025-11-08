import { Dna } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Dna className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Melhoramento Genético</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Recurso educacional sobre melhoramento genético animal, suas técnicas,
              benefícios e desafios para a produção sustentável de alimentos.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Seções</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Técnicas de Melhoramento</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Benefícios</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Riscos e Desafios</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Exemplos Práticos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Instituições</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.embrapa.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Embrapa
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/agricultura/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  MAPA
                </a>
              </li>
              <li>
                <a
                  href="https://www.fao.org/animal-genetics/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAO
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {currentYear} Melhoramento Genético Animal. Material educacional.
            </p>
            <p className="text-sm text-gray-400">
              Desenvolvido para fins educacionais sobre genética e biotecnologia animal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
