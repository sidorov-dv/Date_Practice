////////// вывести дату на начало этой недели ////////////

const curDate = new Date();
let weekDay = curDate.getDay();
if (weekDay === 0) weekDay = (7-1)
else weekDay -= 1;

const diffDaysMs = weekDay * 8.64e7; // ms in 1 day (24h)
const weekBeginMs = curDate.getTime() - diffDaysMs;
const startDate = new Date(weekBeginMs);
startDate.setHours(0,0,0,0)

console.log(startDate);

