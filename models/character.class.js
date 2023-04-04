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

    constructor() {
        super().loadImg('img_pollo_locco/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.Images_Walking);

        this.animate();

    }

    animate() {

        setInterval(() => {
            this.speed = 2,5;
            if(this.world.keyboard.right) {
                this.x += this.speed;
            }

            if(this.world.keyboard.left) {
                this.x -= this.speed;
            }
        }, 1000 / 60);


        setInterval(() => {

            if(this.world.keyboard.right || this.world.keyboard.left) {
            
            let i = this.currentImage % this.Images_Walking.length;
            let path = this.Images_Walking[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            
            }
        }, 100);
    
    }

    jump() {

    }


}