const origin = window.location.href

let menuIcon = document.querySelector(".navbar__burger-icon")
let menu = document.querySelector(".navbar__burger-menu")

menuIcon.addEventListener("touchend", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"
        document.querySelector("body").style.overflow = "hidden"
        menuIcon.classList.remove("icon-menu")
        menuIcon.classList.add("icon-remove")
    } else {
        menu.style.display = "none"
        document.querySelector("body").style.overflow = "visible"
        menuIcon.classList.add("icon-menu")
        menuIcon.classList.remove("icon-remove")
    }
}, { passive: true })

document.querySelectorAll(".navbar__burger-menu ul li a").forEach(item => {
    item.addEventListener("touchend", () => {
        menu.style.display = "none"
        document.querySelector("body").style.overflow = "visible"
        menuIcon.classList.add("icon-menu")
        menuIcon.classList.remove("icon-remove")

        window.location.href = `${origin}${item.attributes[0].value}`
    })
})


