
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


    }



    findMaxRadius(){
        let tempCircles = []
        let smallest
        
        this.r = this.maxWallDistance
        //find all of the circles that it is inside of
        for(let i of circles){
            if( dist(this.x,this.y,i.x,i.y) <i.r){
                //if inside of a circle
                tempCircles.push(i)
            }
        }
        //find the smallest one
        smallest = this.smallestCircle(tempCircles)
        //set radius relative to the smallest circle
        if(tempCircles.length > 0 && smallest.r < this.r){
            //if inside of a circle
            //console.log("inside of a circle")
            this.r = smallest.r - dist(this.x,this.y,smallest.x,smallest.y)
        }


        

        tempCircles =[]
        for(let i of circles){
            
            if( dist(this.x,this.y,i.x,i.y) <i.r+this.maxWallDistance){
                //if overlapping a circle
                //console.log("overlapping a circle")
                
                if(dist(this.x,this.y,i.x,i.y) - i.r < this.r){
                    this.r =  Math.abs(dist(this.x,this.y,i.x,i.y) - i.r )
                }

            }
        }

        
        

        
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

    smallestCircle(arr){
        let currentMin = arr[0]
        for(let i of arr){
            if(i.r < currentMin.r){
                currentMin = i.r
            }
        }
        return currentMin
    }


}
