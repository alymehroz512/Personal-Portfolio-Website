import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faNpm,
  faGitAlt,
  faNode
} from '@fortawesome/free-brands-svg-icons';
import { 
  faChartLine,
  faGears,
  faCodeBranch,
  faListCheck,
  faLayerGroup,
  faFlask,
  faArrowUpRightFromSquare,
  faCircleCheck,
  faSpinner,
  faShareNodes,
  faArrowRight,
  faCode,
  faUser,
  faGamepad,
  faDatabase,
  faServer,
  faRoute,
  faCloud,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  // Add styles at the top of the component
  const skeletonStyles = {
    '@keyframes pulse': {
      '0%': { opacity: 0.6 },
      '50%': { opacity: 0.8 },
      '100%': { opacity: 0.6 }
    },
    '.skeleton-tech-badge': {
      backgroundColor: '#e0e0e0',
      animation: 'pulse 1.5s infinite',
      margin: '4px',
      display: 'flex',
      alignItems: 'center',
      padding: '6px 12px'
    },
    '.skeleton-view-all-button': {
      width: '280px',
      height: '52px',
      backgroundColor: '#e0e0e0',
      animation: 'pulse 1.5s infinite',
      display: 'inline-block'
    }
  };

  // Add style tag to the component
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 0.8; }
        100% { opacity: 0.6; }
      }
      .skeleton-tech-badge {
        background-color: #e0e0e0;
        border-radius: 5px;
        animation: pulse 1.5s infinite;
        margin: 4px;
        display: flex;
        align-items: center;
        padding: 6px 12px;
      }
      .skeleton-view-all-button {
        width: 280px;
        height: 52px;
        background-color: #e0e0e0;
        animation: pulse 1.5s infinite;
        display: inline-block;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Admin Dashboard",
      status: "In Progress",
      icon: faChartLine,
      description: "Comprehensive admin dashboard with real-time data handling capabilities.",
      features: [
        "Real-time data visualization and management",
        "System settings and configuration modules",
        "Advanced analytics and reporting features",
        "Fully responsive design for all devices",
        "Role-based access control system"
      ],
      technologies: [
        { name: "React", icon: faReact },
        { name: "Redux Toolkit", icon: faGears },
        { name: "JavaScript", icon: faJs },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Jest", icon: faFlask },
        { name: "React Testing Library", icon: faFlask },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "npm", icon: faNpm },
        { name: "Postman", icon: faRocket }
      ],
      statusIcon: faSpinner,
      statusClass: "text-warning",
      githubUrl: "https://github.com/alymehroz512"
    },
    {
      title: "Journey-Xtreme Virtual Reality",
      status: "Completed",
      icon: faRoute,
      description: "Final Year Project an immersive VR travelling experience built with MERN stack.",
      features: [
        "Immersive VR environment with realistic interactions",
        "User authentication and profile management",
        "Real-time multiplayer functionality",
        "MongoDB database for game progress tracking",
        "RESTful API endpoints for game operations"
      ],
      technologies: [
        { name: "MongoDB", icon: faDatabase },
        { name: "Express.js", icon: faServer },
        { name: "React", icon: faReact },
        { name: "Node.js", icon: faNode },
        { name: "JavaScript", icon: faJs },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "Postman", icon: faRocket }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512/Journey-Xtreme-Virtual-Reality-FYP"
    },
    {
      title: "TaskFlow App",
      status: "Completed",
      icon: faListCheck,
      description: "Trello-inspired task management application with comprehensive features.",
      features: [
        "Customizable boards and folders organization",
        "Task status tracking (Pending, Active, Complete, Delete)",
        "Real-time UI updates and smooth animations",
        "RESTful API integration using Axios",
        "Comprehensive testing suite with Jest"
      ],
      technologies: [
        { name: "React", icon: faReact },
        { name: "Redux Toolkit", icon: faGears },
        { name: "JavaScript", icon: faJs },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Jest", icon: faFlask },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "npm", icon: faNpm }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512"
    },
    {
      title: "MySocial App",
      status: "Completed",
      icon: faShareNodes,
      description: "Feature-rich social networking application frontend.",
      features: [
        "Dynamic user posts and feeds",
        "Interactive user engagement features",
        "Real-time notifications system",
        "Optimized performance and loading",
        "Enhanced user experience with modern UI"
      ],
      technologies: [
        { name: "React", icon: faReact },
        { name: "Redux Toolkit", icon: faGears },
        { name: "JavaScript", icon: faJs },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "npm", icon: faNpm }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512"
    },
    {
      title: "Portfolio Website",
      status: "Completed",
      icon: faUser,
      description: "Responsive portfolio website showcasing my projects and skills.",
      features: [
        "Modern and responsive design",
        "Project showcase with detailed information",
        "Skills and experience sections",
        "Contact form integration",
        "Smooth animations and transitions"
      ],
      technologies: [
        { name: "React", icon: faReact },
        { name: "JavaScript", icon: faJs },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "npm", icon: faNpm }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512/Portfolio-Website"
    },
    {
      title: "Resume Website",
      status: "Completed",
      icon: faLayerGroup,
      description: "Simple responsive resume website with clean design.",
      features: [
        "Clean and professional layout",
        "Responsive design for all devices",
        "Easy to update content structure",
        "Bootstrap-based components",
        "Optimized for readability"
      ],
      technologies: [
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512/Resume-Webiste"
    },
    {
      title: "Tic-Tac-Toe Game",
      status: "Completed",
      icon: faGamepad,
      description: "Interactive Tic-Tac-Toe game built with JavaScript.",
      features: [
        "Two-player gameplay",
        "Win detection algorithm",
        "Score tracking",
        "Reset and replay functionality",
        "Responsive game board"
      ],
      technologies: [
        { name: "JavaScript", icon: faJs },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512/Tic-Tac-Toe-Game"
    },
    {
      title: "Tourism Website",
      status: "Completed",
      icon: faRoute,
      description: "Responsive tourism website showcasing travel destinations and booking features.",
      features: [
        "Responsive design for all devices",
        "Interactive travel destination showcase",
        "Booking and reservation system",
        "Travel packages and pricing information",
        "User-friendly navigation and interface"
      ],
      technologies: [
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "JavaScript", icon: faJs },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512/Tourism-Website"
    },
    {
      title: "Weather App",
      status: "Completed",
      icon: faCloud,
      description: "Dynamic weather application with real-time weather data and forecasting.",
      features: [
        "Real-time weather data integration",
        "Location-based weather updates",
        "5-day weather forecast",
        "Responsive and intuitive UI",
        "Dynamic weather icons and animations"
      ],
      technologies: [
        { name: "React", icon: faReact },
        { name: "JavaScript", icon: faJs },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub }
      ],
      statusIcon: faCircleCheck,
      statusClass: "text-success",
      githubUrl: "https://github.com/alymehroz512/Weather-App"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card-horizontal">
      <div className="project-card-left">
        <div className="project-header">
          <div className="d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={project.icon} className="project-icon" />
            <h3 className="project-title mb-0">{project.title}</h3>
          </div>
          <span className={`project-status ${project.statusClass}`}>
            <FontAwesomeIcon icon={project.statusIcon} className="me-2" />
            {project.status}
          </span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-section">
          <h4 className="section-title">Key Features</h4>
          <ul className="project-features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-card-right">
        <div className="project-section mb-4">
          <h4 className="section-title">Technologies</h4>
          <div className="d-flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="badge bg-primary">
                <FontAwesomeIcon icon={tech.icon} className="me-2" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn custom-btn w-100"
        >
          <FontAwesomeIcon icon={faGithub} className="me-2" />
          View on GitHub
          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-md-5 p-3">
      <div className="home-container card p-md-5 p-3" style={{ width: '100%', maxWidth: '100%' }}>
        <h1 className="home-title">Projects</h1>
        <hr className="title-hr" />
        
        <div className="projects-grid">
          {loading ? (
            <div className="d-flex flex-column gap-4">
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="skeleton-project-card-horizontal">
                  <div className="skeleton-project-left">
                    <div className="skeleton-project-header">
                      <div className="d-flex align-items-center gap-2">
                        <div className="skeleton-icon"></div>
                        <div className="skeleton-text" style={{ width: '200px', height: '24px' }}></div>
                      </div>
                      <div className="skeleton-text" style={{ width: '100px', height: '20px' }}></div>
                    </div>
                    <div className="skeleton-project-body">
                      <div className="skeleton-text" style={{ width: '90%' }}></div>
                      <div className="skeleton-text" style={{ width: '85%' }}></div>
                      <div className="skeleton-text" style={{ width: '80%' }}></div>
                    </div>
                    <div className="mt-4">
                      <div className="skeleton-text mb-3" style={{ width: '150px', height: '24px' }}></div>
                      <div className="d-flex flex-column gap-2">
                        <div className="skeleton-text" style={{ width: '85%' }}></div>
                        <div className="skeleton-text" style={{ width: '80%' }}></div>
                        <div className="skeleton-text" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="skeleton-project-right">
                    <div className="mb-4">
                      <div className="skeleton-text mb-3" style={{ width: '150px', height: '24px' }}></div>
                      <div className="d-flex flex-wrap gap-2">
                        {Array(12).fill(0).map((_, i) => (
                          <div key={i} className="skeleton-tech-badge" style={{
                            width: i % 3 === 0 ? '140px' : i % 2 === 0 ? '120px' : '100px',
                            height: '32px'
                          }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="skeleton-button"></div>
                  </div>
                </div>
              ))}
              <div className="text-center mt-5">
                <div className="skeleton-view-all-button mx-auto"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="d-flex flex-column gap-4">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
              <div className="text-center mt-5">
                <a 
                  href="https://github.com/alymehroz512?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn custom-btn btn-lg"
                >
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  View All Projects on GitHub
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects; 