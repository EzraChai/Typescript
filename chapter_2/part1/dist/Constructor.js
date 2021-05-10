"use strict";
var Dog = /** @class */ (function () {
    //constructor 被称为构造函数
    //构造函数会在对象创建时调用
    function Dog(name, age) {
        // 在实例方法中，this就表示当前的实例
        // 在构造函数中当前对象就是当前创造新建的对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log('wang wang wang');
        //在方法中可以通过this来表示当前调用方法的对象 
        console.log(this);
    };
    return Dog;
}());
var dog1 = new Dog("babi", 3);
var dog2 = new Dog("jibai", 2);
console.log(dog1);
console.log(dog2);
dog1.bark();
//# sourceMappingURL=Constructor.js.map