//////// вывести кол-во полных дней между двумя датами  //////////////

let date1 = +prompt('Please enter first date in number format', '');
let date2 = +prompt('Please enter second date in number format', '');

const dateTime1 = new Date(date1);
const dateTime2 = new Date(date2);

let delta = Math.abs(dateTime1-dateTime2); 
let fullDay = Math.floor(delta / 8.64e7); // ms in 1 day (24h)

console.log(`Full days between date1 - <${dateTime1}> and date2 - <${dateTime2}> equal ${fullDay}`);