import React from 'react';
import { renderBullets } from './AcademicTemplate';

const AccentHeaderTemplate = ({ data }) => {
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

  const themeColor = settings.themeColor || '#4f46e5';

  const renderSectionHeader = (title) => {
    return (
      <div style={{ 
        backgroundColor: themeColor, 
        color: '#ffffff', 
        padding: '0.3rem 0.75rem', 
        fontSize: '9.5pt', 
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        letterSpacing: '1px',
        borderRadius: '3px',
        marginBottom: '0.6rem',
        marginTop: '1.2rem'
      }}>
        {title}
      </div>
    );
  };

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary">
        {renderSectionHeader('Professional Summary')}
        <p style={{ fontSize: '9.5pt', lineHeight: '1.45', color: '#334155' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience">
        {renderSectionHeader('Work Experience')}
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>{exp.role} <span style={{ fontWeight: 'normal', color: '#64748b' }}>at {exp.company}</span></span>
              <span style={{ fontWeight: 'normal', color: '#475569', fontSize: '9.5pt' }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            {exp.location && <div style={{ fontSize: '8.5pt', color: '#64748b', fontStyle: 'italic', marginBottom: '0.15rem' }}>{exp.location}</div>}
            {exp.description && (
              <div className="item-details" style={{ fontSize: '9pt', lineHeight: '1.4', color: '#334155' }}>
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education">
        {renderSectionHeader('Education')}
        {education.map((edu) => (
          <div key={edu.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>{edu.degree} <span style={{ fontWeight: 'normal', color: '#64748b' }}>at {edu.school}</span></span>
              <span style={{ fontWeight: 'normal', color: '#475569', fontSize: '9.5pt' }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            {edu.location && <div style={{ fontSize: '8.5pt', color: '#64748b', fontStyle: 'italic', marginBottom: '0.15rem' }}>{edu.location}</div>}
            {edu.description && (
              <div className="item-details" style={{ fontSize: '9pt', lineHeight: '1.4', color: '#334155' }}>
                {renderBullets(edu.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects">
        {renderSectionHeader('Projects')}
        {projects.map((proj) => (
          <div key={proj.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>
                {proj.name}
                {proj.link && (
                  <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem', color: themeColor }}>
                    [{proj.link}]
                  </a>
                )}
              </span>
              {proj.role && <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9.5pt', fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div className="item-details" style={{ fontSize: '9pt', lineHeight: '1.4', color: '#334155', marginTop: '0.15rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills">
        {renderSectionHeader('Skills Inventory')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {skills.map((skill) => (
            <div key={skill.id} style={{ fontSize: '9pt', display: 'grid', gridTemplateColumns: '150px 1fr' }}>
              <span style={{ fontWeight: 'bold', color: themeColor }}>{skill.category}</span>
              <span style={{ color: '#334155' }}>{skill.items}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications">
        {renderSectionHeader('Certifications')}
        {certifications.map((cert) => (
          <div key={cert.id} className="item-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9pt', marginBottom: '0.4rem' }}>
            <span><strong style={{ color: '#0f172a' }}>{cert.name}</strong> {cert.issuer ? `(${cert.issuer})` : ''}</span>
            <span style={{ color: '#64748b' }}>{cert.date}</span>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages">
        {renderSectionHeader('Languages')}
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '9pt' }}>
          {languages.map((lang) => (
            <div key={lang.id}>
              <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{lang.name}</span>
              <span style={{ color: '#64748b', marginLeft: '0.25rem' }}>({lang.level})</span>
            </div>
          ))}
        </div>
      </div>
    ) : null
  };

  return (
    <div className="tmpl-modern" style={{ fontFamily: 'var(--resume-font-sans)' }}>
      {/* Sleek Header */}
      <div className="header" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: `3px solid ${themeColor}`, paddingBottom: '0.6rem' }}>
        <div>
          <h1 style={{ fontSize: '24pt', fontWeight: '800', letterSpacing: '-0.5px', color: '#0f172a', margin: 0, textTransform: 'uppercase' }}>
            {personalInfo.name}
          </h1>
          {personalInfo.title && (
            <div style={{ fontSize: '11pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.2rem' }}>
              {personalInfo.title}
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.15rem', fontSize: '8.5pt', color: '#475569', textAlign: 'right' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span><a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{personalInfo.website}</a></span>}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default AccentHeaderTemplate;
