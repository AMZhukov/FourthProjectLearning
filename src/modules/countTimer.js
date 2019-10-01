const countTimer = (deadline) => {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = Math.max((dateStop - dateNow) / 1000, 0),
            seconds = checkNumber(Math.floor(timeRemaining % 60)),
            minutes = checkNumber(Math.floor((timeRemaining / 60) % 60)),
            hours = checkNumber(Math.floor(timeRemaining / 60 / 60));
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
        //days = Math.floor(timeRemaining / 60 / 60 / 24);
    }

    function checkNumber(temp) {
        return (temp > 9 ? temp : `0${temp}`);
    }

    function updateClock() {
        let timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        if (timer.timeRemaining <= 0) {
            clearInterval(myInterval);
        }
    }
    let myInterval = setInterval(updateClock, 1000);
};

export default countTimer;