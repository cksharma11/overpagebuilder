import React from 'react';
import { renderBullets } from './AcademicTemplate';

const MinimalistTemplate = ({ data }) => {
  const { personalInfo = {}, workExperience = [], education = [], projects = [], skills = [], languages = [], certifications = [] } = data;
  const settings = data.settings || {};
  const sectionOrder = settings.sectionOrder || [
    'summary',
    'experience',
    'education',
    'projects',
    'skills',
    'certifications',
    'languages'
  ];

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary">
        <div className="section-title">Summary</div>
        <div className="summary-text">{personalInfo.summary}</div>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience">
        <div className="section-title">Experience</div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row">
            <div className="item-header-grid">
              <span className="item-role-title">{exp.role}</span>
              <span className="item-date-range">{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div className="item-company-info">
              <span>{exp.company}</span>
              {exp.location && <span>, {exp.location}</span>}
            </div>
            {exp.description && (
              <div className="item-details">
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education">
        <div className="section-title">Education</div>
        {education.map((edu) => (
          <div key={edu.id} className="item-row">
            <div className="item-header-grid">
              <span className="item-role-title">{edu.degree}</span>
              <span className="item-date-range">{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div className="item-company-info">
              <span>{edu.school}</span>
              {edu.location && <span>, {edu.location}</span>}
            </div>
            {edu.description && (
              <div className="item-details">
                {renderBullets(edu.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects">
        <div className="section-title">Projects</div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row">
            <div className="item-header-grid">
              <span className="item-role-title">
                {proj.name}
                {proj.link && (
                  <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem', textDecoration: 'underline' }}>
                    {proj.link}
                  </a>
                )}
              </span>
              {proj.role && <span className="item-date-range" style={{ fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div className="item-details" style={{ marginTop: '0.15rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills">
        <div className="section-title">Skills</div>
        {skills.map((skill) => (
          <div key={skill.id} className="skills-line">
            <span className="skills-label">{skill.category}: </span>
            <span>{skill.items}</span>
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications">
        <div className="section-title">Certifications</div>
        {certifications.map((cert) => (
          <div key={cert.id} className="item-row" style={{ marginBottom: '0.35rem' }}>
            <div className="item-header-grid">
              <span className="item-role-title" style={{ fontSize: '9pt', fontWeight: '500' }}>
                {cert.name} {cert.issuer ? `(${cert.issuer})` : ''}
              </span>
              <span className="item-date-range">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages">
        <div className="section-title">Languages</div>
        <div className="skills-line">
          {languages.map((lang, index) => (
            <span key={lang.id}>
              <span className="skills-label">{lang.name}</span> ({lang.level})
              {index < languages.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>
    ) : null
  };

  return (
    <div className="tmpl-minimalist">
      {/* Header */}
      <div className="header">
        <h1>{personalInfo.name}</h1>
        {personalInfo.title && <div className="header-title">{personalInfo.title}</div>}
        
        <div className="contact-bar">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && (
            <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">
              {personalInfo.website}
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
              {personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}
            </a>
          )}
          {personalInfo.github && (
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
              {personalInfo.github.replace(/^github\.com\//, '')}
            </a>
          )}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default MinimalistTemplate;
