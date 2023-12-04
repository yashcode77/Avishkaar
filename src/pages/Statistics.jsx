import React from 'react';

const Statistics = () => {
    const data = [
        { id: 1, type: 'Cyclone', location: 'Odisha', date: '1999', magnitude: 'Great Cyclone', affectedPopulation: '10000', casualties: '10000', damage: 'High', responseAgencies: 'NDRF', responseTime: '1 hour', recoveryTime: '1 year' },
        { id: 2, type: 'Earthquake', location: 'Gujarat', date: '2001', magnitude: '7.7', affectedPopulation: '20000', casualties: '20000', damage: 'High', responseAgencies: 'IAF', responseTime: '2 hours', recoveryTime: '2 years' },
        { id: 3, type: 'Tsunami', location: 'Indian Ocean', date: '2004', magnitude: '9.1–9.3', affectedPopulation: '50000', casualties: '280000', damage: 'High', responseAgencies: 'SDMA', responseTime: '3 hours', recoveryTime: '3 years' },
        { id: 4, type: 'Avalanche', location: 'Jammu and Kashmir', date: '2014', magnitude: 'Severe', affectedPopulation: '30000', casualties: '500', damage: 'High', responseAgencies: 'DDMA', responseTime: '4 hours', recoveryTime: '4 years' },
        { id: 5, type: 'Flood', location: 'Kerala', date: '2018', magnitude: 'Severe', affectedPopulation: '280679', casualties: '373', damage: 'High', responseAgencies: 'DDMA', responseTime: '5 hours', recoveryTime: '5 years' },
        { id: 6, type: 'Flood', location: 'Tamil Nadu', date: '2021', magnitude: 'Severe', affectedPopulation: '11000', casualties: '41', damage: 'High', responseAgencies: 'IAF', responseTime: '6 hours', recoveryTime: '6 years' },
        { id: 7, type: 'Flood', location: 'Maharashtra', date: '2022', magnitude: 'Severe', affectedPopulation: '50000', casualties: '251', damage: 'High', responseAgencies: 'NDRF', responseTime: '7 hours', recoveryTime: '7 years' },
        { id: 8, type: 'Flood', location: 'Kerala', date: '2022', magnitude: 'Severe', affectedPopulation: '60000', casualties: '42', damage: 'High', responseAgencies: 'DDMA', responseTime: '8 hours', recoveryTime: '8 years' },
        { id: 9, type: 'Cyclone', location: 'Tauktae', date: '2021', magnitude: 'Very Severe', affectedPopulation: '70000', casualties: 'N/A', damage: 'High', responseAgencies: 'SDMA', responseTime: '9 hours', recoveryTime: '9 years' },
        { id: 10, type: 'Cyclone', location: 'Yaas', date: '2021', magnitude: 'Very Severe', affectedPopulation: '80000', casualties: 'N/A', damage: 'High', responseAgencies: 'IAF', responseTime: '10 hours', recoveryTime: '10 years' },
        { id: 11, type: 'Earthquake', location: 'Assam', date: '2021', magnitude: '6.4', affectedPopulation: '90000', casualties: 'N/A', damage: 'High', responseAgencies: 'DDMA', responseTime: '11 hours', recoveryTime: '11 years' },
        { id: 12, type: 'Flood', location: 'Andhra Pradesh', date: '2022', magnitude: 'Severe', affectedPopulation: '100000', casualties: 'N/A', damage: 'High', responseAgencies: 'NDRF', responseTime: '12 hours', recoveryTime: '12 years' },
        { id: 13, type: 'Flood', location: 'Balrampur', date: '2022', magnitude: 'Severe', affectedPopulation: '110000', casualties: 'N/A', damage: 'High', responseAgencies: 'SDMA', responseTime: '13 hours', recoveryTime: '13 years' },
        { id: 14, type: 'Flood', location: 'India–Bangladesh', date: '2022', magnitude: 'Severe', affectedPopulation: '120000', casualties: 'N/A', damage: 'High', responseAgencies: 'NDRF', responseTime: '14 hours', recoveryTime: '14 years' },
        { id: 15, type: 'Road Accident', location: 'Kanpur', date: '2022', magnitude: 'Severe', affectedPopulation: '130000', casualties: 'N/A', damage: 'High', responseAgencies: 'DDMA', responseTime: '15 hours', recoveryTime: '15 years' },
        { id: 16, type: 'Flood', location: 'Odisha', date: '2022', magnitude: 'Severe', affectedPopulation: '140000', casualties: 'N/A', damage: 'High', responseAgencies: 'SDMA', responseTime: '16 hours', recoveryTime: '16 years' },
        { id: 17, type: 'Flood', location: 'Silchar', date: '2022', magnitude: 'Severe', affectedPopulation: '150000', casualties: 'N/A', damage: 'High', responseAgencies: 'IAF', responseTime: '17 hours', recoveryTime: '17 years' },
        { id: 18, type: 'Gas Leak', location: 'Surat', date: '2022', magnitude: 'Severe', affectedPopulation: '160000', casualties: 'N/A', damage: 'High', responseAgencies: 'DDMA', responseTime: '18 hours', recoveryTime: '18 years' },
        { id: 19, type: 'Avalanche', location: 'Uttarakhand', date: '2022', magnitude: 'Severe', affectedPopulation: '170000', casualties: 'N/A', damage: 'High', responseAgencies: 'NDRF', responseTime: '19 hours', recoveryTime: '19 years' },
        { id: 20, type: 'Bus Accident', location: 'Uttarakhand', date: '2022', magnitude: 'Severe', affectedPopulation: '180000', casualties: 'N/A', damage: 'High', responseAgencies: 'SDMA', responseTime: '20 hours', recoveryTime: '20 years' },
      ];
      

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="-my-2 overflow-x-hidden sm:-mx-5 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disaster ID</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disaster Type</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Magnitude</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affected Population</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Casualties</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Damage</th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Agencies</th>
                  {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th> */}
                  {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recovery Time</th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row) => (
                  <tr key={row.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.magnitude}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.affectedPopulation}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.casualties}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.damage}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.responseAgencies}</td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">{row.responseTime}</td> */}
                    {/* <td className="px-6 py-4 whitespace-nowrap">{row.recoveryTime}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
