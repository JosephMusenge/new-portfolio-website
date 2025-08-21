import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Calendar, MapPin } from 'lucide-react';
import InteractiveBackground from './components/InteractiveBackground';

type Section = 'home' | 'experiences' | 'projects' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      period: "06.2024 — 08.2024",
      description: "Developed scalable cloud solutions using Azure services. Worked on improving system performance and implementing new features for enterprise clients.",
      current: false
    },
    {
      title: "Software Development Intern",
      company: "Microsoft",
      location: "Seattle, WA", 
      period: "06.2023 — 08.2023",
      description: "Built internal tools for developer productivity. Collaborated with cross-functional teams to deliver high-impact solutions.",
      current: false
    },
    {
      title: "Hackathon Winner",
      company: "TechCrunch Disrupt",
      location: "San Francisco, CA",
      period: "09.2023",
      description: "First place winner for AI-powered productivity app. Led a team of 4 developers to create an innovative solution in 48 hours.",
      current: false
    }
  ];

  const projects = [
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

  const renderHome = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Joseph Musenge</h1>
        <p className="text-gray-600">Computer Science & Mathematics</p>
      </div>

      <div className="space-y-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-3 h-3 bg-blue-500 rounded-full mb-4">
          </div>
          <p className="text-sm text-blue-500 font-medium tracking-wide uppercase">Today</p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Software Engineer</h3>
              <p className="text-gray-600 mb-2">Building the next generation of web applications</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              Present
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Computer Science & Math Student</h3>
              <p className="text-gray-600 mb-2">Passionate about creating innovative solutions that solve real-world problems. Experienced in full-stack development, machine learning, and cloud technologies.</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              2023 — Present
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <div className="flex space-x-6 text-sm">
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              Email
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://linkedin.com/in/yourname" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://github.com/yourname" className="text-gray-600 hover:text-gray-900 transition-colors relative group">
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExperiences = () => (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Experiences</h1>
        <p className="text-gray-600">Professional journey and achievements</p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <span className="font-medium">{exp.company}</span>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
              <div className="text-right text-sm text-gray-500 ml-8">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
            {index < experiences.length - 1 && <div className="border-t border-gray-100 pt-8" />}
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjects = () => (
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

  const renderContact = () => (
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
            href="mailto:your.email@example.com"
            className="group bg-white border border-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-gray-200 relative"
          >
            <div className="flex justify-center mb-3">
              <Mail className="text-gray-400 group-hover:text-blue-600 transition-colors" size={24} />
            </div>
            <h3 className="font-medium text-gray-900 mb-1 relative">
              Email
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-sm text-gray-600">your.email@example.com</p>
          </a>

          <a 
            href="https://linkedin.com/in/yourname"
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
            href="https://github.com/yourname"
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
            Based in your location • Available for opportunities
          </p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return renderHome();
      case 'experiences':
        return renderExperiences();
      case 'projects':
        return renderProjects();
      case 'contact':
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <InteractiveBackground />
      <main className="container mx-auto px-6 py-16 pb-32">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
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
    </div>
  );
}

export default App;