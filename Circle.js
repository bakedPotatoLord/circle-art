
import {cw,ch,ctx,tau} from "./main.js"

export class Circle{
    constructor(){
        this.x =Math.floor(Math.random()*ch)
        this.y =Math.floor(Math.random()*cw)
        this.r = 0
        this.maxWallDistance = Math.min(Math.abs(this.x),Math.abs(this.x-cw),Math.abs(this.y),Math.abs(y-ch))

        if(ctx.getImageData(this.x,this.y,1,1).data[0] == 0 ){
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
        console.log("starting colision search")


        if(this.surfaceColor == "black"){
            //if starting on black
            for(var x=0;x<cw;x++){
                console.log(`${(x/cw)*100} percent`)
                for(var y=0;y<ch;y++){
                    if((x-this.x)^2+(y=this.y) > this.r && ctx.getImageData(x,y,1,1).data[0] == 255){
                        //if it finds any white in the circle
                        return true 
                    }
                }
            }
            //if it finds nothing white underneath the circle
            return false


        }else{
            //if starting on white
            for(var x=0;x<cw;x++){
                console.log(`${Math.floor((x/cw)*100)} percent`)
                for(var y=0;y<ch;y++){
                    

                    if((x-this.x)^2+(y-this.y) > this.r && ctx.getImageData(x,y,1,1).data[0] == 0){
                        //if it finds any black in the circle
                        return true 

                    }
                }
            }
            //if it finds nothing white underneath the circle
            return false

        }

    }


    

    
}
