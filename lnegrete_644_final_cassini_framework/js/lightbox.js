function lightbox(){
    
    $('#lightbox-wrapper a').click(function(e) {
        e.preventDefault();

        var image_href = $(this).attr("href");
        if ($('#lightbox').length > 0) {
            $('#content').html('<img src="' + image_href + '" />');
            $('#lightbox').show();
        } else { 
            var lightbox = '<div id="lightbox"><div id="content"><img src="' + image_href +'" /></div></div>';
            $('body').append(lightbox);
        }

    });

    $('#lightbox').on('click', function() {
        $('#lightbox').hide();
    });

}