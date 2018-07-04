/* $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(document).ready(function(){
    $("presentational1").mouseover(function(){
        $("presentational1").css("background: url("/pictures/mma2"");
    });
    $("p").mouseout(function(){
        $("p").css("background-color", "lightgray");
    });
});
*/
$(function() {
  $('.presentational1').hover(function() {
    $('.aktivnost1').css('color', 'white');
    $('.aktivnost1').css('font-size', '60px');
    $('.presentational1').css('background-image', 'url("/pictures/mma2.jpg")');
  }, function() {
    // on mouseout, reset the background colour
    $('.aktivnost1').css('color', 'grey');
    $('.aktivnost1').css('font-size', '50px');
    $('.presentational1').css('background-image', 'url("/pictures/mma1.jpg")');
  });
});

$(function() {
  $('.presentational2').hover(function() {
    $('.aktivnost2').css('color', 'white');
    $('.aktivnost2').css('font-size', '60px');
    $('.presentational2').css('background-image', 'url("/pictures/bjj2.jpg")');
  }, function() {
    // on mouseout, reset the background colour
    $('.aktivnost2').css('color', 'grey');
    $('.aktivnost2').css('font-size', '50px');
    $('.presentational2').css('background-image', 'url("/pictures/bjj1.jpg")');
  });
});

$(function() {
  $('.presentational3').hover(function() {
    $('.aktivnost3').css('color', 'white');
    $('.aktivnost3').css('font-size', '60px');
    $('.presentational3').css('background-image', 'url("/pictures/trening2.jpg")');
  }, function() {
    // on mouseout, reset the background colour
    $('.aktivnost3').css('color', 'grey');
    $('.aktivnost3').css('font-size', '50px');
    $('.presentational3').css('background-image', 'url("/pictures/trening1.jpg")');
  });
});

// Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(45.554650, 18.703765);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);
