import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { renderBullets } from './AcademicTemplate';

const Github = ({ size = 16, className = "", style = {} }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16, className = "", style = {} }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const ModernTemplate = ({ data }) => {
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
        <div className="section-title">Profile Summary</div>
        <div className="summary-text">{personalInfo.summary}</div>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience">
        <div className="section-title">Professional Experience</div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row">
            <div className="item-header">
              <span className="item-title">{exp.role}</span>
              <span className="item-meta">{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div className="item-company-location">
              <span>{exp.company}</span>
              {exp.location && <span>{exp.location}</span>}
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
              <span className="item-title">{edu.degree}</span>
              <span className="item-meta">{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div className="item-company-location">
              <span>{edu.school}</span>
              {edu.location && <span>{edu.location}</span>}
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
        <div className="section-title">Featured Projects</div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row">
            <div className="item-header">
              <span className="item-title">
                {proj.name}
                {proj.link && (
                  <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem', color: 'var(--theme-color)' }}>
                    {proj.link}
                  </a>
                )}
              </span>
              {proj.role && <span className="item-meta" style={{ fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.description && (
              <div className="item-details" style={{ marginTop: '0.2rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills">
        <div className="section-title">Skills Inventory</div>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-group">
              <div className="skill-group-title">{skill.category}</div>
              <div style={{ fontSize: '9pt', color: '#475569' }}>{skill.items}</div>
            </div>
          ))}
        </div>
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications">
        <div className="section-title">Certifications & Licenses</div>
        {certifications.map((cert) => (
          <div key={cert.id} className="item-row" style={{ marginBottom: '0.4rem' }}>
            <div className="item-header">
              <span className="item-title" style={{ fontSize: '9.5pt' }}>
                {cert.name} {cert.issuer ? `— ${cert.issuer}` : ''}
              </span>
              <span className="item-meta">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages">
        <div className="section-title">Languages</div>
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
    <div className="tmpl-modern">
      {/* Header */}
      <div className="header">
        <h1>{personalInfo.name}</h1>
        {personalInfo.title && <div className="header-title">{personalInfo.title}</div>}
        
        <div className="contact-grid">
          {personalInfo.email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={12} style={{ color: 'var(--theme-color)' }} />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Phone size={12} style={{ color: 'var(--theme-color)' }} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={12} style={{ color: 'var(--theme-color)' }} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Globe size={12} style={{ color: 'var(--theme-color)' }} />
              <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.website}
              </a>
            </div>
          )}
          {personalInfo.linkedin && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Linkedin size={12} style={{ color: 'var(--theme-color)' }} />
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}
              </a>
            </div>
          )}
          {personalInfo.github && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Github size={12} style={{ color: 'var(--theme-color)' }} />
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                {personalInfo.github.replace(/^github\.com\//, '')}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default ModernTemplate;
