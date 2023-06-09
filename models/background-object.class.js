/* The BackgroundObject class extends the MovableObject class and creates a background object with a
specified image path and x-coordinate. */
class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
    
    constructor(imagePath, x) {
        super().loadImg(imagePath, x)
        this.x = x;
        this.y = 480 - this.height;
    }
} 