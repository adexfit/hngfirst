
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
const day = weekday[d.getDay()];

document.getElementById("insertDay").innerHTML = day;


function updateTime(){
    const currentTimeV = document.getElementById('insertUTC');
    const currentTime = new Date();
    const currentTiMillie = currentTime.getTime();
    const milliseconds = String(currentTiMillie)
    currentTimeV.textContent = milliseconds;

}

setInterval(updateTime, 1000);


updateTime();