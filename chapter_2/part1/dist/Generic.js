"use strict";
/*
function fn(a:number):number{
    return a;
}
*/
/**
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
var result = fn(10); //不指定泛型，TS可以自动对类型进行推断
var result2 = fn("Chloe Gan"); //指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(15, 'Chloe');
//T extends inter 表示泛型T必须是Inter的实现类（子类）
function fn3(a) {
    return a.length;
}
console.log(fn3("123"));
var myClass = /** @class */ (function () {
    function myClass(name) {
        this.name = name;
    }
    return myClass;
}());
var mc = new myClass('Chloe Gan');
console.log(mc);
//# sourceMappingURL=Generic.js.map