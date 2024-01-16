import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'; // import your CSS file

function ProjectCard({ image, label, link }) {
  return (
    <Link to={link} className="project-card">
      <img src={image} alt={label} className="project-image" />
      <div className="project-label">{label}</div>
    </Link>
  );
}

export default ProjectCard;