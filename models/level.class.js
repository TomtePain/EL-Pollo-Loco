class Level {
    enemies;
    clouds;
    backgroundObjects;
    salsaBottle;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects, salsaBottle) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.salsaBottle = salsaBottle;
    }

}