class Chicken extends MovableObject {
    y = 292;

    constructor() {
        super().loadImg('img_pollo_locco/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = Math.random() * 500 + 200;
    }
}