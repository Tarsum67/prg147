// Wait until the document is fully loaded
$(document).ready(function() {
  
  // Hide all paragraphs when #hideParagraphs button is clicked
  $("#hideParagraphs").click(function() {
    $("p").hide();
  });

  // Hide the div with ID "infoBox" when #hideDiv button is clicked
  $("#hideDiv").click(function() {
    $("#infoBox").hide();
  });

  // Make h2 headings disappear when clicked
  $("h2").click(function() {
    $(this).hide();
  });
    //  Reset everything 
  $("#resetPage").click(function() {
    $("p, h2, #infoBox").show(); 
  });
});
