class Character extends MovableObject {
    y = 115;
    height = 320;
    speed = 5;


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
    ]


    world;
    walking_sound = new Audio('audio/running.mp3');

    constructor() {
        super().loadImg('img_pollo_locco/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Jumping);
        this.applyGravity();
        this.animate();

    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
                this.otherDirection = false;
            }

            if (this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.walking_sound.play();
                this.otherDirection = true;
            }

            if (this.world.keyboard.up && !this.isAboveGround() || this.world.keyboard.space && !this.isAboveGround()) {
                    this.jump();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {

            if (this.isAboveGround()) {
                this.playAnimations(this.Images_Jumping);
            } else {
                if (this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimations(this.Images_Walking);
                }
            }
        }, 100);

    }


}