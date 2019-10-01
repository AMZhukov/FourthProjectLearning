'use strict';

import countTimer from './modules/countTimer';
import changePhoto from './modules/changePhoto';
import onlyDigits from './modules/onlyDigits';
import createDots from './modules/createDots';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


countTimer('30 september 2019');

createDots();
toggleMenu();
togglePopUp();
tabs();

slider();

changePhoto();

onlyDigits();

calc(100);

sendForm('form1');
sendForm('form2');
sendForm('form3');