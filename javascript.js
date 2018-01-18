
var i = 1;
$(document).ready(function() {
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

