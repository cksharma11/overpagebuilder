import React from 'react';
import { renderBullets } from './AcademicTemplate';

const SlateTemplate = ({ data }) => {
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

  const themeColor = settings.themeColor || '#1f2937';

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '11pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '3px', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Profile Summary
        </div>
        <p style={{ fontSize: '9.5pt', lineHeight: '1.45', color: '#334155' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '11pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '3px', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Professional Experience
        </div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>{exp.role}</span>
              <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9pt' }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div className="item-subheading" style={{ fontSize: '9.5pt', color: themeColor, fontWeight: '600', marginBottom: '0.25rem' }}>
              {exp.company}{exp.location ? `, ${exp.location}` : ''}
            </div>
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
      <div className="section" key="education" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '11pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '3px', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Education
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>{edu.degree}</span>
              <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9pt' }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div className="item-subheading" style={{ fontSize: '9.5pt', color: themeColor, fontWeight: '600', marginBottom: '0.25rem' }}>
              {edu.school}{edu.location ? `, ${edu.location}` : ''}
            </div>
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
      <div className="section" key="projects" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '11pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '3px', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Projects
        </div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row" style={{ marginBottom: '0.85rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>
                {proj.name}
                {proj.link && (
                  <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem', color: themeColor, textDecoration: 'underline' }}>
                    {proj.link}
                  </a>
                )}
              </span>
              {proj.role && <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9pt', fontStyle: 'italic' }}>{proj.role}</span>}
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
      <div className="section" key="skills" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '11pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '3px', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Skills
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
          {skills.map((skill) => (
            <div key={skill.id} style={{ fontSize: '9pt', padding: '0.4rem', border: '1px solid #e2e8f0', borderRadius: '4px', backgroundColor: '#f8fafc' }}>
              <div style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '0.15rem' }}>{skill.category}</div>
              <div style={{ color: '#475569' }}>{skill.items}</div>
            </div>
          ))}
        </div>
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '11pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '3px', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Certifications
        </div>
        {certifications.map((cert) => (
          <div key={cert.id} className="item-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9pt', marginBottom: '0.4rem' }}>
            <span><span style={{ fontWeight: 'bold', color: '#0f172a' }}>{cert.name}</span> {cert.issuer ? `(${cert.issuer})` : ''}</span>
            <span style={{ color: '#64748b' }}>{cert.date}</span>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '11pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '3px', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Languages
        </div>
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

  // Adjust container margins to let header bleed to edge if needed
  return (
    <div className="tmpl-modern" style={{ fontFamily: 'var(--resume-font-sans)', margin: '-0.6in', minHeight: 'calc(var(--resume-height) + 1.2in)' }}>
      {/* Colored Banner Header */}
      <div style={{ backgroundColor: themeColor, color: '#ffffff', padding: '0.6in 0.6in 0.4in 0.6in', marginBottom: '0.4in' }}>
        <h1 style={{ fontSize: '24pt', fontWeight: '800', letterSpacing: '-0.5px', margin: 0, textTransform: 'uppercase', color: '#ffffff' }}>
          {personalInfo.name}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '11.5pt', fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {personalInfo.title}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem', fontSize: '8.5pt', color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.8rem', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '0.8rem' }}>
          {personalInfo.email && <span>Email: <a href={`mailto:${personalInfo.email}`} style={{ color: '#ffffff', borderBottom: '1px dotted rgba(255, 255, 255, 0.6)' }}>{personalInfo.email}</a></span>}
          {personalInfo.phone && <span>Phone: {personalInfo.phone}</span>}
          {personalInfo.location && <span>Location: {personalInfo.location}</span>}
          {personalInfo.website && <span>Web: <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', borderBottom: '1px dotted rgba(255, 255, 255, 0.6)' }}>{personalInfo.website}</a></span>}
          {personalInfo.linkedin && <span>LinkedIn: <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', borderBottom: '1px dotted rgba(255, 255, 255, 0.6)' }}>{personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}</a></span>}
          {personalInfo.github && <span>GitHub: <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', borderBottom: '1px dotted rgba(255, 255, 255, 0.6)' }}>{personalInfo.github.replace(/^github\.com\//, '')}</a></span>}
        </div>
      </div>

      {/* Content wrapper with standard page margins */}
      <div style={{ padding: '0 0.6in 0.6in 0.6in' }}>
        {sectionOrder.map(key => sectionMap[key])}
      </div>
    </div>
  );
};

export default SlateTemplate;
