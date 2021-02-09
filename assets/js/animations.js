
var i = 0;
var txt = 'attempting to learn from my mistakes'; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */

// Turning this off temporarily

// window.onload = function startTypeWriter() {
//     document.getElementById("blogdesc").innerHTML = "";
//     typeWriter();
// }

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("blogdesc").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


