let canvas;
let world;
let keyboard = new Keyboard();
let downCounter = 0;
let keypress = false;
let timepassed;
let timeForIdle;
let gameLoaded = false;
let audioActive = true;

/**
 * The function initializes the game by hiding the start screen, adding touch buttons, creating a
 * canvas, initializing the game world, and setting a flag for game loaded.
 */
function init() {
    document.getElementById('StartScreen').classList.add('d-none');
    addTouchButtons();
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
    gameLoaded = true;
    touchBtns();
}

/**
 * The function adds touch buttons to the webpage.
 */
function addTouchButtons() {
    document.getElementById('btn-section').classList.remove('d-none');
}

/* This code adds an event listener to the window object that listens for keydown events. When a
keydown event occurs, the code checks which key was pressed using the keyCode property of the event
object. Depending on the key pressed, it sets the corresponding property of the keyboard object to
true and records the current time in seconds using the Date() object. This is used to track how long
a key has been held down. */
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

/* This code adds an event listener to the window object that listens for keyup events. When a keyup
event occurs, the code checks which key was released using the keyCode property of the event object.
Depending on the key released, it sets the corresponding property of the keyboard object to false
and sets the keypress flag to false for the "d" key. This is used to track when the "d" key has been
released. */
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

/**
 * The function "touchBtns" calls several other functions related to touch buttons and sound icons.
 */
function touchBtns() {
    touchBtnRight();
    touchBtnLeft();
    touchBtnUp();
    touchBtnthrow();
    touchSoundIcon();
}


/**
 * This function adds touch event listeners to a button element and sets a boolean value for the
 * "right" key in a keyboard object.
 */
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

/**
 * This function adds touch event listeners to a button element and sets a boolean value for the
 * "left" key in a keyboard object.
 */
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

/**
 * This function adds touch event listeners to a button element and sets a boolean value for the
 * "up" key in a keyboard object.
 */
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

/**
 * This function adds touch event listeners to a button element and sets a boolean value for the
 * "d" key in a keyboard object.
 */
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

/**
 * The function adds a touch event listener to a sound icon button and sets the audio mode when
 * touched.
 */
function touchSoundIcon() {
    document.getElementById('btn-sound').addEventListener('touchstart', (e) => {
        setAudioMode();
        e.preventDefault();
    });
}


/**
 * The function stops the game by clearing all intervals and pausing the background sound.
 */
function stopGame() {
    clearAllIntervals();
    world.backgroundSound.pause();
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
};


/**
 * The function sets the audio icon and sound touch based on whether audio is active or not.
 */
function setAudioIcon() {
    let audioIcon = document.getElementById('audio-icon');
    let soundTouch = document.getElementById('btn-sound');
    if(audioActive == true) {
        audioIcon.src = 'img_pollo_locco/buttons/volume brown.ico';
        soundTouch.src = 'img_pollo_locco/buttons/volume.ico';
    }else {
        audioIcon.src = 'img_pollo_locco/buttons/mute-brown.ico';
        soundTouch.src = 'img_pollo_locco/buttons/mute.ico';
    }
}

/**
 * The function toggles the audioActive variable and updates the audio icon accordingly.
 */
function setAudioMode() {
    if(audioActive == true) {
        audioActive = false;
    }else {
        audioActive = true;
    }
    setAudioIcon();
}

/**
 * The function displays a game over screen with an image if the character is dead and stops the game
 * after a delay.
 */
function gameOver() {
    let end = document.getElementById('end-screen');
    let img = document.getElementById('end-screen-img');
    if (world.character.isDead()) {
        img.src = 'img_pollo_locco/9_intro_outro_screens/game_over/oh no you lost!.png';
    }
    setTimeout(() => {
        end.classList.remove('d-none');
        stopGame();
    }, 2000);
}

/**
 * The function restarts the game by reloading the current page.
 */
function restartGame() {
    location.reload();
}
