/**************************************************
 * Group Members:   Michelle Lytle
 *                  Thea Knasiak
 *                  Justin Quan
 *                  Div Khare
 * 
 * Game:            NEVER ALONE
 * 
 * Date Completed:  TBD
 **************************************************/

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        parent: 'canvas',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    scene: [preload, menu, play, pause, end],
};

let game = new Phaser.Game(config);

let monitorBorderX = 34;
let monitorBorderY = 33;
var text1;
// initializes debug variables 
let pathInput = null;
let pathText;

/**************************************************
 *                 CREDIT
 * 
 * Windows Startup Sound
 * https://soundbible.com/1654-Windows-95-Startup.html
 * 
 * W95FA Font Family
 * https://fontsarena.com/w95fa-by-fontsarena/
 * 
 * Preload loading
 * https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
 **************************************************/