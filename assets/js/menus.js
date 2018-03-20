$( document ).ready(function() {

  $( ".work-menu" ).hide();

  $( ".work-tag" ).click(function() {
    $(this).toggleClass("selected-tag");
    $( ".work-menu" ).slideToggle( "slow", function() {
    });
  });

  if (screen.width <= 480) {

    $( ".cross" ).hide();
    $( ".hammenu" ).hide();

    $( ".hamburger" ).click(function() {
      $( ".hammenu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
      });
    });

    $( ".cross" ).click(function() {
      $( ".hammenu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
      });
    });
  }
});