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

    //Create dots for sliders

    const createDots = () => {
        const portfolioContent = document.querySelector('.portfolio-content');
        const portfolioItem = portfolioContent.querySelectorAll('.portfolio-item');
        const portfolioDots = portfolioContent.querySelector('.portfolio-dots');
        const numberDots = Object.keys(portfolioItem).length;

        let createDot = null;
        for (let i = 0; i < numberDots; i++) {
            createDot = document.createElement('li');
            createDot.className = 'dot';
            if (i === 0) {
                createDot.classList.add('dot-active');
            }
            portfolioDots.appendChild(createDot);
        }
    };
    createDots();


//Меню
    const toggleMenu = () => {
        const body = document.querySelector('body'),
            menu = body.querySelector('menu');
            //menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            //body.querySelector('menu').classList.toggle('active-menu');
            menu.classList.toggle('active-menu');

            /*if(!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            }
            else {
                menu.style.transform = `translate(-100%)`;
            }*/
        };
        //btnMenu.addEventListener('click', handlerMenu);

        //menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

        body.addEventListener('click', (event) => {
            let target = event.target;

            //let targetMenu = target.closest('.menu');
            if (target.closest('.menu')) {
                handlerMenu();
            }
            else if (target.closest('.close-btn')) {
                handlerMenu();//menu.style.display = 'none';
            } else if (target.tagName === 'A' && target.closest('.active-menu')) {
                handlerMenu();//menu.style.display = 'none';
            } else if (!target.closest('.active-menu')) {
                menu.classList.remove('active-menu');
            }
        });
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
        // animation
        const popup = document.querySelector('.popup'),

        popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.opacity = '0';
                popup.style.display = 'block';
                opacity1();
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
        });
    };
    togglePopUp();

    //табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove(('d-none'));
                }
                else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add(('d-none'));
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

    //slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio');

        let currentSlide = 0,
            interval;


        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);

        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')) {
                currentSlide++;
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            } else if (target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            if (currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };

    slider();

// change photo crew
    const changePhoto = () => {
        const collectPhoto = document.querySelectorAll('.command__photo');
        let srcPhoto = null;
        collectPhoto.forEach((card) => {

            card.addEventListener('mouseover', () => {
                srcPhoto = card.src;
                card.setAttribute('src', card.dataset.img);
            });

            card.addEventListener('mouseleave', () => {
                card.setAttribute('src', srcPhoto);
            });
        });
    };
    changePhoto();

    //resolution only digits for calculator

    const onlyDigits = () => {
        const collectCalc = document.querySelectorAll('.calc-item');

        collectCalc[1].addEventListener('input', () => {
            collectCalc[1].value = collectCalc[1].value.replace(/\d/g, '');
        });

        // for(let i = 1; i < collectCalc.length; i++){
        //     collectCalc[i].addEventListener('input', () => {
        //         collectCalc[i].value = collectCalc[i].value.replace(/\d/g, '');
        //     });
        // }
        // collectCalc.forEach((calc) => {
        //     calc.addEventListener('input', () => {
        //         calc.value = calc.value.replace(/\d/g, '');
        //     });
        // });

    };
    onlyDigits();

});