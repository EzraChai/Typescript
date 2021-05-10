//直接使用字面量进行类型声明

let a: 10;
a = 10;
// a = 11;

let b: "Chloe" | "Gan";
b = "Chloe";
// b = "";

let bo: "male" | "female";
bo = "female";

let c: boolean | string;
c = true;
c = "Chloe Gan"
// c =  123

//any 有点废
// 不建议使用 any 类型；
let d: any;
d = true;
d = "Chloe Gan";
d = 920;

//表示未知类型
let e: unknown;
e = 10;
e = "Hello";
e = true;

let s: string;

//d类型是any
//可以赋值给任意变量
// s = d;
e = 'hello';

// unknown 类型的变量实际上是类型安全你的any
// unknown 类不能赋值给其他变量
if (typeof e === "string") {
    s = e;
}

//类型断言,可以用来告诉解析器变量的实际类型
s = e as string;
s = <string>e;
console.log("s = ", s)
console.log(fn(1))

function fn (num :number){
    if (num > 0){
        return 123;
    }
    return 0;
 }

//void 表示空，没有返回值
function fn2():void{
    return;
}

//never 永远不会返回结果
function fn3():never{
    throw new Error("Error ！");
}

