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


const CreativeTemplate = ({ data }) => {
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

  // Filter sections that should go into the main column
  const mainColumnOrder = sectionOrder.filter(key => key !== 'skills' && key !== 'languages');

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="summary-text" key="summary" style={{ marginBottom: '1rem' }}>{personalInfo.summary}</div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience">
        <div className="section-title">Experience</div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row">
            <div className="item-header">
              <span className="item-title">{exp.role}</span>
              <span className="item-date">{exp.startDate} – {exp.endDate || 'Present'}</span>
            </div>
            <div className="item-org">{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
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
              <span className="item-date">{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
            <div className="item-org">{edu.school}{edu.location ? `, ${edu.location}` : ''}</div>
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
        <div className="section-title">Key Projects</div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row">
            <div className="item-header">
              <span className="item-title">{proj.name}</span>
              {proj.role && <span className="item-date" style={{ fontStyle: 'italic' }}>{proj.role}</span>}
            </div>
            {proj.link && (
              <div style={{ fontSize: '8.5pt', marginBottom: '0.15rem' }}>
                <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--theme-color)' }}>
                  {proj.link}
                </a>
              </div>
            )}
            {proj.description && (
              <div className="item-details">
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications">
        <div className="section-title">Certifications</div>
        {certifications.map((cert) => (
          <div key={cert.id} className="item-row" style={{ marginBottom: '0.4rem' }}>
            <div className="item-header">
              <span className="item-title" style={{ fontSize: '9pt', fontWeight: '600' }}>
                {cert.name}
              </span>
              <span className="item-date">{cert.date}</span>
            </div>
            {cert.issuer && <div style={{ fontSize: '8.5pt', color: '#64748b' }}>{cert.issuer}</div>}
          </div>
        ))}
      </div>
    ) : null
  };

  return (
    <div className="tmpl-creative">
      <div className="creative-layout">
        {/* Left Sidebar */}
        <div className="sidebar">
          {/* Contact details */}
          <div className="sidebar-section">
            <div className="sidebar-section-title">Contact</div>
            <div className="contact-list">
              {personalInfo.email && (
                <div className="contact-item">
                  <Mail size={12} />
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              )}
              {personalInfo.phone && (
                <div className="contact-item">
                  <Phone size={12} />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="contact-item">
                  <MapPin size={12} />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="contact-item">
                  <Globe size={12} />
                  <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">
                    {personalInfo.website}
                  </a>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="contact-item">
                  <Linkedin size={12} />
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                    {personalInfo.linkedin.replace(/^linkedin\.com\/in\//, '')}
                  </a>
                </div>
              )}
              {personalInfo.github && (
                <div className="contact-item">
                  <Github size={12} />
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                    {personalInfo.github.replace(/^github\.com\//, '')}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Skills in Sidebar */}
          {skills.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-section-title">Skills</div>
              <div className="skill-pill-container">
                {skills.map((skill) => (
                  <div key={skill.id} className="skill-category-block">
                    <div className="skill-cat-title">{skill.category}</div>
                    <div style={{ color: '#475569', fontSize: '8pt', lineHeight: '1.3' }}>{skill.items}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages in Sidebar */}
          {languages.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-section-title">Languages</div>
              <div>
                {languages.map((lang) => (
                  <div key={lang.id} className="lang-item">
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{lang.name}</span>
                    <span style={{ color: '#64748b' }}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Main Column */}
        <div className="main-col">
          {/* Main Header */}
          <div className="header">
            <h1>{personalInfo.name}</h1>
            {personalInfo.title && <div className="header-title">{personalInfo.title}</div>}
          </div>

          {/* Render main column sections in order */}
          {mainColumnOrder.map(key => sectionMap[key])}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
