import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import GoogleMap from '../components/GoogleMap';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const agencies = [
  {
    name: 'Hospital A',
    type: 'hospital',
    location: 'Mumbai',
    latitude: 18.9647,
    longitude: 72.8258,
  },
  {
    name: 'Fire Station B',
    type: 'fire',
    location: 'Delhi',
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    name: 'Flood Agency C',
    type: 'flood',
    location: 'Bangalore',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    name: 'Hospital D',
    type: 'hospital',
    location: 'Chennai',
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    name: 'Fire Station E',
    type: 'fire',
    location: 'Kolkata',
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    name: 'Flood Agency F',
    type: 'flood',
    location: 'Hyderabad',
    latitude: 17.3850,
    longitude: 78.4867,
  },
  {
    name: 'Hospital G',
    type: 'hospital',
    location: 'Pune',
    latitude: 18.5204,
    longitude: 73.8567,
  },
  {
    name: 'Fire Station H',
    type: 'fire',
    location: 'Ahmedabad',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  {
    name: 'Flood Agency I',
    type: 'flood',
    location: 'Jaipur',
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    name: 'Hospital J',
    type: 'hospital',
    location: 'Lucknow',
    latitude: 26.8467,
    longitude: 80.9462,
  },
  {
    name: 'Fire Station K',
    type: 'fire',
    location: 'Bhopal',
    latitude: 23.2599,
    longitude: 77.4126,
  },
  {
    name: 'Flood Agency L',
    type: 'flood',
    location: 'Indore',
    latitude: 22.7196,
    longitude: 75.8577,
  },
  {
    name: 'Hospital M',
    type: 'hospital',
    location: 'Chandigarh',
    latitude: 30.7333,
    longitude: 76.7794,
  },
  {
    name: 'Fire Station N',
    type: 'fire',
    location: 'Coimbatore',
    latitude: 11.0168,
    longitude: 76.9558,
  },
  {
    name: 'Flood Agency O',
    type: 'flood',
    location: 'Visakhapatnam',
    latitude: 17.6868,
    longitude: 83.2185,
  },
  {
    name: 'Hospital P',
    type: 'hospital',
    location: 'Nagpur',
    latitude: 21.1458,
    longitude: 79.0882,
  },
  {
    name: 'Fire Station Q',
    type: 'fire',
    location: 'Kochi',
    latitude: 9.9312,
    longitude: 76.2673,
  },
  {
    name: 'Flood Agency R',
    type: 'flood',
    location: 'Surat',
    latitude: 21.1702,
    longitude: 72.8311,
  },
  {
    name: 'Hospital S',
    type: 'hospital',
    location: 'Vadodara',
    latitude: 22.3072,
    longitude: 73.1812,
  },
  {
    name: 'Fire Station T',
    type: 'fire',
    location: 'Patna',
    latitude: 25.5941,
    longitude: 85.1376,
  },
]; 

const Admin = () => {
  const agencies = [
    {
      name: 'Hospital A',
      type: 'hospital',
      location: 'Mumbai',
      latitude: 18.9647,
      longitude: 72.8258,
    },
    {
      name: 'Fire Station B',
      type: 'fire',
      location: 'Delhi',
      latitude: 28.7041,
      longitude: 77.1025,
    },
    {
      name: 'Flood Agency C',
      type: 'flood',
      location: 'Bangalore',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      name: 'Hospital D',
      type: 'hospital',
      location: 'Chennai',
      latitude: 13.0827,
      longitude: 80.2707,
    },
    {
      name: 'Fire Station E',
      type: 'fire',
      location: 'Kolkata',
      latitude: 22.5726,
      longitude: 88.3639,
    },
    {
      name: 'Flood Agency F',
      type: 'flood',
      location: 'Hyderabad',
      latitude: 17.3850,
      longitude: 78.4867,
    },
    {
      name: 'Hospital G',
      type: 'hospital',
      location: 'Pune',
      latitude: 18.5204,
      longitude: 73.8567,
    },
    {
      name: 'Fire Station H',
      type: 'fire',
      location: 'Ahmedabad',
      latitude: 23.0225,
      longitude: 72.5714,
    },
    {
      name: 'Flood Agency I',
      type: 'flood',
      location: 'Jaipur',
      latitude: 26.9124,
      longitude: 75.7873,
    },
    {
      name: 'Hospital J',
      type: 'hospital',
      location: 'Lucknow',
      latitude: 26.8467,
      longitude: 80.9462,
    },
    {
      name: 'Fire Station K',
      type: 'fire',
      location: 'Bhopal',
      latitude: 23.2599,
      longitude: 77.4126,
    },
    {
      name: 'Flood Agency L',
      type: 'flood',
      location: 'Indore',
      latitude: 22.7196,
      longitude: 75.8577,
    },
    {
      name: 'Hospital M',
      type: 'hospital',
      location: 'Chandigarh',
      latitude: 30.7333,
      longitude: 76.7794,
    },
    {
      name: 'Fire Station N',
      type: 'fire',
      location: 'Coimbatore',
      latitude: 11.0168,
      longitude: 76.9558,
    },
    {
      name: 'Flood Agency O',
      type: 'flood',
      location: 'Visakhapatnam',
      latitude: 17.6868,
      longitude: 83.2185,
    },
    {
      name: 'Hospital P',
      type: 'hospital',
      location: 'Nagpur',
      latitude: 21.1458,
      longitude: 79.0882,
    },
    {
      name: 'Fire Station Q',
      type: 'fire',
      location: 'Kochi',
      latitude: 9.9312,
      longitude: 76.2673,
    },
    {
      name: 'Flood Agency R',
      type: 'flood',
      location: 'Surat',
      latitude: 21.1702,
      longitude: 72.8311,
    },
    {
      name: 'Hospital S',
      type: 'hospital',
      location: 'Vadodara',
      latitude: 22.3072,
      longitude: 73.1812,
    },
    {
      name: 'Fire Station T',
      type: 'fire',
      location: 'Patna',
      latitude: 25.5941,
      longitude: 85.1376,
    },
  ];
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <GoogleMap agencies={agencies} />
    </div>
  );
};

export default Admin;
