class World {
    character = new Character();
    bigboss = new Endboss();
    // canvas.requestFullscreen;
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
    SalsaBottleCounter = 0;
    coinCounter = 0;
    contact = false;
    idle;
    friedChicken = false;
    splashedBottle = false;
    bottleOnGround = false;

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


    run() {
        setInterval(() => {
            this.checkTimeToIdle();
            this.checkCollisions();
            this.alertBigBoss();
            this.checkThrowObjects();
            this.checkCollisionBottle();
            this.checkCollisionCoins();
            this.checkBottleBigBossCollision();
            this.checkKilledBigBoss();
            this.collisionKilledBigBoss();
            this.checkBottleOnGround();
        }, 100);
    }

    checkTimeToIdle() {
        timeForIdle = new Date().getSeconds();
        let idleTime = new Date(timeForIdle - timepassed)
        if (idleTime > 5) {
            this.idle = true;
        } else {
            this.idle = false;
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.jumpOnEnemy() && this.character.fall == true) {
                    enemy.killedChicken(enemy, i);
                    this.character.bumpUp();
                } else {
                    this.character.hit(5);
                    this.statusBar.setPercentage(this.character.energy)
                }
            }
        });
    }

    alertBigBoss() {
        if (this.character.x + this.character.width > 2000 && this.level.bigBoss[0].life == true) {
            this.level.bigBoss[0].moveLeft();
            this.level.statusBarBigBoss[0].x = this.level.bigBoss[0].x;
            if (this.level.bigBoss[0].x <= 2000) {
                this.level.bigBoss[0].x = 2000;
                this.level.statusBarBigBoss[0].x = this.level.bigBoss[0].x;
            }
        }
    }


    collisionBigBoss() {
        this.level.bigBoss[0].speed = 0;
        world.character.hit(10);
        world.statusBar.setPercentage(this.character.energy);
        setTimeout(() => {
            this.level.bigBoss[0].speed = 10;
        }, 1000);
    }


    checkCollisionBottle() {
        this.level.salsaBottle.forEach((bottle, i) => {
            if (this.character.isColliding(bottle)) {
                this.collectedBottle.push(bottle);
                this.SalsaBottleCounter++;
                this.statusForBottle.setPercentage(this.SalsaBottleCounter);
                this.level.salsaBottle.splice(i, 1);
            }
        })
    }

    checkCollisionCoins() {
        this.level.coin.forEach((coins, i) => {
            if (this.character.isColliding(coins)) {
                this.coinCounter++;
                this.statusBarCoins.setPercentage(this.coinCounter);
                this.level.coin.splice(i, 1);
            }
        })
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
                }
                keypress = true;
            }
        }
    }

    checkBottleBigBossCollision() {
        this.throwableObject_bottle.forEach((bottle, i) => {
            if (this.level.bigBoss[0].isColliding(bottle) && this.contact == false) {
                this.contact = true;
                bottle.splashedBottle = true;
                this.level.bigBoss[0].hit(20);
                this.level.bigBoss[0].isHurt();
                bottle.animate();
                bottle.speedY = 0;
                if (this.level.bigBoss[0].energy > 0) {
                    this.level.statusBarBigBoss[0].setPercentage(this.level.bigBoss[0].energy);
                }

                setTimeout(() => {
                    this.throwableObject_bottle.splice(i, 1);
                    this.contact = false;
                }, 150);
            }
            
            // this.level.statusBarBigBoss[0].setPercentage(this.level.bigBoss[0].energy);
        })
    }

    checkBottleOnGround() {
        this.throwableObject_bottle.forEach((bottle) => {
            if(bottle.y >= 360) {
                this.bottleOnGround = true;
            } else {
                this.bottleOnGround = false;
            };
        })
    }

    checkKilledBigBoss() {
        if (this.level.bigBoss[0].energy <= 0) {
            this.level.bigBoss[0].isDead();
        }
    }

    collisionKilledBigBoss() {
        if (this.character.isCollidingFriedBigBoss(this.level.bigBoss[0]) && this.level.bigBoss[0].isDead()) {
            this.friedChicken = true;
            this.character.energy = 100;
            this.statusBar.setPercentage(this.character.energy);
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); // Back
        // --- Space for fixed objects
        this.addToMap(this.statusBar);
        this.addToMap(this.statusForBottle);
        this.addToMap(this.statusBarCoins);

        this.ctx.translate(this.camera_x, 0); // Forwards


        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bigBoss);
        this.addObjectsToMap(this.level.salsaBottle);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.throwableObject_bottle);
        this.addObjectsToMap(this.level.statusBarBigBoss);



        this.ctx.translate(-this.camera_x, 0);


        // draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    addToMap(MovableObject) {
        if (MovableObject.otherDirection) {
            this.flipImage(MovableObject);
        }

        MovableObject.draw(this.ctx);
        // MovableObject.drawFrame(this.ctx);
        // MovableObject.drawFrameOffset(this.ctx);

        if (MovableObject.otherDirection) {
            this.flipImageBack(MovableObject);
        }
    }

    flipImage(MovableObject) {
        this.ctx.save();
        this.ctx.translate(MovableObject.width, 0);
        this.ctx.scale(-1, 1);
        MovableObject.x = MovableObject.x * -1;
    }

    flipImageBack(MovableObject) {
        MovableObject.x = MovableObject.x * -1;
        this.ctx.restore();
    }
}