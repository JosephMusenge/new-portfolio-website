import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-900 rounded-full p-1 shadow-lg">
        <div className="flex space-x-1">
          {[
            { id: 'home', label: 'Home' },
            { id: 'experiences', label: 'Experiences' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map((nav) => (
            <button
              key={nav.id}
              onClick={() => setActiveSection(nav.id as Section)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === nav.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {nav.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};