
import {Circle} from "./Circle.js"

let canvas = document.querySelector("canvas")
var ctx = canvas.getContext('2d')

let header= document.querySelector("h1")

let widthInp = <HTMLInputElement>document.getElementById("width")
let heightInp = <HTMLInputElement>document.getElementById("height")
let circleNumInp = <HTMLInputElement>document.getElementById("circleNum")
let checkbox = <HTMLInputElement>document.getElementById("color")

var cw =400
var ch = 400

canvas.width = cw
canvas.height = ch

let depth:number

var circles:Circle[] = []

function clearCanvas(){
    ctx.clearRect(0,0,cw,ch)
    ctx.fillStyle= 'white'
    ctx.fillRect(0,0,cw,ch)
}

window.onload = (e:Event) =>{
    clearCanvas()
    console.log("window loaded")
}

document.forms[0].onsubmit =(e)=>{
    //prevent form submision
    e.preventDefault()

    //clear circle array
    circles = []

    //set canvas width
    cw = parseInt(widthInp.value)
    ch = parseInt(heightInp.value)
    canvas.width = cw
    canvas.height = ch

    //clear canvas
    clearCanvas()

    //set depth
    depth = parseInt(circleNumInp.value)

    //draw circles
    draw()

}


function draw(){
    let c:Circle
    if(circles.length < depth){
        requestAnimationFrame(draw)
    }
    header.innerHTML = `Circle Art! ${Math.floor((circles.length/depth)*100)}%`

    for(let i=0;i<1;i++){
        c=new Circle()
        c.findMaxRadius()
        c.draw()
        circles.push(c)
    }
}

let tau=2*Math.PI
export {canvas,ctx,cw,ch,tau,circles,checkbox }