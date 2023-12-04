import React, { useState } from 'react';

const AddAlerts = ({ alertsData, setAlertsData }) => {
  const [formData, setFormData] = useState({
    agencyName: '',
    agencyLogoLink: '',
    type: '',
    timestamp: '',
    message: '',
    severity: '',
    location: '',
    locationMapLink: '',
    source: '',
    contact: {
      phoneNumber: '',
      email: '',
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure that required fields are filled before adding the alert
    if (!formData.agencyName || !formData.timestamp || !formData.message) {
      // You can handle this according to your UI/UX requirements
      alert('Please fill in required fields');
      return;
    }

    // Generate a unique ID for the new alert
    const newAlert = {
      id: alertsData.length + 1,
      ...formData,
    };

    // Append the new alert to the existing alertsData array
    setAlertsData([...alertsData, newAlert]);

    // Reset the form data
    setFormData({
      agencyName: '',
      agencyLogoLink: '',
      type: '',
      timestamp: '',
      message: '',
      severity: '',
      location: '',
      locationMapLink: '',
      source: '',
      contact: {
        phoneNumber: '',
        email: '',
      },
    });
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {/* Handle opening the modal or displaying the form */}}
      >
        Add Alerts
      </button>

      {/* Add your modal or form here */}
      {/* For simplicity, let's use a basic form in this example */}
      <form onSubmit={handleSubmit}>
        {/* Add your form fields here using Tailwind CSS classes */}
        {/* Example: */}
        <label>
          Agency Name:
          <input
            type="text"
            value={formData.agencyName}
            onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
          />
        </label>

        {/* Add other form fields similarly */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAlerts;
