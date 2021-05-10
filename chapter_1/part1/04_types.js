// object 表示一个js对象
var a;
a = {};
a = function () {
};
//{} 指定对象中可以包含那些属性
//在属性后面加上一个？，表示属性是可选的
var obj;
obj = { name: "Chloe Gan" };
// [propName:string]:any 表示任意类型的属性
var c;
c = { name: "Chloe Gan", age: 16, gender: "girl" };
var d;
d = function (n1, n2) {
    return n1 + n2;
};
var num = d(1, 2);
console.log("num = ", num);
//string[] 表示字符串数组
var e;
e = ['C', 'H', 'L', 'O', 'E'];
e.map(function (value) { return console.log(value); });
var f;
f = [1, 2, 3, 4];
//Tuple
var g;
g = ["Chloe", "Gan"];
//enum
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 0] = "Boy";
    Gender[Gender["Girl"] = 1] = "Girl";
})(Gender || (Gender = {}));
var h;
h = {
    name: "Chloe Gan",
    gender: Gender.Girl //girl
};
console.log("Chloe ", h);
console.log(h.gender === Gender.Girl);
