$(document).ready(() => {
  let $source = $("#box2");
  let $winbox = $("#winbox");
  let $win = $("#win");
  $win.hide();
  let $lose = $("#lose");
  $lose.hide();
  let $target = $("#box1");
  let $target2 = $("#box3");
  let $target3 = $("#box4");
  let $target4 = $("#box5");
  let $target5 = $("#box6");
  let $target6 = $("#box7");
  let $target7 = $("#box8");
  let $target8 = $("#box9");
  let $target9 = $("#box10");
  let $target10 = $("#box11");
  let $target11 = $("#box12");
  let $target12 = $("#box13");
  let $target13 = $("#box14");
  let $target14 = $("#box15");
  let $target15 = $("#box16");
  let $target16 = $("#box17");
  let $target17 = $("#box18");
  let $target18 = $("#box19");
  $(document).mousemove((event) => {
    $source.css({
      top: event.clientY,
      left: event.clientX
    });

    if (testCollision($source, $winbox) == true) {
      $winbox.removeClass("no-collision-state2");
      $win.show();
    } else {
      $winbox.addClass("no-collision-state2");
    }
    if (testCollision($source, $target) == true) {
      $target.removeClass("no-collision-state");
      $target.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target.removeClass("collision-state");
      $target.addClass("no-collision-state");
    }
    if (testCollision($source, $target2) == true) {
      $target2.removeClass("no-collision-state");
      $target2.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target2.removeClass("collision-state");
      $target2.addClass("no-collision-state");
    }
    if (testCollision($source, $target3) == true) {
      $target3.removeClass("no-collision-state");
      $target3.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target3.removeClass("collision-state");
      $target3.addClass("no-collision-state");
    }
    if (testCollision($source, $target4) == true) {
      $target4.removeClass("no-collision-state");
      $target4.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target4.removeClass("collision-state");
      $target4.addClass("no-collision-state");
    }
    if (testCollision($source, $target5) == true) {
      $target5.removeClass("no-collision-state");
      $target5.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target5.removeClass("collision-state");
      $target5.addClass("no-collision-state");
    }
    if (testCollision($source, $target6) == true) {
      $target6.removeClass("no-collision-state");
      $target6.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target6.removeClass("collision-state");
      $target6.addClass("no-collision-state");
    }
    if (testCollision($source, $target7) == true) {
      $target7.removeClass("no-collision-state");
      $target7.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target7.removeClass("collision-state");
      $target7.addClass("no-collision-state");
    }
    if (testCollision($source, $target8) == true) {
      $target8.removeClass("no-collision-state");
      $target8.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target8.removeClass("collision-state");
      $target8.addClass("no-collision-state");
    }
    if (testCollision($source, $target9) == true) {
      $target9.removeClass("no-collision-state");
      $target9.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target9.removeClass("collision-state");
      $target9.addClass("no-collision-state");
    }
    if (testCollision($source, $target10) == true) {
      $target10.removeClass("no-collision-state");
      $target10.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target10.removeClass("collision-state");
      $target10.addClass("no-collision-state");
    }
    if (testCollision($source, $target11) == true) {
      $target11.removeClass("no-collision-state");
      $target11.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target11.removeClass("collision-state");
      $target11.addClass("no-collision-state");
    }
    if (testCollision($source, $target12) == true) {
      $target12.removeClass("no-collision-state");
      $target12.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target12.removeClass("collision-state");
      $target12.addClass("no-collision-state");
    }
    if (testCollision($source, $target13) == true) {
      $target13.removeClass("no-collision-state");
      $target13.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target13.removeClass("collision-state");
      $target13.addClass("no-collision-state");
    }
    if (testCollision($source, $target14) == true) {
      $target14.removeClass("no-collision-state");
      $target14.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target14.removeClass("collision-state");
      $target14.addClass("no-collision-state");
    }
    if (testCollision($source, $target15) == true) {
      $target15.removeClass("no-collision-state");
      $target15.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target15.removeClass("collision-state");
      $target15.addClass("no-collision-state");
    }
    if (testCollision($source, $target16) == true) {
      $target16.removeClass("no-collision-state");
      $target16.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target16.removeClass("collision-state");
      $target16.addClass("no-collision-state");
    }
    if (testCollision($source, $target17) == true) {
      $target17.removeClass("no-collision-state");
      $target17.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target17.removeClass("collision-state");
      $target17.addClass("no-collision-state");
    }
    if (testCollision($source, $target18) == true) {
      $target18.removeClass("no-collision-state");
      $target18.addClass("collision-state");
      $lose.show();
      $winbox.hide();
    } else {
      $target18.removeClass("collision-state");
      $target18.addClass("no-collision-state");
    }
  });
});

function testCollision(s, t) {
  if (
    s.position().left < t.position().left + t.width() &&
    s.position().left + s.width() > t.position().left &&
    s.position().top < t.position().top + t.height() &&
    s.position().top + s.height() > t.position().top
  ) {
    console.log("collision!");
    return true;
  }

  console.log("no collision");
  return false;
}

