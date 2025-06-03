import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { SkeletonAccordion } from '../components/SkeletonLoader';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-md-5 p-3">
      <div className="home-container card p-md-5 p-3" style={{ width: '100%', maxWidth: '100%' }}>
        <h1 className="home-title">About Me</h1>
        <hr className="title-hr" />
        
        <div className="accordion mt-4 w-100" id="aboutAccordion">
          {loading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="mb-3">
                <SkeletonAccordion />
              </div>
            ))
          ) : (
            <>
              {/* Extended Bio */}
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
                    <FontAwesomeIcon icon={faUser} className="me-2" /> 
                    <span className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>
                      Extended Bio
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne" 
                  className="accordion-collapse collapse show" 
                  data-bs-parent="#aboutAccordion"
                >
                  <div className="accordion-body">
                    <div className="bio-content">
                      <p className="mb-0">
                        Based in Lahore, I specialize in frontend development using modern web technologies. 
                        I enjoy solving problems, working collaboratively in teams, and building user-friendly interfaces. 
                        I'm confident with state management, API integration, and enjoy writing clean, testable code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
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
                    <FontAwesomeIcon icon={faGraduationCap} className="me-2" /> 
                    <span className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>
                      Education
                    </span>
                  </button>
                </h2>
                <div 
                  id="collapseTwo" 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#aboutAccordion"
                >
                  <div className="accordion-body">
                    <div className="education-content">
                      <div className="education-item">
                        <h4>Bachelor's in Software Engineering</h4>
                        <p>PMAS Arid Agriculture University, Rwp (2020–2024)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <FontAwesomeIcon icon={faLightbulb} className="me-2" /> 
                    <span className="d-inline-block text-truncate" style={{ maxWidth: '200px' }}>
                      Soft Skills
                    </span>
                  </button>
                </h2>
                <div 
                  id="collapseThree" 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#aboutAccordion"
                >
                  <div className="accordion-body">
                    <ul className="skill-list">
                      <li>Problem Solving</li>
                      <li>Time Management</li>
                      <li>Team Collaboration</li>
                      <li>Communication</li>
                      <li>Customer Service</li>
                    </ul>
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

export default About;
