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
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};
export default togglePopUp;