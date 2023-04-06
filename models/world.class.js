class World {


    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Clouds('img_pollo_locco/5_background/layers/4_clouds/1.png')
    ]
    backgroundObjects = [
        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 1438),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/1.png', 1438),
    
    ]
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        
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
        if(MovableObject.otherDirection) {
            this.ctx.save();
            this.ctx.translate(MovableObject.width, 0);
            this.ctx.scale(-1, 1);
            MovableObject.x = MovableObject.x * -1;
            
        }
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
        if(MovableObject.otherDirection) {
            MovableObject.x = MovableObject.x * -1;
            this.ctx.restore();
        }
    }

}