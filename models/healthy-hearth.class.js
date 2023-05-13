/* The HealthyHeart class extends the MovableObject class and represents a health icon with a heal
sound. */
class HealthyHeart extends MovableObject {

heal_sound = new Audio('audio/heal.mp3');

    constructor(x) {
        super().loadImg('img_pollo_locco/7_statusbars/3_icons/icon_health.png');
        this.x = x;
        this.y = 360;
        this.height = 75;
        this.width = 75;
    }
}