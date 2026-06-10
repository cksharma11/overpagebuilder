import React from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const ProjectsSection = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: `proj-${Date.now()}`,
      name: '',
      role: '',
      link: '',
      description: ''
    };
    onChange([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    onChange(items.filter(item => item.id !== id));
  };

  const handleFieldChange = (id, field, value) => {
    onChange(
      items.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    onChange(newItems);
  };

  const handleMoveDown = (index) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    onChange(newItems);
  };

  return (
    <div className="list-section">
      {items.map((item, index) => (
        <div key={item.id} className="list-item-card">
          <div className="list-item-card-header">
            <span className="list-item-card-title">
              {item.name || 'New Project'} {item.role ? `(${item.role})` : ''}
            </span>
            <div className="list-item-actions">
              <div className="list-item-actions-order">
                <button
                  type="button"
                  className="btn btn-secondary btn-mini"
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                  title="Move Up"
                >
                  <ArrowUp size={12} />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-mini"
                  onClick={() => handleMoveDown(index)}
                  disabled={index === items.length - 1}
                  title="Move Down"
                >
                  <ArrowDown size={12} />
                </button>
              </div>
              <button
                type="button"
                className="btn btn-danger btn-mini"
                onClick={() => handleRemoveItem(item.id)}
                title="Delete Entry"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Project Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. CloudScribe"
                value={item.name || ''}
                onChange={(e) => handleFieldChange(item.id, 'name', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Your Role (Optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Creator / Lead Developer"
                value={item.role || ''}
                onChange={(e) => handleFieldChange(item.id, 'role', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Project Link (URL)</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. github.com/username/project"
              value={item.link || ''}
              onChange={(e) => handleFieldChange(item.id, 'link', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Project Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="e.g. • A collaborative markdown editor utilizing CRDTs.&#10;• Built with React, WebRTC, and Go."
              value={item.description || ''}
              onChange={(e) => handleFieldChange(item.id, 'description', e.target.value)}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: '100%', marginTop: '0.5rem' }}
        onClick={handleAddItem}
      >
        <Plus size={16} /> Add Project Entry
      </button>
    </div>
  );
};

export default ProjectsSection;
