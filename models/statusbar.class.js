/* The Statusbar class is a DrawableObject that displays a health bar with different images based on
the percentage of health remaining. */
class Statusbar extends DrawableObject {

    width = 150;
    height = 40;

    Images_Health = [
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/110.png'
    ]

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.Images_Health);
        this.x = 50;
        this.y = 10;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.Images_Health[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
        if(this.percentage > 100) {
            this.loadImg(`img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/green/${this.percentage}.png`)
        }
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
} 