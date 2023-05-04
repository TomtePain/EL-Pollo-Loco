let level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken()
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
        new SalsaBottle(250 , 360),
        new SalsaBottle(350 , 360),
        new SalsaBottle(450 , 360), //450 , 375
        new SalsaBottle(550 , 360), 
        new SalsaBottle(950 , 360), 
        new SalsaBottle(1250 , 360),
    ],

    [
        new Coin(400, 100),
        new Coin(600, 125),
    ],

    [
        new Statusbar_Endboss(2450, -5)
    ],

    [
        
    ]

);
