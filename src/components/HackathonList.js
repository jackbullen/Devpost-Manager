import React from 'react';
import Hackathon from './Hackathon';

function HackathonList({ hackathons }) {
  
  return (
    <div className="text-left bg-gray-100 p-4 rounded-lg shadow-md">

      {hackathons.map(hackathon => (

        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <Hackathon key={hackathon.link} data={hackathon} />
        </div>

      ))}
      
    </div>
  );
}

export default HackathonList;
