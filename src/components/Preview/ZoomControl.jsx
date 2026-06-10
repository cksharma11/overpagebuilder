import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const ZoomControl = ({ zoom, onChange }) => {
  const handleZoomOut = () => {
    onChange(Math.max(50, zoom - 10));
  };

  const handleZoomIn = () => {
    onChange(Math.min(150, zoom + 10));
  };

  const handleReset = () => {
    onChange(100);
  };

  return (
    <div className="zoom-slider-container">
      <button 
        type="button" 
        className="btn-icon-only" 
        style={{ padding: '0.25rem', border: 'none', background: 'none' }}
        onClick={handleZoomOut}
        title="Zoom Out"
      >
        <ZoomOut size={16} />
      </button>
      <input 
        type="range" 
        min="50" 
        max="150" 
        step="5"
        value={zoom} 
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      <button 
        type="button" 
        className="btn-icon-only" 
        style={{ padding: '0.25rem', border: 'none', background: 'none' }}
        onClick={handleZoomIn}
        title="Zoom In"
      >
        <ZoomIn size={16} />
      </button>
      <button 
        type="button" 
        className="btn-icon-only" 
        style={{ padding: '0.25rem', border: 'none', background: 'none', marginLeft: '0.25rem' }}
        onClick={handleReset}
        title="Reset Zoom (100%)"
      >
        <RotateCcw size={14} />
      </button>
      <span className="zoom-value">{zoom}%</span>
    </div>
  );
};

export default ZoomControl;
