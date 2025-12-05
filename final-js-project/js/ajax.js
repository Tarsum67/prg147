// jQuery AJAX: load content from text/content.txt when button is clicked
$(document).ready(function () {
  $("#loadTextBtn").click(function () {
    $("#ajaxOutput").load("text/content.txt");
  });
});
