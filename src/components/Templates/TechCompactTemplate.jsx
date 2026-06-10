import React from 'react';
import { renderBullets } from './AcademicTemplate';

const TechCompactTemplate = ({ data }) => {
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

  const themeColor = settings.themeColor || '#0f172a';

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary" style={{ marginBottom: '0.6rem' }}>
        <p style={{ fontSize: '8.5pt', lineHeight: '1.35', color: '#334155', textAlign: 'justify' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '0.6rem' }}>
        <div className="section-title" style={{ fontSize: '9pt', fontWeight: 'bold', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Experience
        </div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row" style={{ marginBottom: '0.5rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9pt', color: '#0f172a' }}>
              <span>{exp.role} <span style={{ fontWeight: 'normal', color: '#64748b' }}>| {exp.company}</span></span>
              <span style={{ fontWeight: 'normal', color: '#475569', fontSize: '8.5pt' }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            {exp.description && (
              <div className="item-details" style={{ fontSize: '8.5pt', lineHeight: '1.3', color: '#334155', marginTop: '0.05rem' }}>
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education" style={{ marginBottom: '0.6rem' }}>
        <div className="section-title" style={{ fontSize: '9pt', fontWeight: 'bold', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Education
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="item-row" style={{ marginBottom: '0.4rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9pt', color: '#0f172a' }}>
              <span>{edu.degree} <span style={{ fontWeight: 'normal', color: '#64748b' }}>| {edu.school}</span></span>
              <span style={{ fontWeight: 'normal', color: '#475569', fontSize: '8.5pt' }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            {edu.description && (
              <div className="item-details" style={{ fontSize: '8.5pt', lineHeight: '1.3', color: '#334155', marginTop: '0.05rem' }}>
                {renderBullets(edu.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects" style={{ marginBottom: '0.6rem' }}>
        <div className="section-title" style={{ fontSize: '9pt', fontWeight: 'bold', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Technical Projects
        </div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row" style={{ marginBottom: '0.5rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9pt', color: '#0f172a' }}>
              <span>
                {proj.name} 
                {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8pt', marginLeft: '0.5rem', color: themeColor }}>[{proj.link}]</a>}
              </span>
              {proj.role && <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '8.5pt', fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div className="item-details" style={{ fontSize: '8.5pt', lineHeight: '1.3', color: '#334155', marginTop: '0.05rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills" style={{ marginBottom: '0.6rem' }}>
        <div className="section-title" style={{ fontSize: '9pt', fontWeight: 'bold', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Skills Summary
        </div>
        {skills.map((skill) => (
          <div key={skill.id} style={{ fontSize: '8.5pt', marginBottom: '0.2rem', lineHeight: '1.3' }}>
            <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{skill.category}:</span> {skill.items}
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '0.6rem' }}>
        <div className="section-title" style={{ fontSize: '9pt', fontWeight: 'bold', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Certifications
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.2rem 1.5rem' }}>
          {certifications.map((cert) => (
            <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5pt' }}>
              <span><strong>{cert.name}</strong> {cert.issuer ? `— ${cert.issuer}` : ''}</span>
              <span style={{ color: '#64748b' }}>{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '0.6rem' }}>
        <div className="section-title" style={{ fontSize: '9pt', fontWeight: 'bold', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Languages
        </div>
        <div style={{ fontSize: '8.5pt', color: '#334155' }}>
          {languages.map((lang, index) => (
            <span key={lang.id}>
              <strong>{lang.name}</strong> ({lang.level}){index < languages.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>
      </div>
    ) : null
  };

  return (
    <div className="tmpl-modern" style={{ fontFamily: 'var(--resume-font-sans)', fontSize: '9pt' }}>
      {/* Tight compact header */}
      <div className="header" style={{ textAlign: 'center', marginBottom: '0.6rem' }}>
        <h1 style={{ fontSize: '18pt', fontWeight: '800', letterSpacing: '-0.5px', color: '#0f172a', margin: '0 0 0.15rem 0' }}>
          {personalInfo.name}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '10pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.35rem' }}>
            {personalInfo.title}
          </div>
        )}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.2rem 0.8rem', fontSize: '8pt', color: '#475569' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span><a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', border: 'none' }}>{personalInfo.website}</a></span>}
          {personalInfo.linkedin && <span><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', border: 'none' }}>{personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}</a></span>}
          {personalInfo.github && <span><a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', border: 'none' }}>{personalInfo.github.replace(/^github\.com\//, '')}</a></span>}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default TechCompactTemplate;
