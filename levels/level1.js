let level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new LittleChicken(),
        new LittleChicken(),
        new LittleChicken(),
        new LittleChicken(),
        new LittleChicken()
    ],

    [
        new Endboss()
    ],

    [
        new Clouds('img_pollo_locco/5_background/layers/4_clouds/1.png'),
        new Clouds('img_pollo_locco/5_background/layers/4_clouds/2.png'),
        new Clouds('img_pollo_locco/5_background/layers/4_clouds/1.png'),
        new Clouds('img_pollo_locco/5_background/layers/4_clouds/2.png'),
    ],

    [
        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 0 - 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/2.png', 0 - 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/2.png', 0 - 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/2.png', 0 - 719),

        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img_pollo_locco/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img_pollo_locco/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img_pollo_locco/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img_pollo_locco/5_background/layers/1_first_layer/2.png', 719 * 3)

    ],

    [
        new SalsaBottle(200, 360),
        new SalsaBottle(250, 360),
        new SalsaBottle(350, 360),
        new SalsaBottle(450, 360), //450 , 375
        new SalsaBottle(550, 360),
        new SalsaBottle(950, 360),
        new SalsaBottle(1250, 360),
    ],

    [
        new Coin(400, 100),
        new Coin(450, 113),
        new Coin(500, 125),
        new Coin(550, 138),
        new Coin(600, 150),
        new Coin(700, 150),
        new Coin(750, 138),
        new Coin(800, 125),
        new Coin(850, 113),
        new Coin(900, 100),

        new Coin(400, 150),
        new Coin(450, 163),
        new Coin(500, 175),
        new Coin(550, 188),
        new Coin(600, 200),
        new Coin(700, 200),
        new Coin(750, 188),
        new Coin(800, 175),
        new Coin(850, 163),
        new Coin(900, 150),

        new Coin(1050, 65),
        new Coin(1050, 100),
        new Coin(1050, 135),
        new Coin(1050, 170),
        new Coin(1050, 205),

        new Coin(1200, 200),
        new Coin(1250, 188),
        new Coin(1300, 175),
        new Coin(1350, 163),
        new Coin(1400, 150),
        new Coin(1500, 150),
        new Coin(1550, 163),
        new Coin(1600, 175),
        new Coin(1650, 188),
        new Coin(1700, 200),

        new Coin(1200, 150),
        new Coin(1250, 138),
        new Coin(1300, 125),
        new Coin(1350, 113),
        new Coin(1400, 100),
        new Coin(1500, 100),
        new Coin(1550, 113),
        new Coin(1600, 125),
        new Coin(1650, 138),
        new Coin(1700, 150),

        new Coin(1850, 65),
        new Coin(1850, 100),
        new Coin(1850, 135),
        new Coin(1850, 170),
        new Coin(1850, 205),
    ],

    [
        new Statusbar_Endboss(2450, -5)
    ],

    [

    ]

);
