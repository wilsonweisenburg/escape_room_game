$(document).ready(() => {
    let $target = $("#box1");
    let $source = $("#box2");

    $(document).mousemove((event) => {
        // First move the source with mouse
        $source.css({
            top: event.clientY,
            left: event.clientX
        });

        // Now see if the source and target have collided
        // The collision algorithm is in testCollision
        // If you have more than one target, just loop this..
        if (testCollision($source, $target) == true) {

            $target.removeClass("no-collision-state");
            $target.addClass("collision-state");

        } else {

            $target.removeClass("collision-state");
            $target.addClass("no-collision-state");
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
