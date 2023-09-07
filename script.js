var svg = document.getElementById("svg");
var x = 0;
var y = 0;
var dx = 5; //The speed at which the SVG moves horizontally
var dy = 5; //The speed at which the SVG moves vertically
var width = window.innerWidth;
var height = window.innerHeight;

function animate() {
    x += dx;
    y += dy;

    if (x < 0 || x + svg.width.baseVal.value > width) {
        dx = -dx;
        x += dx;
    }

    if (y < 0 || y + svg.height.baseVal.value > height) {
        dy = -dy;
        y += dy;
    }

    svg.style.left = x + "px";
    svg.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();
