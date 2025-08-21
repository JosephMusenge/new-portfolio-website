import React, { useState } from 'react';
import { Section } from './types';
import { Navigation } from './components/Navigation';
import { Home } from './components/sections/Home';
import { Experiences } from './components/sections/Experiences';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import InteractiveBackground from './components/InteractiveBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderContent = () => {
    const sections: Record<Section, JSX.Element> = {
      home: <Home />,
      experiences: <Experiences />,
      projects: <Projects />,
      contact: <Contact />
    };

    return sections[activeSection];
  };

  return (
    <div className="min-h-screen bg-white">
      <InteractiveBackground />
      <main className="container mx-auto px-6 py-16 pb-32">
        {renderContent()}
      </main>
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
    </div>
  );
};

export default App;