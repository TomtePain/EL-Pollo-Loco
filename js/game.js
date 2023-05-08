let canvas;
let world;
let keyboard = new Keyboard();
let downCounter = 0;
let keypress = false;
let timepassed;
let timeForIdle;
let gameLoaded = false;

function init() {
    document.getElementById('StartScreen').classList.add('d-none');
    addTouchButtons();
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');

    world = new World(canvas, keyboard);
    gameLoaded = true;
    touchBtns();
}

function addTouchButtons() {
    document.getElementById('btn-section').classList.remove('d-none');
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.right = true;
        timepassed = new Date().getSeconds();
    }
    if (e.keyCode == 37) {
        keyboard.left = true;
        timepassed = new Date().getSeconds();
    }
    if (e.keyCode == 38) {
        keyboard.up = true;
        timepassed = new Date().getSeconds();
    }
    if (e.keyCode == 40) {
        keyboard.down = true;
        timepassed = new Date().getSeconds();
    }
    if (e.keyCode == 32) {
        keyboard.space = true;
        timepassed = new Date().getSeconds();
    }
    if (e.keyCode == 68) {
        keyboard.d = true;
        timepassed = new Date().getSeconds();
    }
}, false);

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.right = false;
    }
    if (e.keyCode == 37) {
        keyboard.left = false;
    }
    if (e.keyCode == 38) {
        keyboard.up = false;
    }
    if (e.keyCode == 40) {
        keyboard.down = false;
    }
    if (e.keyCode == 32) {
        keyboard.space = false;
    }
    if (e.keyCode == 68) {
        keyboard.d = false;
        keypress = false;
    }
});

function touchBtns() {
    touchBtnRight();
    touchBtnLeft();
    touchBtnUp();
    touchBtnthrow();
}


function touchBtnRight() {
    document.getElementById('btn-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.right = true;
        timepassed = new Date().getSeconds();
    });

    document.getElementById('btn-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.right = false;
    });
}

function touchBtnLeft() {
    document.getElementById('btn-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.left = true;
        timepassed = new Date().getSeconds();
    });

    document.getElementById('btn-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.left = false;
    });
}

function touchBtnUp() {
    document.getElementById('btn-up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.up = true;
        timepassed = new Date().getSeconds();
    });

    document.getElementById('btn-up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.up = false;
    });
}

function touchBtnthrow() {
    document.getElementById('btn-throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.d = true;
        timepassed = new Date().getSeconds();
    });

    document.getElementById('btn-throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.d = false;
        keypress = false;
    });
}


function stopGame() {
    clearAllIntervals();
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
};


function fullScreen() {
    let fullScreen = document.getElementById('content');
    enterFullscreen(fullScreen);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function gameOver() {
    let end = document.getElementById('end-screen');
    setTimeout(() => {
        end.classList.remove('d-none');
        stopGame();
    }, 1000);
}

function restartGame() {
    location.reload();
}