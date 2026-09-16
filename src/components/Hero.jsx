import React from 'react';

export default function Hero() {
  return (
    <section id="home">
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="heading-hero">
            Bridging modern frontend engineering with artificial intelligence.
          </h1>
          <p className="sub-heading">
            4th-Year Computer Science Student at ISU | Frontend AI Engineering Intern at flyrank.ai.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View My Work
            </a>
            <a
              href="#resume.pdf"
              className="btn btn-link"
              style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
