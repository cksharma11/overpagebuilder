import React from 'react';

const COLOR_PRESETS = [
  '#0f172a', // Slate Blue/Black
  '#1e40af', // Indigo/Blue
  '#0d9488', // Teal
  '#7c3aed', // Purple
  '#b91c1c', // Crimson
  '#15803d'  // Green
];

const TEMPLATES = [
  { id: 'academic', title: 'Classic Academic', desc: 'Serif, divider lines' },
  { id: 'modern', title: 'Modern Executive', desc: 'Sans-serif, left-bordered header' },
  { id: 'minimalist', title: 'Sleek Minimal', desc: 'Whitespace-focused layout' },
  { id: 'creative', title: 'Creative 2-Col', desc: 'Left column profiles' },
  { id: 'harvard', title: 'Harvard LaTeX', desc: 'Centered header, double rules' },
  { id: 'slate', title: 'Slate Banner', desc: 'Solid colored top block' },
  { id: 'timeline', title: 'Timeline Modern', desc: 'Left connected vertical nodes' },
  { id: 'tech', title: 'Tech Compact', desc: 'Space-optimized tags & lists' },
  { id: 'accent', title: 'Accent Header', desc: 'Pill-boxed section headers' },
  { id: 'narrative', title: 'Left Narrative', desc: 'Gutter titles, right stories' },
  { id: 'serif_timeline', title: 'Serif Timeline', desc: 'Classic serif infographics' },
  { id: 'double', title: 'Double Column', desc: 'Two equal narrative columns' },
  { id: 'warm', title: 'Warm Ivory', desc: 'Ivory page, warm dark text' },
  { id: 'elite', title: 'Elite Corporate', desc: 'Finance/consulting dense grid' }
];

const DesignSettings = ({ settings = {}, onChange }) => {
  const handleSettingChange = (field, value) => {
    onChange({
      ...settings,
      [field]: value
    });
  };

  // Render thumbnail helper based on template type
  const renderThumbnail = (id) => {
    switch (id) {
      case 'academic':
        return (
          <>
            <div className="thumb-title" style={{ width: '50%' }}></div>
            <div className="thumb-line" style={{ width: '80%' }}></div>
            <div className="thumb-line" style={{ width: '80%' }}></div>
          </>
        );
      case 'modern':
        return (
          <div style={{ borderLeft: '4px solid #6366f1', height: '100%', width: '100%', padding: '4px', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
            <div className="thumb-title" style={{ width: '60%' }}></div>
            <div className="thumb-line" style={{ width: '80%' }}></div>
          </div>
        );
      case 'minimalist':
        return (
          <>
            <div className="thumb-title" style={{ width: '30%', backgroundColor: '#cbd5e1' }}></div>
            <div className="thumb-line" style={{ width: '70%', backgroundColor: '#f1f5f9' }}></div>
            <div className="thumb-line" style={{ width: '75%', backgroundColor: '#f1f5f9' }}></div>
          </>
        );
      case 'creative':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3px', padding: '4px', height: '100%', width: '100%' }}>
            <div style={{ backgroundColor: '#e2e8f0', height: '100%', borderRadius: '2px' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
              <div className="thumb-title" style={{ width: '80%' }}></div>
              <div className="thumb-line" style={{ width: '90%' }}></div>
            </div>
          </div>
        );
      case 'harvard':
        return (
          <>
            <div className="thumb-title" style={{ width: '40%' }}></div>
            <div style={{ width: '80%', height: '1px', borderTop: '1px solid #94a3b8', borderBottom: '1px solid #94a3b8', margin: '2px 0' }}></div>
            <div className="thumb-line" style={{ width: '70%' }}></div>
          </>
        );
      case 'slate':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
            <div style={{ backgroundColor: '#374151', height: '30px', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '4px' }}>
              <div style={{ backgroundColor: '#ffffff', height: '6px', width: '30%', borderRadius: '1px' }}></div>
            </div>
            <div style={{ padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div className="thumb-line" style={{ width: '80%' }}></div>
            </div>
          </div>
        );
      case 'timeline':
        return (
          <div style={{ borderLeft: '2px solid #6366f1', paddingLeft: '8px', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-5px', top: '15px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366f1' }}></div>
            <div style={{ position: 'absolute', left: '-5px', top: '45px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366f1' }}></div>
            <div className="thumb-title" style={{ width: '50%' }}></div>
            <div className="thumb-line" style={{ width: '80%' }}></div>
          </div>
        );
      case 'tech':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '4px', justifyContent: 'center' }}>
            <div className="thumb-title" style={{ width: '40%' }}></div>
            <div style={{ display: 'flex', gap: '3px' }}>
              <div style={{ backgroundColor: '#e2e8f0', height: '8px', width: '20px', borderRadius: '2px' }}></div>
              <div style={{ backgroundColor: '#e2e8f0', height: '8px', width: '20px', borderRadius: '2px' }}></div>
              <div style={{ backgroundColor: '#e2e8f0', height: '8px', width: '25px', borderRadius: '2px' }}></div>
            </div>
            <div className="thumb-line" style={{ width: '90%' }}></div>
          </div>
        );
      case 'accent':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#6366f1', height: '10px', width: '60%', borderRadius: '2px', display: 'flex', alignItems: 'center', paddingLeft: '3px' }}>
              <div style={{ backgroundColor: '#fff', height: '3px', width: '70%', borderRadius: '1px' }}></div>
            </div>
            <div className="thumb-line" style={{ width: '85%' }}></div>
          </div>
        );
      case 'narrative':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4px', padding: '4px', height: '100%', width: '100%', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#cbd5e1', height: '10px', width: '100%', borderRadius: '2px' }}></div>
            <div className="thumb-line" style={{ width: '100%' }}></div>
          </div>
        );
      case 'serif_timeline':
        return (
          <div style={{ borderLeft: '1px solid #1e293b', paddingLeft: '8px', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-4px', top: '30px', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1e293b' }}></div>
            <div className="thumb-title" style={{ width: '45%' }}></div>
            <div className="thumb-line" style={{ width: '75%' }}></div>
          </div>
        );
      case 'double':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', padding: '4px', height: '100%', width: '100%', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
              <div className="thumb-title" style={{ width: '80%' }}></div>
              <div className="thumb-line" style={{ width: '100%' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
              <div className="thumb-title" style={{ width: '80%', backgroundColor: '#cbd5e1' }}></div>
              <div className="thumb-line" style={{ width: '100%', backgroundColor: '#f1f5f9' }}></div>
            </div>
          </div>
        );
      case 'warm':
        return (
          <div style={{ backgroundColor: '#faf9f6', border: '1px solid #e7e5e4', height: '100%', width: '100%', padding: '4px', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
            <div className="thumb-title" style={{ width: '50%', backgroundColor: '#7f1d1d' }}></div>
            <div className="thumb-line" style={{ width: '80%', backgroundColor: '#78716c' }}></div>
          </div>
        );
      case 'elite':
        return (
          <>
            <div className="thumb-title" style={{ width: '70%', height: '5px' }}></div>
            <div className="thumb-line" style={{ width: '100%', height: '3px' }}></div>
            <div className="thumb-line" style={{ width: '100%', height: '3px' }}></div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="design-settings-form">
      {/* Template Selection */}
      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label>Active Design Template</label>
        <div className="template-grid" style={{ maxHeight: '280px', overflowY: 'auto', paddingRight: '4px', border: '1px solid var(--border-color)', padding: '0.5rem', borderRadius: '6px', backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
          {TEMPLATES.map((tmpl) => (
            <div
              key={tmpl.id}
              className={`template-card ${settings.template === tmpl.id ? 'active' : ''}`}
              onClick={() => handleSettingChange('template', tmpl.id)}
              style={{ padding: '0.5rem', marginBottom: '0.25rem' }}
            >
              <div className="template-card-preview-thumb">
                {renderThumbnail(tmpl.id)}
              </div>
              <div className="template-card-title" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{tmpl.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="settings-grid">
        {/* Accent/Theme Color */}
        <div className="form-group">
          <label>Theme Primary Color</label>
          <div className="color-picker-wrapper">
            <input
              type="color"
              className="color-input"
              value={settings.themeColor || '#0f172a'}
              onChange={(e) => handleSettingChange('themeColor', e.target.value)}
            />
            <span className="color-label">Custom</span>
          </div>
          <div className="presets-row">
            {COLOR_PRESETS.map((color) => (
              <div
                key={color}
                className={`preset-color-dot ${settings.themeColor === color ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleSettingChange('themeColor', color)}
              />
            ))}
          </div>
        </div>

        {/* Font Family Selection */}
        <div className="form-group">
          <label>Typography Style</label>
          <select
            className="form-control"
            value={settings.fontFamily || 'default'}
            onChange={(e) => handleSettingChange('fontFamily', e.target.value)}
          >
            <option value="default">Template Default Font</option>
            <optgroup label="Sans-Serif (Modern & Clean)">
              <option value="sans">Inter (Modern Clean)</option>
              <option value="roboto">Roboto (Neutral Editorial)</option>
              <option value="montserrat">Montserrat (Geometric Tech)</option>
              <option value="ibm_plex">IBM Plex Sans (Engineered Sans)</option>
            </optgroup>
            <optgroup label="Serif (Classic & Academic)">
              <option value="serif">EB Garamond (LaTeX Bookish)</option>
              <option value="merriweather">Merriweather (Warm Editorial)</option>
              <option value="libre_baskerville">Libre Baskerville (Traditional)</option>
              <option value="playfair">Playfair Display (Elegant Header)</option>
            </optgroup>
            <optgroup label="Monospace (Technical)">
              <option value="mono">JetBrains Mono (Technical Codes)</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="settings-grid" style={{ marginTop: '0.5rem' }}>
        {/* Font Size Selection */}
        <div className="form-group">
          <label>Font Size</label>
          <select
            className="form-control"
            value={settings.fontSize || 'medium'}
            onChange={(e) => handleSettingChange('fontSize', e.target.value)}
          >
            <option value="small">Small (9.5pt)</option>
            <option value="medium">Medium (10.5pt)</option>
            <option value="large">Large (11.5pt)</option>
          </select>
        </div>

        {/* Margins Selection */}
        <div className="form-group">
          <label>Page Margins</label>
          <select
            className="form-control"
            value={settings.margins || 'normal'}
            onChange={(e) => handleSettingChange('margins', e.target.value)}
          >
            <option value="compact">Compact (0.4in)</option>
            <option value="normal">Normal (0.6in)</option>
            <option value="relaxed">Relaxed (0.8in)</option>
          </select>
        </div>
      </div>

      {/* PDF Export Tip Box */}
      <div style={{ 
        marginTop: '1.5rem', 
        padding: '0.85rem', 
        backgroundColor: 'rgba(99, 102, 241, 0.1)', 
        border: '1px solid rgba(99, 102, 241, 0.25)', 
        borderRadius: '6px', 
        fontSize: '0.8rem', 
        color: '#a5b4fc', 
        lineHeight: '1.45'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>💡 Professional PDF Export Tips:</span>
        </div>
        <ul style={{ paddingLeft: '1.1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <li>
            In the print dialog, <strong>uncheck "Headers & Footers"</strong> to completely hide the date and URL lines.
          </li>
          <li>
            <strong>Check "Background Graphics"</strong> to render colored header banners and theme colors correctly.
          </li>
          <li>
            For perfect vector-selectable text (which is crucial for <strong>ATS resume scanners</strong>), always use the browser's <strong>Save as PDF</strong> print destination.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesignSettings;
