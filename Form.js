class Form {

    constructor(){
    
         
    
    }

     display(){

     var title = createElement("h1");
     title.html("CAR RACE");
     title.position(120,0);
     var input = createInput("ENTER NAME!!!↵");
     input.position(130,150);
     var button = createButton("START!");
     button.position = (200,200);
     var greeting = createElement("h2");
     button.mousePressed(function(){
      
     input.hide();
     button.hide();
     var Name = input.value();
     Playercount += 1;
     player.update(Namee);
     player.updatecount(PlayersOnline);
     greeting.html("HELLO"+Name+"WELCOME TO CAR RACE!");
     greeting.position(120,150);

     })}

}