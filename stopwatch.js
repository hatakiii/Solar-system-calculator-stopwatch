let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");
let lapsContainer = document.getElementById("laps");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let isRunning = false;

startButton.addEventListener("click", function () {
  isRunning = true;
  stopWatch();
});

stopButton.addEventListener("click", function () {
  isRunning = false;
});

resetButton.addEventListener("click", function () {
  isRunning = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  lapsContainer.innerHTML = "";
  lapCount = 1;
});

let lapCount = 1;
lapButton.addEventListener("click", function () {
  recordLap();
  lapCount++;
});

function stopWatch() {
  if (isRunning) {
    count++;
    if (count == 100) {
      second++;
      count = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hourString = hour < 10 ? "0" + hour : hour;
    let minuteString = minute < 10 ? "0" + minute : minute;
    let secondString = second < 10 ? "0" + second : second;
    let countString = count < 10 ? "0" + count : count;

    document.getElementById("hour").innerHTML = hourString;
    document.getElementById("minute").innerHTML = minuteString;
    document.getElementById("second").innerHTML = secondString;
    document.getElementById("count").innerHTML = countString;

    setTimeout(stopWatch, 10);
  }
}

function recordLap() {
  let hourString = hour < 10 ? "0" + hour : hour;
  let minuteString = minute < 10 ? "0" + minute : minute;
  let secondString = second < 10 ? "0" + second : second;
  let countString = count < 10 ? "0" + count : count;

  let lapTime = `${hourString}:${minuteString}:${secondString}:${countString}`;

  let li = document.createElement("li");
  li.textContent = `Lap ${lapCount}:    ${lapTime}`;
  lapsContainer.appendChild(li);
}
