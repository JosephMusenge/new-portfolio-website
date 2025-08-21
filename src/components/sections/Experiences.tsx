import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  current: boolean;
}

const experiences: Experience[] = [
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

export const Experiences: React.FC = () => {
  return (
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
};