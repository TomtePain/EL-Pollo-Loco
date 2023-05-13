/* The World class manages the game world, including the player character, enemies, objects,
collisions, and rendering. */
class World {
    character = new Character();
    bigboss = new Endboss();
    backgroundSound = new Audio('audio/background.mp3');
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    statusForBottle = new Statusbar_Bottle();
    statusBarCoins = new Statusbar_Coin();
    throwableObject_bottle = [];
    collectedBottle = [];
    items = [];
    SalsaBottleCounter = 0;
    coinCounter = 0;
    contact = false;
    idle;
    friedChicken = false;
    splashedBottle = false;
    bottleOnGround = false;
    gameOver = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }


    /**
     * The function runs a set of checks at a regular interval for a game, including checking for idle
     * time, collisions, throwing objects, and background music.
     */
    run() {
        setInterval(() => {
            this.checkTimeToIdle();
            this.checkAllCollisions();
            this.alertBigBoss();
            this.checkThrowObjects();
            this.checkKilledBigBoss();
            this.checkBottleOnGround();
            this.checkBackgroundMusic();
        }, 100);
    }

    checkAllCollisions() {
        this.checkCollisions();
        this.checkCollisionBottle();
        this.checkCollisionCoins();
        this.checkBottleBigBossCollision();
        this.collisionKilledBigBoss();
        this.checkCollisionHealth();
    }

    /**
     * The function checks if the user has been idle for more than 5 seconds.
     */
    checkTimeToIdle() {
        timeForIdle = new Date().getSeconds();
        let idleTime = new Date(timeForIdle - timepassed)
        if (idleTime > 5) {
            this.idle = true;
        } else {
            this.idle = false;
        };
    }

    checkBackgroundMusic() {
        if (audioActive == true) { this.backgroundSound.play() }
        else { this.backgroundSound.pause() };
    }

    /**
     * This function checks for collisions between the game character and enemies, and performs actions
     * based on the type of collision.
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.jumpOnEnemy() && this.character.fall == true) {
                    enemy.killedChicken(enemy, i);
                    this.character.bumpUp();
                    this.dropItem(enemy);
                } else if (!this.character.isInvulnerable()) {
                    this.character.hit(10);
                    this.statusBar.setPercentage(this.character.energy);
                    this.character.isInvulnerable();
                };
            };
        });
    }

    /**
     * The function randomly drops one of three items (healthy heart, salsa bottle, or coins) when an
     * enemy is defeated in a game level.
     * @param enemy - The enemy parameter is an object representing the enemy that is defeated and will
     * drop an item.
     */
    dropItem(enemy) {
        let healthyHeart = new HealthyHeart(enemy.x + 30);
        let salsa = new SalsaBottle(enemy.x + 30, 360);
        let coins = new Coin(enemy.x + 30, 350)
        let dropList = [healthyHeart, salsa, coins];
        let drops = dropList[Math.floor(Math.random() * dropList.length)];
        if (drops == salsa) {
            this.level.salsaBottle.push(salsa);
        } else if (drops == healthyHeart) {
            this.level.healthyHeart.push(healthyHeart);
        } else {
            this.level.coin.push(coins);
        }
    }

    /**
     * The function moves the big boss character to the left if it reaches a certain point on the
     * screen.
     */
    alertBigBoss() {
        if (this.character.x + this.character.width > 2000 && this.level.bigBoss[0].life == true) {
            this.level.bigBoss[0].moveLeft();
            this.level.statusBarBigBoss[0].x = this.level.bigBoss[0].x;
            if (this.level.bigBoss[0].x <= 2000) {
                this.level.bigBoss[0].x = 2000;
                this.level.statusBarBigBoss[0].x = this.level.bigBoss[0].x;
            };
        };
    }

    collisionBigBoss() {
        this.level.bigBoss[0].speed = 0;
        if (!this.character.isInvulnerable()) {
            this.character.hit(20);
            this.character.isInvulnerable();
            this.statusBar.setPercentage(this.character.energy);
            setTimeout(() => {
                this.level.bigBoss[0].speed = 10;
            }, 1000);
        }
    }

    checkCollisionBottle() {
        this.level.salsaBottle.forEach((bottle, i) => {
            if (this.character.isColliding(bottle)) {
                if (audioActive == true) { bottle.bottle_drop_sound.play() };
                this.collectedBottle.push(bottle);
                this.SalsaBottleCounter++;
                this.setHooverEffect(this.statusForBottle);
                this.statusForBottle.setPercentage(this.SalsaBottleCounter);
                this.level.salsaBottle.splice(i, 1);
            };
        });
    }

    checkCollisionCoins() {
        this.level.coin.forEach((coins, i) => {
            if (this.character.isColliding(coins)) {
                if (audioActive == true) { coins.coin_sound.play() };
                this.coinCounter++;
                this.setHooverEffect(this.statusBarCoins);
                this.statusBarCoins.setPercentage(this.coinCounter);
                this.level.coin.splice(i, 1);
            };
        });
    }

    checkCollisionHealth() {
        this.level.healthyHeart.forEach((heart, i) => {
            if (this.character.isColliding(heart)) {
                if (audioActive == true) { heart.heal_sound.play() };
                this.character.energy += 10;
                this.setHooverEffect(this.statusBar);
                this.statusBar.setPercentage(this.character.energy);
                this.level.healthyHeart.splice(i, 1);
            };
        });
    }

    checkThrowObjects() {
        if (this.keyboard.d && this.collectedBottle != '') {
            if (keypress == false) {
                let newbottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObject_bottle.push(newbottle);
                this.collectedBottle.splice(0, 1);
                if (this.SalsaBottleCounter < 0) {
                    this.SalsaBottleCounter = 0;
                } else {
                    this.SalsaBottleCounter--;
                    this.statusForBottle.setPercentage(this.SalsaBottleCounter);
                };
                keypress = true;
            };
        };
    }

    checkBottleBigBossCollision() {
        this.throwableObject_bottle.forEach((bottle, i) => {
            if (this.level.bigBoss[0].isColliding(bottle) && this.contact == false) {
                this.contact = true;
                if (audioActive == true) { bottle.bottle_bigboss_sound.play() };
                this.level.bigBoss[0].hit(20);
                if (audioActive == true) { this.level.bigBoss[0].chicken_sound.play() }
                this.level.bigBoss[0].isHurt();
                bottle.animate();
                bottle.speedY = 0;
                if (this.level.bigBoss[0].energy > 0) { this.level.statusBarBigBoss[0].setPercentage(this.level.bigBoss[0].energy) };
                setTimeout(() => {
                    this.throwableObject_bottle.splice(i, 1);
                    this.contact = false;
                }, 150);
            }
        })
    }

    checkBottleOnGround() {
        this.throwableObject_bottle.forEach((bottle, i) => {
            if (bottle.y >= 360) { this.bottleOnGround = true }
            else { this.bottleOnGround = false };
            if (this.character.x >= bottle.x) { this.throwableObject_bottle.splice(i, 1) };
        })
    }


    checkKilledBigBoss() {
        if (this.level.bigBoss[0].energy <= 0) {
            this.level.bigBoss[0].isDead();
        }
    }

    collisionKilledBigBoss() {
        if (this.character.isCollidingFriedBigBoss(this.level.bigBoss[0]) && this.level.bigBoss[0].isDead()) {
            if (audioActive == true) { this.level.bigBoss[0].end_bigboss_sound.play() };
            this.friedChicken = true;
            this.level.bigBoss[0].life = false;
            this.character.energy = 100;
            this.statusBar.setPercentage(this.character.energy);
        }
    }

    /**
     * The function increases the height and width of a given status bar element by 10 and then
     * decreases it back to its original size after 300 milliseconds.
     * @param statusbar - The statusbar parameter is an object that represents the status bar element
     * in the user interface. The function setHooverEffect() is designed to add a hover effect to the
     * status bar by increasing its height and width by 10 pixels and then decreasing it back to its
     * original size after 300 milliseconds.
     */
    setHooverEffect(statusbar) {
        statusbar.height += 10;
        statusbar.width += 10;
        setTimeout(() => {
            statusbar.height -= 10;
            statusbar.width -= 10;
        }, 300)
    }


    /**
     * The function clears the canvas, translates the camera, renders objects, and requests animation
     * frames for continuous drawing.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.renderEssentialObjectsToMap();
        this.addFixedObjectstoMap();
        this.addsMovableObjectsToMap();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * The function adds multiple objects to a map.
     * @param objects - an array of objects that need to be added to a map. The function iterates
     * through each object in the array and calls the `addToMap` method to add it to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    /**
     * The function adds a movable object to a map and flips its image if necessary.
     * @param MovableObject - MovableObject is an object that represents a movable entity in the code.
     * It could be a character, a vehicle, or any other object that can move around in the game or
     * application. The function `addToMap` takes this object as a parameter and performs some
     * operations on it, such as flipping
     */
    addToMap(MovableObject) {
        if (MovableObject.otherDirection) {
            this.flipImage(MovableObject);
        }

        MovableObject.draw(this.ctx);

        if (MovableObject.otherDirection) {
            this.flipImageBack(MovableObject);
        }
    }

    renderEssentialObjectsToMap() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
    }

    addFixedObjectstoMap() {
        this.ctx.translate(-this.camera_x, 0); // Back
        // --- Space for fixed objects
        this.addToMap(this.statusBar);
        this.addToMap(this.statusForBottle);
        this.addToMap(this.statusBarCoins);

        this.ctx.translate(this.camera_x, 0); // Forwards
    }

    addsMovableObjectsToMap() {
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bigBoss);
        this.addObjectsToMap(this.level.salsaBottle);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.throwableObject_bottle);
        this.addObjectsToMap(this.level.statusBarBigBoss);
        this.addObjectsToMap(this.level.healthyHeart);
    }

    /**
     * The flipImage function flips an image horizontally and updates its position.
     * @param MovableObject - MovableObject is an object that has properties such as width and x, and
     * is being passed as a parameter to the flipImage function. The function uses the canvas context
     * (this.ctx) to flip the image horizontally by translating it to the right edge of the canvas and
     * then scaling it by -1
     */
    flipImage(MovableObject) {
        this.ctx.save();
        this.ctx.translate(MovableObject.width, 0);
        this.ctx.scale(-1, 1);
        MovableObject.x = MovableObject.x * -1;
    }

    /**
     * The function flips an image back horizontally and restores the canvas context.
     * @param MovableObject - MovableObject is an object that has an x property representing its
     * horizontal position on the canvas. The flipImageBack function takes this object as a parameter
     * and flips it horizontally by multiplying its x value by -1. It also restores the canvas context
     * to its previous state.
     */
    flipImageBack(MovableObject) {
        MovableObject.x = MovableObject.x * -1;
        this.ctx.restore();
    }
}