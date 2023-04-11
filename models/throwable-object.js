class ThrowableObject extends MovableObject {

    constructor() {
        super().loadImg('img_pollo_locco/6_salsa_bottle/salsa_bottle.png');
        this.x = 100;
        this.y = 100;
        this.height = 75;
        this.width = 75;
        this.throw(100, 150)
    }

    throw(x ,y) {
        this.x = x;
        this.y = y;
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}