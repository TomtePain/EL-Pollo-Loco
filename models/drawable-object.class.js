/* The DrawableObject class is a JavaScript class that provides methods for loading, drawing, and
caching images on a canvas context. */
class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 250;
    height = 150;
    width = 100;


    /**
     * The function loads an image from a specified path.
     * @param path - The path parameter is a string that represents the URL or file path of the image
     * that needs to be loaded.
     */
    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * This function draws an image on a canvas context and logs an error message if the image fails to
     * load.
     * @param ctx - ctx stands for "context" and refers to the 2D rendering context of a canvas
     * element. It is used to draw and manipulate graphics on the canvas.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(e) {
            console.warn('Error loading Image', e);
            console.log('Could not load Image', this.img.src);
        }
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'purple';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameOffset(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right, this.height - this.offset.bottom);
            ctx.stroke();
        }
    }

    /**
     * The function loads images from an array and caches them using their file paths as keys.
     * @param arr - an array of image file paths that need to be loaded into the image cache.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}