class Level {
    enemies;
    clouds;
    backgroundObjects;
    salsaBottle;
    coin;
    level_end_x = 2200;

    constructor(enemies, clouds, backgroundObjects, salsaBottle, coin) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.salsaBottle = salsaBottle;
        this.coin = coin;
    }

}