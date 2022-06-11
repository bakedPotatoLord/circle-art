
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

window.onload = (e) =>{
    clearCanvas()

    console.log(new Circle())
}

export {canvas,ctx,cw,ch}