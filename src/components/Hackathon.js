import React from 'react';

function Hackathon({ data }) {

  const link = data.link;
  data = data.text.split('\n');


  const days = data[1].match(/\d?\d day/g);
  const months = data[1].match(/\d?\d month/g);
  const hours = data[1].match(/\d?\d hour/g);

  let monthsTo = 0;  
  if (months) {
    monthsTo = months[0].slice(0, -5);
  }

  let daysTo = 0;
  if (days) {
    daysTo = days[0].slice(0, -4);
  }

  let hoursTo = 0;
  if (hours) {
    hoursTo = hours[0].slice(0, -5);
  }
  
  let remainingTime = '';
  if (monthsTo) {
    remainingTime = 'about ' + monthsTo + 'month(s)';
  } else if (daysTo) {
    remainingTime = daysTo + ' days';
  } else if (hoursTo) {
    remainingTime = hoursTo + ' hours';
  } else {
    remainingTime = 'Ended';
  }
    

  return (
    <div className="m-8">

      <h2 className="text-2xl font-semibold">{data[0]}</h2>

      <p className={hoursTo ? 'text-red-500' : ''}>Time Remaining: { remainingTime }</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-1 px-2 rounded">
        <a href={link} target="_blank" rel="noopener noreferrer">Go to Devpost</a>
      </button>

    </div>
  );
}

export default Hackathon;
