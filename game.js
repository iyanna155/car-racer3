class Game {
    constructor(){

    }

    //read the gameState value from the database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //write the gameState to the database
    updateState(State){
        database.ref("/").update({
            gameState:State
        })
    }

    start(){
        if(gameState === 0){
            player = new Player;
            player.getCount()
            form = new Form()
            form.display()
        }

        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        cars = [car1,car2,car3,car4]
    }
    
    play(){
        form.hide();
    
        Player.getPlayerInfo()
        
        if(players !== undefined){
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 0;
          var y;
    
          for(var plr in players){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            //use data form the database to display the cars in y direction
            y = displayHeight - players[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
    
            if (index === player.index){
              cars[index - 1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y
            }
           
           
          }
    
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=10
          player.updateInfo();
        }    
        drawSprites()
    }
}