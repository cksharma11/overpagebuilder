import React, { useState, useEffect, useRef } from 'react';
import { FileText, Download, Upload, Printer, RotateCcw, Trash2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

import ResumeEditor from './components/Editor/ResumeEditor';
import ResumePreview from './components/Preview/ResumePreview';
import ZoomControl from './components/Preview/ZoomControl';

import { loadResumeData, saveResumeData, clearResumeData, downloadJSON, importJSON } from './utils/storage';
import { sampleResume } from './data/sampleResume';

function App() {
  const [resumeData, setResumeData] = useState(loadResumeData());
  const [zoom, setZoom] = useState(90);
  const fileInputRef = useRef(null);
  const resumeRef = useRef(null);

  // Autosave to local storage when state changes
  useEffect(() => {
    saveResumeData(resumeData);
  }, [resumeData]);

  // Handle Load Sample Data
  const handleLoadSample = () => {
    if (window.confirm('Are you sure you want to load sample data? This will overwrite your current draft.')) {
      setResumeData(sampleResume);
    }
  };

  // Handle Reset / Clear
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all data? This will reset your resume fields.')) {
      const emptyState = {
        personalInfo: { name: '', title: '', email: '', phone: '', location: '', website: '', linkedin: '', github: '', summary: '' },
        workExperience: [],
        education: [],
        skills: [],
        projects: [],
        languages: [],
        certifications: [],
        settings: { ...resumeData.settings } // keep current design settings
      };
      setResumeData(emptyState);
    }
  };

  // Handle Export JSON
  const handleExportJSON = () => {
    const filename = `${resumeData.personalInfo.name || 'resume'}_draft.json`.replace(/\s+/g, '_').toLowerCase();
    downloadJSON(resumeData, filename);
  };

  // Handle Import JSON Click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle File Uploaded
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const importedData = await importJSON(file);
      setResumeData(importedData);
      alert('Resume draft imported successfully!');
    } catch (err) {
      alert(`Import failed: ${err.message}`);
    } finally {
      // Clear file input value to allow uploading same file again
      e.target.value = '';
    }
  };

  const [showPrintModal, setShowPrintModal] = useState(false);
  const [modalView, setModalView] = useState('select'); // 'select' or 'ats'

  // Handle PDF Export / Print Click
  const handlePrintClick = () => {
    setModalView('select');
    setShowPrintModal(true);
  };

  // Perform direct HTML-to-PDF download
  const handleDirectDownloadPDF = () => {
    setShowPrintModal(false);
    
    const element = document.getElementById('printable-resume-sheet');
    const wrapper = document.querySelector('.resume-paper-wrapper');
    if (!element) return;

    // Capture current style values to restore later
    const originalTransform = wrapper ? wrapper.style.transform : '';
    const originalWidth = element.style.width;
    const originalMaxWidth = element.style.maxWidth;

    // Temporarily reset zoom to 100% and scale the element container to the printable area (8.27in)
    if (wrapper) {
      wrapper.style.transform = 'none';
    }
    element.style.width = '8.27in';
    element.style.maxWidth = '8.27in';

    const opt = {
      margin:       0, // Use 0 margins so html2pdf doesn't introduce extra padding/scaling on top of the CSS padding
      filename:     `${resumeData.personalInfo.name || 'resume'}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2.5, 
        useCORS: true,
        logging: false,
        letterRendering: true,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Run PDF generation and restore original styles
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        if (wrapper) {
          wrapper.style.transform = originalTransform;
        }
        element.style.width = originalWidth;
        element.style.maxWidth = originalMaxWidth;
      })
      .catch((err) => {
        console.error("PDF generation failed:", err);
        if (wrapper) {
          wrapper.style.transform = originalTransform;
        }
        element.style.width = originalWidth;
        element.style.maxWidth = originalMaxWidth;
      });
  };

  // Perform actual browser print
  const handlePrintProceed = () => {
    setShowPrintModal(false);
    // Let the modal close animation/state settle before calling print
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="app-container">
      {/* Header bar */}
      <header className="app-header">
        <div className="logo">
          <FileText size={22} style={{ color: '#818cf8' }} />
          <span>Overpage <span>Builder</span></span>
        </div>
        <div className="header-actions">
          <button type="button" className="btn btn-secondary" onClick={handleLoadSample}>
            <RotateCcw size={16} /> Load Demo
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleClearAll} style={{ color: '#ef4444' }}>
            <Trash2 size={16} /> Clear All
          </button>
          
          <span style={{ borderLeft: '1px solid var(--border-color)', height: '20px', margin: '0 0.5rem' }}></span>
          
          <button type="button" className="btn btn-secondary" onClick={triggerFileInput}>
            <Upload size={16} /> Import JSON
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="file-upload-input"
            accept=".json"
            onChange={handleFileChange}
          />
          <button type="button" className="btn btn-secondary" onClick={handleExportJSON}>
            <Download size={16} /> Backup JSON
          </button>
          <button type="button" className="btn btn-primary" onClick={handlePrintClick}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </header>

      {/* Main split workarea */}
      <main className="main-workspace">
        {/* Left Editor */}
        <section className="editor-pane">
          <ResumeEditor 
            resumeData={resumeData} 
            onChange={setResumeData} 
          />
        </section>

        {/* Right Preview */}
        <section className="preview-pane">
          <div className="preview-toolbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Layout Standard:</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)', backgroundColor: 'var(--bg-card)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>A4 Portrait</span>
            </div>
            
            <ZoomControl zoom={zoom} onChange={setZoom} />
          </div>

          <div className="preview-container">
            <div 
              className="resume-paper-wrapper"
              style={{ transform: `scale(${zoom / 100})` }}
            >
              <ResumePreview 
                data={resumeData} 
                ref={resumeRef} 
              />
            </div>
          </div>
        </section>
      </main>

      {/* Print Instructions Modal */}
      {showPrintModal && (
        <div className="modal-overlay" onClick={() => setShowPrintModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <Download size={20} style={{ color: 'var(--accent-color)' }} />
              <h2>Download Resume as PDF</h2>
            </div>
            
            {modalView === 'select' ? (
              <div className="modal-body" style={{ color: 'var(--text-secondary)' }}>
                <p style={{ marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                  Choose a download option below to save your resume:
                </p>
                
                {/* Option A: Direct PDF Download */}
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'border-color 0.2s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success-color)' }}></div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Option A: Direct Clean PDF (Recommended)</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                    One-click instant download. Renders perfectly with <strong>no headers, footers, or website URLs</strong>. Great for emailing directly to recruiters or printing.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    onClick={handleDirectDownloadPDF}
                    style={{ width: '100%', marginTop: '0.25rem', backgroundColor: 'var(--success-color)', borderColor: 'var(--success-color)' }}
                  >
                    <Download size={16} /> Download Instant PDF
                  </button>
                </div>
                
                {/* Option B: ATS-Optimized PDF */}
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }}></div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Option B: ATS-Optimized vector PDF</strong>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                    Generates 100% searchable, selectable vector text. <strong>Highly recommended for automated resume scanners (ATS)</strong> and online job boards.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setModalView('ats')}
                    style={{ width: '100%', marginTop: '0.25rem' }}
                  >
                    <Printer size={16} /> Save as ATS-Optimized PDF...
                  </button>
                </div>
                
                <div className="modal-actions" style={{ borderTop: 'none', paddingTop: '0.5rem', marginTop: '0.75rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowPrintModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="modal-body">
                <p style={{ marginBottom: '1.25rem' }}>
                  To save your ATS-optimized resume, configure these print settings in the browser print window:
                </p>
                
                <div className="instruction-step">
                  <span className="step-num">1</span>
                  <div className="step-text">Set <strong>Destination</strong> to <strong>Save as PDF</strong>.</div>
                </div>
                
                <div className="instruction-step">
                  <span className="step-num">2</span>
                  <div className="step-text">Under More Settings, <strong>uncheck Headers and footers</strong> (removes website URLs, dates, and page titles).</div>
                </div>
                
                <div className="instruction-step">
                  <span className="step-num">3</span>
                  <div className="step-text"><strong>Check Background graphics</strong> (keeps templates' banner backgrounds and colored margins).</div>
                </div>
                
                <div className="modal-actions" style={{ marginTop: '1.5rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setModalView('select')}>
                    Back
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handlePrintProceed}>
                    Proceed to Print / Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
