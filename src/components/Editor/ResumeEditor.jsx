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

const ResumeEditor = ({ resumeData, onChange }) => {
  const [activeSection, setActiveSection] = useState('design');

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
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
        isOpen={activeSection === 'design'}
        onToggle={() => toggleSection('design')}
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
        isOpen={activeSection === 'order'}
        onToggle={() => toggleSection('order')}
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
        isOpen={activeSection === 'personal'}
        onToggle={() => toggleSection('personal')}
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
        isOpen={activeSection === 'experience'}
        onToggle={() => toggleSection('experience')}
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
        isOpen={activeSection === 'education'}
        onToggle={() => toggleSection('education')}
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
        isOpen={activeSection === 'projects'}
        onToggle={() => toggleSection('projects')}
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
        isOpen={activeSection === 'skills'}
        onToggle={() => toggleSection('skills')}
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
        isOpen={activeSection === 'languages'}
        onToggle={() => toggleSection('languages')}
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
        isOpen={activeSection === 'certifications'}
        onToggle={() => toggleSection('certifications')}
      >
        <CertificationsSection
          items={resumeData.certifications}
          onChange={(val) => handleUpdateField('certifications', val)}
        />
      </SectionWrapper>
    </div>
  );
};

export default ResumeEditor;
