/* The MovableObject class defines properties and methods for objects that can move and interact with
other objects in a game. */
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

    /**
     * The function applies gravity to an object's vertical movement.
     */
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

    /**
     * The function checks if an object is above ground level.
     * @returns If the object is an instance of ThrowableObject, the function is returning a tuple with
     * two values: true and a boolean indicating whether the y coordinate is less than 400. If the
     * object is not an instance of ThrowableObject, the function is returning a boolean indicating
     * whether the y coordinate is less than 115.
     */
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


    /**
     * The function plays a sequence of animations by cycling through a given array of images.
     * @param images - The parameter "images" is an array of strings that represent the file paths of
     * the images to be animated.
     */
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
        if(this instanceof Character) {
            if(audioActive == true) this.hit_sound.play();
        }
    }

    /**
     * The function kills a chicken enemy in a game and removes it from the level after a set amount of
     * time.
     * @param enemy - The enemy object that the function is acting upon.
     * @param i - The index of the enemy in the array of enemies in the current level.
     */
    killedChicken(enemy, i) {
        this.life = false;
        setInterval(() => {
            if (this instanceof Chicken) {
                enemy.loadImg('img_pollo_locco/3_enemies_chicken/chicken_normal/2_dead/dead.png');
            } else {
                enemy.loadImg('img_pollo_locco/3_enemies_chicken/chicken_small/2_dead/dead.png')
            }
        }, 1);
        this.speed = 0;
        if(audioActive == true){enemy.chicken_sound.play()};
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

    /**
     * The function checks if the object is invulnerable by calculating the time passed since the last
     * hit and returning true if it's less than one second.
     * @returns The function is checking if the time passed since the last hit is less than 1 second
     * and returning a boolean value of true if the player is invulnerable (i.e. if less than 1 second
     * has passed since the last hit) and false if the player is vulnerable (i.e. if more than 1 second
     * has passed since the last hit).
     */
    isInvulnerable() {
        let timepass = new Date().getTime() - this.lastHit;
        timepass = timepass / 1000;
        return timepass < 1;
    }

}