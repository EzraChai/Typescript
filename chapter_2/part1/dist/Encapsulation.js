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
    //定义表示人的类
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
            //获取name 属性
            // getName():string{
            //     return this.name;
            // }
            //
            // setName(name:string){
            //     this.name = name;
            // }
            //
            // getAge():number{
            //     return this.age;
            // }
            //
            // setAge(age:number){
            //     if (age >= 0){
            //         this.age = age;
            //     }else{
            //         throw new Error("Age is not valid")
            //     }
            // }
            //TS 中设置getter 方法得到方式
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (value) {
                if (value >= 0) {
                    this._age = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var person = new Person("Ezra Chai", 16);
    /**
     * 现在属性实在对象中设置,属性可以任意被修改
     *   属性可以任意修改将会导致对象中的数据变得非常不安全
     */
    // console.log(person.getName())
    // person.setAge(-15);
    // let age = person.getAge();
    // console.log(age);
    console.log(person.name);
    person.name = "Chloe Gan";
    console.log(person.name);
    //TS2341: Property 'age' is private and only accessible within class 'Person'.
    // person.age = 18;
    var A = /** @class */ (function () {
        function A(num) {
            this.num = num;
        }
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.test = function () {
            console.log(this.num);
        };
        ;
        return B;
    }(A));
    var b = new B(12);
    b.test();
    // class C{
    //     name:string;
    //     age:number;
    //
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }
    var C = /** @class */ (function () {
        //可以直接讲属性定义在构造函数中
        function C(name, age) {
            this.name = name;
            this.age = age;
        }
        return C;
    }());
    var c = new C("Chloe Gan", 16);
    console.log(c.name);
})();
//# sourceMappingURL=Encapsulation.js.map