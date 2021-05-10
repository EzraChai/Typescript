"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    ////定义一个Animal类
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.prototype.sayHello = function () {
            console.log("Animal say Hello~");
        };
        return Animal;
    }());
    //定义一个表示狗的类
    //使Dog类extends Animal类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.run = function () {
            console.log(this.name + " is running!");
        };
        Dog.prototype.sayHello = function () {
            console.log("Wang wang Wang!");
        };
        return Dog;
    }(Animal));
    //定义一个表示猫的类
    //使Cat类extends Animal类
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.sayHello = function () {
            console.log("Meow meow meow!");
        };
        return Cat;
    }(Animal));
    var dog = new Dog("babi", 5);
    console.log(dog);
    dog.sayHello();
    dog.run();
    var cat = new Cat("Mimi", 3);
    console.log(cat);
    cat.sayHello();
})();
//# sourceMappingURL=Extends.js.map