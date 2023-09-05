function calculateRemainingTime(monthsTo, daysTo, hoursTo) {

    // ### UPDATE THIS DATE AFTER RERUNNING PYTHON SCRIPT ###
    const dataDate = new Date(2023, 8, 3, 17, 0, 0);
    // ### UPDATE THIS DATE AFTER RERUNNING PYTHON SCRIPT ###s

    const currentDate = new Date();

    const hackathonDate = new Date();

    hackathonDate.setMonth(dataDate.getMonth() + monthsTo);
    hackathonDate.setDate(dataDate.getDate() + daysTo);
    hackathonDate.setHours(dataDate.getHours() + hoursTo);

    const timeDifference = hackathonDate - currentDate;

    if (timeDifference < 0) {
      return 'Event has ended';
    }
    
    const daysRemaining = Math.round(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.round(timeDifference / (1000 * 60 * 60));
    
    if (daysRemaining <= 1) {
      return `${hoursRemaining} hours remaining`;
    }
    if (daysRemaining <= 31) {
        return `${daysRemaining} days remaining`;
    }
    return `more than 1 month remaining`;

}
  
export { calculateRemainingTime };