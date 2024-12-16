// // This is forleft part of header 

document.addEventListener('DOMContentLoaded', (event) => {
    const Extend = document.querySelector(".extend");
    const Learn = document.querySelector(".learn");
    const Com = document.querySelector(".com");
    const About = document.querySelector(".about");
    const search = document.querySelector(".search-button");

    const dropExtend = document.querySelector(".dr-pos-extend");
    const dropLearn = document.querySelector(".dr-pos-learn");
    const dropCom = document.querySelector(".dr-pos-com");
    const dropAbout = document.querySelector(".dr-pos-about");
    const dropSer = document.querySelector(".dr-pos-ser");

    function hideAllDropdowns() {
        dropExtend.classList.remove('dr-show');
        dropLearn.classList.remove('dr-show');
        dropCom.classList.remove('dr-show');
        dropAbout.classList.remove('dr-show');
        dropSer.classList.remove('.dr-show');
        
    }

    function toggleDropdown(dropdown) {
        if (dropdown.classList.contains('dr-show')) {
            dropdown.classList.remove('dr-show');
        } else {
            hideAllDropdowns();
            dropdown.classList.add('dr-show');
        }
    }

    if (Extend) {
        Extend.addEventListener('click', (event) => {
            toggleDropdown(dropExtend);
            event.preventDefault();
        });
    }

    if (Learn) {
        Learn.addEventListener('click', (event) => {
            toggleDropdown(dropLearn);
            event.preventDefault();
        });
    }

    if (Com) {
        Com.addEventListener('click', (event) => {
            toggleDropdown(dropCom);
            event.preventDefault();
        });
    }

    if (About) {
        About.addEventListener('click', (event) => {
            toggleDropdown(dropAbout);
            event.preventDefault();
        });
    }

    if (search) {
        search.addEventListener('click', (event) => {
            toggleDropdown(dropSer)
            

            
        });
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dr-down-flx') && !event.target.closest('.dr-pos-extend') && !event.target.closest('.dr-pos-learn') && !event.target.closest('.dr-pos-com') && !event.target.closest('.dr-pos-about')) {
            hideAllDropdowns();
        }
    });
});