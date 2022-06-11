
import {cw,ch,ctx} from "./main.js"

export class Circle{
    constructor(){
        this.x =Math.floor(Math.random()*ch)
        this.y =Math.floor(Math.random()*cw)
        this.r = 0

        if(ctx.getImageData(this.x,this.y,1,1).data[0] ){
            //if starts on black surface
            this.surfaceColor="black"
        }else{
            //if starts on white surface
            this.surfaceColor = "white"
        }

        this.isExpanding = true
    }

    expand(){
        this.r ++
    }

    checkCollission(){
        if(this.surfaceColor == "black"){
            
        }else{

        }
    }

    
}