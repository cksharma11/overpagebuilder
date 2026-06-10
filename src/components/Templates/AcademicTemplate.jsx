import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

// Shared description bullet parser
export const renderBullets = (text) => {
  if (!text) return null;
  const lines = text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^[•\-\*\u2022]\s*/, '')); // strip any bullet character

  if (lines.length === 0) return null;
  return (
    <ul>
      {lines.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
};

const AcademicTemplate = ({ data }) => {
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
        <div className="section-title">Professional Summary</div>
        <div className="summary-text">{personalInfo.summary}</div>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience">
        <div className="section-title">Experience</div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row">
            <div className="item-header">
              <span>{exp.role}</span>
              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div className="item-subheading">
              <span>{exp.company}</span>
              <span>{exp.location}</span>
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
            <div className="item-header">
              <span>{edu.degree}</span>
              <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div className="item-subheading">
              <span>{edu.school}</span>
              <span>{edu.location}</span>
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
            <div className="item-header">
              <span>
                {proj.name}
                {proj.link && (
                  <span style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem' }}>
                    [<a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer">{proj.link}</a>]
                  </span>
                )}
              </span>
              {proj.role && <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>{proj.role}</span>}
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
          <div key={skill.id} className="skills-row">
            <span className="skills-category">{skill.category}: </span>
            <span>{skill.items}</span>
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications">
        <div className="section-title">Certifications & Training</div>
        {certifications.map((cert) => (
          <div key={cert.id} className="item-row" style={{ marginBottom: '0.35rem' }}>
            <div className="item-header" style={{ fontSize: '9.5pt' }}>
              <span>{cert.name} {cert.issuer ? `— ${cert.issuer}` : ''}</span>
              <span>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages">
        <div className="section-title">Languages</div>
        <div className="skills-row">
          {languages.map((lang, index) => (
            <span key={lang.id}>
              <span style={{ fontWeight: 'bold' }}>{lang.name}</span> ({lang.level})
              {index < languages.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>
    ) : null
  };

  return (
    <div className="tmpl-academic">
      {/* Header */}
      <div className="header">
        <h1>{personalInfo.name}</h1>
        {personalInfo.title && <div className="header-title">{personalInfo.title}</div>}
        
        <div className="contact-info">
          {personalInfo.email && (
            <span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </span>
          )}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && (
            <span>
              <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.website}
              </a>
            </span>
          )}
          {personalInfo.linkedin && (
            <span>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}
              </a>
            </span>
          )}
          {personalInfo.github && (
            <span>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.github.replace(/^github\.com\//, '')}
              </a>
            </span>
          )}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default AcademicTemplate;
