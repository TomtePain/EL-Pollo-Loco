class Level {
    enemies;
    bigBoss;
    clouds;
    backgroundObjects;
    salsaBottle;
    coin;
    statusBarBigBoss;
    healthyHeart;

    level_end_x = 2200;

    constructor(enemies, bigBoss, clouds, backgroundObjects, salsaBottle, coin, statusBarBigBoss, healthyHeart) {
        this.enemies = enemies;
        this.bigBoss = bigBoss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.salsaBottle = salsaBottle;
        this.coin = coin;
        this.statusBarBigBoss = statusBarBigBoss;
        this.healthyHeart = healthyHeart;
    }

}