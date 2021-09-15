const newYears = "16 mar 22";
const setDays = document.getElementById("days");
const setHours = document.getElementById("hours");
const setMins = document.getElementById("mins");
const setSeconds = document.getElementById("seconds");

const timer = () => {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mints = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    setDays.innerText = formatTime(days);
    setHours.innerText = formatTime(hours);
    setMins.innerText = formatTime(mints);
    setSeconds.innerText = formatTime(seconds);
};

const formatTime = (time) => time < 10 ? `0${time}` : time; 

// initial call
timer();

setInterval(timer, 1000);