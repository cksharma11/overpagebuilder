import React from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const CertificationsSection = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: `cert-${Date.now()}`,
      name: '',
      issuer: '',
      date: ''
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
              {item.name || 'New Certification'} {item.issuer ? `by ${item.issuer}` : ''}
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

          <div className="form-group">
            <label>Certification Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. AWS Certified Solutions Architect"
              value={item.name || ''}
              onChange={(e) => handleFieldChange(item.id, 'name', e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Issuing Organization</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Amazon Web Services"
                value={item.issuer || ''}
                onChange={(e) => handleFieldChange(item.id, 'issuer', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date Earned</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Aug 2023"
                value={item.date || ''}
                onChange={(e) => handleFieldChange(item.id, 'date', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: '100%', marginTop: '0.5rem' }}
        onClick={handleAddItem}
      >
        <Plus size={16} /> Add Certification Entry
      </button>
    </div>
  );
};

export default CertificationsSection;
