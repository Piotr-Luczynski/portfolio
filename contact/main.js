/* DOCUMENT INFORMATION
	- Document: Personal portfolio Javascript
	- Version:  Alpha
	- Client:   P. Luczynski
	- Author:   P. Luczynski
*/

/* JAVASCRIPT DIRECTORY
	1. =PARTICLES.JS CONFIG
	2. =VARIABLES DECLARATIONS
	3. =NAVBAR TOGGLING
  4. =SITE ENTER ANIMATIONS'
*/

/* ===PARTICLES.JS CONFIG=== */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
            
        }
        
     
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "000"
        },
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 200,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 100,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 250,
        "color": "000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
        
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
          
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 300,
          "size": 70,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 500,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
   
  });

/* ===VARIABLES DECLARATIONS=== */
var bar = document.getElementsByClassName("navbar-toggler")[0];
var droppedMenu = document.getElementsByClassName("dropped")[0];
var clicked = 2;
var header = document.getElementsByClassName("header")[0];
var footer = document.querySelector("footer");

/* ===NAVBAR TOGGLING=== */

bar.addEventListener('click', function(){
  if(clicked%2 === 0){
  droppedMenu.style.right = "0";
  bar.style.color = "#fff";
  clicked ++;
  }
  else{
    droppedMenu.style.right = "-100vw";
    bar.style.color = "#000";
    clicked ++;
  }
});

/* ===SITE ENTER ANIMATIONS=== */

setTimeout(function(){
  header.style.opacity = "1.0";
}, 500);
setTimeout(function(){
  bar.style.right = "5%";
}, 1000);
if(innerHeight <= 360){
setTimeout(function(){
   footer.style.bottom = "2vh";
}, 1000);
}
else{
  setTimeout(function(){
    footer.style.bottom = "5vh";
 }, 1000);
}
