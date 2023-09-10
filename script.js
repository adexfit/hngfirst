
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];

document.getElementById("insertDay").innerHTML = day;


function updateTime(){
    let milliSec = d.getTime();
    const stringTime = String(milliSec)
    document.getElementById("insertUTC").innerHTML = stringTime;

}

setInterval(updateTime, 1000);


updateTime();