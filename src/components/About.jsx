import React from 'react';
import ToolkitTable from './ToolkitTable';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-heading fade-in">About & Technical Toolkit</h2>

        <div className="about-grid">
          <div className="narrative fade-in">
            <p>
              I am a 4th-Year Computer Science student at Isabela State University Main Campus,
              actively building AI-powered web applications as a Frontend AI Engineering Intern at
              flyrank.ai. My academic foundation in algorithms is directly applied to real-world,
              scalable software architecture.
            </p>
            <p>
              I believe in the intersection of clean, highly performant frontend design and
              powerful Python/AI backends. I engineer user interfaces that act as intuitive layers
              over complex data pipelines, and I'm looking to join a team that values lean
              architecture, speed, and continuous iteration.
            </p>
          </div>

          <ToolkitTable />
        </div>
      </div>
    </section>
  );
}
