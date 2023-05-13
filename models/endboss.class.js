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

    end_bigboss_sound = new Audio('audio/holy.mp3');
    chicken_sound = new Audio('audio/chicken.mp3');
    scream_sound = new Audio('audio/bigboss.mp3');

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
        this.moveAnimationBigBoss();
    }

    moveAnimationBigBoss() {
        setInterval(() => {
            if (gameLoaded == true) {
                if (world.character.x + world.character.width > 2000) { this.animationRequestOnWalk(); }
                else if (this.isDead()) { this.animationIsDead(); }
                else if (this.isHurt()) { this.playAnimations(this.Images_Hurt); }
                else if (this.isColliding(world.character)) {
                    this.playAnimations(this.Images_Attack);
                    world.collisionBigBoss();
                } else { this.playAnimations(this.Images_Alert); }
            }
        }, 200);
    }

    animationIsDead() {
        this.life = false;
        setTimeout(() => {
            if (this.Images_Dead[2]) {
                this.loadImg(this.Images_Dead[2]);
                world.level.statusBarBigBoss.splice(0, 1);
                this.friedChicken();
            } else {
                this.playAnimations(this.Images_Dead);
            }
        }, 100)
    }

    animationRequestOnWalk() {
        if (this.isDead()) {
            this.animationIsDead();
            this.speed = 0;
        } else if (this.isHurt()) {
            this.playAnimations(this.Images_Hurt);
        } else if (this.isColliding(world.character)) {
            this.playAnimations(this.Images_Attack);
            world.collisionBigBoss();
        } else {
            this.playAnimations(this.Images_Walking)
        }
    }

    friedChicken() {
        if (world.friedChicken == true) {
            this.y = 150;
            this.x = world.character.x + 20;
        } else {
            setTimeout(() => {
                this.width = 80;
                this.height = 80;
                this.y = 350;
            }, 100);
        }
    }



}