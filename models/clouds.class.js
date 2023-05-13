/* The Clouds class creates a movable object that animates by moving left at a constant speed. */
class Clouds extends MovableObject {
    y = 25;
    width = 500;
    height = 250;
    x = Math.random() * 2500 + 100;
    
    constructor(imagePath) {
        super().loadImg(imagePath);
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}

