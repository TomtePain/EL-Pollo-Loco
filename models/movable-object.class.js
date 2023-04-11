class MovableObject extends DrawableObject {

    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.5;
    energy = 100;
    lastHit = 0;
    

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60)
    }

    isAboveGround() {
        return this.y < 115;
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
        this.speedY = 10;
    }

    //Bessere Formel zur Kollisionsberechnung (Genauer)
    // isColliding(MovableObject) {
    //     return (this.x + this.width) >= MovableObject.x && this.x <= (MovableObject.x + MovableObject.width) &&
    //         (this.y + this.offsetY + this.height) >= MovableObject.y &&
    //         (this.y + this.offsetY) <= (MovableObject.y + MovableObject.height) &&
    //             MovableObject.onCollisionCourse;
    //     // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    // }

    isColliding(MovableObject) {
        return this.x + this.width > MovableObject.x &&
        this.y + this.height > MovableObject.y &&
        this.x < MovableObject.x &&
        this.y < MovableObject.y + MovableObject.height
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