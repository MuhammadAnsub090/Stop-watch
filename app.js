let isRunning = false;
let startTime;
let interval;

function startStop() {
  if (isRunning) {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
  } else {
    startTime = Date.now() - (startTime ? Date.now() - startTime : 0);
    interval = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(interval);
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("display").textContent = "00:00:00";
  isRunning = false;
  startTime = null;
}

function updateDisplay() {
  const currentTime = new Date(Date.now() - startTime);
  const hours = currentTime.getUTCHours();
  const minutes = currentTime.getUTCMinutes();
  const seconds = currentTime.getUTCSeconds();
  const milliseconds = currentTime.getUTCMilliseconds();
  document.getElementById("display").textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

function formatMilliseconds(milliseconds) {
  return milliseconds.toString().padStart(3, "0");
}
