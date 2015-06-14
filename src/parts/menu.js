(function(){

    // toggle open menu
    var toggleOpen = function(){
        var menu = document.querySelector('.menu');
        var menuOpen = true === menu.classList.contains('open');

        if(menuOpen) {
            menu.className = menu.className.replace(" open",'');
        } else {
            menu.className += ' open';
        }
    };

    // if there's a hamburger button register it
    var hamburger = document.querySelector('.hamburger');
    if(hamburger) hamburger.addEventListener('click', toggleOpen);

}());