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


const DoubleColumnTemplate = ({ data }) => {
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

  const themeColor = settings.themeColor || '#1e3a8a';

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '2px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Profile Summary
        </div>
        <p style={{ fontSize: '8.5pt', lineHeight: '1.4', color: '#334155' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '2px', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          Experience
        </div>
        {workExperience.map((exp) => (
          <div key={exp.id} className="item-row" style={{ marginBottom: '0.8rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '9pt', color: '#0f172a' }}>{exp.role}</div>
            <div style={{ fontSize: '8.5pt', color: themeColor, fontWeight: '600' }}>{exp.company}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8pt', color: '#64748b', marginBottom: '0.15rem' }}>
              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
              <span>{exp.location}</span>
            </div>
            {exp.description && (
              <div style={{ fontSize: '8pt', lineHeight: '1.3', color: '#334155' }}>
                {renderBullets(exp.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '2px', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          Education
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="item-row" style={{ marginBottom: '0.7rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '9pt', color: '#0f172a' }}>{edu.degree}</div>
            <div style={{ fontSize: '8.5pt', color: '#475569' }}>{edu.school}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8pt', color: '#64748b' }}>
              <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
            </div>
          </div>
        ))}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '2px', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
          Projects
        </div>
        {projects.map((proj) => (
          <div key={proj.id} className="item-row" style={{ marginBottom: '0.7rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '9pt', color: '#0f172a' }}>
              {proj.name}
              {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '7.5pt', marginLeft: '0.35rem', color: themeColor }}>[{proj.link}]</a>}
            </div>
            {proj.role && <div style={{ fontSize: '8pt', color: '#64748b', fontStyle: 'italic' }}>{proj.role}</div>}
            {proj.description && (
              <div style={{ fontSize: '8pt', lineHeight: '1.3', color: '#334155', marginTop: '0.1rem' }}>
                {renderBullets(proj.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '2px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Skills
        </div>
        {skills.map((skill) => (
          <div key={skill.id} style={{ fontSize: '8.5pt', marginBottom: '0.4rem' }}>
            <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '8.5pt' }}>{skill.category}</div>
            <div style={{ color: '#475569', fontSize: '8pt' }}>{skill.items}</div>
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '2px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Certifications
        </div>
        {certifications.map((cert) => (
          <div key={cert.id} style={{ fontSize: '8.5pt', marginBottom: '0.35rem' }}>
            <div style={{ fontWeight: 'bold', color: '#0f172a' }}>{cert.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8pt', color: '#64748b' }}>
              <span>{cert.issuer}</span>
              <span>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title" style={{ fontSize: '10pt', fontWeight: 'bold', color: themeColor, borderBottom: `2px solid ${themeColor}`, paddingBottom: '2px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Languages
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 0.8rem', fontSize: '8.5pt' }}>
          {languages.map((lang) => (
            <span key={lang.id} style={{ color: '#334155' }}>
              <strong>{lang.name}</strong>: {lang.level}
            </span>
          ))}
        </div>
      </div>
    ) : null
  };

  // Split section ordering programmatically for dual columns
  // Left column: Experience, Projects (Narratives)
  // Right column: Summary, Education, Skills, Certifications, Languages (Structured panels)
  const leftSections = sectionOrder.filter(key => key === 'experience' || key === 'projects');
  const rightSections = sectionOrder.filter(key => key !== 'experience' && key !== 'projects');

  return (
    <div className="tmpl-modern" style={{ fontFamily: 'var(--resume-font-sans)' }}>
      {/* Full width clean header */}
      <div className="header" style={{ borderBottom: `3px solid ${themeColor}`, paddingBottom: '0.75rem', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '24pt', fontWeight: '800', letterSpacing: '-0.5px', color: '#0f172a', margin: '0 0 0.15rem 0' }}>
          {personalInfo.name}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '11pt', fontWeight: '600', color: themeColor, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {personalInfo.title}
          </div>
        )}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem 1.25rem', fontSize: '8.5pt', color: '#475569', marginTop: '0.5rem' }}>
          {personalInfo.email && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Mail size={11} /> {personalInfo.email}</span>}
          {personalInfo.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Phone size={11} /> {personalInfo.phone}</span>}
          {personalInfo.location && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><MapPin size={11} /> {personalInfo.location}</span>}
          {personalInfo.website && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Globe size={11} /> {personalInfo.website}</span>}
        </div>
      </div>

      {/* Grid container */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.35in' }}>
        {/* Left Column (Experiences) */}
        <div>
          {leftSections.map(key => sectionMap[key])}
        </div>

        {/* Right Column (Bio/Details) */}
        <div>
          {rightSections.map(key => sectionMap[key])}
        </div>
      </div>
    </div>
  );
};

export default DoubleColumnTemplate;
