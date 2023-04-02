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
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/1.png', 0)
    ]
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // this.ctx.globalCompositeOperation='destination-over';

        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        
        


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
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
    }
}