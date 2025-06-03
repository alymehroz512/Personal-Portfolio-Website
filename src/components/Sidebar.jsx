import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faChevronLeft, 
  faHome,
  faUser,
  faCode,
  faBriefcase,
  faLaptopCode,
  faTools,
  faEnvelope,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleNavigation = (path) => {
    if (isMobile) {
      setSidebarActive(false);
    }
    navigate(path);
  };

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar" className={sidebarActive ? 'active' : ''}>
        <div className="custom-menu">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary d-flex justify-content-center align-items-center"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon 
              icon={sidebarActive ? faBars : faChevronLeft} 
              className="text-white"
            />
          </button>
        </div>
        <div className="sidebar-content">
          <h2>Ali Mehroz</h2>
          <ul className="list-unstyled components">
            <li>
              <a onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faHome} className="me-2" /> Home
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faUser} className="me-2" /> About
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/skills')} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faCode} className="me-2" /> Skills
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/experience')} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Experience
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/projects')} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Projects
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/tools')} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faTools} className="me-2" /> Development
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/contact')} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contact
              </a>
            </li>
          </ul>
          <div className="footer">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
              <FontAwesomeIcon icon={faHeart} style={{ color: '#ffffff !important' }} /> by Ali Mehroz
            </p>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className={`content-area ${sidebarActive ? 'full' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
