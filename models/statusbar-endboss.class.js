class Statusbar_Endboss extends MovableObject {

    width = 150;
    height = 40;
    y = 5;
    speed = 10;

    Images_Health = [
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img_pollo_locco/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img_pollo_locco/7_statusbars/2_statusbar_endboss/orange.png',
    ];

    percentage = 100;

    constructor(x, y) {
        super().loadImg('img_pollo_locco/7_statusbars/2_statusbar_endboss/orange.png');
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 150;
        this.loadImages(this.Images_Health);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.Images_Health[this.resolveImageIndex()];
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