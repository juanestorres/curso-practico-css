const heroButtons = document.querySelectorAll('.hero-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('#close-button')


window.addEventListener('click', function (e) {
    heroButtonSelected = false;
    heroButtons.forEach((button) => {
        heroButtonSelected = heroButtonSelected || button.contains(e.target)
    });
    if (!heroButtonSelected) {
        if (modal.style.visibility === 'visible' && !(document.querySelector('.modal-content').contains(e.target))) {
            // Clicked outside box
            modal.style.visibility = 'hidden';
        }
    }
});

heroButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.style.visibility = 'visible';
    });
});

closeButton.addEventListener("click", () => {
    modal.style.visibility = 'hidden';
});

