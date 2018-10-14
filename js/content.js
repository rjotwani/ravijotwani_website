/*
 * HOME
 */

 var i = 0;
 var txt = "Hi, I'm Ravi.";
 var speed = 78;

 function typeWriter() {
   if (i < txt.length) {
     document.getElementById("typewriter").innerHTML += txt.charAt(i);
     i++;
     setTimeout(typeWriter, speed);
   }
 }

 typeWriter();

/*
 * RESUME
 */

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

document.getElementById("main").height =
document.getElementById("resume").height =
document.getElementById("embeddedFile").height = h;
