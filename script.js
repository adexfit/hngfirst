
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
const day = weekday[d.getDay()];

document.getElementById("insertDay").innerHTML = day;


function updateTime(){
    const currentTimeValue = document.getElementById('insertUTC');
    const current_time = new Date();
    const current_time_millie = current_time.getTime();
    const milliseconds = String(current_time_millie)
    currentTimeValue.textContent = milliseconds;

}

setInterval(updateTime, 1000);


updateTime();