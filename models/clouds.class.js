class Clouds extends MovableObject {
    y = 25;
    width = 500;
    height = 250;
    x = Math.random() * 500;

    constructor(imagePath) {
        super().loadImg(imagePath);
    }
}

