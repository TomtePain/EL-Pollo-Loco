class Statusbar_Coin extends DrawableObject {


    width = 150;
    height = 40;

    Images_Coins = [
        'img_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'img_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'img_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'img_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'img_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'img_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'
    ]

    constructor() {
        super();
        this.loadImages(this.Images_Coins);
        this.x = 50;
        this.y = 90;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.Images_Coins[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
        if(this.percentage > 50) {
            this.loadImg(`img_pollo_locco/7_statusbars/1_statusbar/1_statusbar_coin/orange/coin/${this.percentage}.png`)
        }
    }

    resolveImageIndex() {
        if(this.percentage == 50) {
            return 5;
        } else if (this.percentage >= 40) {
            return 4;
        } else if (this.percentage >= 30) {
            return 3;
        } else if (this.percentage >= 20) {
            return 2;
        } else if (this.percentage >= 10) {
            return 1;
        } else {
            return 0;
        }
    }


}