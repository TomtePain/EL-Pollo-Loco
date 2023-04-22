class ThrowableObject extends MovableObject {
    splashedBottle = false;

    Images_Splashed = [
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]

    constructor(x, y) {
        super().loadImg('img_pollo_locco/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.Images_Splashed);
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
        this.throw();
        this.animate();
    }

    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    animate() {
        if (this.splashedBottle == true) {
                setInterval(() => {
                    this.playAnimations(this.Images_Splashed);
                },50);
            }
        }
    
}