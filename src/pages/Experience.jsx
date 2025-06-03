import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faNpm,
  faGithub,
  faGitAlt,
  faNode
} from '@fortawesome/free-brands-svg-icons';
import { 
  faBuilding,
  faGears,
  faWind,
  faPalette,
  faCodeBranch,
  faFlask,
  faVialCircleCheck,
  faLocationDot,
  faClock,
  faLaptopCode,
  faDatabase,
  faServer,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { SkeletonAccordion } from '../components/SkeletonLoader';

const Experience = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNode },
    { name: 'Express.js', icon: faServer },
    { name: 'MongoDB', icon: faDatabase },
    { name: 'Redux Toolkit', icon: faGears },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Material UI', icon: faPalette },
    { name: 'Tailwind CSS', icon: faWind },
    { name: 'Axios', icon: faCodeBranch },
    { name: 'Jest', icon: faFlask },
    { name: 'React Testing Library', icon: faVialCircleCheck },
    { name: 'npm', icon: faNpm },
    { name: 'Git', icon: faGitAlt },
    { name: 'GitHub', icon: faGithub },
    { name: 'Postman', icon: faRocket }
  ];

  const internTechnologies = [
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNode },
    { name: 'Express.js', icon: faServer },
    { name: 'MongoDB', icon: faDatabase },
    { name: 'Redux Toolkit', icon: faGears },
    { name: 'Material UI', icon: faPalette },
    { name: 'Tailwind CSS', icon: faWind },
    { name: 'Axios', icon: faCodeBranch },
    { name: 'JavaScript', icon: faJs },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'npm', icon: faNpm },
    { name: 'Git', icon: faGitAlt },
    { name: 'GitHub', icon: faGithub }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-md-5 p-3">
      <div className="home-container card p-md-5 p-3" style={{ width: '100%', maxWidth: '100%' }}>
        <h1 className="home-title">Experience</h1>
        <hr className="title-hr" />
        
        <div className="accordion mt-4 w-100" id="experienceAccordion">
          {loading ? (
            Array(2).fill(0).map((_, index) => (
              <div key={index} className="mb-3">
                <SkeletonAccordion />
              </div>
            ))
          ) : (
            <>
              {/* 2BVision Technologies */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <FontAwesomeIcon icon={faBuilding} className="me-2" /> 
                    <span className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>
                      2BVision Technologies
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne" 
                  className="accordion-collapse collapse show" 
                  data-bs-parent="#experienceAccordion"
                >
                  <div className="accordion-body">
                    <div className="bio-content">
                      <div className="mb-3">
                        <h4 className="text-primary mb-2">React Frontend Developer</h4>
                        <div className="d-flex align-items-center gap-3 text-muted mb-2">
                          <span>
                            <FontAwesomeIcon icon={faClock} className="me-2" />
                            February 2024 - Present
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                            Lahore, Pakistan · On-site
                          </span>
                        </div>
                        
                        <div className="feature-list mt-4">
                          <div className="mb-3">
                            <h5 className="mb-3">Key Responsibilities:</h5>
                            <ul className="skill-list">
                              <li>Leading development of scalable applications using modern tech stack</li>
                              <li>Implementing responsive designs and user interfaces</li>
                              <li>Collaborating with cross-functional teams for optimal performance</li>
                            </ul>
                          </div>
                          
                          <div className="mb-3">
                            <h5 className="mb-3">Technologies Used:</h5>
                            <div className="d-flex flex-wrap gap-2">
                              {technologies.map((tech, index) => (
                                <span key={index} className="badge bg-primary">
                                  <FontAwesomeIcon icon={tech.icon} className="me-2" />
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="mb-3">Key Achievements:</h5>
                            <ul className="skill-list">
                              <li>Improved application performance through code optimization</li>
                              <li>Enhanced code quality through comprehensive testing</li>
                              <li>Successfully collaborated with cross-functional teams</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* InterCraft Internship */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> 
                    <span className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>
                      InterCraft Pvt. Ltd.
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo" 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#experienceAccordion"
                >
                  <div className="accordion-body">
                    <div className="bio-content">
                      <div className="mb-3">
                        <h4 className="text-primary mb-2">Software Engineer Internship</h4>
                        <div className="d-flex align-items-center gap-3 text-muted mb-2">
                          <span>
                            <FontAwesomeIcon icon={faClock} className="me-2" />
                            May 2023 - October 2023 · 6 mos
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                            Islamabad, Pakistan · Hybrid
                          </span>
                        </div>
                        
                        <div className="feature-list mt-4">
                          <div className="mb-3">
                            <h5 className="mb-3">Experience Overview:</h5>
                            <ul className="skill-list">
                              <li>Gained invaluable experience in developing web applications using React and Node.js</li>
                              <li>Collaborated with senior developers on various projects</li>
                              <li>Learned and implemented industry best practices</li>
                            </ul>
                          </div>
                          
                          <div className="mb-3">
                            <h5 className="mb-3">Technologies Used:</h5>
                            <div className="d-flex flex-wrap gap-2">
                              {internTechnologies.map((tech, index) => (
                                <span key={index} className="badge bg-primary">
                                  <FontAwesomeIcon icon={tech.icon} className="me-2" />
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience; 