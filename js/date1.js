// без библиотек и возможностей Angular
// вывести дату и время в формате
// dd.MM.yyyy HH:mm:ss

// напрмиер:
// 14.12.2021 14:18:01

function transformDate(...date) { /// ... - for current date: example new Date()

    if (isFinite(date)) {

        const curDate = new Date(+date);
        console.log(curDate);
        let day = curDate.getDate();
        if (day < 10) day = '0' + day;
        
        let month = curDate.getMonth() + 1;
        if (month < 10) month = '0' + month;
        
        let year = curDate.getFullYear();
        
        let arrDate = [];
        arrDate.push(day, month, year);
        
        let hours = curDate.getHours();
        if (hours < 10) hours = '0' + hours;
        
        let min = curDate.getMinutes();
        if (min < 10) min = '0' + min;
        
        let sec = curDate.getSeconds();
        if (sec < 10) sec = '0' + sec;
        
        let arrTime = [];
        arrTime.push(hours, min, sec);
        
        const strDate = arrDate.join('.');
        const strTime = arrTime.join(':');
        
        console.log(`${strDate} ${strTime}`);

    } else console.log(`Not a number for transforming to date!`);
}

transformDate(1275604099787);





