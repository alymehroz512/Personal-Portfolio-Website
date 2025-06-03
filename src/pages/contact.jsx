import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faUser, 
  faMessage, 
  faPaperPlane, 
  faSpinner,
  faMapMarkerAlt,
  faPhone,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { SkeletonSocialLink } from '../components/SkeletonLoader';

const skeletonStyles = {
  animation: 'shimmer 2s infinite linear',
  background: 'linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%)',
  backgroundSize: '1000px 100%',
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendGmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_a8q5e8d",
        "template_cpbuhez",
        formData,
        "Dx3xeIMyle1WkTixU"
      );

      console.log("SUCCESS!", result);
      setNotification({
        type: 'success',
        message: 'Your message was sent successfully!'
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.log("FAILED...", error);
      setNotification({
        type: 'error',
        message: 'Failed to send the message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  const contactInfo = [
    {
      id: 'location',
      icon: faMapMarkerAlt,
      title: 'Location',
      value: 'Lahore, Pakistan',
      description: 'Available for local and remote opportunities'
    },
    {
      id: 'phone',
      icon: faPhone,
      title: 'Phone',
      value: '+92 348 4149332',
      link: 'tel:+923484149332',
      description: 'Available during business hours'
    },
    {
      id: 'email',
      icon: faEnvelope,
      title: 'Email',
      value: 'alimehroz621@gmail.com',
      link: 'mailto:alimehroz621@gmail.com'
    }
  ];

  const socialLinks = [
    {
      id: 'whatsapp',
      icon: faWhatsapp,
      link: 'https://wa.me/+923484149332',
      label: 'WhatsApp'
    },
    {
      id: 'github',
      icon: faGithub,
      link: 'https://github.com/alymehroz512',
      label: 'GitHub'
    },
    {
      id: 'linkedin',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/ali-mehroz-a1ba9a226/',
      label: 'LinkedIn'
    }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 p-md-5 p-3">
      <div className="home-container card p-md-5 p-3" style={{ width: '100%', maxWidth: '100%' }}>
        <h1 className="home-title">Contact Me</h1>
        <hr className="title-hr" />
        <p className="home-description">Let's collaborate and build something extraordinary together</p>

        <div className="contact-container">
          {loading ? (
            <div className="contact-content">
              <div className="contact-info-section">
                <div className="info-header">
                  <h2>Get in Touch</h2>
                  <p>Feel free to reach out through any of these channels or send a message below</p>
                </div>
                <div className="info-cards">
                  {contactInfo.map((info) => (
                    <div key={info.id} className="contact-info-card" style={{ borderRadius: '0%' }}>
                      <div
                        className="skeleton-icon"
                        style={{ ...skeletonStyles, width: '40px', height: '40px', borderRadius: '50%', marginRight: '1rem' }}
                      ></div>
                      <div className="info-details">
                        <div
                          className="skeleton-title"
                          style={{ ...skeletonStyles, height: '20px', width: '100px', marginBottom: '0.5rem' }}
                        ></div>
                        <div
                          className="skeleton-value"
                          style={{ ...skeletonStyles, height: '20px', width: '60%', marginBottom: '0.5rem' }}
                        ></div>
                        {info.description && (
                          <div
                            className="skeleton-description"
                            style={{ ...skeletonStyles, height: '18px', width: '80%' }}
                          ></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="contact-form-section">
                <div className="form-header">
                  <h2>Send Message</h2>
                  <p>Have a project in mind? Let's discuss it.</p>
                </div>
                <div className="contact-form">
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FontAwesomeIcon icon={faUser} className="input-icon" />
                      <div className="skeleton-input" style={{ ...skeletonStyles, height: '48px', width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                      <div className="skeleton-input" style={{ ...skeletonStyles, height: '48px', width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FontAwesomeIcon icon={faMessage} className="input-icon" />
                      <div className="skeleton-input" style={{ ...skeletonStyles, height: '280px', width: '100%' }}></div>
                    </div>
                  </div>
                  <button className="custom-btn" disabled>
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                  </button>
                </div>
                <div className="social-links text-center justify-content-center">
                  <SkeletonSocialLink />
                  <SkeletonSocialLink />
                  <SkeletonSocialLink />
                </div>
              </div>
            </div>
          ) : (
            <div className="contact-content">
              <div className="contact-info-section">
                <div className="info-header">
                  <h2>Get in Touch</h2>
                  <p>Feel free to reach out through any of these channels or send a message below</p>
                </div>
                <div className="info-cards">
                  {contactInfo.map((info) => (
                    <div key={info.id} className="contact-info-card" style={{ borderRadius: '0%' }}>
                      <div className="info-icon" style={{ borderRadius: '0%' }}>
                        <FontAwesomeIcon icon={info.icon} />
                      </div>
                      <div className="info-details">
                        <h3>{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="info-value">
                            {info.value}
                          </a>
                        ) : (
                          <span className="info-value">{info.value}</span>
                        )}
                        {info.description && (
                          <p className="info-description">{info.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="contact-form-section">
                <div className="form-header">
                  <h2>Send Message</h2>
                  <p>Have a project in mind? Let's discuss it.</p>
                </div>
                <form onSubmit={sendGmail} className="contact-form">
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FontAwesomeIcon icon={faUser} className="input-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FontAwesomeIcon 
                        icon={faMessage} 
                        className="input-icon" 
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{ 
                          height: '280px',
                          resize: 'none',
                          borderRadius: '0%',
                          paddingTop: '12px',
                          paddingLeft: '45px'
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="custom-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} className="spinner" />
                        <p style={{ margin: 0, marginLeft: '8px', display: 'inline-block' }}>Sending...</p>
                      </>
                    ) : (
                      <>
                        Send Message
                        <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                      </>
                    )}
                  </button>
                </form>
                <div className="social-links text-center justify-content-center">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ borderRadius: '0%' }}
                      aria-label={social.label}
                    >
                      <span></span>
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="contact-footer text-center mt-4">
          Copyright © 2025 All rights reserved | Made with <FontAwesomeIcon icon={faHeart} className="heart-icon" /> by Ali Mehroz
        </footer>

        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
}