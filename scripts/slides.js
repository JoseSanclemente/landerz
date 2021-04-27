let slideIndex = 0;
let slides = document.querySelectorAll(".testimonial__slide")
let slidesBtn = document.querySelectorAll(".testimonial__slide-btn")

const showSlide = index => {
    slides.forEach((element, itemIndex) => {
        if (itemIndex === index) {
            element.style.display = "flex"
            slidesBtn[index].classList.add("testimonial__slide-btn--selected")
            return
        }

        element.style.display = "none"
        slidesBtn[itemIndex].classList.remove("testimonial__slide-btn--selected")
    });
}

slidesBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Stop timer on click
        clearInterval(timer)
        showSlide(index);
    })
})

showSlide(slideIndex);

let timer = setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}, 3000)