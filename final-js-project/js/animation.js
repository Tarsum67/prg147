// jQuery Animation: slide the card from left off-screen to the center-ish
$(document).ready(function () {
  // Animate after a short delay so user can see it move
  setTimeout(function () {
    $("#animated-card").animate(
      {
        left: "50%",
        marginLeft: "-130px",
      },
      "slow"
    );
  }, 500);
});
