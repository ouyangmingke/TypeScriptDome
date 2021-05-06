(() => {
    console.log("==============接口与类================")
    // 定义一个接口
    interface IFly {
        // 定义一个空方法
        fly();
    }

    // 定义一个类 implements 实现接口
    class Fly implements IFly {
        // 实现接口中的方法
        fly() {
            console.log("Fly类实现IFly接口")
        }
    }
    const fly = new Fly();
    fly.fly();

    // 定义一个接口
    interface ISwim {
        siwm();
    }


    // 接口可以继承多个接口
    interface IFlyAndSwim extends IFly, ISwim { }

    class FlyAndSwim implements IFlyAndSwim {
        fly() {

        }
        siwm() {

        }
        end() {
            console.log("FlyAndSwim类实现了IFly, ISwim 接口")
        }
    }

    const flyAndSwim = new FlyAndSwim();
    flyAndSwim.end();

    // 总结  类可以通过 接口来定义当前类的类型
    // 类可以实现多个接口

    console.log("==============类================")

    // 定义一个类
    class Person {
        /* 
        访问修饰符: 用来描述类内部的属性/方法的可访问性
        public: 默认值, 公开的外部也可以访问
        private: 只能类内部可以访问
        protected: 类内部和子类可以访问
        */
        public firstName: string = '诸葛'
        private lastName: string
        protected fullName: string

        static fixed: string

        static FunFixed(fixed: string = '静态属性') {
            this.fixed = fixed;
            console.log("静态属性和静态方法 不需要实例化对象就可以使用 静态方法只能访问静态属性");
        }

        // 读取器 负责读取数据
        public get GSet(): string {
            return this.lastName;
        }

        // 设置器 复制修改数据
        public set GSet(v: string) {
            this.lastName = v;
        }

        /** 只读属性必须在声明时或构造函数里被初始化。  */
        readonly name: string = "声明时赋值"
        // 构造函数
        // 构造函数的参数中使用 访问修饰符 修饰后
        // 那么该类中会自动添加一个属性成员
        constructor(
            readonly parameter: string,
            lastName: string = "孔明") {
            this.lastName = lastName;
            this.fullName = `${this.firstName}_${lastName}`;
            this.name = "在构造方法中赋值"
        }
        sayHi() {
            console.log("Hello Class")
        }
    }

    // 定义一个函数
    function showFullName(Person: Person) {
        console.log(Person.firstName);
    }

    // 实例化对象
    const person = new Person("构造方法中使用访问修饰符号后 类中会自动生成属性");
    person.sayHi();
    showFullName(person);
    person.GSet = "通过存取器 可以读取修改 类的内部属性"
    Person.FunFixed();

    console.log(person);


    console.log("==============抽象类================")
    // 抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。
    // abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
    // 定义一个抽象类  抽象类不能被实例化
    abstract class Action {
        constructor() {

        }
        // 定义一个抽象方法 抽象方法不能有实现
        abstract eat()

        sayhi() {
            console.log("抽象类可以有具体实现的方法");
        }
    }

    // 实现 抽象 类
    class Dog extends Action {
        eat() {
            console.log("实现类必须实现抽象类的全部方法")
        }
    }

    const dog = new Dog();
    dog.sayhi();
    dog.eat();


    console.log("==============类的继承================")
    // 类的继承
    class Animal {
        name: string
        constructor(name: string = "Animal") {
            this.name = name
        }
        run(distance: number = 0) {
            console.log(`${this.name} run ${distance}m`)
        }
    }

    // 继承 Animal类
    class Snake extends Animal {
        constructor(name: string = "Snake") {
            // 调用父类型构造方法 super()
            super(name)
        }

        // 重写父类型的方法
        run(distance: number = 5) {
            console.log('Snake 重写 Animal')
            super.run(distance)
        }
    }

    class Horse extends Animal {
        constructor(name: string = 'Horse') {
            // 调用父类型构造方法
            super(name)
        }

        // 重写父类型的方法
        run(distance: number = 50) {
            console.log('Horse 重写 Animal')
            // 调用父类型的一般方法
            super.run(distance)
        }

        xxx() {
            console.log('xxx()')
        }
    }

    const snake = new Snake()
    snake.run()

    const horse = new Horse()
    horse.run()
    console.log("============== 多态 ================")
    // 父类型引用指向子类型的实例 ==> 多态
    const tom: Animal = new Horse("使用Horse 实现 Animal 多态")
    tom.run()

    /* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */
    const tom3: Snake = new Animal('如果子类型没有扩展的方法 可以使用父类实现子类')
    tom3.run()
    /* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
    // const tom2: Horse = new Animal('tom2')
    // tom2.run()



})()