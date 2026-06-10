import React from 'react';
import { renderBullets } from './AcademicTemplate';

const WarmMinimalTemplate = ({ data }) => {
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

  // Warm theme defaults
  const themeColor = settings.themeColor || '#7f1d1d'; // default deep burgundy

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
          Biography
        </div>
        <p style={{ fontSize: '9pt', lineHeight: '1.45', color: '#44403c', textAlign: 'justify' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>
          Experience
        </div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '9.5pt', color: '#1c1917' }}>
              <span>{exp.role}</span>
              <span style={{ fontWeight: 'normal', color: '#78716c', fontSize: '8.5pt' }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div style={{ fontSize: '8.5pt', color: themeColor, fontWeight: '500', marginBottom: '0.2rem' }}>
              {exp.company}{exp.location ? ` | ${exp.location}` : ''}
            </div>
            {exp.description && (
              <div style={{ fontSize: '8.5pt', lineHeight: '1.4', color: '#44403c' }}>
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.6rem' }}>
          Education
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '9.5pt', color: '#1c1917' }}>
              <span>{edu.degree}</span>
              <span style={{ fontWeight: 'normal', color: '#78716c', fontSize: '8.5pt' }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div style={{ fontSize: '8.5pt', color: themeColor, fontWeight: '500', marginBottom: '0.2rem' }}>
              {edu.school}{edu.location ? ` | ${edu.location}` : ''}
            </div>
            {edu.description && (
              <div style={{ fontSize: '8.5pt', lineHeight: '1.4', color: '#44403c' }}>
                {renderBullets(edu.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
          Projects
        </div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row" style={{ marginBottom: '0.8rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '9.5pt', color: '#1c1917' }}>
              <span>
                {proj.name}
                {proj.link && (
                  <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8pt', marginLeft: '0.35rem', color: themeColor, borderBottom: '1px solid' }}>
                    {proj.link}
                  </a>
                )}
              </span>
              {proj.role && <span style={{ fontWeight: 'normal', color: '#78716c', fontSize: '8.5pt', fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div style={{ fontSize: '8.5pt', lineHeight: '1.4', color: '#44403c', marginTop: '0.1rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
          Skills
        </div>
        {skills.map((skill) => (
          <div key={skill.id} style={{ fontSize: '9pt', marginBottom: '0.35rem', display: 'grid', gridTemplateColumns: '130px 1fr' }}>
            <span style={{ fontWeight: '700', color: '#1c1917' }}>{skill.category}</span>
            <span style={{ color: '#44403c' }}>{skill.items}</span>
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
          Certifications
        </div>
        {certifications.map((cert) => (
          <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9pt', marginBottom: '0.35rem', color: '#44403c' }}>
            <span><strong style={{ color: '#1c1917' }}>{cert.name}</strong> {cert.issuer ? `— ${cert.issuer}` : ''}</span>
            <span>{cert.date}</span>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10.5pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>
          Languages
        </div>
        <div style={{ fontSize: '9pt', color: '#44403c' }}>
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
    <div 
      className="tmpl-modern warm-ivory-page" 
      style={{ 
        fontFamily: 'var(--resume-font-sans)', 
        backgroundColor: '#faf9f6', // Warm Ivory
        color: '#44403c', // Charcoal
        margin: '-0.6in', 
        padding: '0.6in',
        minHeight: 'calc(var(--resume-height) + 1.2in)'
      }}
    >
      {/* Warm Minimalist Header */}
      <div className="header" style={{ borderBottom: `1px solid #e7e5e4`, paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
        <h1 style={{ fontSize: '22pt', fontWeight: '300', letterSpacing: '1px', color: '#1c1917', margin: '0 0 0.2rem 0' }}>
          {personalInfo.name}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '10.5pt', fontWeight: '500', color: themeColor, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.6rem' }}>
            {personalInfo.title}
          </div>
        )}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem 1rem', fontSize: '8.5pt', color: '#78716c' }}>
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default WarmMinimalTemplate;
