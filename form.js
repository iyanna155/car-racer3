class Form {
    constructor(){
     this.title = createElement("h1")
        this.input = createInput("name")
        this.button = createButton("PLAY")
        this.greeting = createElement("h2")
    } 
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
      
        this.title.html("car racing")
        this.title.position(displayWidth/2,0)
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
      
       this.button.position(displayWidth/2+30,displayHeight/2)
       this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateInfo()
            player.updateCount(playerCount)
          
            this.greeting.html("Hello "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

    }

}