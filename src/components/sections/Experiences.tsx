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
    title: "Explore Software Engineering Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "05.2025 — 08.2025",
    description: "Interned on the IC3 Platforms & AIOps team. Engineered scalable mapping and automation pipeline for Microsoft's internal support services. Designed clustering logic that improved incident classification accuracy by 70%.",
    current: false
  },
  {
    title: "New Technologist (Software Engineering & PM) Intern",
    company: "Microsoft",
    location: "Redmond, WA", 
    period: "06.2024 — 08.2024",
    description: "Collaborated on development of a full-stack web application for luggage space management. Implemented backend integration using Node.js and Firebase for secure data management and user authentication.",
    current: false
  },
  {
    title: "Data for Good Hackathon Winner",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX",
    period: "04.2025",
    description: "First place winner at the Data for Good hackathon. Led a team of 6 developers to create an innovative solution in 48 hours.",
    current: false
  },
  {
    title: "Future of Work Academy (FOWA) Tech Competition Winner",
    company: "Hewlett Packard Inc. (HP Inc.)",
    location: "Houston, TX",
    period: "10.2023",
    description: "First place winner for ChromaSoul project at HP's FOWA Future Tech Competition. Part of a team of 3 to develop an AI-powered art experience using Microsoft Azure Cognitive Services and Power BI.",
    current: false
  }
];

export const Experiences: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Professional Experiences</h1>
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