class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    energy = 100;
    lastHit = 0;

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
        if(this instanceof ThrowableObject){ // ThrowableObjects should always fall
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

    // isColliding(MovableObject) {
    //     return this.x + this.width > MovableObject.x &&
    //     this.y + this.height > MovableObject.y &&
    //     this.x < MovableObject.x &&
    //     this.y < MovableObject.y + MovableObject.height
    // }

    // isColliding(MovableObject) { // Mihaiversion
    //     return (
    //     this.x + this.width + this.offset.right > MovableObject.x + MovableObject.offset.left &&
    //     this.y + this.height - this.offset.bottom > MovableObject.y + MovableObject.offset.top &&
    //     this.x + this.offset.left < MovableObject.x + MovableObject.width - MovableObject.offset.right &&
    //     this.y + this.offset.top < MovableObject.y + MovableObject.height - MovableObject.offset.bottom);
    // }

    isColliding(MovableObject) {
        return this.isCollidingRight(MovableObject) &&
        this.isCollidingLeft(MovableObject) &&
        this.isCollidingBottom(MovableObject) &&
        this.isCollidingTop(MovableObject)

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
        )
    }

    isCollidingTop(MovableObject) {
        return ( 
            this.y + this.offset.top < MovableObject.y + MovableObject.height - MovableObject.offset.bottom
        )
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
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