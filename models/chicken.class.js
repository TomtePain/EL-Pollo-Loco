class Chicken extends MovableObject {
    y = 350;
    height = 80;
    width = 80;
    speed = 0.2;
    Images_Walking = [
        'img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    Images_Dead = [
        'img_pollo_locco/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    chicken_sound = new Audio('audio/chicken.mp3');
    

    constructor() {
        super().loadImg('img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        
        this.x = Math.random() * 1500 + 500;
        this.speed = Math.random() * 0.25 + 0.15;
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