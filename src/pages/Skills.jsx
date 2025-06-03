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
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode,
  faTools,
  faVial,
//   faLayerGroup,
  faCodeBranch,
  faGears,
  faWind,
  faPalette,
  faFlask,
  faVialCircleCheck,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { SkeletonCard } from '../components/SkeletonLoader';
import SkillPopup from '../components/SkillPopup';

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleClosePopup = () => {
    setSelectedSkill(null);
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faCode,
      skills: [
        { name: "React.js", icon: faReact },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "JavaScript", icon: faJs },
        { name: "Redux Toolkit", icon: faGears },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "Tailwind CSS", icon: faWind },
        { name: "Material UI", icon: faPalette },
        { name: "Axios", icon: faCodeBranch }
      ]
    },
    {
      title: "Development Tools",
      icon: faTools,
      skills: [
        { name: "npm", icon: faNpm },
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub }
      ]
    },
    {
      title: "Testing",
      icon: faVial,
      skills: [
        { name: "Jest", icon: faFlask },
        { name: "React Testing Library", icon: faVialCircleCheck },
        { name: "Postman", icon: faRocket }
      ]
    }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-md-5 p-3">
      <div className="home-container card p-md-5 p-3" style={{ width: '100%', maxWidth: '100%' }}>
        <h1 className="home-title">My Skills</h1>
        <hr className="title-hr" />
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category mb-4">
              <div className="category-header mb-3">
                <h2 className="category-title h3">
                  <FontAwesomeIcon icon={category.icon} className="me-2" />
                  {category.title}
                </h2>
              </div>
              <div className="row g-3">
                {loading ? (
                  Array(category.skills.length).fill(0).map((_, skillIndex) => (
                    <div key={skillIndex} className="col-6 col-sm-6 col-md-4 col-lg-3">
                      <SkeletonCard />
                    </div>
                  ))
                ) : (
                  category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="col-6 col-sm-6 col-md-4 col-lg-3">
                      <div 
                        className="individual-skill-card"
                        onClick={() => handleSkillClick(skill)}
                        style={{ cursor: 'pointer' }}
                      >
                        <FontAwesomeIcon icon={skill.icon} className="skill-icon mb-2" />
                        <h5 className="skill-name fs-6">{skill.name}</h5>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedSkill && (
          <SkillPopup 
            skill={selectedSkill} 
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Skills; 