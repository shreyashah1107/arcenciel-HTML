$(document).ready(function() {
    "use strict";

    // Easy selector helper function
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    // Easy event listener function
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    // Easy on scroll event listener 
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    // Navbar links active state on scroll
    let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) 
                return
            let section = select(navbarlink.hash);
            if (!section) 
                return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        });
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    // Scrolls to an element with header offset
    const scrollto = (el) => {
        let header = select('#header');
        let offset = header.offsetHeight;
        if (!header.classList.contains('header-scrolled')) {
            offset -= 20
        }

        let elementPos = select(el).offsetTop;
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        });
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    let selectHeader = select('#header');
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled');
            } else {
                selectHeader.classList.remove('header-scrolled');
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    // Mobile nav toggle
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('is-active');
    });

    // Scroll with offset on links with a class name .scrollto
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault();
            let navbar = select('#navbar');
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile');
                let navbarToggle = select('.mobile-nav-toggle');
                navbarToggle.classList.toggle('is-active');
            }
            scrollto(this.hash);
        }
    }, true);

    // Scroll with ofset on page load with hash links in the url
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    // 3D Stacked Slider
    function detect_active(){
        var get_active = $(".house-tour-slider .house-tour-slider--item:first-child").data("class");
    }

    $(".tour-next").click(function(){
        var total = $(".house-tour-slider--item").length;
        $(".house-tour-slider .house-tour-slider--item:first-child").hide().appendTo(".house-tour-slider").fadeIn();
        $.each($('.house-tour-slider--item'), function (index, slider_item) {
            $(slider_item).attr('data-position', index + 1);
        });
        detect_active();
    });

    $(".tour-prev").click(function(){
        var total = $(".house-tour-slider--item").length;
        $(".house-tour-slider .house-tour-slider--item:last-child").hide().prependTo(".house-tour-slider").fadeIn();
        $.each($('.house-tour-slider--item'), function (index, slider_item) {
            $(slider_item).attr('data-position', index + 1);
        });
        detect_active();
    });

    $("body").on("click", ".house-tour-slider .house-tour-slider--item:not(:first-child)", function(){
        var get_slide = $(this).attr('data-class');
        $(".house-tour-slider .house-tour-slider--item[data-class=" + get_slide + "]").hide().prependTo(".house-tour-slider").fadeIn();
        $.each($('.house-tour-slider--item'), function (index, slider_item) {
            $(slider_item).attr('data-position', index + 1);
        });
        detect_active();
    });

    // Hero Swiper
    var swiper = new Swiper('.swiper-hero', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        speed: 1000,
        delay: 5000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    // Location Swiper
    var swiper = new Swiper('.swiper-location', {
        // effect: "coverflow",
        slidesPerView: 1.3,
        spaceBetween: 90,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        speed: 1000,
        delay: 5000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            993: {
                slidesPerView: 1.3,
                spaceBetween: 90,
            }
        }
    });

    // Amenities Swiper
    var swiper = new Swiper('.swiper-amenities', {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        speed: 1000,
        delay: 5000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    // Configuration Swiper
    var swiper = new Swiper(".configuration-card--swiper-thumbnails", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".configuration-card--swiper", {
        loop: false,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Testimonial Swiper
    var swiper = new Swiper('.swiper-testimonial', {
        slidesPerView: 1.3,
        spaceBetween: 90,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        speed: 1000,
        delay: 5000,
        breakpoints: {
            0: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            993: {
                slidesPerView: 1.4,
                spaceBetween: 90,
            }
        }
    });

    // Initialize select2
    $('.js-select2').select2();
});