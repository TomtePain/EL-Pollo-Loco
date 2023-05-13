/* The SalsaBottle class extends the MovableObject class and represents a salsa bottle object with a
specific image and dimensions. */
class SalsaBottle extends MovableObject{

bottle_drop_sound = new Audio('audio/bottle-drop.mp3')

    constructor(x, y) {
        super().loadImg('img_pollo_locco/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
    }
}