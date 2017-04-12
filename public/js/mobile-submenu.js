var Submenu = $('.submenu');
var dropdownIcon = $('.dropdown-icon');


$(document).ready(function () {
    dropdownIcon.click(function () {
        $(this).next().toggleClass('open');
        if(Submenu.hasClass('open')){
            $(this).css('background', "url('../img/mobile/mobile-collapse.png') no-repeat");
        } else {
            $(this).css('background', "url('../img/mobile/mobile-expand.png') no-repeat");
        }
    });
})