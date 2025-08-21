import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "AI Code Assistant",
    description: "An intelligent code completion tool powered by machine learning. Helps developers write better code faster with context-aware suggestions.",
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    link: "#",
    featured: true
  },
  {
    title: "Real-time Collaboration Platform",
    description: "Web-based platform for seamless team collaboration with live editing, video calls, and project management features.",
    tech: ["React", "WebRTC", "Socket.io", "MongoDB"],
    link: "#",
    featured: true
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing complex datasets with custom charts, filters, and export capabilities.",
    tech: ["D3.js", "Vue.js", "Python", "PostgreSQL"],
    link: "#",
    featured: false
  },
  {
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with social features and personalized workout recommendations.",
    tech: ["React Native", "Firebase", "Machine Learning"],
    link: "#",
    featured: false
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-600">Featured work and personal projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded font-medium">
                  {tech}
                </span>
              ))}
            </div>
            
            <a 
              href={project.link} 
              className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors relative group"
            >
              <span>View Project</span>
              <ExternalLink size={14} />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};