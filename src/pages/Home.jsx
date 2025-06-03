import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { SkeletonHomeContent } from '../components/SkeletonLoader';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Get the resume file URL
    const resumeUrl = '/Ali Mehroz.pdf';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ali Mehroz.pdf'; // This will be the downloaded file name
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-5">
      <div className="home-container card p-5" style={{ width: '100%', maxWidth: '100%' }}>
        <h1 className="home-title">React Frontend Developer & QA</h1>
        <hr className="title-hr" />
        {loading ? (
          <SkeletonHomeContent />
        ) : (
          <>
            <p className="home-description">
              Hello! this is Ali Mehroz and I'm a passionate React Frontend Developer with real-world experience building responsive, scalable web
              applications using React and Redux. I enjoy turning UI/UX designs into clean, functional interfaces and
              thrive on creating smooth user experiences. I'm confident with state management, API integration, and enjoy writing clean, testable code.
            </p>

            <div className="mt-4 button-group d-flex align-items-center justify-content-start">
              <a onClick={handleDownloadResume} className="btn custom-btn" href="#" role="button">
                <FontAwesomeIcon icon={faDownload} className="me-2" /> Download Resume
              </a>
              <div className="button-divider"></div>
              <a onClick={() => navigate('/contact')} className="btn custom-btn" role="button">
                <FontAwesomeIcon icon={faHandshake} className="me-2" /> Hire Me
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
