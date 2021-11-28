$(function() {
    $(".rslides").responsiveSlides();
  });

// RESPONSIVE SLIDER JS END


// Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });




   // GOOGLE MAP JS

var center = [22.369639, 91.811550];


$('.map')
      .gmap3({
        center:[22.369639, 91.811550],
        zoom:16,
      })
       .marker([
        {position:[22.369639, 91.811550]},
        {address:"Chittagong Polytechnic Institute,nasirabad,chittagong"},
        {address:"(6th Floor), Suite #609 , Sahera Tropical Centre, 218 New Elephant Rd 1205 Dhak, Dhaka 1205,BANGLADESH", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
      ])
      