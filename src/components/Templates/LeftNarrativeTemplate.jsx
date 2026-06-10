import React from 'react';
import { renderBullets } from './AcademicTemplate';

const LeftNarrativeTemplate = ({ data }) => {
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

  const renderLeftSection = (title, content) => {
    if (!content) return null;
    return (
      <div className="section" style={{ display: 'grid', gridTemplateColumns: '1.6in 1fr', gap: '0.4in', marginTop: '1.25rem', pageBreakInside: 'avoid' }}>
        <div style={{ fontSize: '9.5pt', fontWeight: 'bold', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'right' }}>
          {title}
        </div>
        <div style={{ minWidth: 0 }}>
          {content}
        </div>
      </div>
    );
  };

  const sectionMap = {
    summary: personalInfo.summary ? renderLeftSection('Summary', (
      <p style={{ fontSize: '9.5pt', lineHeight: '1.45', color: '#334155', margin: 0 }}>{personalInfo.summary}</p>
    )) : null,

    experience: workExperience.length > 0 ? renderLeftSection('Experience', (
      <div>
        {workExperience.map((exp, index) => (
          <div key={exp.id || index} style={{ marginBottom: index < workExperience.length - 1 ? '0.85rem' : 0 }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>{exp.role}</span>
              <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9pt' }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div style={{ fontSize: '9.5pt', color: themeColor, fontWeight: '600', marginBottom: '0.2rem' }}>
              {exp.company}{exp.location ? `, ${exp.location}` : ''}
            </div>
            {exp.description && (
              <div style={{ fontSize: '9pt', lineHeight: '1.4', color: '#334155' }}>
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    )) : null,

    education: education.length > 0 ? renderLeftSection('Education', (
      <div>
        {education.map((edu, index) => (
          <div key={edu.id || index} style={{ marginBottom: index < education.length - 1 ? '0.85rem' : 0 }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>{edu.degree}</span>
              <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9pt' }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div style={{ fontSize: '9.5pt', color: themeColor, fontWeight: '600', marginBottom: '0.2rem' }}>
              {edu.school}{edu.location ? `, ${edu.location}` : ''}
            </div>
            {edu.description && (
              <div style={{ fontSize: '9pt', lineHeight: '1.4', color: '#334155' }}>
                {renderBullets(edu.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    )) : null,

    projects: projects.length > 0 ? renderLeftSection('Projects', (
      <div>
        {projects.map((proj, index) => (
          <div key={proj.id || index} style={{ marginBottom: index < projects.length - 1 ? '0.85rem' : 0 }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>
                {proj.name}
                {proj.link && (
                  <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem', color: themeColor }}>
                    [{proj.link}]
                  </a>
                )}
              </span>
              {proj.role && <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9pt', fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div style={{ fontSize: '9pt', lineHeight: '1.4', color: '#334155', marginTop: '0.15rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    )) : null,

    skills: skills.length > 0 ? renderLeftSection('Skills', (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        {skills.map((skill) => (
          <div key={skill.id} style={{ fontSize: '9pt' }}>
            <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{skill.category}: </span>
            <span style={{ color: '#475569' }}>{skill.items}</span>
          </div>
        ))}
      </div>
    )) : null,

    certifications: certifications.length > 0 ? renderLeftSection('Certifications', (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {certifications.map((cert) => (
          <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9pt' }}>
            <span><strong>{cert.name}</strong> {cert.issuer ? `(${cert.issuer})` : ''}</span>
            <span style={{ color: '#64748b' }}>{cert.date}</span>
          </div>
        ))}
      </div>
    )) : null,

    languages: languages.length > 0 ? renderLeftSection('Languages', (
      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '9pt' }}>
        {languages.map((lang) => (
          <div key={lang.id}>
            <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{lang.name}</span>
            <span style={{ color: '#64748b', marginLeft: '0.25rem' }}>({lang.level})</span>
          </div>
        ))}
      </div>
    )) : null
  };

  return (
    <div className="tmpl-modern" style={{ fontFamily: 'var(--resume-font-sans)' }}>
      {/* Narrative Centered-Left Header */}
      <div className="header" style={{ display: 'grid', gridTemplateColumns: '1.6in 1fr', gap: '0.4in', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '0.5rem' }}>
        <div style={{ textAlign: 'right' }}>
          {/* Empty left corner to align header contents */}
        </div>
        <div>
          <h1 style={{ fontSize: '24pt', fontWeight: '800', letterSpacing: '-0.5px', color: '#0f172a', margin: 0 }}>
            {personalInfo.name}
          </h1>
          {personalInfo.title && (
            <div style={{ fontSize: '11pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.15rem' }}>
              {personalInfo.title}
            </div>
          )}
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1rem', fontSize: '8.5pt', color: '#64748b', marginTop: '0.5rem' }}>
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.website && <span><a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{personalInfo.website}</a></span>}
          </div>
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default LeftNarrativeTemplate;
