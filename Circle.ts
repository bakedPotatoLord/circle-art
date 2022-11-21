import {cw,ch,ctx,tau, circles,checkbox} from "./main.js"
import {dist} from "./functs.js"

export class Circle{
    x: number
    y: number
    r: number
    maxWallDistance: number
    surfaceColor: string
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
    }

    findMaxRadius(){
        let tempCircles = []
        let smallest
        
        //initialises the radius
        this.r = this.maxWallDistance
        //find all of the circles that it is inside of
        for(let i of circles){
            if( dist(this,i) <i.r && this.r >i.r){
                //if inside of a circle and larger than said circle
                this.r = i.r - dist(this,i)
            }
        }

        for(let i of circles){
            if( dist(this,i) <i.r+this.maxWallDistance){
                //if overlapping a circle
                //console.log("overlapping a circle")
                if(dist(this,i) - i.r < this.r){
                    this.r =  Math.abs(dist(this,i) - i.r )
                }
            }
        } 
    }

    draw(){
        //set the color
        if(checkbox.checked){
            ctx.fillStyle=`hsl(${Math.floor(Math.random()*360)},100%,50%)`
        }else{
            if(this.surfaceColor == "black"){
                //if starting on black
                ctx.fillStyle = 'white'
            }else{
                //if starting on white
                ctx.fillStyle = 'black'
            }
        }
        //draw the circle
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,tau)
        ctx.fill()

        //for highlighting the center
        /* 
        ctx.beginPath()
        ctx.arc(this.x,this.y,2,0,tau)
        ctx.fillStyle = 'red'
        ctx.fill()
        */
    }

}
