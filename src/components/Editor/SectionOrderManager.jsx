import React from 'react';
import { ArrowUp, ArrowDown, Menu } from 'lucide-react';

const SECTION_LABELS = {
  summary: 'Professional Summary',
  experience: 'Work Experience',
  education: 'Education',
  projects: 'Key Projects',
  skills: 'Core Skills',
  languages: 'Languages',
  certifications: 'Certifications & Awards'
};

const SectionOrderManager = ({ sectionOrder = [], onChange }) => {
  const handleMoveUp = (index, e) => {
    e.stopPropagation();
    if (index === 0) return;
    const newOrder = [...sectionOrder];
    const temp = newOrder[index];
    newOrder[index] = newOrder[index - 1];
    newOrder[index - 1] = temp;
    onChange(newOrder);
  };

  const handleMoveDown = (index, e) => {
    e.stopPropagation();
    if (index === sectionOrder.length - 1) return;
    const newOrder = [...sectionOrder];
    const temp = newOrder[index];
    newOrder[index] = newOrder[index + 1];
    newOrder[index + 1] = temp;
    onChange(newOrder);
  };

  return (
    <div className="section-order-manager" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        Arrange the order of sections on your resume. Changes are rendered instantly in the document preview.
      </p>
      
      {sectionOrder.map((sectionKey, index) => {
        const label = SECTION_LABELS[sectionKey] || sectionKey;
        return (
          <div 
            key={sectionKey} 
            className="list-item-card" 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '0.75rem 1rem',
              margin: 0,
              backgroundColor: 'rgba(31, 41, 55, 0.6)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Menu size={14} style={{ color: 'var(--text-muted)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {label}
              </span>
            </div>
            
            <div className="list-item-actions" style={{ gap: '0.25rem' }}>
              <button
                type="button"
                className="btn btn-secondary btn-mini"
                onClick={(e) => handleMoveUp(index, e)}
                disabled={index === 0}
                title="Move Up"
                style={{ padding: '0.35rem' }}
              >
                <ArrowUp size={12} />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-mini"
                onClick={(e) => handleMoveDown(index, e)}
                disabled={index === sectionOrder.length - 1}
                title="Move Down"
                style={{ padding: '0.35rem' }}
              >
                <ArrowDown size={12} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionOrderManager;
