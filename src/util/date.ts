export default function getDateString(date: Date) {
    const options: Intl.DateTimeFormatOptions = { 
      timeZone: 'UTC', // we want to show the UTC date because that is new aphorisms are presented at 00:05 UTC
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    return date.toLocaleDateString('en-us', options);
  };