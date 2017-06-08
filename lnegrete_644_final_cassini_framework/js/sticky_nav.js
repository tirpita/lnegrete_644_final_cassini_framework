function stickyNav(){
    $(window).scroll(function(){
        var nav = $(".nav-bar");
        if ($(this).scrollTop() > 50) {
            nav.addClass("fixed-nav");
        } else{
            nav.removeClass("fixed-nav");
        }
    })
}