import React from 'react';

const PersonalInfo = ({ data, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="personal-info-form">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="e.g. Alex Morgan"
          value={data.name || ''}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Professional Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          placeholder="e.g. Senior Software Engineer"
          value={data.title || ''}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="e.g. alex@example.com"
            value={data.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            placeholder="e.g. +1 (555) 019-2834"
            value={data.phone || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            placeholder="e.g. San Francisco, CA"
            value={data.location || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website Portfolio</label>
          <input
            type="text"
            id="website"
            name="website"
            className="form-control"
            placeholder="e.g. alexmorgan.dev"
            value={data.website || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Handle</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            className="form-control"
            placeholder="e.g. linkedin.com/in/username"
            value={data.linkedin || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub Profile</label>
          <input
            type="text"
            id="github"
            name="github"
            className="form-control"
            placeholder="e.g. github.com/username"
            value={data.github || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="summary">Professional Summary</label>
        <textarea
          id="summary"
          name="summary"
          className="form-control"
          placeholder="Brief summary of your professional background, core strengths, and goals..."
          rows="4"
          value={data.summary || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
