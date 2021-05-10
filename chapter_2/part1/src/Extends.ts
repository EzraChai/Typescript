(function(){

    ////定义一个Animal类
    class Animal{
        name:string;
        age:number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log("Animal say Hello~")
        }
    }

    //定义一个表示狗的类
    //使Dog类extends Animal类
    class Dog extends Animal{

        run(){
            console.log(`${this.name} is running!`)
        }

        sayHello(){
            console.log("Wang wang Wang!")
        }
    }

    //定义一个表示猫的类
    //使Cat类extends Animal类
    class Cat extends Animal{

        sayHello(){
            console.log("Meow meow meow!")
        }
    }

    const dog = new Dog("babi",5);
    console.log(dog);
    dog.sayHello();
    dog.run();

    const cat = new Cat("Mimi",3);
    console.log(cat);
    cat.sayHello();
})()
