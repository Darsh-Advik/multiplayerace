class Games {

constructor(){



}

getstate(){

var faxmachine = database.ref("Gamestates");
 faxmachine.on("value",function(data){Gamestates=data.val()})

}
update(state){

database.ref("/").update({Gamestates:state});

}
Function(){

if(Gamestates===0){

player=new Player();
player.getcount();
form=new Form();
form.display();
}

}
}