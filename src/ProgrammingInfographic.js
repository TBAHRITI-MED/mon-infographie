import React, { useState } from 'react';
import { CircleIcon, CodeIcon, MonitorIcon, BugIcon, RocketIcon, FileTextIcon } from 'lucide-react';

const ProgrammingInfographic = () => {
    const [activeStep, setActiveStep] = useState(null);
    const [expandedTerm, setExpandedTerm] = useState(null);
    const [darkMode, setDarkMode] = useState(true);

  const steps = [
    {
      icon: CircleIcon,
      title: "1. Problem Analysis",
      color: "#3498db",
      details: ["Define requirements", "Break down tasks", "Identify I/O", "Research similar solutions"]
    },
    {
      icon: CodeIcon,
      title: "2. Planning & Design",
      color: "#e74c3c",
      details: ["Create flowcharts", "Choose structures", "Plan architecture", "Design patterns"]
    },
    {
      icon: MonitorIcon,
      title: "3. Development",
      color: "#2ecc71",
      details: ["Write code", "Follow standards", "Document", "Code review"]
    },
    {
      icon: BugIcon,
      title: "4. Testing & Debugging",
      color: "#f1c40f",
      details: ["Unit testing", "Integration", "Debug", "Performance testing"]
    },
    {
      icon: RocketIcon,
      title: "5. Deployment & Maintenance",
      color: "#9b59b6",
      details: ["Release", "Monitor", "Update", "Scale"]
    },
    {
      icon: FileTextIcon,
      title: "6. Documentation",
      color: "#1abc9c",
      details: [
        "API documentation",
        "User guides",
        "Code comments",
        "Technical specs"
      ]
    }
  ];

  const languageCategories = {
    "Web Development": {
      languages: {
        "JavaScript": {
          uses: ["Frontend interactivity", "Node.js backend", "Full-stack apps"],
          frameworks: ["React", "Vue", "Angular"],
          strengths: ["Huge ecosystem", "Real-time features", "Browser native"]
        },
        "Python": {
          uses: ["Backend APIs", "Data processing", "AI integration"],
          frameworks: ["Django", "Flask", "FastAPI"],
          strengths: ["Readable syntax", "Rich libraries", "Versatile"]
        },
        "PHP": {
          uses: ["Server-side rendering", "CMS development", "Web apps"],
          frameworks: ["Laravel", "Symfony", "WordPress"],
          strengths: ["Easy hosting", "Built for web", "Large community"]
        }
      }
    },
    "Mobile Development": {
      languages: {
        "Swift": {
          uses: ["iOS apps", "macOS apps", "Apple ecosystem"],
          frameworks: ["UIKit", "SwiftUI", "Core Data"],
          strengths: ["Native performance", "Strong typing", "Modern syntax"]
        },
        "Kotlin": {
          uses: ["Android apps", "Cross-platform", "Server-side"],
          frameworks: ["Android SDK", "Jetpack Compose", "Ktor"],
          strengths: ["Java interop", "Null safety", "Concise"]
        }
      }
    },
    "Desktop Development": {
      languages: {
        "C++": {
          uses: ["Game development", "System software", "Performance-critical apps"],
          frameworks: ["Qt", "wxWidgets", "JUCE"],
          strengths: ["High performance", "Hardware access", "Memory control"]
        },
        "Java": {
          uses: ["Enterprise software", "Cross-platform apps", "Android"],
          frameworks: ["JavaFX", "Spring", "Hibernate"],
          strengths: ["Platform independent", "Enterprise ready", "Strong typing"]
        },
        "C#": {
          uses: ["Windows apps", ".NET applications", "Game development"],
          frameworks: ["WPF", ".NET MAUI", "Unity"],
          strengths: ["Microsoft ecosystem", "Modern features", "Type safety"]
        }
      }
    }
  };
  const glossary = [
    { term: "Algorithm", def: "Step-by-step problem-solving procedure" },
    { term: "API", def: "Application Programming Interface" },
    { term: "CI/CD", def: "Continuous Integration/Deployment" },
    { term: "Framework", def: "Reusable software environment" },
    { term: "Git", def: "Version control system" },
    { term: "IDE", def: "Integrated Development Environment" },
    { term: "OOP", def: "Object-Oriented Programming" },
    { term: "REST", def: "Representational State Transfer" }
  ];

  const handleTermClick = (index) => {
    setExpandedTerm(expandedTerm === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-100 text-black'} transition-colors`}>
      {/* Bouton pour changer le thème */}
      <button 
        className="absolute top-4 right-4 p-2 bg-blue-500 rounded-full" 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Programming in Practice: From Concept to Code
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Programming Steps Section */}
          <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Programming Steps</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="flex items-start space-x-4">
                    <step.icon 
                      size={24} 
                      color={step.color}
                      className="mt-1"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <ul className="mt-2 space-y-1 text-slate-300">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="text-sm">• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Selection Section */}
          <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Choosing the Right Language</h2>
            <div className="space-y-8">
              {Object.entries(languageCategories).map(([category, { languages }]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-300">{category}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(languages).map(([lang, details]) => (
                      <div key={lang} className="bg-slate-700/50 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-yellow-300 mb-2">{lang}</h4>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-medium text-blue-200">Use Cases:</p>
                            <ul className="list-disc list-inside text-sm text-slate-300">
                              {details.uses.map((use, idx) => (
                                <li key={idx}>{use}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-200">Popular Frameworks:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {details.frameworks.map((framework, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-600 rounded-full text-xs">
                                  {framework}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-200">Key Strengths:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {details.strengths.map((strength, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-600/50 rounded-full text-xs">
                                  {strength}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* No-Code vs Low-Code Section */}
        <div className="space-y-6 ">
            <div className="bg-blue-600/20 p-6 rounded-xl backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-bold mb-4">No-Code</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Visual platforms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Drag-and-drop</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Quick prototypes</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-600/20 p-6 rounded-xl backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-bold mb-4">Low-Code</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Minimal coding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Pre-built components</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Complex logic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm shadow-xl">
    <h2 className="text-2xl font-bold mb-6 text-green-400">Glossary</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {glossary.map(({ term, def }, index) => (
        <div
          key={index}
          onClick={() => handleTermClick(index)}
          className={`bg-slate-700/50 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
            expandedTerm === index ? 'scale-110 shadow-lg z-10 bg-slate-600/50' : 'hover:scale-105'
          }`}
        >
          <h3 className={`font-semibold mb-1 ${expandedTerm === index ? 'text-blue-300' : ''}`}>
            {term}
          </h3>
          <p className={`text-sm text-slate-300 transition-all duration-300 ${
            expandedTerm === index ? 'text-white' : ''
          }`}>
            {def}
          </p>
        </div>
      ))}
    </div>
  </div>
          
        </div>
        
      </div>
  );
};

export default ProgrammingInfographic;