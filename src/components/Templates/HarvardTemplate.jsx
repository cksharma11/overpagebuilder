import React from 'react';
import { renderBullets } from './AcademicTemplate';

const HarvardTemplate = ({ data }) => {
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
      <div className="section" key="summary" style={{ marginBottom: '1rem' }}>
        <div className="section-title" style={{ fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '11pt', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '0.5rem', color: '#000000' }}>
          Professional Summary
        </div>
        <p style={{ fontSize: '9.5pt', textAlign: 'justify', lineHeight: '1.4' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '1rem' }}>
        <div className="section-title" style={{ fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '11pt', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '0.5rem', color: '#000000' }}>
          Work Experience
        </div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row" style={{ marginBottom: '0.75rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9.5pt' }}>
              <span>{exp.company}</span>
              <span style={{ fontWeight: 'normal' }}>{exp.location}</span>
            </div>
            <div className="item-subheading" style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontSize: '9.5pt', marginBottom: '0.2rem' }}>
              <span>{exp.role}</span>
              <span style={{ fontStyle: 'normal' }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            {exp.description && (
              <div className="item-details" style={{ fontSize: '9pt', lineHeight: '1.35', textAlign: 'justify' }}>
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education" style={{ marginBottom: '1rem' }}>
        <div className="section-title" style={{ fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '11pt', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '0.5rem', color: '#000000' }}>
          Education
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="item-row" style={{ marginBottom: '0.75rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9.5pt' }}>
              <span>{edu.school}</span>
              <span style={{ fontWeight: 'normal' }}>{edu.location}</span>
            </div>
            <div className="item-subheading" style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontSize: '9.5pt', marginBottom: '0.2rem' }}>
              <span>{edu.degree}</span>
              <span style={{ fontStyle: 'normal' }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            {edu.description && (
              <div className="item-details" style={{ fontSize: '9pt', lineHeight: '1.35' }}>
                {renderBullets(edu.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects" style={{ marginBottom: '1rem' }}>
        <div className="section-title" style={{ fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '11pt', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '0.5rem', color: '#000000' }}>
          Key Projects
        </div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row" style={{ marginBottom: '0.6rem' }}>
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '9.5pt' }}>
              <span>
                {proj.name}
                {proj.link && <span style={{ fontWeight: 'normal', fontStyle: 'italic', fontSize: '8.5pt', marginLeft: '0.5rem' }}>({proj.link})</span>}
              </span>
              {proj.role && <span style={{ fontWeight: 'normal', fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div className="item-details" style={{ fontSize: '9pt', marginTop: '0.15rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills" style={{ marginBottom: '1rem' }}>
        <div className="section-title" style={{ fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '11pt', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '0.5rem', color: '#000000' }}>
          Skills & Technical Expertise
        </div>
        {skills.map((skill) => (
          <div key={skill.id} className="skills-row" style={{ fontSize: '9pt', marginBottom: '0.3rem', lineHeight: '1.35' }}>
            <span style={{ fontWeight: 'bold' }}>{skill.category}:</span> {skill.items}
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '1rem' }}>
        <div className="section-title" style={{ fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '11pt', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '0.5rem', color: '#000000' }}>
          Certifications & Awards
        </div>
        {certifications.map((cert) => (
          <div key={cert.id} className="item-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9pt', marginBottom: '0.35rem' }}>
            <span><span style={{ fontWeight: 'bold' }}>{cert.name}</span> {cert.issuer ? `— ${cert.issuer}` : ''}</span>
            <span>{cert.date}</span>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '1rem' }}>
        <div className="section-title" style={{ fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '11pt', borderBottom: '1px solid #000', paddingBottom: '2px', marginBottom: '0.5rem', color: '#000000' }}>
          Languages
        </div>
        <div style={{ fontSize: '9pt', lineHeight: '1.35' }}>
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
    <div className="tmpl-academic" style={{ fontFamily: 'var(--resume-font-serif)' }}>
      {/* Centered HBS Header */}
      <div className="header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '18pt', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '0.35rem', color: '#000000' }}>
          {personalInfo.name}
        </h1>
        
        <div className="contact-info" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '0.75rem', rowGap: '0.2rem', fontSize: '8.5pt', color: '#333' }}>
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.email && <span>• <a href={`mailto:${personalInfo.email}`} style={{ textDecoration: 'none', border: 'none' }}>{personalInfo.email}</a></span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.website && <span>• <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', border: 'none' }}>{personalInfo.website}</a></span>}
          {personalInfo.linkedin && <span>• <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', border: 'none' }}>{personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}</a></span>}
          {personalInfo.github && <span>• <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', border: 'none' }}>{personalInfo.github.replace(/^github\.com\//, '')}</a></span>}
        </div>

        {/* Double Horizontal Rule */}
        <div style={{ marginTop: '0.6rem', borderTop: '1px solid #000', borderBottom: '1px solid #000', height: '2px' }}></div>
      </div>

      {/* Dynamic Content */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default HarvardTemplate;
