const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav")
const header = document.querySelector('.header__container')

burger.addEventListener("click", function () {
    burger.classList.toggle("header__burger--opened")
    nav.classList.toggle("header__nav--opened")
})

const headerHover = function (e) {
    if (e.target.classList.contains('header__itom-link')) {
        const link = e.target
        const elements = link.closest('.header__container').querySelectorAll('.header__itom-link')
        const logo = link.closest('.header__container').querySelector('.header__container-img')
        elements.forEach(element => {
            if (element !== link) {
                element.style.opacity = this;
                element.classList.add('active')
            }
            logo.style.opacity = this;
        });

    }
}

header.addEventListener('mouseover', headerHover.bind(0.5))
header.addEventListener('mouseout', headerHover.bind(1))

const intro = document.querySelector('.intro')
const introUs = document.querySelector('.intro-us')
const headerHeight = header.getBoundingClientRect()

const stickyHeader = function (elements) {
    elements.forEach(element => {
        // console.log(element);
        if (!element.isIntersecting) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
    })
}

const introObsorver = new IntersectionObserver(stickyHeader, {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight.height}px`
})

if (intro) {
    introObsorver.observe(intro)
} else {
    introObsorver.observe(introUs)
}
