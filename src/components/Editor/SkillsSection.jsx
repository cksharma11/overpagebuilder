import React from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const SkillsSection = ({ items = [], onChange }) => {
  const handleAddItem = () => {
    const newItem = {
      id: `skill-${Date.now()}`,
      category: '',
      items: ''
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
              {item.category || 'New Skill Category'}
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
            <label>Category Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Languages or Frameworks"
              value={item.category || ''}
              onChange={(e) => handleFieldChange(item.id, 'category', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Skills (comma separated list)</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. JavaScript, Python, C++, Go"
              value={item.items || ''}
              onChange={(e) => handleFieldChange(item.id, 'items', e.target.value)}
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
        <Plus size={16} /> Add Skill Category
      </button>
    </div>
  );
};

export default SkillsSection;
