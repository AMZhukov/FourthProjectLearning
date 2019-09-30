const onlyDigits = () => {
    const collectCalc = document.querySelectorAll('.calc-item');

    collectCalc.forEach((calc, index) => {
        if (index > 0) {
            calc.addEventListener('input', () => {
                calc.value = calc.value.replace(/\D/g, '');
            });
        }
    });

};
export default onlyDigits;