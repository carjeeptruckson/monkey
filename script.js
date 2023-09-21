var img = document.getElementById("img");
var x = 0;
var y = 0;
var dx = 2.5; //The speed at which the SVG moves horizontally
var dy = 2.5; //The speed at which the SVG moves vertically
var width = window.innerWidth;
var height = window.innerHeight;

function animate() {
    x += dx;
    y += dy;

    if (x < 0 || x + img.width.baseVal.value > width) {
        dx = -dx;
        x += dx;
    }

    if (y < 0 || y + img.height.baseVal.value > height) {
        dy = -dy;
        y += dy;
    }

    svg.style.left = x + "px";
    svg.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
