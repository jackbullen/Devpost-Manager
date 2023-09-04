import React from 'react';
import { calculateRemainingTime } from '../utils/calculateRemainingTime';

function Hackathon({ data }) {

  const link = data.link;
  data = data.text.split('\n');


  const days = data[1].match(/\d?\d day/g);
  const months = data[1].match(/\d?\d month/g);
  const hours = data[1].match(/\d?\d hour/g);

  let monthsTo = 0;  
  if (months) {
    monthsTo = parseInt(months[0].slice(0, -5));
    console.log('months',monthsTo);
  }

  let daysTo = 0;
  if (days) {
    daysTo = parseInt(days[0].slice(0, -4));
    console.log('days', daysTo);
  }

  let hoursTo = 0;
  if (hours) {
    hoursTo = parseInt(hours[0].slice(0, -5));
    console.log('hours', hoursTo);
  }
  let textColor = '';
  if (hoursTo) {
    textColor = 'text-red-500';
  } else if (daysTo) {
    textColor = 'text-yellow-500';
  } else {
    textColor = 'text-green-500';
  }

  const remainingTime = hoursTo || daysTo || monthsTo ? calculateRemainingTime(monthsTo, daysTo, hoursTo) : 'Event has ended'
  textColor = remainingTime === 'Event has ended' ? 'text-gray-500' : textColor;
  return (
    <div className="m-8">

      <h2 className="text-2xl font-semibold">{data[0]}</h2>

      <p className={textColor}>Time Remaining: { remainingTime }</p>

      <button className="bg-blue-500 hover:bg-opacity-95 text-white font-bold mt-2 py-1 px-2 rounded">
        <a href={link} target="_blank" rel="noopener noreferrer">Go to Devpost</a>
      </button>

  </div>
  );
}

export default Hackathon;
