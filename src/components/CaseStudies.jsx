import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function CaseStudies() {
  // To enable seamless, continuous infinite marquee scrolling without jumping,
  // we repeat the projects array in the track
  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="work">
      <div className="container">
        <h2 className="section-heading fade-in">Case Studies</h2>

        <div className="carousel-container fade-in">
          <div className="carousel-track" id="carousel-track">
            {marqueeProjects.map((project, index) => (
              <ProjectCard key={`${project.id}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
