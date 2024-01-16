import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import Project1 from './Project1.png';
import Project2 from './Project2.png';
import Project3 from './Project3.png';
import Project4 from './Project4.png';
import ImageList from  './ImageList';

function Projects() {
  return (
    <div className="projects">
         <div className="header">
      <h1 className="title">My Projects</h1>
      <p className="subtitle">I love integrating my love of beautiful, simple design with best in class AI Development</p>
      <a href="https://calendar.app.google/fGNgmU4X3b3vBwzb9" target="_blank" rel="noopener noreferrer">
  <button className="book-me">Book Me Here</button>
</a>
      </div>
      <div className="projects-grid">
      <div className="project-cards">
      <ProjectCard 
        image={Project1} // use the imported image
        label="Design Your Own Learning, Uses ToT Learning" 
        link="/project1" 
      />
      <ProjectCard 
        image={Project2}
        label="LLMs for All, RAG architechture" 
        link="/project2" 
      />
        <ProjectCard 
        image={Project3}
        label="Digital Twin" 
        link="/project2" 
      />
           <ProjectCard 
        image={Project4}
        label="Project 4" 
        link="/project4" 
      />
      </div>
      </div>
    </div>
  );
}

export default Projects;