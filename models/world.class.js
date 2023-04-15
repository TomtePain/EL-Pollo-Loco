class World {
    character = new Character();
    // canvas.requestFullscreen;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    throwableObjects = [];
    collectedBottle = []; // function schreiben zum befüllen des Arrays!!

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
            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy, i) => {
             if (this.character.isColliding(enemy)) {
                if (this.character.isAboveGround()) {
                    this.level.enemies.splice(i, 1);
                } else  {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy) 
                }
                
            }
        });
    }

    checkContactFromTop() {
        this.level.enemies.forEach((enemy, i) => {
           if (this.character.isColliding(enemy) && this.character.isCollidingBottom(enemy) && this.character.y < 115) {
                this.level.enemies.splice(i, 1);
            }
        });
    }

    checkThrowObjects() {
        if (this.keyboard.d && this.collectedBottle != '') {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
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
        this.ctx.translate(this.camera_x, 0); // Forwards


        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);



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
        MovableObject.drawFrame(this.ctx);
        MovableObject.drawFrameOffset(this.ctx);

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