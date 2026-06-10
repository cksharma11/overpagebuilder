import React from 'react';
import { renderBullets } from './AcademicTemplate';

const EliteCorporateTemplate = ({ data }) => {
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

  const themeColor = settings.themeColor || '#1e293b';

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary" style={{ marginBottom: '0.85rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '1px', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Executive Summary
        </div>
        <p style={{ fontSize: '9pt', lineHeight: '1.4', color: '#1e293b', textAlign: 'justify' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '0.85rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '1px', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Professional Experience
        </div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row" style={{ marginBottom: '0.65rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9.5pt', color: '#0f172a' }}>
              <span>{exp.company} <span style={{ fontWeight: 'normal', color: '#475569' }}>— {exp.location}</span></span>
              <span style={{ fontWeight: 'bold', color: '#334155', fontSize: '9pt' }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div style={{ fontSize: '9pt', fontWeight: 'bold', fontStyle: 'italic', color: themeColor, marginBottom: '0.15rem' }}>
              {exp.role}
            </div>
            {exp.description && (
              <div className="item-details" style={{ fontSize: '8.5pt', lineHeight: '1.35', color: '#1e293b' }}>
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education" style={{ marginBottom: '0.85rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '1px', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Education
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="item-row" style={{ marginBottom: '0.65rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9.5pt', color: '#0f172a' }}>
              <span>{edu.school} <span style={{ fontWeight: 'normal', color: '#475569' }}>— {edu.location}</span></span>
              <span style={{ fontWeight: 'bold', color: '#334155', fontSize: '9pt' }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div style={{ fontSize: '9pt', fontWeight: 'bold', fontStyle: 'italic', color: themeColor, marginBottom: '0.15rem' }}>
              {edu.degree}
            </div>
            {edu.description && (
              <div className="item-details" style={{ fontSize: '8.5pt', lineHeight: '1.35', color: '#1e293b' }}>
                {renderBullets(edu.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects" style={{ marginBottom: '0.85rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '1px', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Key Initiatives & Projects
        </div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row" style={{ marginBottom: '0.65rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9.5pt', color: '#0f172a' }}>
              <span>
                {proj.name}
                {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem', color: themeColor }}>({proj.link})</a>}
              </span>
              {proj.role && <span style={{ fontWeight: 'normal', fontStyle: 'italic', color: '#64748b' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div className="item-details" style={{ fontSize: '8.5pt', lineHeight: '1.35', color: '#1e293b', marginTop: '0.1rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills" style={{ marginBottom: '0.85rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '1px', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Key Skills
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem 1.5rem' }}>
          {skills.map((skill) => (
            <div key={skill.id} style={{ fontSize: '8.5pt', lineHeight: '1.3' }}>
              <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{skill.category}:</span> <span style={{ color: '#334155' }}>{skill.items}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '0.85rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '1px', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Certifications
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem 1.5rem' }}>
          {certifications.map((cert) => (
            <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5pt' }}>
              <span><span style={{ fontWeight: 'bold' }}>{cert.name}</span> {cert.issuer ? `— ${cert.issuer}` : ''}</span>
              <span style={{ color: '#64748b' }}>{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '0.85rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: '1px solid #cbd5e1', paddingBottom: '1px', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
    <div className="tmpl-modern" style={{ fontFamily: 'var(--resume-font-sans)', color: '#1e293b' }}>
      {/* High Density Corporate Header */}
      <div className="header" style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
        <h1 style={{ fontSize: '20pt', fontWeight: '800', letterSpacing: '0.5px', color: '#0f172a', margin: '0 0 0.15rem 0', textTransform: 'uppercase' }}>
          {personalInfo.name}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '9.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
            {personalInfo.title}
          </div>
        )}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.2rem 1rem', fontSize: '8.5pt', color: '#475569', borderBottom: `2px solid ${themeColor}`, paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span><a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{personalInfo.website}</a></span>}
          {personalInfo.linkedin && <span><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}</a></span>}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default EliteCorporateTemplate;
