/*  jQuery Effects Demo
   - Hide/Show: .hide(), .show(), .toggle()
   - Fade: .fadeOut(), .fadeIn(), .fadeToggle()
   - Slide: .slideUp(), .slideDown(), .slideToggle() */

$(function () {
  const $cards = $("[data-card]");          
  const $images = $(".card-img");           
  const $details = $(".details");          

  //  Hide / Show 
  $("#btn-hide-cards").on("click", function () {
    // Stop any queued animations & hide
    $cards.stop(true, true).hide(300);
  });

  $("#btn-show-cards").on("click", function () {
    $cards.stop(true, true).show(300);
  });

  $("#btn-toggle-cards").on("click", function () {
    $cards.stop(true, true).toggle(300);
  });

  //  Fade 
  $("#btn-fade-out").on("click", function () {
    $images.stop(true, true).fadeOut(400);
  });

  $("#btn-fade-in").on("click", function () {
    $images.stop(true, true).fadeIn(400);
  });

  $("#btn-fade-toggle").on("click", function () {
    $images.stop(true, true).fadeToggle(400);
  });

  // Slide 
  $("#btn-slide-up").on("click", function () {
    $details.stop(true, true).slideUp(300);
  });

  $("#btn-slide-down").on("click", function () {
    $details.stop(true, true).slideDown(300);
  });

  $("#btn-slide-toggle").on("click", function () {
    $details.stop(true, true).slideToggle(300);
  });

  //  Reset 
  $("#btn-reset").on("click", function () {
    resetAll();
  });

  function resetAll() {
    // Stop animations, then restore defaults
    $cards.stop(true, true).show();     
    $images.stop(true, true).show();    
    $details.stop(true, true).show();   
  }

  // Accessibility nicety: Enter/Space triggers on focused buttons 
  $(".btn").on("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      $(this).trigger("click");
    }
  });
});
