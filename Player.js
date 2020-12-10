class   Player {

    constructor(){
    
    
    
    }
    getcount(){

        var count = database.ref('Playercount');
        count.on("value",function(data){Playercount})
        }
    
        updatecount(PlayersOnline){
    
         database.ref('/').update({Playercount:PlayersOnline})
    
        }
    
        update(Namee){
    
        var PlayerIndex ='Player'+ Playercount
        database.ref(PlayerIndex).set({Name:Namee});
        }
}