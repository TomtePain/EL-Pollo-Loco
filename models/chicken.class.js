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
    

    constructor() {
        super().loadImg('img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        
        this.x = Math.random() * 500 + 200;
        this.speed = Math.random() * 0.25 + 0.15;
        this.loadImages(this.Images_Walking);
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.Images_Walking.length;
            let path = this.Images_Walking[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 200);

       this.moveLeft();
    }
}