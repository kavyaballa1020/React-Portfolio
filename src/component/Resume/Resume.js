import React from 'react';
import './Resume.css';
import { FaDownload } from 'react-icons/fa';

const ResumeSection = () => {
  const resumePath = './Resume.pdf'; // Update this to your actual resume path

  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="resume-description">
          I am a passionate developer with skills in modern web technologies and a deep interest in creating elegant solutions. You can view and download my resume to explore my journey and expertise.
        </p>
        <div className="resume-viewer">
          <iframe
            src={resumePath}
            title="Resume"
            frameBorder="0"
            width="100%"
            height="600px"
          ></iframe>
        </div>
        <a href={resumePath} className="download-button" download>
          <FaDownload className="download-icon" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
