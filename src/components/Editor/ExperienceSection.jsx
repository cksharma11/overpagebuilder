import React from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const ExperienceSection = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: `exp-${Date.now()}`,
      role: '',
      company: '',
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
              {item.role || 'New Position'} {item.company ? `at ${item.company}` : ''}
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
              <label>Role / Position</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Lead Developer"
                value={item.role || ''}
                onChange={(e) => handleFieldChange(item.id, 'role', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Company / Employer</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Tech Solutions"
                value={item.company || ''}
                onChange={(e) => handleFieldChange(item.id, 'company', e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Remote / New York"
                value={item.location || ''}
                onChange={(e) => handleFieldChange(item.id, 'location', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Jun 2021 or 2021-06"
                value={item.startDate || ''}
                onChange={(e) => handleFieldChange(item.id, 'startDate', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Present or Dec 2023"
                value={item.endDate || ''}
                onChange={(e) => handleFieldChange(item.id, 'endDate', e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description (Markdown bullet points recommended)</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="e.g. • Led team of 5 developers to deliver cloud dashboard.&#10;• Reduced latency by 20% using Memcached."
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
        <Plus size={16} /> Add Work Experience
      </button>
    </div>
  );
};

export default ExperienceSection;
