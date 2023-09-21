
export function getLongDateString(date: Date, timeZone?: string | undefined) {

    const options: Intl.DateTimeFormatOptions = { 
      timeZone: timeZone,
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleDateString('en-us', options);
  };

export function getShortDateString(date: Date, timeZone?: string | undefined) {

  const options: Intl.DateTimeFormatOptions = { 
    timeZone: timeZone,
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  };
  return date.toLocaleDateString('en-us', options);
};
