import React from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const EducationSection = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: `edu-${Date.now()}`,
      degree: '',
      school: '',
      location: '',
      startDate: '',
      endDate: '',
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
              {item.degree || 'New Degree'} {item.school ? `at ${item.school}` : ''}
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
              <label>Degree / Certificate</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. B.S. in Computer Science"
                value={item.degree || ''}
                onChange={(e) => handleFieldChange(item.id, 'degree', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>School / University</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Stanford University"
                value={item.school || ''}
                onChange={(e) => handleFieldChange(item.id, 'school', e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Stanford, CA"
                value={item.location || ''}
                onChange={(e) => handleFieldChange(item.id, 'location', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Sep 2016"
                value={item.startDate || ''}
                onChange={(e) => handleFieldChange(item.id, 'startDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Mar 2018 or Graduated"
                value={item.endDate || ''}
                onChange={(e) => handleFieldChange(item.id, 'endDate', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description / Details (Optional)</label>
            <textarea
              className="form-control"
              rows="2"
              placeholder="e.g. Specialized in Distributed Systems. GPA: 3.9/4.0."
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
        <Plus size={16} /> Add Education Entry
      </button>
    </div>
  );
};

export default EducationSection;
