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
        } else if (target.closest('.close-btn')) {
            handlerMenu(); //menu.style.display = 'none';
        } else if (target.tagName === 'A' && target.closest('.active-menu')) {
            handlerMenu(); //menu.style.display = 'none';
        } else if (!target.closest('.active-menu')) {
            menu.classList.remove('active-menu');
        }
    });
};
export default toggleMenu;