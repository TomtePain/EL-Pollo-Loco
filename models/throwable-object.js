class ThrowableObject extends MovableObject {
    // splashedBottle = false;

    Images_Splashed = [
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    Images_Rotation = [
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img_pollo_locco/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    constructor(x, y) {
        super().loadImg('img_pollo_locco/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.Images_Splashed);
        this.loadImages(this.Images_Rotation);
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
        this.throw();
        this.animate();
    }

    throw() {
        world.bottleOnGround = false;
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            if(world.splashedBottle == false) {
                this.playAnimations(this.Images_Rotation);
            }
            this.x += 8;
            if(this.y >= 360) {
                world.bottleOnGround = true;
                this.loadImg(this.Images_Splashed[4])
                this.x -= 8;
            } else {
                world.bottleOnGround = false;
            };
        }, 30);
    }

    animate() {
        if (world.splashedBottle == true) {
                setInterval(() => {
                    this.playAnimations(this.Images_Splashed);
                },50);
            } 
        } 
    
}