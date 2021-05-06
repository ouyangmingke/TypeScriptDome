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
    console.log("==============接口与类================");
    // 定义一个类 implements 实现接口
    var Fly = /** @class */ (function () {
        function Fly() {
        }
        // 实现接口中的方法
        Fly.prototype.fly = function () {
            console.log("Fly类实现IFly接口");
        };
        return Fly;
    }());
    var fly = new Fly();
    fly.fly();
    var FlyAndSwim = /** @class */ (function () {
        function FlyAndSwim() {
        }
        FlyAndSwim.prototype.fly = function () {
        };
        FlyAndSwim.prototype.siwm = function () {
        };
        FlyAndSwim.prototype.end = function () {
            console.log("FlyAndSwim类实现了IFly, ISwim 接口");
        };
        return FlyAndSwim;
    }());
    var flyAndSwim = new FlyAndSwim();
    flyAndSwim.end();
    // 总结  类可以通过 接口来定义当前类的类型
    // 类可以实现多个接口
    console.log("==============类================");
    // 定义一个类
    var Person = /** @class */ (function () {
        // 构造函数
        // 构造函数的参数中使用 访问修饰符 修饰后
        // 那么该类中会自动添加一个属性成员
        function Person(parameter, lastName) {
            if (lastName === void 0) { lastName = "孔明"; }
            this.parameter = parameter;
            /*
            访问修饰符: 用来描述类内部的属性/方法的可访问性
            public: 默认值, 公开的外部也可以访问
            private: 只能类内部可以访问
            protected: 类内部和子类可以访问
            */
            this.firstName = '诸葛';
            /** 只读属性必须在声明时或构造函数里被初始化。  */
            this.name = "声明时赋值";
            this.lastName = lastName;
            this.fullName = this.firstName + "_" + lastName;
            this.name = "在构造方法中赋值";
        }
        Person.FunFixed = function (fixed) {
            if (fixed === void 0) { fixed = '静态属性'; }
            this.fixed = fixed;
            console.log("静态属性和静态方法 不需要实例化对象就可以使用 静态方法只能访问静态属性");
        };
        Object.defineProperty(Person.prototype, "GSet", {
            // 读取器 负责读取数据
            get: function () {
                return this.lastName;
            },
            // 设置器 复制修改数据
            set: function (v) {
                this.lastName = v;
            },
            enumerable: false,
            configurable: true
        });
        Person.prototype.sayHi = function () {
            console.log("Hello Class");
        };
        return Person;
    }());
    // 定义一个函数
    function showFullName(Person) {
        console.log(Person.firstName);
    }
    // 实例化对象
    var person = new Person("构造方法中使用访问修饰符号后 类中会自动生成属性");
    person.sayHi();
    showFullName(person);
    person.GSet = "通过存取器 可以读取修改 类的内部属性";
    Person.FunFixed();
    console.log(person);
    console.log("==============抽象类================");
    // 抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。
    // abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
    // 定义一个抽象类  抽象类不能被实例化
    var Action = /** @class */ (function () {
        function Action() {
        }
        Action.prototype.sayhi = function () {
            console.log("抽象类可以有具体实现的方法");
        };
        return Action;
    }());
    // 实现 抽象 类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.eat = function () {
            console.log("实现类必须实现抽象类的全部方法");
        };
        return Dog;
    }(Action));
    var dog = new Dog();
    dog.sayhi();
    dog.eat();
    console.log("==============类的继承================");
    // 类的继承
    var Animal = /** @class */ (function () {
        function Animal(name) {
            if (name === void 0) { name = "Animal"; }
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " run " + distance + "m");
        };
        return Animal;
    }());
    // 继承 Animal类
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            if (name === void 0) { name = "Snake"; }
            // 调用父类型构造方法 super()
            return _super.call(this, name) || this;
        }
        // 重写父类型的方法
        Snake.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('Snake 重写 Animal');
            _super.prototype.run.call(this, distance);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            if (name === void 0) { name = 'Horse'; }
            // 调用父类型构造方法
            return _super.call(this, name) || this;
        }
        // 重写父类型的方法
        Horse.prototype.run = function (distance) {
            if (distance === void 0) { distance = 50; }
            console.log('Horse 重写 Animal');
            // 调用父类型的一般方法
            _super.prototype.run.call(this, distance);
        };
        Horse.prototype.xxx = function () {
            console.log('xxx()');
        };
        return Horse;
    }(Animal));
    var snake = new Snake();
    snake.run();
    var horse = new Horse();
    horse.run();
    console.log("============== 多态 ================");
    // 父类型引用指向子类型的实例 ==> 多态
    var tom = new Horse("使用Horse 实现 Animal 多态");
    tom.run();
    /* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */
    var tom3 = new Animal('如果子类型没有扩展的方法 可以使用父类实现子类');
    tom3.run();
    /* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
    // const tom2: Horse = new Animal('tom2')
    // tom2.run()
})();
