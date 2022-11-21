import type { Circle } from "./Circle"

export function dist(c1:Circle,c2:Circle){
     return Math.hypot(c1.x-c2.x,c1.y-c2.y)
}

