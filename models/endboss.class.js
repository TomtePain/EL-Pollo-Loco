class Endboss extends MovableObject {
    height = 450;
    width = 400;
    y = 15;
    speed = 10;

    offset = {
        top: 0,
        left: 40,
        right: 100,
        bottom: 0
    }

    Images_Alert = [
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G5.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G6.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G7.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G8.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G9.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G10.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G11.png',
        'img_pollo_locco/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    Images_Walking = [
        'img_pollo_locco/4_enemie_boss_chicken/1_walk/G1.png',
        'img_pollo_locco/4_enemie_boss_chicken/1_walk/G2.png',
        'img_pollo_locco/4_enemie_boss_chicken/1_walk/G3.png',
        'img_pollo_locco/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    Images_Attack = [
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G13.png',
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G14.png',
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G15.png',
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G16.png',
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G17.png',
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G18.png',
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G19.png',
        'img_pollo_locco/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    Images_Hurt = [
        'img_pollo_locco/4_enemie_boss_chicken/4_hurt/G21.png',
        'img_pollo_locco/4_enemie_boss_chicken/4_hurt/G22.png',
        'img_pollo_locco/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    Images_Dead = [
        'img_pollo_locco/4_enemie_boss_chicken/5_dead/G24.png',
        'img_pollo_locco/4_enemie_boss_chicken/5_dead/G25.png',
        'img_pollo_locco/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super().loadImg('img_pollo_locco/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.Images_Alert);
        this.loadImages(this.Images_Walking);
        this.loadImages(this.Images_Hurt);
        this.loadImages(this.Images_Dead);
        this.loadImages(this.Images_Attack);
        this.x = 2425;
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (world.character.x + world.character.width > 2000) {
                if (this.isDead()) {
                    this.animationIsDead();
                    this.speed = 0;
                } else if (this.isHurt()) {
                    this.playAnimations(this.Images_Hurt);
                }else if(this.isColliding(world.character)) {
                    console.log('treffer')
                    this.playAnimations(this.Images_Attack)
                }else{
                    this.playAnimations(this.Images_Walking)
                }
            } else if (this.isDead()) {
                this.animationIsDead();
            }else if (this.isHurt()) {
                this.playAnimations(this.Images_Hurt);
            }else if(this.isColliding(world.character)) {
                console.log('treffer')
                this.playAnimations(this.Images_Attack);
            } else {
                this.playAnimations(this.Images_Alert);
            }
        }, 200);



    }

    animationIsDead() {
        setTimeout(() => {
            if(this.Images_Dead[2]){
                this.loadImg(this.Images_Dead[2])
            } else{
                this.playAnimations(this.Images_Dead);
            }            
        }, 100)
    }



}