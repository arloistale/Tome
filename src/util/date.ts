
export default function getDateString(date: Date, timeZone?: string | undefined) {

    const options: Intl.DateTimeFormatOptions = { 
      timeZone: timeZone,
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleDateString('en-us', options);
  };
