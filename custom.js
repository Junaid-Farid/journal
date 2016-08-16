$(document).ready(function () {
    $("#owl-slider").owlCarousel({ 
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true,
        navigation:true,
                navigationText: [
                    '<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-2x  fa-angle-right" aria-hidden="true"></i>'
                ]
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    $("#top").click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '500', 'swing');
        return false;
    });
});