import React, { useState } from 'react';
import { Sliders, ArrowUpDown, User, Briefcase, GraduationCap, Code, Wrench, Globe, Award } from 'lucide-react';

import SectionWrapper from './SectionWrapper';
import DesignSettings from './DesignSettings';
import SectionOrderManager from './SectionOrderManager';
import PersonalInfo from './PersonalInfo';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import LanguagesSection from './LanguagesSection';
import CertificationsSection from './CertificationsSection';

const ResumeEditor = ({ resumeData, onChange, activeSection, setActiveSection }) => {
  const [localActiveSection, setLocalActiveSection] = useState('design');

  const currentActiveSection = activeSection !== undefined ? activeSection : localActiveSection;

  const toggleSection = (sectionName) => {
    if (setActiveSection) {
      setActiveSection(currentActiveSection === sectionName ? null : sectionName);
    } else {
      setLocalActiveSection(localActiveSection === sectionName ? null : sectionName);
    }
  };

  const handleUpdateField = (sectionKey, value) => {
    onChange({
      ...resumeData,
      [sectionKey]: value
    });
  };

  return (
    <div className="editor-sections">
      {/* 1. Design Settings */}
      <SectionWrapper
        title="Design & Template Settings"
        icon={Sliders}
        isOpen={currentActiveSection === 'design'}
        onToggle={() => toggleSection('design')}
        data-section-key="design"
      >
        <DesignSettings
          settings={resumeData.settings}
          onChange={(val) => handleUpdateField('settings', val)}
        />
      </SectionWrapper>

      {/* 1b. Rearrange Sections */}
      <SectionWrapper
        title="Rearrange Section Order"
        icon={ArrowUpDown}
        isOpen={currentActiveSection === 'order'}
        onToggle={() => toggleSection('order')}
        data-section-key="order"
      >
        <SectionOrderManager
          sectionOrder={resumeData.settings.sectionOrder || []}
          onChange={(newOrder) => handleUpdateField('settings', {
            ...resumeData.settings,
            sectionOrder: newOrder
          })}
        />
      </SectionWrapper>


      {/* 2. Personal Info */}
      <SectionWrapper
        title="Contact & Personal Info"
        icon={User}
        isOpen={currentActiveSection === 'personal'}
        onToggle={() => toggleSection('personal')}
        data-section-key="personal"
      >
        <PersonalInfo
          data={resumeData.personalInfo}
          onChange={(val) => handleUpdateField('personalInfo', val)}
        />
      </SectionWrapper>

      {/* 3. Work Experience */}
      <SectionWrapper
        title="Work Experience"
        icon={Briefcase}
        isOpen={currentActiveSection === 'experience'}
        onToggle={() => toggleSection('experience')}
        data-section-key="experience"
      >
        <ExperienceSection
          items={resumeData.workExperience}
          onChange={(val) => handleUpdateField('workExperience', val)}
        />
      </SectionWrapper>

      {/* 4. Education */}
      <SectionWrapper
        title="Education"
        icon={GraduationCap}
        isOpen={currentActiveSection === 'education'}
        onToggle={() => toggleSection('education')}
        data-section-key="education"
      >
        <EducationSection
          items={resumeData.education}
          onChange={(val) => handleUpdateField('education', val)}
        />
      </SectionWrapper>

      {/* 5. Projects */}
      <SectionWrapper
        title="Key Projects"
        icon={Code}
        isOpen={currentActiveSection === 'projects'}
        onToggle={() => toggleSection('projects')}
        data-section-key="projects"
      >
        <ProjectsSection
          items={resumeData.projects}
          onChange={(val) => handleUpdateField('projects', val)}
        />
      </SectionWrapper>

      {/* 6. Skills */}
      <SectionWrapper
        title="Core Skills"
        icon={Wrench}
        isOpen={currentActiveSection === 'skills'}
        onToggle={() => toggleSection('skills')}
        data-section-key="skills"
      >
        <SkillsSection
          items={resumeData.skills}
          onChange={(val) => handleUpdateField('skills', val)}
        />
      </SectionWrapper>

      {/* 7. Languages */}
      <SectionWrapper
        title="Languages"
        icon={Globe}
        isOpen={currentActiveSection === 'languages'}
        onToggle={() => toggleSection('languages')}
        data-section-key="languages"
      >
        <LanguagesSection
          items={resumeData.languages}
          onChange={(val) => handleUpdateField('languages', val)}
        />
      </SectionWrapper>

      {/* 8. Certifications */}
      <SectionWrapper
        title="Certifications & Awards"
        icon={Award}
        isOpen={currentActiveSection === 'certifications'}
        onToggle={() => toggleSection('certifications')}
        data-section-key="certifications"
      >
        <CertificationsSection
          items={resumeData.certifications}
          onChange={(val) => handleUpdateField('certifications', val)}
        />
      </SectionWrapper>

      {/* Copyright Footer */}
      <div style={{ 
        marginTop: '1.5rem', 
        textAlign: 'center', 
        fontSize: '0.75rem', 
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '1.25rem',
        letterSpacing: '0.5px'
      }}>
        © {new Date().getFullYear()} cksharma11. All rights reserved.
      </div>
    </div>
  );
};

export default ResumeEditor;
