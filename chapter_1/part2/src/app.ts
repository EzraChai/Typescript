console.log("I love Chloe Gan");

//String
let a: string;
a = "Chloe Gan"

//helloWorld

function fn(a:number, b:number) {
    return a + b;
}

function fn2(this: Window):void{
    alert(this)
}

let box1 = document.getElementById('box1')
// if (box1 !== null){
//     box1.addEventListener('click',function(){
//         console.log("Hello World")
//     })
// }

box1?.addEventListener('click',function(){
    console.log("Hello World")
})
