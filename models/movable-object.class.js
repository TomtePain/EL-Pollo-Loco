class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    MoveRight() {
        console.log('Moving Right')
    }

    MoveLeft() {

    }
}