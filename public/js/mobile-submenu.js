var Submenu = $('.submenu');
var dropdownIcon = $('.dropdown-icon');


$(document).ready(function () {
    dropdownIcon.click(function () {
        $(this).next().toggleClass('open');
        if(Submenu.hasClass('open')){
            $(this).css('background-image', "url('../img/mobile/mobile-collapse.png')");
        } else {
            $(this).css('background-image', "url('../img/mobile/mobile-expand.png')");
        }
    });
})