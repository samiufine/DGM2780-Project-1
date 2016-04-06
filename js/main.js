// Scroll script nav
$(document).ready(function(){
  $('.nav a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

// Scroll script glyphicon
$(document).ready(function(){
  $('.carousel-inner .item .carousel-caption a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

// Scroll script page-top
$(document).ready(function(){
  $('.navbar .container .navbar-header a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});


// Closes the Responsive Menu on Menu Item Click

   $(".navbar-nav li a").click(function (event) {
     var toggle = $(".navbar-toggle").is(":visible");
     if (toggle) {
       $(".navbar-collapse").collapse('hide');
     }
   });

// Active Navbar
 $(".navbar-nav li a").click(function (event) {

 	var isActive = $(this).parent().hasClass('active');

    if ( isActive ) {
    	//console.log('this is active!');
    	// do nothing
    } else {
    	// Lets make it active and turn off everything else
    	//console.log('this is NOT active!');
    	$(".navbar-nav li").removeClass( "active" );	
    	$(this).parent().toggleClass( "active" );
    }
  });



