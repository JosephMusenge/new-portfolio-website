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
    title: "NBA Trade Performance Analysis",
    description: "Data-driven solution analyzing 12,000+ records to assess trade impacts on player stats. Built regression models showing significant performance declines and engineered custom box-plus-minus metric.",
    tech: ["Python", "Pandas", "Matplotlib", "NumPy", "React", "TypeScript"],
    link: "#",
    featured: true
  },
  {
    title: "Smart Grocery & Recipe Recommender",
    description: "Full-stack web app using ML-powered content filtering to match grocery lists with personalized recipe recommendations. Integrated Spoonacular API with custom AI ranking system.",
    tech: ["TypeScript", "Python", "Flask", "Scikit-learn", "Spoonacular API"],
    link: "https://github.com/JosephMusenge/Grocery-List-App", 
    featured: true
  },
  {
    title: "NVIDIA Stock Analysis Dashboard",
    description: "Interactive stock analysis tool providing historical performance insights and buy recommendations for NVIDIA stock using moving averages and trend analysis.",
    tech: ["Python", "Flask", "Streamlit", "Pandas", "Plotly"],
    link: "https://github.com/JosephMusenge/NVIDIA-Stock-Price-App",
    featured: false
  },
  {
    title: "African Music Discovery",
    description: "Web app designed to explore and discover Afrobeats and diverse musical genres across African countries. Features interactive country selection and genre exploration interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    link: "https://github.com/JosephMusenge/African-Music-Discovery",
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