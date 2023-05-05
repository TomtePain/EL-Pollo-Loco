let canvas;
let world;
let keyboard = new Keyboard();
let downCounter = 0;
let keypress = false;
let timepassed;
let timeForIdle;
let endImg ='img_pollo_locco/9_intro_outro_screens/game_over/game over!.png';

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39) {
        keyboard.right = true;
        timepassed = new Date().getSeconds();
    }
    if(e.keyCode == 37) {
        keyboard.left = true;
        timepassed = new Date().getSeconds();
    }
    if(e.keyCode == 38) {
        keyboard.up = true;
        timepassed = new Date().getSeconds();
    }
    if(e.keyCode == 40) {
        keyboard.down = true;
        timepassed = new Date().getSeconds();
    }
    if(e.keyCode == 32) {
        keyboard.space = true;
        timepassed = new Date().getSeconds();
    }
    if(e.keyCode == 68) {
        keyboard.d = true;
        timepassed = new Date().getSeconds();
    }
},false)

window.addEventListener("keyup", (e) => {
    if(e.keyCode == 39) {
        keyboard.right = false;
    }
    if(e.keyCode == 37) {
        keyboard.left = false;
    }
    if(e.keyCode == 38) {
        keyboard.up = false;
    }
    if(e.keyCode == 40) {
        keyboard.down = false;
    }
    if(e.keyCode == 32) {
        keyboard.space = false;
    }
    if(e.keyCode == 68) {
        keyboard.d = false;
        keypress = false;
    }
})
