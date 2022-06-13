
import {Circle} from "./Circle.js"

let canvas = document.querySelector("canvas")
var ctx = canvas.getContext('2d')

let widthInp = document.getElementById("width")
let heightInp = document.getElementById("height")
let circleNumInp = document.getElementById("circleNum")

var cw =400
var ch = 400

canvas.width = cw
canvas.height = ch

let depth

var circles = []


function clearCanvas(){
    ctx.clearRect(0,0,cw,ch)
    ctx.fillStyle= 'white'
    ctx.fillRect(0,0,cw,ch)
}



window.onload = (e) =>{
    clearCanvas()

    console.log("window loaded")
}



document.forms[0].onsubmit =(e)=>{
    //prevent form submision
    e.preventDefault()

    //clear circle array
    circles = []

    //set canvas width
    cw = widthInp.value
    ch = heightInp.value
    canvas.width = cw
    canvas.height = ch

    //clear canvas
    clearCanvas()

    //set depth
    depth = circleNumInp.value

    //draw circles
    draw()

}

var c;
function draw(){
    if(circles.length < depth){
        requestAnimationFrame(draw)
    }

    for(let i=0;i<1;i++){
        c=new Circle()
        c.findMaxRadius()
        c.draw()
        circles.push(c)
    }
}

let tau=2*Math.PI
export {canvas,ctx,cw,ch,tau,circles }