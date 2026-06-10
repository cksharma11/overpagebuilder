import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SectionWrapper = ({ title, icon: Icon, isOpen, onToggle, children, ...rest }) => {
  return (
    <div className="accordion-item" {...rest}>
      <div className="accordion-header" onClick={onToggle}>
        <div className="accordion-title">
          {Icon && <Icon size={18} />}
          <span>{title}</span>
        </div>
        <div>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper;
