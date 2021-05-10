import {hi} from "./m1"

function sum(a:number,b:number):number{
    return a+b;
}

console.log(sum(123,456))

let obj = {
    name:"Chloe Gan", age: 16
}
console.log(obj)

const box = document.getElementById("box1");
box?.addEventListener('click',function(){
    alert("I love Chloe Gan")
    alert(hi)
})

console.log(Promise)

let fn = (a:number,b:number):number => a+b
fn(1,2);
fn(2,3);
