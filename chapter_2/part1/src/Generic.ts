/*
function fn(a:number):number{
    return a;
}
*/

/**
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */

function fn<T>(a:T):T{
    return a;
}


//可以直接调用具有泛型的函数
let result = fn(10); //不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>("Chloe Gan"); //指定泛型

function fn2<T,K>(a:T,b:K):T{
    console.log(b);
    return a;
}

fn2<number,string>(15,'Chloe');

interface inter {
    length: number;
}

//T extends inter 表示泛型T必须是Inter的实现类（子类）
function fn3<T extends inter>(a:T):number{
    return a.length;
}

console.log(fn3("123"));

class myClass<T>{
    name:T;

    constructor(name: T) {
        this.name = name;
    }
}

let mc = new myClass<string>('Chloe Gan')
console.log(mc);
