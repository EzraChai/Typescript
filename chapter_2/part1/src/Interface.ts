(function () {
    //描述一个对象的类型
    type myType = {
        name: string,
        age: number,
    };


    // type myType = {
    //
    // }

    /**
     * 接口来定义一个类的结构,用来定义一个类应该包含那些属性和方法
     *      同时接口也可以当成类型声明去使用
     */
    interface myInterface{
        name: string,
        age: number
    }

    interface myInterface{
        gender:string,
    }

    const obj: myInterface = {
        name:'Chloe Gan',
        age:16,
        gender:'female'
    }

    /**
     * 接口可以在定义类中去限制类的结构
     * 接口中的所有属性不能有实际的值
     * 接口只定义对象的结构，而不考虑实际值
     *      在接口中所有方法都是抽象方法
     */

    interface myInter{
        name:string;
        sayHello():void
    }

    class myClass implements myInter{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(): void {
            console.log(`Hello ${this.name}!`);
        }
    }

    const hello = new myClass("Chloe Gan");
    hello.sayHello();

})()
