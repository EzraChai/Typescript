// object 表示一个js对象
let a: object;
a = {}
a = function () {
}

//{} 指定对象中可以包含那些属性
//在属性后面加上一个？，表示属性是可选的
let obj: { name: string, age?: number };

obj = {name: "Chloe Gan"}

// [propName:string]:any 表示任意类型的属性
let c: { name: string, [propName: string]: any }

c = {name: "Chloe Gan", age: 16, gender: "girl"}

let d: (a: number, b: number) => number
d = function (n1, n2) {
    return n1 + n2
}
let num = d(1, 2)
console.log("num = ", num)

//string[] 表示字符串数组
let e: string[]
e = ['C', 'H', 'L', 'O', 'E']
e.map(value => console.log(value))

let f: number[]
f = [1, 2, 3, 4]

//Tuple
let g: [string, string]
g = ["Chloe", "Gan"]

//enum
enum Gender {
    Boy,
    Girl
}

let h: { name: string, gender: Gender }
h = {
    name: "Chloe Gan",
    gender: Gender.Girl //girl
}
console.log("Chloe ", h)
console.log(h.gender === Gender.Girl)

//e& 表示同时
let i: { name: string } & { age: number };
i = {name:"Chloe Gan",age:16}

//类型的别名
type myNumberType = 1|2|3|4|5|6|7|8|9|10
let j:myNumberType;
j = 2;













