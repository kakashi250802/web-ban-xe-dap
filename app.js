let hero_slide = document.querySelector('#hero-slide');

let hero_slide_items = hero_slide.querySelectorAll('.slide');

let hero_slide_index = 0;

let hero_slide_play = true;

let hero_slide_control_items = hero_slide.querySelectorAll('.slide-control-item');

let silde_next = hero_slide.querySelector('.slide-next');
let silde_prev = hero_slide.querySelector('.slide-prev');
let heading = document.querySelector('header')
showSlide = (index) => {
        hero_slide.querySelector('.slide.active').classList.remove('active');
        hero_slide.querySelector('.slide-control-item.active').classList.remove('active');
        hero_slide_items[index].classList.add('active');
        hero_slide_control_items[index].classList.add('active');
    }
    // next slide
nextSlide = () => {
        hero_slide_index = hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1;
        showSlide(hero_slide_index);
    }
    // prev slide
prevSlide = () => {
    hero_slide_index = hero_slide_index - 1 < 0 ? hero_slide_items.length - 1 : hero_slide_index - 1;
    showSlide(hero_slide_index);
}
silde_next.addEventListener('click', () => nextSlide());
silde_prev.addEventListener('click', () => prevSlide());
// add event to slide click slider
hero_slide_control_items.forEach((slide, index) => {
        slide.addEventListener('click', () => showSlide(index));
    })
    // pause slide when mouse in slider
hero_slide.addEventListener('mouseover', () => hero_slide_play = false);
// play slide when mouse out slider
hero_slide.addEventListener('mouseout', () => hero_slide_play = true)


setTimeout(() => hero_slide_items[0].classList.add('active'), 300);
// auto slide
setInterval(() => {
    if (!hero_slide_play) return
    nextSlide();
}, 5000);
// change header style when scroll
window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            heading.classList.add('shrink');
        } else {
            heading.classList.remove('shrink');
        }
    })
    // elemnet show on scroll
let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60)
};

let el_to_show = document.querySelectorAll('.show-on-scroll');

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();

    let distance = 200;

    return rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance);
}

loop = () => {
    el_to_show.forEach((el) => {
        if (isElInViewPort(el)) el.classList.add('show')
    });
    scroll(loop);
};
loop();