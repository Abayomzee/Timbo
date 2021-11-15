const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednessday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const daysshort = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
  ]

export function formatDate(date){
      const newDate = new Date(date);
      const month = months[newDate.getMonth()]
      const day = days[newDate.getDay()]
      const dayshort = daysshort[newDate.getDay()]
      const dateNum =  newDate.getDate();
      const year =  newDate.getFullYear();
      return {month,day, dayshort, dateNum,year}
  }

export function getDuration(start, duration){
  const startDate = new Date(start);
  const endDate = new Date(startDate.getTime() + duration );
  const hour =  startDate.getHours() - 1;
  const minutes = startDate.getMinutes();
  const endhour = endDate.getHours() - 1;
  const endMinutes = endDate.getMinutes();
  return {hour, minutes, endhour, endMinutes};
}
