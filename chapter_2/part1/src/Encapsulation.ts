(function () {
    //定义表示人的类
    class Person{
        //TS 可以在属性前添加的修饰符
        /**
         * public 公共 可以在任意位置访问
         * private 私有属性 只能在类内部进行访问（修改）
         *  -通过在类中添加方法使得私有属性可以被外部方法
         * protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
         */
        private _name:string;
         private _age:number;


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


        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            if (value >= 0){
                this._age = value;
            }
        }

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
    }

    const person = new Person("Ezra Chai",16);


    /**
     * 现在属性实在对象中设置,属性可以任意被修改
     *   属性可以任意修改将会导致对象中的数据变得非常不安全
     */
    // console.log(person.getName())
    // person.setAge(-15);
    // let age = person.getAge();
    // console.log(age);

    console.log(person.name)
    person.name = "Chloe Gan"
    console.log(person.name)

    //TS2341: Property 'age' is private and only accessible within class 'Person'.
    // person.age = 18;


    class A{
        protected num:number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A{
        test(){
            console.log(this.num)
        };
    }

    const b = new B(12);
    b.test()

    // class C{
    //     name:string;
    //     age:number;
    //
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }

    class C {
        //可以直接讲属性定义在构造函数中
        constructor(public name:string,public age:number){}
    }

    const c = new C("Chloe Gan",16);
    console.log(c.name);
})()
