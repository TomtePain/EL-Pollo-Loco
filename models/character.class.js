class Character extends MovableObject {
    y = 115;
    height = 320;
    speed = 0.25;
    

    Images_Walking = [
        'img_pollo_locco/2_character_pepe/2_walk/W-21.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-22.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-23.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-24.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-25.png',
        'img_pollo_locco/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    walking_sound = new Audio('audio/running.mp3');

    constructor() {
        super().loadImg('img_pollo_locco/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.Images_Walking);

        this.animate();

    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            this.speed = 2,5;
            if(this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.x += this.speed +5;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if(this.world.keyboard.left && this.x > 0) {
                this.speed = 7,5;
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {

            if(this.world.keyboard.right || this.world.keyboard.left) {
            this.playAnimations();
            }
        }, 100);
    
    }

    jump() {

    }


}