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


const TimelineTemplate = ({ data }) => {
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

  const themeColor = settings.themeColor || '#6366f1';

  // Helper to render timeline list items
  const renderTimelineItems = (items, type) => {
    return (
      <div style={{ position: 'relative', paddingLeft: '1.25rem', marginLeft: '0.5rem', borderLeft: `2px solid ${themeColor}` }}>
        {items.map((item, index) => (
          <div key={item.id || index} style={{ position: 'relative', marginBottom: '1.25rem' }}>
            {/* Timeline bullet node */}
            <div 
              style={{ 
                position: 'absolute', 
                left: '-1.65rem', 
                top: '0.25rem', 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: '#ffffff', 
                border: `3px solid ${themeColor}`,
                boxShadow: '0 0 0 3px #ffffff'
              }} 
            />
            
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#0f172a' }}>
              <span>{type === 'edu' ? item.degree : item.role}</span>
              <span style={{ fontWeight: 'normal', color: '#64748b', fontSize: '9.5pt' }}>{item.startDate} – {item.endDate || 'Present'}</span>
            </div>
            
            <div style={{ fontSize: '9pt', color: themeColor, fontWeight: '600', marginBottom: '0.25rem' }}>
              {type === 'edu' ? item.school : item.company}{item.location ? ` | ${item.location}` : ''}
            </div>

            {item.description && (
              <div style={{ fontSize: '8.5pt', lineHeight: '1.35', color: '#475569' }}>
                {renderBullets(item.description)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const sectionMap = {
    summary: personalInfo.summary ? (
      <div className="section" key="summary" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '10.5pt', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: themeColor, marginBottom: '0.5rem' }}>
          About Me
        </h2>
        <p style={{ fontSize: '9pt', lineHeight: '1.4', color: '#475569' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '10.5pt', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: themeColor, marginBottom: '0.6rem' }}>
          Experience Timeline
        </h2>
        {renderTimelineItems(workExperience, 'exp')}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '10.5pt', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: themeColor, marginBottom: '0.6rem' }}>
          Education History
        </h2>
        {renderTimelineItems(education, 'edu')}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '10.5pt', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: themeColor, marginBottom: '0.5rem' }}>
          Key Achievements & Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
          {projects.map((proj) => (
            <div key={proj.id} style={{ paddingLeft: '0.5rem', borderLeft: `3px solid ${themeColor}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '9.5pt' }}>
                <span>
                  {proj.name} 
                  {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8pt', marginLeft: '0.5rem', color: themeColor }}>[{proj.link}]</a>}
                </span>
                {proj.role && <span style={{ fontWeight: '500', color: '#64748b', fontSize: '8.5pt' }}>{proj.role}</span>}
              </div>
              {proj.description && (
                <div style={{ fontSize: '8.5pt', color: '#475569', marginTop: '0.15rem' }}>
                  {renderBullets(proj.description)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,

    skills: skills.length > 0 ? (
      <div className="section" key="skills" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '10.5pt', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: themeColor, marginBottom: '0.5rem' }}>
          Skills Inventory
        </h2>
        {skills.map((skill) => (
          <div key={skill.id} style={{ fontSize: '9pt', marginBottom: '0.35rem' }}>
            <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{skill.category}: </span>
            <span style={{ color: '#475569' }}>{skill.items}</span>
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '10.5pt', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: themeColor, marginBottom: '0.4rem' }}>
          Certifications
        </h2>
        {certifications.map((cert) => (
          <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9pt', marginBottom: '0.35rem' }}>
            <span><span style={{ fontWeight: 'bold' }}>{cert.name}</span> {cert.issuer ? `— ${cert.issuer}` : ''}</span>
            <span style={{ color: '#64748b' }}>{cert.date}</span>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '10.5pt', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: themeColor, marginBottom: '0.4rem' }}>
          Languages
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '9pt' }}>
          {languages.map((lang) => (
            <span key={lang.id} style={{ backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#334155' }}>
              <strong style={{ color: '#0f172a' }}>{lang.name}</strong> ({lang.level})
            </span>
          ))}
        </div>
      </div>
    ) : null
  };

  return (
    <div className="tmpl-modern" style={{ fontFamily: 'var(--resume-font-sans)' }}>
      {/* Sleek Minimal Header */}
      <div className="header" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '24pt', fontWeight: '800', letterSpacing: '-0.5px', color: '#0f172a', margin: 0 }}>
          {personalInfo.name}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '12pt', fontWeight: '600', color: themeColor, marginTop: '0.15rem' }}>
            {personalInfo.title}
          </div>
        )}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', fontSize: '8.5pt', color: '#64748b', marginTop: '0.6rem' }}>
          {personalInfo.email && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Mail size={11} /> {personalInfo.email}</span>}
          {personalInfo.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Phone size={11} /> {personalInfo.phone}</span>}
          {personalInfo.location && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><MapPin size={11} /> {personalInfo.location}</span>}
          {personalInfo.website && <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Globe size={11} /> {personalInfo.website}</span>}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default TimelineTemplate;
