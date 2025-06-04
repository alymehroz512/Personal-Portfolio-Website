import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faNpm,
  faNode,
  faReact,
  faJs,
  faBootstrap,
  faHtml5,
  faCss3,
  faDocker,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faServer,
  faCode,
  faVial,
  faVialCircleCheck,
  faGears,
  faPalette,
  faCloud,
  faTerminal,
  faBoxOpen,
  faArrowRight,
  faWind,
  faShieldAlt,
  faNetworkWired,
  faKey,
  faInfinity,
  faRocket,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons';
import { SkeletonCard } from '../components/SkeletonLoader';

const Development = () => {
  const [loading, setLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState({});
  const [mongoLoading, setMongoLoading] = useState(true);

  useEffect(() => {
    // Initialize loading states for all tools
    const initialLoadingStates = {};
    developmentTools.forEach(section => {
      section.tools.forEach(tool => {
        initialLoadingStates[tool.name] = true;
      });
    });
    setLoadingStates(initialLoadingStates);

    // Simulate main loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Simulate MongoDB loading delay
    const mongoTimer = setTimeout(() => {
      setMongoLoading(false);
    }, 2000);

    // Create staggered loading effects for each tool
    developmentTools.forEach(section => {
      section.tools.forEach((tool) => {
        const delay = 1500 + (Math.random() * 1000); // Random delay between 1.5s and 2.5s
        setTimeout(() => {
          setLoadingStates(prev => ({
            ...prev,
            [tool.name]: false
          }));
        }, delay);
      });
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(mongoTimer);
    };
  }, []);

  const developmentTools = [
    {
      category: "Core MERN Stack",
      tools: [
        {
          name: "MongoDB",
          icon: faDatabase,
          description: "NoSQL database for flexible, document-based data storage",
          link: "https://www.mongodb.com/"
        },
        {
          name: "Express.js",
          icon: faServer,
          description: "Backend web framework for Node.js",
          link: "https://expressjs.com/"
        },
        {
          name: "React",
          icon: faReact,
          description: "Frontend library for building user interfaces",
          link: "https://reactjs.org/"
        },
        {
          name: "Node.js",
          icon: faNode,
          description: "JavaScript runtime environment",
          link: "https://nodejs.org/"
        }
      ]
    },
    {
      category: "Frontend Development",
      tools: [
        {
          name: "HTML5",
          icon: faHtml5,
          description: "Structure and content of web pages",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
          name: "CSS3",
          icon: faCss3,
          description: "Styling and layout of web pages",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
          name: "JavaScript",
          icon: faJs,
          description: "Programming language for web development",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
          name: "Bootstrap",
          icon: faBootstrap,
          description: "Frontend framework for responsive design",
          link: "https://getbootstrap.com/"
        },
        {
          name: "Material UI",
          icon: faPalette,
          description: "React UI framework following Material Design",
          link: "https://mui.com/"
        },
        {
          name: "Tailwind CSS",
          icon: faWind,
          description: "Utility-first CSS framework for rapid UI development",
          link: "https://tailwindcss.com/"
        }
      ]
    },
    {
      category: "Backend Development",
      tools: [
        {
          name: "Node.js",
          icon: faNode,
          description: "Server-side JavaScript runtime environment",
          link: "https://nodejs.org/"
        },
        {
          name: "Express.js",
          icon: faServer,
          description: "Fast, unopinionated web framework for Node.js",
          link: "https://expressjs.com/"
        },
        {
          name: "MongoDB",
          icon: faDatabase,
          description: "Document-based NoSQL database",
          link: "https://www.mongodb.com/"
        },
        {
          name: "RESTful APIs",
          icon: faNetworkWired,
          description: "Architecture style for designing networked applications",
          link: "https://restfulapi.net/"
        },
        {
          name: "JWT",
          icon: faKey,
          description: "JSON Web Tokens for secure authentication",
          link: "https://jwt.io/"
        },
        {
          name: "Socket.io",
          icon: faInfinity,
          description: "Real-time bidirectional event-based communication",
          link: "https://socket.io/"
        },
        {
          name: "Authentication",
          icon: faShieldAlt,
          description: "User authentication and authorization systems",
          link: "https://www.oauth.com/"
        }
      ]
    },
    {
      category: "API & State Management Tools",
      tools: [
        {
          name: "Axios",
          icon: faCodeBranch,
          description: "Promise-based HTTP client for making API calls",
          link: "https://axios-http.com/"
        },
        {
          name: "Redux Toolkit",
          icon: faGears,
          description: "Efficient state management library for React applications",
          link: "https://redux-toolkit.js.org/"
        },
        {
          name: "React Router",
          icon: faArrowRight,
          description: "Declarative routing for React applications",
          link: "https://reactrouter.com/"
        }
      ]
    },
    {
      category: "Development Tools",
      tools: [
        {
          name: "VS Code",
          icon: faCode,
          description: "Code editor with powerful extensions",
          link: "https://code.visualstudio.com/"
        },
        {
          name: "npm",
          icon: faNpm,
          description: "Package manager for JavaScript",
          link: "https://www.npmjs.com/"
        },
        {
          name: "Git",
          icon: faGitAlt,
          description: "Version control system",
          link: "https://git-scm.com/"
        },
        {
          name: "GitHub",
          icon: faGithub,
          description: "Platform for code hosting and collaboration",
          link: "https://github.com/"
        }
      ]
    },
    {
      category: "Testing & Optimization",
      tools: [
        {
          name: "Jest",
          icon: faVial,
          description: "JavaScript testing framework",
          link: "https://jestjs.io/"
        },
        {
          name: "React Testing Library",
          icon: faVialCircleCheck,
          description: "Testing utilities for React components",
          link: "https://testing-library.com/react"
        },
        {
          name: "Postman",
          icon: faRocket,
          description: "API development and testing platform",
          link: "https://www.postman.com/"
        },
        {
          name: "Webpack / Vite",
          icon: faBoxOpen,
          description: "Module bundler for JavaScript",
          link: "https://webpack.js.org/"
        },
        {
          name: "Babel",
          icon: faGears,
          description: "JavaScript compiler",
          link: "https://babeljs.io/"
        }
      ]
    },
    {
      category: "Deployment & DevOps",
      tools: [
        {
          name: "Docker",
          icon: faDocker,
          description: "Container platform",
          link: "https://www.docker.com/"
        },
        {
          name: "Heroku",
          icon: faCloud,
          description: "Cloud platform for hosting applications",
          link: "https://www.heroku.com/"
        },
        {
          name: "Netlify",
          icon: faCloud,
          description: "Modern platform for automated deployments",
          link: "https://www.netlify.com/"
        },
        {
          name: "Vercel",
          icon: faCloud,
          description: "Platform for frontend frameworks and static sites",
          link: "https://vercel.com/"
        },
        {
          name: "Terminal",
          icon: faTerminal,
          description: "Command-line interface",
          link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
        },
        {
          name: "PM2",
          icon: faGears,
          description: "Process manager for Node.js",
          link: "https://pm2.keymetrics.io/"
        }
      ]
    }
  ];

  const ToolCardSkeleton = () => (
    <div className="tool-card">
      <div className="skeleton-base" style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(117, 93, 197, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.8rem'
      }}>
        <div className="skeleton-icon" style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(117, 93, 197, 0.2)',
          borderRadius: '50%',
          animation: 'shimmer 2s infinite linear',
          marginTop: '14px'
        }}></div>
      </div>
      <div className="tool-info">
        <div className="skeleton-text" style={{ 
          width: '60%', 
          height: '24px', 
          marginBottom: '10px',
          fontSize: '1.2rem',
          fontWeight: '500'
        }}></div>
        <div className="skeleton-text" style={{ width: '100%', height: '18px', marginBottom: '15px' }}></div>
        <div className="skeleton-text" style={{ width: '30%', height: '16px' }}></div>
      </div>
    </div>
  );

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-md-5 p-3">
      <div className="home-container card p-md-5 p-3" style={{ width: '100%', maxWidth: '100%' }}>
        <h1 className="home-title">Development Tools</h1>
        <hr className="title-hr" />

        <div className="tools-container">
          {developmentTools.map((section, sectionIndex) => (
            <div key={sectionIndex} className="tools-section">
              <h2 className="category-title">{section.category}</h2>
              <div className="tools-grid">
                {loading ? (
                  section.tools.map((_, toolIndex) => (
                    <ToolCardSkeleton key={toolIndex} />
                  ))
                ) : (
                  section.tools.map((tool, toolIndex) => (
                    <a
                      key={toolIndex}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-card"
                    >
                      <div className="tool-icon" style={{ borderRadius: '0' }}>
                        <FontAwesomeIcon icon={tool.icon} />
                      </div>
                      <div className="tool-info">
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p>
                        <button className="custom-btn btn-sm" style={{ 
                          padding: '8px 16px', 
                          fontSize: '0.875rem' ,
                        }}>
                          Learn More <FontAwesomeIcon icon={faArrowRight} className="ms-2" style={{
                            transition: 'transform 0.3s ease'
                          }} />
                        </button>
                      </div>
                    </a>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Development; 