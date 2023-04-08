class Statusbar extends MovableObject {
    
    width = 100;
    height = 25;

    constructor(imagePath, y) {
        super().loadImg(imagePath, y);    
        this.y = y;
    }

    
}