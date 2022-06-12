
import {Circle} from "./Circle.js"

let canvas = document.querySelector("canvas")
var ctx = canvas.getContext('2d')

const cw =400
const ch = 400

canvas.width = cw
canvas.height = ch

const depth = 10


function clearCanvas(){
    ctx.clearRect(0,0,cw,ch)
    ctx.fillStyle= 'white'
    ctx.fillRect(0,0,cw,ch)
}

var c

window.onload = (e) =>{
    clearCanvas()

    c= new Circle()
    c.expand()

    console.log(c)
}


canvas.onclick = (e)=>{
    //c.checkCollission()
    c.findMaxDistance()
}

let tau=2*Math.PI
export {canvas,ctx,cw,ch,tau }