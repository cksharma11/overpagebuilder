import { sampleResume } from '../data/sampleResume';

const LOCAL_STORAGE_KEY = 'resume_builder_data';

export const loadResumeData = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      // Validate structure roughly
      if (parsed && parsed.personalInfo) {
        // Migration support for older sessions missing sectionOrder
        if (!parsed.settings) {
          parsed.settings = {};
        }
        if (!parsed.settings.sectionOrder) {
          parsed.settings.sectionOrder = [
            'summary',
            'experience',
            'education',
            'projects',
            'skills',
            'certifications',
            'languages'
          ];
        }
        return parsed;
      }
    }
  } catch (error) {
    console.error('Error loading resume from local storage:', error);
  }
  return sampleResume;
};

export const saveResumeData = (data) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving resume to local storage:', error);
  }
};

export const clearResumeData = () => {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing resume from local storage:', error);
  }
};

export const downloadJSON = (data, filename = 'resume.json') => {
  const fileContent = JSON.stringify(data, null, 2);
  const blob = new Blob([fileContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const importJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed && parsed.personalInfo) {
          resolve(parsed);
        } else {
          reject(new Error('Invalid resume data structure in JSON file.'));
        }
      } catch (error) {
        reject(new Error('Failed to parse JSON file.'));
      }
    };
    reader.onerror = () => reject(new Error('File reading error.'));
    reader.readAsText(file);
  });
};
