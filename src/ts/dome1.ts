(() => {
    // TS 有类型注解
    function sayhi(str: string) {
        return `您好 ${str}`;
    }
    // ts let 经过编译后会变成 var
    let name = "MMK";
    console.log(sayhi(name))
})();

(() => {
    // 定义一个接口
    interface IPerson {
        firstName: string
        lastName: string
    }
    // 定义一个函数  使用接口做验证
    function greeter(person: IPerson) {
        return 'Hello, ' + person.firstName + ' ' + person.lastName
    }

    const use = {
        firstName: '东方',
        lastName: '不败'
    }
    console.log(greeter(use));


    // 定义一个类
    class Person {
        firstName: string
        lastName: string
        fullName: string
        // 构造函数
        constructor(firstName: string,
            lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = `${firstName}_${lastName}`;
        }
    }
    // 定义一个函数
    function showFullName(Person: Person) {
        console.log(Person.fullName);
    }

    // 实例化对象
    const person = new Person("诸葛", "孔明");
    console.log(greeter(person));
    showFullName(person);


})();



