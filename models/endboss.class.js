class Endboss extends MovableObject {
    height = 450;
    width = 400;
    y = 15;

    Images_Walking = [
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G5.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G6.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G7.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G8.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G9.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G10.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G11.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    constructor() {
        super().loadImg('img_pollo_locco/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.Images_Walking);
        this.x = 2425;
        this.animate();
    }

        animate() {
            setInterval(() => {
                this.playAnimations(this.Images_Walking);
            }, 200);
        }
    
        
}