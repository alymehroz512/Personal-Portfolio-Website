import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faUser,
  faCode,
  faBriefcase,
  faLaptopCode,
  faTools,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-header">
          <h2 className="nav-brand">Ali Mehroz</h2>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {menuOpen && (
          <ul className="nav-links show">
            <li onClick={() => handleNavigation('/')}>
              <FontAwesomeIcon icon={faHome} className="me-2" /> Home
            </li>
            <li onClick={() => handleNavigation('/about')}>
              <FontAwesomeIcon icon={faUser} className="me-2" /> About
            </li>
            <li onClick={() => handleNavigation('/skills')}>
              <FontAwesomeIcon icon={faCode} className="me-2" /> Skills
            </li>
            <li onClick={() => handleNavigation('/experience')}>
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Experience
            </li>
            <li onClick={() => handleNavigation('/projects')}>
              <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Projects
            </li>
            <li onClick={() => handleNavigation('/tools')}>
              <FontAwesomeIcon icon={faTools} className="me-2" /> Development
            </li>
            <li onClick={() => handleNavigation('/contact')}>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contact
            </li>
          </ul>
        )}
      </nav>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
