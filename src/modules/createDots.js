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
export default createDots;