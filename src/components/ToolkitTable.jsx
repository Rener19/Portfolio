import React from 'react';
import { skillCategories } from '../data/skills';

export default function ToolkitTable() {
  return (
    <div id="toolkit" className="toolkit fade-in">
      <div className="table-responsive">
        <table className="toolkit-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Tools, Languages & Tech</th>
              <th>Verified Certifications</th>
            </tr>
          </thead>
          <tbody>
            {skillCategories.map(item => (
              <tr key={item.id}>
                <td data-label="Category">
                  <strong>{item.category}</strong>
                </td>
                <td data-label="Tools, Languages & Tech">{item.tools}</td>
                <td data-label="Certifications">
                  <span className="cert-badge">{item.certification}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
