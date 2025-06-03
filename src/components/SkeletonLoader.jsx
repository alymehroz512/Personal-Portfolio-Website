import React from 'react';

export const SkeletonIcon = () => (
  <div className="skeleton-icon"></div>
);

export const SkeletonText = ({ width }) => (
  <div className="skeleton-text" style={{ width }}></div>
);

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <SkeletonIcon />
    <SkeletonText width="80%" />
  </div>
);

export const SkeletonAccordion = () => (
  <div className="skeleton-accordion">
    <div className="skeleton-accordion-header">
      <SkeletonIcon />
      <SkeletonText width="60%" />
    </div>
    <div className="skeleton-accordion-body">
      <SkeletonText width="90%" />
      <SkeletonText width="75%" />
      <SkeletonText width="85%" />
    </div>
  </div>
);

export const SkeletonButtonWithIcon = () => (
  <div className="skeleton-button d-flex align-items-center justify-content-center">
    <div className="skeleton-button-icon me-2"></div>
    <div className="skeleton-button-text"></div>
  </div>
);

export const SkeletonHomeContent = () => (
  <>
    <div className="home-description mb-4">
      <SkeletonText width="95%" />
      <SkeletonText width="90%" />
      <SkeletonText width="85%" />
    </div>
    <div className="mt-4 button-group d-flex align-items-center justify-content-start">
      <SkeletonButtonWithIcon />
      <div className="skeleton-divider"></div>
      <SkeletonButtonWithIcon />
    </div>
  </>
);

export const SkeletonCategoryHeader = () => (
  <div className="category-header mb-4">
    <div className="skeleton-title" style={{ width: '40%' }}></div>
    <div className="skeleton-hr"></div>
  </div>
);

export const SkeletonContactCard = () => (
  <div className="skeleton-card contact-info-card" style={{ borderRadius: '0%' }}>
    <div className="skeleton-icon" style={{ 
      width: '50px', 
      height: '50px', 
      borderRadius: '50%',
      backgroundColor: 'rgba(117, 93, 197, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    }}>
      <div style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'rgba(117, 93, 197, 0.2)',
        animation: 'shimmer 2s infinite linear'
      }}></div>
    </div>
    <div className="skeleton-text" style={{ width: '60%', marginBottom: '8px' }}></div>
    <div className="skeleton-text" style={{ width: '80%', marginBottom: '8px' }}></div>
    <div className="skeleton-text" style={{ width: '70%' }}></div>
  </div>
);

export const SkeletonSocialLink = () => (
  <div className="skeleton-icon social-link" style={{ 
    width: '50px', 
    height: '50px', 
    borderRadius: '50%',
    backgroundColor: 'rgba(117, 93, 197, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0.75rem',
    border: '2px solid rgba(117, 93, 197, 0.2)'
  }}>
    <div style={{
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: 'rgba(117, 93, 197, 0.2)',
      animation: 'shimmer 2s infinite linear'
    }}></div>
  </div>
);

export const SkeletonContactForm = () => (
  <div className="contact-form-container">
    <div className="form-group">
      <div className="input-wrapper" style={{ position: 'relative' }}>
        <div className="skeleton-icon" style={{ 
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(117, 93, 197, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(117, 93, 197, 0.2)',
            animation: 'shimmer 2s infinite linear'
          }}></div>
        </div>
        <div className="skeleton-text" style={{ height: '50px', borderRadius: '0%' }}></div>
      </div>
    </div>

    <div className="form-group">
      <div className="input-wrapper" style={{ position: 'relative' }}>
        <div className="skeleton-icon" style={{ 
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(117, 93, 197, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(117, 93, 197, 0.2)',
            animation: 'shimmer 2s infinite linear'
          }}></div>
        </div>
        <div className="skeleton-text" style={{ height: '50px', borderRadius: '0%' }}></div>
      </div>
    </div>

    <div className="form-group">
      <div className="input-wrapper" style={{ position: 'relative' }}>
        <div className="skeleton-icon" style={{ 
          position: 'absolute',
          left: '15px',
          top: '30px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(117, 93, 197, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(117, 93, 197, 0.2)',
            animation: 'shimmer 2s infinite linear'
          }}></div>
        </div>
        <div className="skeleton-text" style={{ height: '280px', borderRadius: '0%' }}></div>
      </div>
    </div>

    <SkeletonButtonWithIcon />
  </div>
);

export const SkeletonContactContent = () => (
  <div className="contact-grid mt-4">
    <div className="contact-info-container">
      <div className="info-cards">
        <SkeletonContactCard />
        <SkeletonContactCard />
        <SkeletonContactCard />
      </div>

      <div className="social-links text-center justify-content-center">
        <SkeletonSocialLink />
        <SkeletonSocialLink />
        <SkeletonSocialLink />
      </div>
    </div>

    <SkeletonContactForm />
  </div>
); 