class Statusbar_Bottle extends DrawableObject {

    width = 140;
    height = 40;

    Images_Bottle = [
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img_pollo_locco/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ]

    constructor() {
        super();
        this.loadImages(this.Images_Bottle);
        this.x = 50;
        this.y = 50;
        this.setPercentage(0);
    }

    percentage = 100;


    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.Images_Bottle[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }

    resolveImageIndex() {
        if(this.percentage == 100) {
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