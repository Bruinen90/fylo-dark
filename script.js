const scrollToTopArrow = document.querySelector('.scrollToTopButton');
const scrolling = () => {
    if(window.pageYOffset < 1) {
        scrollToTopArrow.classList.remove('scrollToTopButton--show');
    } else {
        scrollToTopArrow.classList.add('scrollToTopButton--show');
    }
};

const clickScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}
