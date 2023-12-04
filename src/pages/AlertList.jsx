// src/components/AlertList.js
import React from 'react';
import Alert from './Alert';

const AlertList = ({ alerts }) => {
  return (
    <div>
      {alerts.map((alert, index) => (
        <Alert key={index} alert={alert} />
      ))}
    </div>
  );
};

export default AlertList;
