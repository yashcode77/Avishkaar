// src/components/AddAlert.js
import React, { useState } from 'react';

const AddAlert = ({ onAddAlert }) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!title || !details) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new alert object
    const newAlert = {
      title,
      details,
    };

    // Clear input fields
    setTitle('');
    setDetails('');

    // Pass the new alert to the parent component
    onAddAlert(newAlert);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
            Details:
          </label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter details"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Alert
        </button>
      </form>
    </div>
  );
};

export default AddAlert;
