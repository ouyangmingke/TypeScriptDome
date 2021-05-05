(function () {
    // TS 有类型注解
    function sayhi(str) {
        return "\u60A8\u597D " + str;
    }
    // ts let 经过编译后会变成 var
    var name = "MMK";
    console.log(sayhi(name));
})();
(function () {
    // 定义一个函数  使用接口做验证
    function greeter(person) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName;
    }
    var use = {
        firstName: '东方',
        lastName: '不败'
    };
    console.log(greeter(use));
    // 定义一个类
    var Person = /** @class */ (function () {
        // 构造函数
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + "_" + lastName;
        }
        return Person;
    }());
    // 定义一个函数
    function showFullName(Person) {
        console.log(Person.fullName);
    }
    // 实例化对象
    var person = new Person("诸葛", "孔明");
    console.log(greeter(person));
    showFullName(person);
})();
