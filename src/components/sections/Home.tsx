import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Joseph Musenge</h1>
        <p className="text-gray-600">Rust College: BSc. Computer Science & Mathematics</p>
      </div>

      <div className="space-y-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full mb-4"></div>
          <p className="text-sm text-blue-500 font-medium tracking-wide uppercase">Today</p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Software Engineering Intern</h3>
              <p className="text-gray-600 mb-2">Collaborating with faculty-led startup to develop innovative software solutions and architectural designs.</p>
            </div>
            <div className="text-right text-sm text-gray-500">Present</div>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Computer Science & Math Major</h3>
              <p className="text-gray-600 mb-2">
                Junior pursuing a double major in Computer Science and Mathematics with a focus on software engineering and data science at Rust College. 
                Experience in full-stack development, data science, and mathematical research.
              </p>
            </div>
            <div className="text-right text-sm text-gray-500">2023 — Present</div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <div className="flex space-x-6 text-sm">
            <a href="mailto:josephmusengep62@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              Email
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://linkedin.com/in/joseph-musenge" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://github.com/JosephMusenge" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};