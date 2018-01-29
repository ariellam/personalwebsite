
var i = 1;
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

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

