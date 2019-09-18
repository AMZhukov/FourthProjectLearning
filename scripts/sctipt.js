window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes  = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = Math.max((dateStop - dateNow) / 1000, 0),
                seconds = checkNumber(Math.floor(timeRemaining % 60)),
                minutes = checkNumber(Math.floor((timeRemaining / 60) % 60)),
                hours = checkNumber(Math.floor(timeRemaining / 60 / 60));
            return {timeRemaining, hours, minutes, seconds};
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
    }
    countTimer('20 september 2019');
//Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');



            /*if(!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            }
            else {
                menu.style.transform = `translate(-100%)`;
            }*/
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();

    const togglePopUp = () => {

        let i = 0,
        timeout;
        let opacity1 = () => {
            console.log(i);
            popup.style.opacity = `${i}`;
            i += 0.1;
            if (i < 1) {
                timeout = setTimeout(opacity1, 30)
            } else {
                clearTimeout(timeout);
                i = 0;
            }
        };
        const popup = document.querySelector('.popup'),

        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelectorAll('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.opacity = '0';
                popup.style.display = 'block';
                opacity1();
            });
        });
        popupClose.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        });
    };
    togglePopUp();
});