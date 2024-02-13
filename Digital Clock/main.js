// Digital Clock

function updateClock(){

  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  let time = (hours >= 12) ? "PM" : "AM";
  hours = hours % 12 || 12;
  console.log(time);
  hours = hours.toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds} ${time}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);