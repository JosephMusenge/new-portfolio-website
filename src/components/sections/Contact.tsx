import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Contact</h1>
        <p className="text-gray-600">Let's connect and build something amazing together</p>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <p className="text-gray-600 leading-relaxed mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Whether you want to discuss a potential collaboration, have a question about my work, 
            or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="mailto:josephmusengep62@gmail.com"
            className="group bg-white border border-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-gray-200 relative"
          >
            <div className="flex justify-center mb-3">
              <Mail className="text-gray-400 group-hover:text-blue-600 transition-colors" size={24} />
            </div>
            <h3 className="font-medium text-gray-900 mb-1 relative">
              Email
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-sm text-gray-600">Personal Email</p>
          </a>

          <a 
            href="https://linkedin.com/in/joseph-musenge"
            className="group bg-white border border-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-gray-200 relative"
          >
            <div className="flex justify-center mb-3">
              <Linkedin className="text-gray-400 group-hover:text-blue-600 transition-colors" size={24} />
            </div>
            <h3 className="font-medium text-gray-900 mb-1 relative">
              LinkedIn
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-sm text-gray-600">Professional Profile</p>
          </a>

          <a 
            href="https://github.com/JosephMusenge"
            className="group bg-white border border-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-gray-200 relative"
          >
            <div className="flex justify-center mb-3">
              <Github className="text-gray-400 group-hover:text-blue-600 transition-colors" size={24} />
            </div>
            <h3 className="font-medium text-gray-900 mb-1 relative">
              GitHub
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-sm text-gray-600">Code Repository</p>
          </a>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-gray-500">
            Based in Memphis, TN • Available for Opportunities
          </p>
        </div>
      </div>
    </div>
  );
};