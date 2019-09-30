'use strict';

import countTimer from './modules/countTimer';
import createDots from './modules/createDots';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// timer
countTimer('30 september 2019');
//Create dots for sliders
createDots();
toggleMenu();
togglePopUp();
tabs();
//slider
slider();
// change photo crew
changePhoto();
//resolution only digits for calculator
onlyDigits();
//calculator Калькулятор
calc(100);
// отправка данных на сервер
sendForm('form1');
sendForm('form2');
sendForm('form3');
