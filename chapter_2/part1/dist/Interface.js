"use strict";
(function () {
    var obj = {
        name: 'Chloe Gan',
        age: 16,
        gender: 'female'
    };
    var myClass = /** @class */ (function () {
        function myClass(name) {
            this.name = name;
        }
        myClass.prototype.sayHello = function () {
            console.log("Hello " + this.name + "!");
        };
        return myClass;
    }());
    var hello = new myClass("Chloe Gan");
    hello.sayHello();
})();
//# sourceMappingURL=Interface.js.map