// nav links, night mode and search starts
let navbar = document.querySelector('.main-container .navbar-side .navbar');

document.querySelector('#menu-dots').onclick = () => {
    navbar.classList.toggle('active');

    document.querySelector('#navbar-close').onclick = () => {
        navbar.classList.remove('active');
    };
};

window.onscroll = () => {
    navbar.classList.remove('active');
};
// nav links, night mode and search ends

// categories drop down starts
function myFunction() {
    document.getElementById('dropdown').classList.toggle('active');
}

window.onclick = function(drop) {
    if (!drop.target.matches('.dropdown-btn')) {
        let dropdown = document.getElementsByClassName("dropdown-links");
        let i;
        for (i = 0; i < dropdown.length; i++) {
            let openDropdown = dropdown[i];
            if (openDropdown.classList.contains('active')) {
            openDropdown.classList.remove('active');
            }
        }
    }
}
// categories drop down ends

// night-mode section starts
var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.classList.add("fa-sun");
        icon.style.fontSize = "190%";
        icon.style.color = "#302e4d";

    } else {
        icon.classList.remove("fa-sun");
    }
}
// night-mode section ends

// search form starts
let searchForm = document.querySelector('.main-container .navbar-side .navbar .nightmode-searchbar .search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
};

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
};
// search form ends

// banner section starts
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// banner section ends

// health section starts
var swiper = new Swiper(".health-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});
// health section ends

// beauty section starts
var swiper = new Swiper(".beauty-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
// beauty section ends

// others swiper starts
var swiper = new Swiper(".others-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        
    },
});
// others swiper ends