class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    energy = 100;
    lastHit = 0;
    contact = false;
    life = true;

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
            }
        }, 1000 / 60)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
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
        this.speedY = 15; // 10
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

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    killedChicken(enemy , i) {
        this.life = false;
        setInterval(() => {
            enemy.loadImg('img_pollo_locco/3_enemies_chicken/chicken_normal/2_dead/dead.png');
        }, 1);
        this.speed = 0;
        setTimeout(() => {
               world.level.enemies.splice(i, 1);
             }, 1000);
    }


    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }
}