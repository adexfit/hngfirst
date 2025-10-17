function startTime() {
  offset = 2;
  let today = new Date();
  let h = today.getUTCHours();
  let m = today.getUTCMinutes();
  let s = today.getUTCSeconds();
  h = h + offset;
  if (h > 24) {
    h = h - 24;
  }
  if (h < 0) {
    h = h + 24;
  }
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();
