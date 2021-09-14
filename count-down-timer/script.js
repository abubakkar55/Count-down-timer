const newYears = "1 jan 22";

const timer = () => {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    console.log(newYearDate - currentDate);
};
// initial call
timer();

setInterval(timer, 1000);