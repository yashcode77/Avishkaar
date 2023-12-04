import React, { useRef, useEffect, useState } from 'react';




const GoogleMap = ({ agencies }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [filterType, setFilterType] = useState('all'); // Default filter type
  const [filterLocation, setFilterLocation] = useState('all'); // Default filter location

  useEffect(() => {
    if (!map) {
      const googleMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20, lng: 79 },
        zoom: 5,
      });
      setMap(googleMap);
    }
  
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
  
        // Define marker icons for different agency types
        const markerIcons = {
          hospital: 'src\data\hospital-marker.png', // Replace 'path_to_hospital_icon.png' with the actual path to your hospital icon image
          fire: 'src\data\hospital-marker.png', // Replace 'path_to_fire_icon.png' with the actual path to your fire icon image
          flood: 'src\data\hospital-marker.png', // Replace 'path_to_flood_icon.png' with the actual path to your flood icon image
          // Add more types as needed
        };

    // Filter agencies based on selected filter options
    const filteredAgencies = agencies.filter(agency => {
      const isTypeMatch = filterType === 'all' || agency.type === filterType;
      const isLocationMatch =
        filterLocation.toLowerCase() === 'all' || agency.location.toLowerCase() === filterLocation.toLowerCase();
      return isTypeMatch && isLocationMatch;
    });
  
    // Create new markers for filtered agencies
    const newMarkers = filteredAgencies.map(agency => {
      const marker = new window.google.maps.Marker({
        position: { lat: agency.latitude, lng: agency.longitude },
        map: map,
        title: agency.name,
      });
  
      return marker;
    });
  
    setMarkers(newMarkers);
  }, [agencies, map, filterType, filterLocation]);
  

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Filter by Type:
        <select value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">All</option>
          <option value="hospital">Hospital</option>
          <option value="fire">Fire</option>
          <option value="flood">Flood</option>
          {/* Add more types as needed */}
        </select>
      </label>
      <label style={{ marginLeft: '20px' }}>
        Filter by Location:
        <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)}>
          <option value="all">All</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="uttarakhand">Uttarakhand</option>
          {/* Add more locations as needed */}
        </select>
      </label>

      <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default GoogleMap;
