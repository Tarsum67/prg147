/*  jQuery Effects Demo
   - Animate movement with callbacks
   - stop() to halt queued/running animations
   - Chaining multiple effects
   - Keyboard arrow support*/

$(function () {
  console.log("jQuery ready, binding handlers...");

  const $player = $("#player");
  const $chain  = $("#chainBox");
  const $stage  = $("#stage");
  const $status = $("#status");

  if (!$player.length || !$stage.length) {
    console.error("Missing #player or #stage in DOM.");
    return;
  }

  const STEP  = 60;    // px per nudge
  const SPEED = 300;   // ms per move
  let looping = false; // for the Run Loop demo

  function setStatus(msg) {
    $status.text(msg);
    console.log(msg);
  }

  function clampPosition(left, top) {
    const maxLeft = $stage.width() - $player.outerWidth();
    const maxTop  = $stage.height() - $player.outerHeight();
    return {
      left: Math.max(0, Math.min(left, maxLeft)),
      top:  Math.max(0, Math.min(top,  maxTop))
    };
  }

  // Animate the player with a callback
  function move(dx, dy, label) {
    const curLeft = parseFloat($player.css("left")) || 0;
    const curTop  = parseFloat($player.css("top"))  || 0;
    const target  = clampPosition(curLeft + dx, curTop + dy);

    $player
      .stop(true, false) // clear queue, do NOT jump to end
      .animate({ left: target.left, top: target.top }, SPEED, "swing", function () {
        setStatus(`Moved ${label}. left: ${Math.round(target.left)}px, top: ${Math.round(target.top)}px`);
      });
  }

  // Button handlers
  $("#btnUp").on("click",   () => move(0, -STEP, "Up"));
  $("#btnDown").on("click", () => move(0,  STEP, "Down"));
  $("#btnLeft").on("click", () => move(-STEP, 0, "Left"));
  $("#btnRight").on("click",() => move( STEP, 0, "Right"));

  // Keyboard support (arrow keys)
  $(document).on("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":    e.preventDefault(); move(0, -STEP, "Up"); break;
      case "ArrowDown":  e.preventDefault(); move(0,  STEP, "Down"); break;
      case "ArrowLeft":  e.preventDefault(); move(-STEP, 0, "Left"); break;
      case "ArrowRight": e.preventDefault(); move( STEP, 0, "Right"); break;
    }
  });

  // STOP: stop player + chain animations
  $("#btnStop").on("click", function () {
    console.log("Stop clicked.");
    looping = false; // stop the loop if running
   
    $player.stop(true, false);
    $chain.stop(true, false);
    setStatus("Stopped all animations (cleared queue, held current positions).");
  });

  // Reset to default position/size/opacity
  $("#btnReset").on("click", function () {
    console.log("Reset clicked.");
    looping = false;
    $player
      .stop(true, true) // clear and jump to end to avoid mid-animation state
      .animate({ left: 210, top: 170, opacity: 1, width: 80, height: 80 }, 200, "swing", function () {
        setStatus("Reset to starting position.");
      });

    $chain.stop(true, true).show().css({ width: 100, height: 50, opacity: 1 });
  });

  // Simple CHAINING demo on a separate element
  $("#btnChain").on("click", function () {
    console.log("Chain clicked.");
    $chain
      .stop(true, false)
      .animate({ width: 160, height: 60, opacity: 0.85 }, 250)
      .animate({ width: 100, height: 50, opacity: 1 }, 250)
      .fadeOut(250)
      .fadeIn(250, function () {
        setStatus("Chaining demo complete (animate → animate → fadeOut → fadeIn).");
      });
  });

  // A visible RUN LOOP that circles the stage until you press Stop
  $("#btnRunLoop").on("click", function () {
    console.log("Run Loop clicked.");
    if (looping) return; // already running
    looping = true;

    // compute a rectangle path inside the stage
    const pad = 10;
    const maxLeft = $stage.width() - $player.outerWidth() - pad;
    const maxTop  = $stage.height() - $player.outerHeight() - pad;

    // start at top-left corner
    $player.stop(true, true).css({ left: pad, top: pad });

    function loopOnce() {
      if (!looping) return; // allow Stop to break the loop any time

      // Chain around the rectangle with a final callback
      $player
        .animate({ left: maxLeft }, 400)
        .animate({ top:  maxTop  }, 400)
        .animate({ left: pad     }, 400)
        .animate({ top:  pad     }, 400, function () {
          if (!looping) return;
          setStatus("Looped around the stage. (Press Stop to halt.)");
          loopOnce(); // recurse for continuous looping
        });
    }

    setStatus("Running loop around the stage. Press Stop to halt.");
    loopOnce();
  });

  setStatus("Ready. If buttons don’t respond, open the Console for logs and verify app.js is loaded.");
});
