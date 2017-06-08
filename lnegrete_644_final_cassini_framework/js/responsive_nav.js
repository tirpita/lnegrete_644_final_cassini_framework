/**
 * Created by jonathanlancaster on 5/27/17.
 */

function responsiveNav() {
    $(".icon").click(function(){
        var x = $("#responsive-nav");
        if (x.hasClass("nav-bar")) {
            x.toggleClass("responsive");
        }
    });
}

responsiveNav();