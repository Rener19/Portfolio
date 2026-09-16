import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className={`case-study carousel-slide ${project.featured ? 'featured-case' : ''}`}>
      <h3 className="case-study-title">
        PROJECT {project.number}: {project.title}
      </h3>

      <div className="case-part">
        <strong>The Problem</strong>
        <p>{project.problem}</p>
      </div>

      <div className="case-part">
        <strong>Tech Stack</strong>
        <div className="tech-stack">
          {project.techStack.map(tech => (
            <span className="tech-pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="case-part">
        <strong>Solution</strong>
        <p>{project.solution}</p>
      </div>

      <div className="case-links">
        {project.links?.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Live Demo
          </a>
        )}
        {project.links?.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub Repo
          </a>
        )}
      </div>
    </article>
  );
}
