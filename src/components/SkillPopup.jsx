import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faFlask, faVialCircleCheck } from '@fortawesome/free-solid-svg-icons';

const SkillPopup = ({ skill, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500); // Match animation duration
  };

  const skillIcons = {
    "Jest": faFlask,
    "React Testing Library": faVialCircleCheck
  };

  const getIcon = (skillName) => {
    return skillIcons[skillName] || skill.icon;
  };

  const skillDetails = {
    "React.js": {
      description: "A JavaScript library for building user interfaces with reusable components.",
      features: [
        "Component-Based Architecture",
        "Virtual DOM for Performance",
        "Unidirectional Data Flow",
        "Rich Ecosystem and Community"
      ],
      experience: ["Advanced proficiency with 3+ years of experience"],
      projects: ["Built multiple production-ready applications"]
    },
    "JavaScript": {
      description: "A versatile, lightweight programming language for creating interactive web applications.",
      features: [
        "Lightweight and interpreted programming language",
        "Supports event-driven programming model",
        "Used for client-side scripting",
        "Enables dynamic web page content",
        "ES6+ Features",
        "Asynchronous Programming"
      ],
      experience: ["Advanced proficiency with modern JavaScript"],
      projects: ["Developed numerous interactive web applications"]
    },
    "Redux Toolkit": {
      description: "The official, opinionated toolkit for efficient Redux development.",
      features: [
        "Simplifies Redux state management setup",
        "Includes powerful data fetching utilities",
        "Reduces boilerplate Redux code",
        "Supports immutable state updates easily",
        "Built-in DevTools integration",
        "TypeScript support out of the box"
      ],
      experience: ["Proficient in state management with Redux Toolkit"],
      projects: ["Implemented in multiple React applications"]
    },
    "Bootstrap": {
      description: "A popular CSS framework for building responsive and modern web interfaces.",
      features: [
        "Responsive design with mobile support",
        "Predefined components for faster development",
        "Built-in support for JavaScript plugins",
        "Customizable with Sass variables easily",
        "Extensive grid system",
        "Cross-browser compatibility"
      ],
      experience: ["Advanced proficiency in responsive web design"],
      projects: ["Created multiple responsive websites and applications"]
    },
    "Tailwind CSS": {
      description: "A utility-first CSS framework for rapidly building custom user interfaces.",
      features: [
        "Utility-first approach to styling elements",
        "Highly customizable with configuration file",
        "Responsive design using utility classes",
        "No need for custom CSS",
        "JIT (Just-In-Time) compilation",
        "Extensive plugin ecosystem"
      ],
      experience: ["Proficient in rapid UI development with Tailwind"],
      projects: ["Built modern, responsive interfaces using utility-first approach"]
    },
    "Material UI": {
      description: "A comprehensive React UI framework following Google's Material Design principles.",
      features: [
        "Implements Google's Material Design system",
        "Pre-built responsive UI components available",
        "Easily customizable theme and styles",
        "Supports dark mode by default",
        "Rich set of icons and typography",
        "Advanced component composition"
      ],
      experience: ["Proficient in building applications with Material UI"],
      projects: ["Developed multiple professional applications with consistent design"]
    },
    "Postman": {
      description: "A powerful API development and testing platform with a user-friendly interface.",
      features: [
        "API testing with user-friendly interface",
        "Supports automated and manual testing",
        "Easily manages environment-based variables",
        "Enables team collaboration on APIs",
        "Request history and collection organization",
        "API documentation generation"
      ],
      experience: ["Proficient in API testing and development using Postman"],
      projects: ["Used extensively for testing and documenting APIs in multiple projects"]
    },
    "Axios": {
      description: "A powerful HTTP client for making API requests in JavaScript applications.",
      features: [
        "Promise-based HTTP request library",
        "Supports request and response interceptors",
        "Handles automatic JSON data transformation",
        "Works in browser and Node.js",
        "Built-in XSRF protection",
        "Request/response timeout handling"
      ],
      experience: ["Proficient in API integration and data fetching"],
      projects: ["Implemented RESTful API integrations in multiple applications"]
    },
    "npm": {
      description: "The default package manager for Node.js and JavaScript development.",
      features: [
        "Manages project dependencies with ease",
        "Access to vast package registry",
        "Supports version control for packages",
        "Allows script automation for tasks",
        "Security vulnerability scanning",
        "Workspace support for monorepos"
      ],
      experience: ["Expert in dependency management and project automation"],
      projects: ["Managed dependencies for numerous JavaScript applications"]
    },
    "Git": {
      description: "A powerful distributed version control system for tracking code changes.",
      features: [
        "Distributed version control system functionality",
        "Tracks changes across project history",
        "Supports branching and merging easily",
        "Enables team collaboration on code",
        "Conflict resolution tools",
        "Local and remote repository management"
      ],
      experience: ["Advanced proficiency in version control and collaboration"],
      projects: ["Managed version control for multiple team projects"]
    },
    "GitHub": {
      description: "A web-based platform for version control and collaboration using Git.",
      features: [
        "Hosts Git repositories in cloud",
        "Supports collaboration with pull requests",
        "Provides issue tracking and discussions",
        "Integrates with CI/CD workflows",
        "Project management with boards",
        "Advanced code review features"
      ],
      experience: ["Proficient in collaborative development workflows"],
      projects: ["Managed multiple open-source and team projects"]
    },
    "Jest": {
      description: "A comprehensive JavaScript testing framework focused on simplicity.",
      features: [
        "JavaScript testing framework with snapshots",
        "Built-in code coverage reporting tools",
        "Easy mocking for unit tests",
        "Runs tests in parallel efficiently",
        "Interactive testing mode",
        "Extensive assertion library"
      ],
      experience: ["Proficient in writing and maintaining test suites"],
      projects: ["Implemented comprehensive test coverage for React applications"]
    },
    "React Testing Library": {
      description: "A testing utility focused on testing React components from the user's perspective.",
      features: [
        "Focuses on testing user behavior",
        "Encourages accessible DOM queries usage",
        "Minimal implementation details exposure",
        "Works well with Jest framework",
        "Promotes better testing practices",
        "Built-in async utilities"
      ],
      experience: ["Proficient in writing user-centric component tests"],
      projects: ["Implemented comprehensive test suites for React applications"]
    },
    "HTML5": {
      description: "The latest version of the markup language for structuring web content.",
      features: [
        "Semantic Elements",
        "Audio and Video Support",
        "Canvas for Graphics",
        "Local Storage Capabilities"
      ],
      experience: ["Expert level with 4+ years of experience"],
      projects: ["Developed numerous responsive websites"]
    },
    "CSS3": {
      description: "The styling language that brings design and layout to web pages.",
      features: [
        "Flexbox & Grid Layouts",
        "Animations & Transitions",
        "Media Queries",
        "Custom Variables"
      ],
      experience: ["Advanced proficiency with modern features"],
      projects: ["Created complex responsive layouts"]
    }
  };

  const details = skillDetails[skill.name] || {
    description: "A powerful tool in modern web development.",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    experience: ["Proficient level"],
    projects: ["Various development projects"]
  };

  return (
    <div className="skill-popup-overlay">
      <div className={`skill-popup-content ${isClosing ? 'closing' : ''}`}>
        <div className="skill-popup-header">
          <FontAwesomeIcon icon={getIcon(skill.name)} className="skill-popup-icon" />
          <h3>{skill.name}</h3>
          <button className="skill-popup-close" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="skill-popup-body">
          <p className="skill-popup-description">{details.description}</p>
          
          <div className="skill-popup-section">
            <h4>Key Features</h4>
            <ul className="skill-popup-features">
              {details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="skill-popup-section">
            <h4>Experience Level</h4>
            <ul className="skill-popup-features">
              {details.experience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>

          <div className="skill-popup-section">
            <h4>Project Experience</h4>
            <ul className="skill-popup-features">
              {details.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPopup; 