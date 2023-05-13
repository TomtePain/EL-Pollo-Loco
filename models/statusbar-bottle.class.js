/* The Statusbar_Bottle class is a DrawableObject that represents a bottle-shaped status bar with
different images based on the percentage filled. */
class Statusbar_Bottle extends DrawableObject {
    width = 150;
    height = 40;

    Images_Bottle = [
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ]

    percentage = 0;
    
    constructor() {
        super();
        this.loadImages(this.Images_Bottle);
        this.x = 50;
        this.y = 50;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.Images_Bottle[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
        if(this.percentage > 5) {
            this.loadImg(`img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/orange/bottl/${this.percentage}.png`)
        }
    }

    resolveImageIndex() {
        if(this.percentage == 5) {
            return 5;
        } else if (this.percentage >= 4) {
            return 4;
        } else if (this.percentage >= 3) {
            return 3;
        } else if (this.percentage >= 2) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}