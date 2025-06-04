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
  faEnvelope,
  faDownload,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/Ali Mehroz.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ali Mehroz.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  const handleExternalLink = (url) => {
    window.open(url, '_blank');
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

        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
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
          <li>
            <a onClick={handleDownloadResume} className="btn custom-btn nav-btn" href="#" role="button">
              <FontAwesomeIcon icon={faDownload} className="me-2" /> Download Resume
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/contact')} className="btn custom-btn nav-btn" role="button">
              <FontAwesomeIcon icon={faHandshake} className="me-2" /> Hire Me
            </a>
          </li>
          {/* Social Icons */}
          <li className='justify-content-center'>
            <a onClick={() => handleExternalLink('https://wa.me/+923484149332')} href="#" className="btn custom-btn nav-btn">
              <FontAwesomeIcon icon={faWhatsapp} className="me-2" /> Whatsapp
            </a>
            <a onClick={() => handleExternalLink('https://github.com/alymehroz512')} href="#" className="btn custom-btn nav-btn">
              <FontAwesomeIcon icon={faGithub} className="me-2" /> Git Hub
            </a>
            <a onClick={() => handleExternalLink('https://www.linkedin.com/in/ali-mehroz-a1ba9a226/')} href="#" className="btn custom-btn nav-btn">
              <FontAwesomeIcon icon={faLinkedin} className="me-2" /> Linkdin
            </a>
          </li>
        </ul>
      </nav>

      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;