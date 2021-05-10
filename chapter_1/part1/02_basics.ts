// number 以后的值只能是number
let a : number;

a = 10;
// a = "Hello";
console.log(a);

let b:boolean = true;
console.log(b);
b = false;

//如果变量的声明和赋值是同时进行的，ts 可以自动进行变量检测
let c = true;
// c = 123;

//Js 中函数不考虑参数的类型和个数的
function sum(a,b){
    return a + b;
}

console.log(sum("Chloe ","Gan"))
console.log(sum(520,1314))
console.log(sum(520,"1314"))

console.log("")
//The number in the back means return a type of number
function sumUsingTS(a:number,b:number = 0):number{
    return a + b;
}

// console.log(sumUsingTS("Chloe ","Gan"))
console.log(sumUsingTS(520,1314))
// console.log(sumUsingTS(520,"1314"))

let result = sumUsingTS(1);
console.log(result)



