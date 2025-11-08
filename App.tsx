import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Techniques from './components/Techniques';
import Benefits from './components/Benefits';
import Risks from './components/Risks';
import Examples from './components/Examples';
import Conclusion from './components/Conclusion';
import References from './components/References';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'tecnicas' && <Techniques />}
        {activeSection === 'beneficios' && <Benefits />}
        {activeSection === 'riscos' && <Risks />}
        {activeSection === 'exemplos' && <Examples />}
        {activeSection === 'conclusao' && <Conclusion />}
        {activeSection === 'referencias' && <References />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
