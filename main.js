
import {Circle} from "./Circle.js"

let canvas = document.querySelector("canvas")
var ctx = canvas.getContext('2d')

const cw =400
const ch = 400

canvas.width = cw
canvas.height = ch

const depth = 10

var circles = []


function clearCanvas(){
    ctx.clearRect(0,0,cw,ch)
    ctx.fillStyle= 'white'
    ctx.fillRect(0,0,cw,ch)
}



window.onload = (e) =>{
    clearCanvas()

    console.log("window loaded")

    
    draw10()
}


canvas.onclick = (e)=>{}

var c;
function draw10(){
    requestAnimationFrame(draw10)
    for(let i=0;i<depth;i++){
        c=new Circle()
        c.findMaxRadius()
        c.draw()
        circles.push(c)
    }
}

let tau=2*Math.PI
export {canvas,ctx,cw,ch,tau,circles }