// jQuery code for Module 4 - HTML / CSS / Classes demo
$(function () {
  // THEME TOGGLE (uses add/removeClass)
  $("#btnLight").on("click", function () {
    $("body").removeClass("theme-dark").addClass("theme-light");
  });

  $("#btnDark").on("click", function () {
    $("body").removeClass("theme-light").addClass("theme-dark");
  });

 
  const MIN_PX = 12;
  const MAX_PX = 22;

  function currentRootSize() {
    return parseFloat($("html").css("font-size")); // px
  }

  $("#btnIncrease").on("click", function () {
    const size = Math.min(MAX_PX, currentRootSize() + 2);
    $("html").css("font-size", size + "px"); // .css() set
  });

  $("#btnDecrease").on("click", function () {
    const size = Math.max(MIN_PX, currentRootSize() - 2);
    $("html").css("font-size", size + "px"); // .css() set
  });


  $("#infoForm").on("submit", function (e) {
    e.preventDefault();

    // GET values from fields (jQuery Get)
    const fullName   = $("#fullName").val().trim();
    const email      = $("#email").val().trim();
    const favColor   = $("#favColor").val().trim();
    const favAnimal  = $("#favAnimal").val();
    const bio        = $("#bio").val().trim();

    if (!fullName || !email) {
      flashNotice("Please enter your name and a valid email.");
      return;
    }

    // Build a small entry card and APPEND it to #output
    const $entry = $(`
      <article class="entry" role="article" aria-label="Submitted entry">
        <h3>${escapeHtml(fullName)}</h3>
        <div class="meta">${escapeHtml(email)}</div>
        <p><strong>Favorite Color:</strong> ${escapeHtml(favColor || "—")}</p>
        <p><strong>Favorite Animal:</strong> ${escapeHtml(favAnimal || "—")}</p>
        <p><strong>Bio:</strong> ${escapeHtml(bio || "—")}</p>
      </article>
    `);

    // Demonstrate jQuery .css() by briefly highlighting the new entry
    $entry.css({ outline: "2px solid var(--primary)" });

    $("#output").append($entry); // .append()

    // After a short delay, remove the highlight using .css() again
    setTimeout(() => {
      $entry.css({ outline: "none" });
    }, 600);

    // CLEAR the form fields (jQuery Set)
    // Reset is easiest for clearing all at once
    $("#infoForm")[0].reset();

    // Announce success
    flashNotice("Entry added and form cleared!");
  });

  // Clear all appended entries
  $("#btnClearOutput").on("click", function () {
    $("#output").empty();
    flashNotice("Output cleared.");
  });

  // Helper: show a brief status message
  function flashNotice(msg) {
    const $n = $("#notice");
    $n.text(msg);
    // Small visual pulse using .css()
    $n.css({ opacity: 0.25 });
    setTimeout(() => $n.css({ opacity: 1 }), 150);
  }

  // Escape user-provided strings before inserting into HTML
  function escapeHtml(str) {
    return String(str).replace(/[&<>"'`=\/]/g, function (s) {
      return ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;",
        "=": "&#61;",
        "/": "&#47;"
      })[s];
    });
  }
});
