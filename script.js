const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
let milliSec = d.getUTCMilliseconds();

document.getElementById("insertDay").innerHTML = day;
document.getElementById("insertUTC").innerHTML = milliSec;