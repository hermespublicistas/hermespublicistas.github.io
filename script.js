function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const overlay = document.querySelector('.menu-container > .overlay');

    if (menuContainer.classList.contains('active')) {
        menuContainer.classList.remove('active');
        menuContainer.classList.add('inactive');
        overlay.style.animation = '';

        removeMenuEventListeners();
    } else {
        menuContainer.classList.remove('inactive');
        menuContainer.classList.add('active');
        overlay.style.animation = 'overlay-slide-in 200ms forwards 200ms';
        addMenuEventListeners();
    }
}

function handleMenuItemClick(e) {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.hash);
    setTimeout(() => {
        toggleMenu();
    }, 500); 
}

function addMenuEventListeners() {
    document.querySelectorAll('.menu-container ul li a').forEach(link => {
        link.addEventListener('click', handleMenuItemClick);
    });
}

function removeMenuEventListeners() {
    document.querySelectorAll('.menu-container ul li a').forEach(link => {
        link.removeEventListener('click', handleMenuItemClick);
    });
}

addMenuEventListeners();

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';

    body.classList.add('theme-transition');

    setTimeout(() => {
        if (currentTheme === 'dark-theme') {
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
        }
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 200); 
    }, 200); 
}

function toggleSliderImpresiones() {
    const cardwrapper = document.querySelector('.card-wrapper-impresiones');
    const cardContainer = cardwrapper.querySelector('.card-container-impresiones'); 

    if (cardwrapper.classList.contains('active')) {
        cardwrapper.classList.remove('active');
        cardwrapper.classList.add('inactive');

        removeMenuEventListeners();
        window.scrollBy({
            top: - window.innerHeight / 2,
            behavior: 'smooth'
        });
    } else {
        cardwrapper.classList.remove('inactive');
        cardwrapper.classList.add('active');

        addMenuEventListeners();
        window.scrollBy({
            top: cardContainer.offsetHeight,
            behavior: 'smooth'
        });
    }
}

function toggleSliderDiseno() {
    const cardwrapper = document.querySelector('.card-wrapper-diseno');
    const cardContainer = cardwrapper.querySelector('.card-container-diseno'); 

    if (cardwrapper.classList.contains('active')) {
        cardwrapper.classList.remove('active');
        cardwrapper.classList.add('inactive');

        removeMenuEventListeners();
        window.scrollBy({
            top: - window.innerHeight / 2,
            behavior: 'smooth'
        });
    } else {
        cardwrapper.classList.remove('inactive');
        cardwrapper.classList.add('active');

        addMenuEventListeners();
        window.scrollBy({
            top: cardContainer.offsetHeight,
            behavior: 'smooth'
        });
    }
}

function toggleSliderPublicidad() {
    const cardwrapper = document.querySelector('.card-wrapper-publicidad');
    const cardContainer = cardwrapper.querySelector('.card-container-publicidad'); 

    if (cardwrapper.classList.contains('active')) {
        cardwrapper.classList.remove('active');
        cardwrapper.classList.add('inactive');

        removeMenuEventListeners();
        window.scrollBy({
            top: - window.innerHeight / 2,
            behavior: 'smooth'
        });
    } else {
        cardwrapper.classList.remove('inactive');
        cardwrapper.classList.add('active');

        addMenuEventListeners();
        window.scrollBy({
            top: cardContainer.offsetHeight,
            behavior: 'smooth'
        });
    }
}


function toggleMoreIcon(imageID) {
    const projectimage = document.getElementById(imageID);
    const projectlink = projectimage.querySelector('.project-link');
    const icon = projectlink.querySelector('.icon');
    if (icon.style.backgroundImage === 'url("images/icons/minus.png")') {
        icon.style.transition = 'background-image 0.8s';
        icon.style.backgroundImage = 'url("images/icons/plus.png")';
    } else {
        icon.style.transition = 'background-image 0-8s';
        icon.style.backgroundImage = 'url("images/icons/minus.png")';
    }
}



const swipeSensitiveComponentA = document.getElementById("swipe-a");

let touchstartX = 0;
let touchendX = 0;

swipeSensitiveComponentA.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

swipeSensitiveComponentA.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe("a");
}, false);




const swipeSensitiveComponentB = document.getElementById("swipe-b");

swipeSensitiveComponentB.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

swipeSensitiveComponentB.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe("b");
}, false);




const swipeSensitiveComponentC = document.getElementById("swipe-c");

swipeSensitiveComponentC.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

swipeSensitiveComponentC.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe("c");
}, false);

function handleSwipe(SliderID) {
    const totalSlides = 4; 
    let currentSlide = 1;
    const checkedInput = document.querySelector('input[name="slide-'+ SliderID +'"]:checked');
    if (checkedInput) {
        currentSlide = parseInt(checkedInput.id.slice(1)); 
    }

    if (touchendX < touchstartX && currentSlide < totalSlides) {
        currentSlide++;
    }

    if (touchendX > touchstartX && currentSlide > 1) {
        currentSlide--;
    }
    document.getElementById(SliderID + currentSlide).checked = true;
}



