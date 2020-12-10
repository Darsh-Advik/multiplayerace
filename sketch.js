// NOTE TO SELF:  update the api key in the index.html file(8/12/2020)). https://whitehatjr.whereby.com/whclassb25f2916-6603-41c6-97fe-893155c14d7b
//
var database;
var Playercount;
var Gamestates=0;
;
var form
var game
var player
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Games();
    game.getstate();
    game.Function();
}
function draw(){
    background(46, 139, 87);

    drawSprites();
}


