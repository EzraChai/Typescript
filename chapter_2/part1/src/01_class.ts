//使用class 关键字定义一个类
/**
 * 对象中包含两个部分
 *     属性
 *     方法
 */
class Person {

    /**
     * 直接定义的属性是实例属性，需要通过创建对象的实例去访问：
     *      const p1 = new Person();
     *      p1.name
     *
     * 使用static 开头的属性是静态属性（类属性），可以直接通过类去方法
     *      Person.age;
     *
     *  readonly 开头属性表示一个只可以读的属性，并不能修改
     */

        //实例属性
    // readonly name: string = "Chloe Gan";
        name = "Chloe Gan";

    //在属性前使用static 可以定义静态属性
    // static age:number = 16;
    age = 16;


    //定义方法
    /**
     * 如果方法以static 开头，可以直接通过类调用
     */
    sayHello(){
        console.log("Hello")
    }
}

const p1 = new Person();
console.log(p1)
// p1.name = 'Ezra Chai';
// console.log(p1.name);

// console.log(Person.age);

p1.sayHello();
