/* The Character class defines a movable game character with various animations and movement methods. */
class Character extends MovableObject {
    y = 115;
    height = 320;
    speed = 5;
    ground = 115;

    offset = {
        top: 150,
        left: 20,
        right: 50,
        bottom: 165
    }

    Images_Idle = [
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-1.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-2.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-3.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-4.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-5.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-6.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-7.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-8.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-9.png',
        'img_pollo_locco/2_character_pepe/1_idle/idle/I-10.png'
    ]

    Images_Sleep = [
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-11.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-12.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-13.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-14.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-15.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-16.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-17.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-18.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-19.png',
        'img_pollo_locco/2_character_pepe/1_idle/long_idle/I-20.png'
    ]

    Images_Walking = [
        'img_pollo_locco/2_character_pepe/2_walk/W-21.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-22.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-23.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-24.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-25.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-26.png'
    ];

    Images_Jumping = [
        'img_pollo_locco/2_character_pepe/3_jump/J-31.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-32.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-33.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-34.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-35.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-36.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-37.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-38.png',
        'img_pollo_locco/2_character_pepe/3_jump/J-39.png'
    ];

    Images_Hurt = [
        'img_pollo_locco/2_character_pepe/4_hurt/H-41.png',
        'img_pollo_locco/2_character_pepe/4_hurt/H-42.png',
        'img_pollo_locco/2_character_pepe/4_hurt/H-43.png'
    ]

    Images_Dead = [
        'img_pollo_locco/2_character_pepe/5_dead/D-51.png',
        'img_pollo_locco/2_character_pepe/5_dead/D-52.png',
        'img_pollo_locco/2_character_pepe/5_dead/D-53.png',
        'img_pollo_locco/2_character_pepe/5_dead/D-54.png',
        'img_pollo_locco/2_character_pepe/5_dead/D-55.png',
        'img_pollo_locco/2_character_pepe/5_dead/D-56.png',
        'img_pollo_locco/2_character_pepe/5_dead/D-57.png'
    ];

    world;
    walking_sound = new Audio('audio/running.mp3');
    hit_sound = new Audio('audio/hit.mp3');

    constructor() {
        super().loadImg('img_pollo_locco/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.Images_Idle);
        this.loadImages(this.Images_Sleep);
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Jumping);
        this.loadImages(this.Images_Hurt);
        this.loadImages(this.Images_Dead);
        this.applyGravity();
        this.animate();
    }

    animate() {
        this.movingCharacter();
        this.movingCharacterAnimations();
        this.idleCharacterAnimations();
    }

    isIdle() {
        return this.world.idle == true
    }

    /**
     * This function moves an object to the right if the right arrow key is pressed and the object is
     * not at the end of the level.
     */
    moveRight() {
        if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
            if (this.moving == true) {
                super.moveRight();
                if (audioActive == true) { this.walking_sound.play() };
                this.otherDirection = false;
            }
        }
    }

    /**
     * The function moves an object to the left if the left arrow key is pressed and the object is not
     * at the left edge of the screen.
     */
    moveLeft() {
        if (this.world.keyboard.left && this.x > 0) {
            if (this.moving == true) {
                super.moveLeft();
                if (audioActive == true) { this.walking_sound.play() };
                this.otherDirection = true;
            }
        }
    }

    /**
     * The function checks if the up arrow or spacebar is pressed and the character is not already in
     * the air, and if so, it calls the jump function.
     */
    jump() {
        if (this.world.keyboard.up && !this.isAboveGround() || this.world.keyboard.space && !this.isAboveGround()) {
            if (this.moving == true) {
                super.jump();
            }
        }
    }

    /**
     * The function continuously moves a character in a game while also adjusting the camera position.
     * @returns A setInterval function that calls several methods (moveRight, moveLeft, jump) and
     * updates the camera position every 1/60th of a second.
     */
    movingCharacter() {
        return (
            setInterval(() => {
                this.walking_sound.pause();
                this.moveRight();
                this.moveLeft();
                this.jump();
                this.world.camera_x = -this.x + 100;
            }, 1000 / 60)
        )
    }

    /**
     * The function handles the animations of a character based on its state and keyboard input.
     * @returns A setInterval function that checks the character's state and plays the appropriate
     * animation based on that state.
     */
    movingCharacterAnimations() {
        return (
            setInterval(() => {
                if (this.isDead()) {
                    this.playAnimations(this.Images_Dead);
                    this.y += 50;
                    gameOver();
                } else if (this.isHurt()) {
                    this.playAnimations(this.Images_Hurt);
                } else if (this.isAboveGround()) {
                    this.playAnimations(this.Images_Jumping);
                } else {
                    if (this.world.keyboard.right || this.world.keyboard.left) {
                        if (this.moving == true) this.playAnimations(this.Images_Walking);
                    }
                }
            }, 100)
        )
    }

    /**
     * This function controls the idle animations of a character in a game based on keyboard inputs and
     * game conditions.
     * @returns A setInterval function is being returned.
     */
    idleCharacterAnimations() {
        return (
            setInterval(() => {
                if (!this.isDead() || !this.isHurt() || !this.isAboveGround()) {
                    if (this.world.keyboard.right || this.world.keyboard.left) { return false }
                    else if (this.world.friedChicken) {
                        this.loadImg(this.Images_Jumping[3]);
                        this.moving = false;
                        gameOver();
                    } else if (this.isIdle()) {
                        this.playAnimations(this.Images_Sleep);
                    } else { this.playAnimations(this.Images_Idle) }
                }
            }, 200)
        )
    }
}
