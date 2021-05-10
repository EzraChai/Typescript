//直接使用字面量进行类型声明
var a;
a = 10;
// a = 11;
var b;
b = "Chloe";
// b = "";
var bo;
bo = "female";
var c;
c = true;
c = "Chloe Gan";
// c =  123
//any 有点废
// 不建议使用 any 类型；
var d;
d = true;
d = "Chloe Gan";
d = 920;
//表示未知类型
var e;
e = 10;
e = "Hello";
e = true;
var s;
//d类型是any
//可以赋值给任意变量
// s = d;
e = 'hello';
// unknown 类型的变量实际上是类型安全你的any
// unknown 类不能赋值给其他变量
if (typeof e === "string") {
    s = e;
}
s = e;
console.log("s = ", s);
