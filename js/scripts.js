jQuery(document).ready(function( $ ) {
    // Slim Menu
    $('ul.slimmenu').slimmenu({
    resizeWidth: '991',
    collapserTitle: 'Main Menu',
    easingEffect:'easeInOutQuint',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
    });

   // Active page Color
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    $(".menu ul li a").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
        $(this).addClass("menu-active");
    });

    // Slider
    $("#service-owl").owlCarousel({
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        itemsScaleUp : false,

        mouseDrag: true,
        navigation : false,
        autoPlay : 5000,
        slideSpeed : 800,
        paginationSpeed : 800,
        singleItem : false,
        autoHeight : true,
        pagination : true,
    });
     // Slider
    $("#testi-slide").owlCarousel({
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        itemsScaleUp : false,

        mouseDrag: true,
        navigation : false,
        autoPlay : 5000,
        slideSpeed : 800,
        paginationSpeed : 800,
        singleItem : false,
        autoHeight : true,
        pagination : true,
    });
    // Slider
    $("#about-slide").owlCarousel({
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        itemsScaleUp : false,

        mouseDrag: true,
        navigation : false,
        autoPlay : 5000,
        slideSpeed : 800,
        paginationSpeed : 800,
        singleItem : false,
        autoHeight : false,
        pagination : true,
    });
    // Slider
    $("#work-slide").owlCarousel({
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        itemsScaleUp : false,
        navigationText : ['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],

        mouseDrag: true,
        navigation : true,
        autoPlay : 5000,
        slideSpeed : 800,
        paginationSpeed : 800,
        singleItem : false,
        autoHeight : false,
        pagination : false,
    });

    // Tooltip
    $('.highlight-tooltip').tooltip();
    // Alert Notification
    $(".alert .toggle-alert").click(function(){
        $(this).closest(".alert").slideUp();
        return false;
    });
    //Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Skill Pie chart
    $('#skills-pie').waypoint(function () {
        $('.chart').each(function () {
            $(this).easyPieChart({
                size: 170,
                animate: 2000,
                lineCap: 'butt',
                scaleColor: false,
                barColor: '#5a65d1',
                trackColor: '#fff',
                lineWidth: 7
            });
        });
    }, { offset: '100%' }
    );
    // Skill Bar
    $('.skill-section').waypoint(function() {
        "use strict";
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },2000);
            jQuery(this).find('.skillbar-right-line').animate({
                left:jQuery(this).attr('data-percent')
            },2000);
        });
        }, { offset: '100%'}
    );
    // Slider
    $("#testimonial-slide").owlCarousel({
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        itemsScaleUp : false,

        mouseDrag: true,
        navigation : false,
        autoPlay : 5000,
        slideSpeed : 800,
        paginationSpeed : 800,
        singleItem : false,
        autoHeight : true,
        pagination : true,
    });

});

/*
 * Google Map
*/
var labVcMaps = labVcMaps || [];
labVcMaps.push({
    id: 'map',

    locations: [
    {
        "marker_image":"http://defatch-demo.com/templates/spartan/images/icons/map/map-icon.png",
        "retina_marker":"",
        "latitude":"40.712784",
        "longitude":"-74.005941",
        "marker_title":"Spartan Office",
        "marker_description":"<p>Our Main Headquarters!</p>"
    }
    ],

    zoom: 12,
    scrollwheel: false,
    dropPins: true,
    panBy: [0,0],
    tilt: 0,
    heading: 0,

    mapType: 'roadmap',

    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    plusMinusZoom: true,


    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c1c1c1"},{"visibility":"on"}]}]
});


    jQuery(document).ready(function( $ ) {

          // Menu Collapdser border
    $(".collapse-button").click(function(){

        $(".menu-collapser").addClass("menu-collapser-border");
    });
    });