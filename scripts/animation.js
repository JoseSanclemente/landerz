const addClass = (elements) => {
    elements.forEach(element => {
        element.target.classList.toggle('show-on-scroll');
    })
}

const observer = new IntersectionObserver(addClass, {threshold: 0});

const observeStepImages = () => {
    let elements = document.querySelectorAll('.steps__step img');
    elements.forEach(element => {
        observer.observe(element)
    })
}

observeStepImages();