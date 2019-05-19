var header = document.getElementById("top-menu");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

var i = 1;
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status-text').fadeOut();
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

$(function() {
  $(".lazy").recliner({
    attrib: "data-src", // selector for attribute containing the media src
    throttle: 300, // millisecond interval at which to process events
    threshold: 100, // scroll distance from element before its loaded
    live: true // auto bind lazy loading to ajax loaded elements
  });
});

$(document).ready(function() {
  $('.smooth').on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

	// for the text caption carousel
  	$('#filterText').html($('.active > .carousel-caption').html());

 	$('.carousel').on('slid.bs.carousel', function () {
      	$('#filterText').html($('.active > .carousel-caption').html());
  	});

  // changing iphone image screen
	$("#iphoneButton").click(function() {
    	i++;
    	if (i > 4){ i = 1;};
    	$('#iphone').css('background-image',  'url(src/iphone/pic' + i + '.png)');
	});

  //hover for gifs
  $("#projectsGIF").hover(
    function() {
      $(this).attr("src", "animated.gif");
    },
    function() {
        $(this).attr("src", "static.gif");
    }                         
  );                  
  $("#designGIF").hover(
    function() {
      $(this).attr("src", "animated.gif");
    },
    function() {
        $(this).attr("src", "static.gif");
    }                         
  );    
  $("#artworkGIF").hover(
    function() {
      $(this).attr("src", "animated.gif");
    },
    function() {
        $(this).attr("src", "static.gif");
    }                         
  );    
});

jQuery(document).ready(function ($) {

  $('#myCarousel').carousel({
    interval: 5000
  });

  $('#carousel-text').html($('#slide-content-0').html());

  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr("id");
    var id = id_selector.substr(id_selector.length - 1);
    var id = parseInt(id);
    $('#myCarousel').carousel(id);
  });


  // When the carousel slides, auto update the text
  $('#myCarousel').on('slid', function (e) {
    var id = $('.item.active').data('slide-number');
    $('#carousel-text').html($('#slide-content-' + id).html());
  });
});

$(".grid").masonry({
  itemSelector: ".grid-item",
  columnWidth: 400
});