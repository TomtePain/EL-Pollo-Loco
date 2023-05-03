class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    energy = 100;
    lastHit = 0;
    contact = false;
    life = true;
    fall = false;
    moving = true;
    ground = 115;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }





    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                this.fall = true;
                if (this.y == 115) {
                    this.fall = false;
                }
            }
        }, 1000 / 60);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return (true,
                this.y < 400)
        } else {
            return this.y < 115;
        }
    }


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }


    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        if (this.moving == true) {
            this.speedY = 15; // 10
        }
    }

    bumpUp() {
        this.speedY = 10;
    }

    isColliding(MovableObject) {
        return (
            (MovableObject.life) &&
            this.isCollidingRight(MovableObject) &&
            this.isCollidingLeft(MovableObject) &&
            this.isCollidingBottom(MovableObject) &&
            this.isCollidingTop(MovableObject)
        );
    }

    isCollidingFriedBigBoss(MovableObject) {
        return this.x + this.width > MovableObject.x &&
            this.y + this.height > MovableObject.y &&
            this.x < MovableObject.x &&
            this.y < MovableObject.y + MovableObject.height
    }

    isCollidingRight(MovableObject) {
        return (
            this.x + this.width - this.offset.right + this.offset.left >= MovableObject.x + MovableObject.offset.left
        )
    }

    isCollidingLeft(MovableObject) {
        return (
            this.x + this.offset.left < MovableObject.x + MovableObject.width - MovableObject.offset.right
        )
    }

    isCollidingBottom(MovableObject) {
        return (
            this.y + this.height + this.offset.bottom / 2 > MovableObject.y + MovableObject.offset.top
        );
    }

    isCollidingTop(MovableObject) {
        return (
            this.y + this.offset.top < MovableObject.y + MovableObject.height - MovableObject.offset.bottom
        )
    }

    jumpOnEnemy() {
        return this.y - this.ground < 0 && this.speedY < 0;
    }

    hit(value) {
        this.energy -= value;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    killedChicken(enemy, i) {
        this.life = false;
        setInterval(() => {
            enemy.loadImg('img_pollo_locco/3_enemies_chicken/chicken_normal/2_dead/dead.png');
        }, 1);
        this.speed = 0;
        enemy.chicken_sound.play();
        setTimeout(() => {
            world.level.enemies.splice(i, 1);
        }, 500);
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepass = new Date().getTime() - this.lastHit;
        timepass = timepass / 1000;
        return timepass < 0.5;
    }

    // Work in Progress
    dropItem(enemy, i) {
        if(enemy.life == false) {
            healthyHeart = new HealthyHeart(enemy.x)
            world.item.push(healthyHeart);
        }
    }
}