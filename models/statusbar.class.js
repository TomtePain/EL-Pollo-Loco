class Statusbar extends MovableObject {
    
    width = 100;
    height = 25;
    statusbar;
    constructor(imagePath, x, y) {
        super().loadImg(imagePath, x, y);    
        this.y = y;
        this.x = x;
    }
} 