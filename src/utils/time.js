const formatDay = (timeStamp) => {
    const tm = new Date(0);
    tm.setUTCSeconds(timeStamp);

    const shortDayOfWeek = new Date(timeStamp).toLocaleDateString("en-GB", {
        weekday: "long",
    });

    var d = new Date(tm),
        weekDay = shortDayOfWeek + ',',
        day = '' + d.getDate(),
        month = '' + (d.getMonth() + 1),      
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [weekDay, day, month, year].join(' ');
}

const formatToTime = (timeStamp) => {
  let d = new Date(0);
  d.setUTCSeconds(timeStamp);

   return d;
};

const getShortDay = (day) => {
  const shortDayOfWeek = new Date(day).toLocaleDateString("en-GB", {
    weekday: "short",
  });

  return shortDayOfWeek;
};

export { formatDay, formatToTime, getShortDay };
