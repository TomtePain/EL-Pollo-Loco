class LittleChicken extends MovableObject {
    y = 370;
    height = 60;
    width = 60;
    speed = 0.8;

    Images_Walking = [
        'img_pollo_locco/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img_pollo_locco/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img_pollo_locco/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    Images_Dead = [
        'img_pollo_locco/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    chicken_sound = new Audio('audio/little-chicken.mp3');

    constructor() {
        super();        
        this.x = Math.random() * 1500 + 500;
        this.speed = Math.random() * 0.2 + 0.35;
        this.loadImages(this.Images_Walking);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimations(this.Images_Walking);
        }, 200);

    }
}