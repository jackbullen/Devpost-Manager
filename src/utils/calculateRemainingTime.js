function calculateRemainingTime(monthsTo, daysTo, hoursTo) {

    // ### UPDATE THIS DATE AFTER RERUNNING PYTHON SCRIPT ###
    const dataDate = new Date(2023, 8, 3, 17, 0, 0);
    // ### UPDATE THIS DATE AFTER RERUNNING PYTHON SCRIPT ###

    console.log('datadate', dataDate);

    const currentDate = new Date();

    const hackathonDate = new Date();

    hackathonDate.setMonth(dataDate.getMonth() + monthsTo);
    hackathonDate.setDate(dataDate.getDate() + daysTo);
    hackathonDate.setHours(dataDate.getHours() + hoursTo);

    console.log(hackathonDate);
    const timeDifference = Math.abs(hackathonDate.getTime() - currentDate.getTime());
    const monthsRemaining = Math.ceil(timeDifference / (60 * 60 * 60 * 24));
    const daysRemaining = timeDifference / (60 * 60 * 24);
    const hoursRemaining = timeDifference / (60 * 60);

    console.log(monthsRemaining, daysRemaining, hoursRemaining);
    if (daysRemaining <= 1) {
      return `${hoursRemaining} hours remaining`;
    }
    if (daysRemaining < 7) {
        return `${daysRemaining} days remaining`;
    }
    return `${monthsRemaining} months remaining`;

}
  
export { calculateRemainingTime };