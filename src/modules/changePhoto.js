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

export default changePhoto;