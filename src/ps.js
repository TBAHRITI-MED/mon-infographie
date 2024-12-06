import React, { useState } from 'react';
import { CircleIcon, CodeIcon, MonitorIcon, BugIcon, RocketIcon, FileTextIcon } from 'lucide-react';
import { motion } from 'framer-motion';  // Import pour les animations

const Ps = () => {
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

  // Animation des cartes au survol
  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 20px rgba(0,0,0,0.3)" },
    initial: { scale: 1, boxShadow: "0px 5px 10px rgba(0,0,0,0.1)" }
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

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Programming in Practice: From Concept to Code
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm shadow-xl cursor-pointer"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              <div className="flex items-start space-x-4">
                <step.icon size={32} color={step.color} />
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  {activeStep === index && (
                    <ul className="mt-2 space-y-1 text-slate-300">
                      {step.details.map((detail, idx) => (
                        <li key={idx}>• {detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ajout de la section Language Selection */}
        <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm shadow-xl mt-8">
          {/* Contenu existant */}
        </div>

        {/* Glossaire */}
        <div className="mt-12 bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-green-400">Glossary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {glossary.map(({ term, def }, index) => (
              <div
                key={index}
                onClick={() => handleTermClick(index)}
                className={`bg-slate-700/50 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  expandedTerm === index ? 'scale-110 shadow-lg z-10' : ''
                }`}
              >
                <h4 className="text-lg font-semibold mb-2 text-yellow-300">{term}</h4>
                {expandedTerm === index && <p className="text-sm text-slate-300">{def}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ps;
