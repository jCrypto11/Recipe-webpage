//BUTTON TOGGLE FUNCTION
const getElement = (selector) =>{
    const element = document.querySelector(selector);
    if(element) return element
    throw Error(
        `Please check your class names, there is no ${selector} class`
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-data, .about-data,
         .recipe-content, .contact-data, .contact-button,
         .footer-content, .tags-container, .recipe-list, .about-page,
         .featured-recipes, .cont-container`, {
         interval: 200
})
