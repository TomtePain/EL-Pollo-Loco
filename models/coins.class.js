class Coin extends MovableObject {

    Images_coins = [
        'img_pollo_locco/8_coin/coin_1.png',
        'img_pollo_locco/8_coin/coin_2.png',
    ]

    coin_sound = new Audio('audio/coin.mp3');

    constructor(x, y) {
        super().loadImg('img_pollo_locco/8_coin/coin_1.png');
        this.loadImages(this.Images_coins);
        this.x = x;
        this.y = y;
        this.animate();
        this.height = 100;
        this.width = 100;
    }

    animate() {
        setInterval(() => {
            this.playAnimations(this.Images_coins);
        }, 350);
    }
}