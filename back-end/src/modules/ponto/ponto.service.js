

now = new Date();

function toDay(now) {
    console.log("hoje é "+ now.getDate() + now.getDay() + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()) ;
   return now;
}

module.exports = toDay(now);