import React, { useState } from 'react';
import '../styles/ProfileCard.css';

const ProfileCard = ({ user }) => {
  const { name, job, company, image, github, twitter, google, description } = user;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close-modal')) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="profile-card">
        <img src={image} alt={name} className="profile-image" />
        <h3>My Profile</h3>
        <div className="profile-details">
          <p><span>Name:</span> {name}</p>
          <p><span>Job:</span> {job}</p>
          <p><span>Company:</span> {company}</p>
        </div>
        <div className="social-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={google} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <button className="view-profile-btn" onClick={handleViewProfile}>
          View Profile
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <div className="modal-header">
              <h2>{name}'s Profile</h2>
              <button className="close-modal" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-content">
              <img src={image} alt={name} className="modal-image" />
              <div className="modal-details">
                <p><strong>Position:</strong> {job}</p>
                <p><strong>Company:</strong> {company}</p>
                <div className="description">
                  <h4>About Me:</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href={github} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={google} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
