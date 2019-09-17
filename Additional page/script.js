window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // timer
    function countTimer(newYear){
        let resultHello = document.querySelector('.result-hello'),
            resultToday  = document.querySelector('.result-today'),
            resultHours = document.querySelector('.result-hours'),
            resultMinutes = document.querySelector('.result-minutes'),
            resultSeconds = document.querySelector('.result-seconds'),
            resultHourClock = document.querySelector('.result-hour-clock'),
            resultDaysLeft = document.querySelector('.result-days-left');

        function getTimeRemaining() {
            let dataNow = ((new Date().getTime()) / 1000),
                dataDay = dataDays(new Date().getDay()),
                dataSeconds = checkNumber(Math.floor(dataNow % 60)), //dataSeconds = new Date().getSeconds(),
                dataMinutes = checkNumber(Math.floor((dataNow / 60) % 60)), //dataMinutes = new Date().getMinutes(),
                dataHour = new Date().getHours(); //    dataHour = /*checkNumber*/Math.floor((dataNow / 60 / 60) % 24),
            let    intervalDay = checkIntervalDay(dataHour),
                hourClock = checkHourClock(dataHour),
                dataHourForResult = checkNumber(checkHour(dataHour)),
                daysLeft = Math.floor(((new Date(newYear).getTime() / 1000) - dataNow) / 60 / 60 / 24);
            return {dataDay, dataSeconds, dataMinutes, intervalDay, hourClock, dataHourForResult, daysLeft};
            //days = Math.floor(timeRemaining / 60 / 60 / 24);
        }
        function checkHourClock(hour) {
            return (hour > 12 ? 'PM' : 'AM');
        }
        function checkHour(hour){
            return (hour > 12 ? (hour % 12) : hour);
        }
        function checkIntervalDay(hour) {
            if (hour < 6 ) return 'Добрая ночь';
            else if (hour < 12 ) return 'Доброе утро';
            else if (hour < 18 ) return 'Добрый день';
            else return 'Доброе вечер';
        }
        function dataDays(day) {
            let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            return (days[day]);
        }


        function checkNumber(temp) {
            return (temp > 9 ? temp : `0${temp}`);
        }

        function updateClock() {
            let timer = getTimeRemaining();

            resultHello.textContent = timer.intervalDay;
            resultSeconds.textContent = timer.dataSeconds;
            resultMinutes.textContent = timer.dataMinutes;
            resultHours.textContent = timer.dataHourForResult;
            resultToday.textContent = timer.dataDay;
            resultDaysLeft.textContent = timer.daysLeft;
            resultHourClock.textContent = timer.hourClock;

            setInterval( () =>{
                updateClock();
            }, 1000)
        }
        updateClock();

        //updateClock();
    }
    countTimer('31 december 2019');

});