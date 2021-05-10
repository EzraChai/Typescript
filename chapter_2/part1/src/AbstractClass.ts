(function(){
    /**
     * 以abstract 开头的类时抽象类
     *      抽象类和其他类区别不大，只是不能用来创建对象
     *      抽象类是专门用来继承的类
     *
     *      抽象类可以添加抽象方法
     */
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        //定义一个抽象方法
        //抽象方法使用abstract 开头，没有方法体
        //抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHello(): void
    }

    class Dog extends Animal{
        sayHello():void{
            console.log("Wang Wang Wang");
        }
    }

    class Cat extends Animal{
        sayHello(): void {
            console.log("Meow Meow Meow!")
        }
    }

    const dog = new Dog("babi");
    dog.sayHello();
    const cat = new Cat("Mimi");
    cat.sayHello();
})()
