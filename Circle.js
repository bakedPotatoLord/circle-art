
import {cw,ch,ctx,tau, circles} from "./main.js"
import {dist} from "./functs.js"


export class Circle{
    constructor(){
        this.x =Math.floor(Math.random()*ch)
        this.y =Math.floor(Math.random()*cw)
        this.r = 0
        this.maxWallDistance = Math.min(Math.abs(this.x),Math.abs(this.x-cw),Math.abs(this.y),Math.abs(this.y-ch))

        if(ctx.getImageData(this.x,this.y,1,1).data[0] == 0 ){
            //if starts on black surface
            this.surfaceColor="black"
        }else{
            //if starts on white surface
            this.surfaceColor = "white"
        }

        this.isExpanding = true
    }



    findMaxRadius(){

        if(circles.length == 0){
            this.r = this.maxWallDistance
            return
        }

        for(let i of circles){
            if(this.x != i.x && this.y != i.y){
                //if not the same circle

                if( dist(this.x,this.y,i.x,i.y) <i.r){
                    //if inside of a circle
                    console.log("inside of a circle")
                    this.r = i.r - dist(this.x,this.y,i.x,i.y)
                    return
                }
            }
        }

        this.r = this.maxWallDistance
    }


    draw(){
        if(this.surfaceColor == "black"){
            //if starting on black
            ctx.beginPath()
            ctx.arc(this.x,this.y,this.r,0,tau)
            ctx.fillStyle = 'white'
            ctx.fill()

        }else{
            //if starting on white

            ctx.beginPath()
            ctx.arc(this.x,this.y,this.r,0,tau)
            ctx.fillStyle = 'black'
            ctx.fill()

        }
        /*
        ctx.beginPath()
        ctx.arc(this.x,this.y,2,0,tau)
        ctx.fillStyle = 'red'
        ctx.fill()
        */
    }
}
