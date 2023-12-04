// src/components/Alert.js
import React from 'react';

const Alert = ({ alert }) => {
  return (
    <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
      <p className="font-bold">{alert.title}</p>
      <p className="text-sm">{alert.details}</p>
    </div>
  );
};

export default Alert;
