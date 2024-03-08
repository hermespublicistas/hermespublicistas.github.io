function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const overlay = document.querySelector('.menu-container > .overlay');

    if (menuContainer.classList.contains('active')) {
        // If menu is active, deactivate it
        menuContainer.classList.remove('active');
        menuContainer.classList.add('inactive');
        overlay.style.animation = '';

        // Remove the event listeners from menu items to prevent rapid activation
        removeMenuEventListeners();
    } else {
        // If menu is inactive, activate it
        menuContainer.classList.remove('inactive');
        menuContainer.classList.add('active');
        overlay.style.animation = 'overlay-slide-in 200ms forwards 200ms';

        // Add event listeners to menu items
        addMenuEventListeners();
    }
}

function handleMenuItemClick(e) {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.hash);
    // Handle the target section as needed (e.g., scroll to it)

    // Deactivate the menu after a short delay
    setTimeout(() => {
        toggleMenu();
    }, 500); // Adjust the delay as needed
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

    // Add a temporary class for the transition
    body.classList.add('theme-transition');

    // Switch themes after a brief delay to allow for transition
    setTimeout(() => {
        if (currentTheme === 'dark-theme') {
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
        }

        // Remove the transition class after the switch
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 500); // Transition duration (can be adjusted)
    }, 200); // Initial delay for visual smoothness
}

function toggleSliderImpresiones() {
    const cardwrapper = document.querySelector('.card-wrapper-impresiones');
    const cardContainer = cardwrapper.querySelector('.card-container-impresiones'); 

    if (cardwrapper.classList.contains('active')) {
        // If menu is active, deactivate it
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
    //if (cardwrapper.classList.contains('active')) {
    //    const cardContainerCenter = cardContainer.offsetTop + cardContainer.offsetHeight / 2;
    //    const windowCenter = window.innerHeight / 2;
    //    const scrollAmount = cardContainerCenter - windowCenter;
    
    
    //}
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
    //window.scrollBy({
    //    top: cardContainer.offsetHeight,
    //    behavior: 'smooth'
    //});
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
    //window.scrollBy({
    //    top: cardContainer.offsetHeight,
    //   behavior: 'smooth'
    //});
}


function toggleMoreIcon(imageID) {
    const projectimage = document.getElementById(imageID);
    const projectlink = projectimage.querySelector('.project-link');
    const icon = projectlink.querySelector('.icon');
    // Check the current source of the icon image
    if (icon.style.backgroundImage === 'url("images/icons/minus.png")') {
        // If it's the first image, change it to the second image
        icon.style.transition = 'background-image 0.8s';
        icon.style.backgroundImage = 'url("images/icons/plus.png")';
    } else {
        // If it's the second image (or any other), change it to the first image
        icon.style.transition = 'background-image 0-8s';
        icon.style.backgroundImage = 'url("images/icons/minus.png")';
    }
}

// Initial setup


  
  // Example usage:
  // Assuming you have a button with id "themeToggleBtn"
  /*document.getElementById('themeButton').addEventListener('click', toggleTheme);*/
/*var icon = document.getElementById("icon");

  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "moon.png";
    }else{
        icon.src = "sun.png";
    }
  }*/

