import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { renderBullets } from './AcademicTemplate';

const SerifTimelineTemplate = ({ data }) => {
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

  const renderTimelineItems = (items, type) => {
    return (
      <div style={{ position: 'relative', paddingLeft: '1.25rem', marginLeft: '0.5rem', borderLeft: `1px solid ${themeColor}` }}>
        {items.map((item, index) => (
          <div key={item.id || index} style={{ position: 'relative', marginBottom: '1rem' }}>
            {/* Timeline bullet node */}
            <div 
              style={{ 
                position: 'absolute', 
                left: '-1.55rem', 
                top: '0.3rem', 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: themeColor, 
                border: '1px solid #ffffff',
                boxShadow: '0 0 0 2px #ffffff'
              }} 
            />
            
            <div className="item-header" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt', color: '#000' }}>
              <span>{type === 'edu' ? item.degree : item.role}</span>
              <span style={{ fontWeight: 'normal', color: '#475569', fontSize: '9pt', fontStyle: 'italic' }}>{item.startDate} – {item.endDate || 'Present'}</span>
            </div>
            
            <div style={{ fontSize: '9.5pt', color: themeColor, fontStyle: 'italic', marginBottom: '0.2rem' }}>
              {type === 'edu' ? item.school : item.company}{item.location ? `, ${item.location}` : ''}
            </div>

            {item.description && (
              <div style={{ fontSize: '9pt', lineHeight: '1.35', color: '#334155', textAlign: 'justify' }}>
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
        <h2 style={{ fontSize: '11.5pt', fontWeight: 'bold', fontVariant: 'small-caps', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.5rem' }}>
          Biography
        </h2>
        <p style={{ fontSize: '9.5pt', lineHeight: '1.4', color: '#334155', textAlign: 'justify' }}>{personalInfo.summary}</p>
      </div>
    ) : null,

    experience: workExperience.length > 0 ? (
      <div className="section" key="experience" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '11.5pt', fontWeight: 'bold', fontVariant: 'small-caps', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.6rem' }}>
          Professional History
        </h2>
        {renderTimelineItems(workExperience, 'exp')}
      </div>
    ) : null,

    education: education.length > 0 ? (
      <div className="section" key="education" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '11.5pt', fontWeight: 'bold', fontVariant: 'small-caps', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.6rem' }}>
          Education
        </h2>
        {renderTimelineItems(education, 'edu')}
      </div>
    ) : null,

    projects: projects.length > 0 ? (
      <div className="section" key="projects" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '11.5pt', fontWeight: 'bold', fontVariant: 'small-caps', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.5rem' }}>
          Selected Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
          {projects.map((proj) => (
            <div key={proj.id} style={{ paddingLeft: '0.5rem', borderLeft: `2px solid ${themeColor}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '10pt' }}>
                <span>
                  {proj.name} 
                  {proj.link && <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'normal', fontSize: '8.5pt', marginLeft: '0.5rem', color: themeColor }}>[{proj.link}]</a>}
                </span>
                {proj.role && <span style={{ fontWeight: 'normal', color: '#475569', fontSize: '9pt', fontStyle: 'italic' }}>{proj.role}</span>}
              </div>
              {proj.description && (
                <div style={{ fontSize: '9pt', color: '#334155', marginTop: '0.15rem' }}>
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
        <h2 style={{ fontSize: '11.5pt', fontWeight: 'bold', fontVariant: 'small-caps', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.5rem' }}>
          Technical & Practical Skills
        </h2>
        {skills.map((skill) => (
          <div key={skill.id} style={{ fontSize: '9.5pt', marginBottom: '0.3rem' }}>
            <span style={{ fontWeight: 'bold', color: '#000' }}>{skill.category}: </span>
            <span>{skill.items}</span>
          </div>
        ))}
      </div>
    ) : null,

    certifications: certifications.length > 0 ? (
      <div className="section" key="certifications" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '11.5pt', fontWeight: 'bold', fontVariant: 'small-caps', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.4rem' }}>
          Certifications
        </h2>
        {certifications.map((cert) => (
          <div key={cert.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5pt', marginBottom: '0.35rem' }}>
            <span><span style={{ fontWeight: 'bold' }}>{cert.name}</span> {cert.issuer ? `— ${cert.issuer}` : ''}</span>
            <span>{cert.date}</span>
          </div>
        ))}
      </div>
    ) : null,

    languages: languages.length > 0 ? (
      <div className="section" key="languages" style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '11.5pt', fontWeight: 'bold', fontVariant: 'small-caps', color: themeColor, borderBottom: `1px solid ${themeColor}`, paddingBottom: '1px', marginBottom: '0.4rem' }}>
          Languages
        </h2>
        <div style={{ fontSize: '9.5pt' }}>
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
    <div className="tmpl-academic" style={{ fontFamily: 'var(--resume-font-serif)' }}>
      {/* Traditional Academic Header */}
      <div className="header" style={{ textStyle: 'center', marginBottom: '1.25rem' }}>
        <h1 style={{ fontSize: '22pt', fontWeight: 'normal', color: '#000', margin: '0 0 0.2rem 0', fontVariant: 'small-caps' }}>
          {personalInfo.name}
        </h1>
        {personalInfo.title && (
          <div style={{ fontSize: '11pt', fontStyle: 'italic', color: '#475569', marginBottom: '0.5rem' }}>
            {personalInfo.title}
          </div>
        )}
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem 1rem', fontSize: '8.5pt', color: '#475569' }}>
          {personalInfo.email && <span>Email: <a href={`mailto:${personalInfo.email}`} style={{ color: 'inherit', borderBottom: '1px dotted' }}>{personalInfo.email}</a></span>}
          {personalInfo.phone && <span>Phone: {personalInfo.phone}</span>}
          {personalInfo.location && <span>Location: {personalInfo.location}</span>}
          {personalInfo.website && <span>Web: <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', borderBottom: '1px dotted' }}>{personalInfo.website}</a></span>}
        </div>
      </div>

      {/* Render sections in order */}
      {sectionOrder.map(key => sectionMap[key])}
    </div>
  );
};

export default SerifTimelineTemplate;
