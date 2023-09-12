export default function getDateString(date: Date) {
    const options: Intl.DateTimeFormatOptions = { 
      timeZone: 'UTC', // so that the exact dates for presentation (in UTC) can be displayed correctly
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleDateString('en-us', options);
  };