// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
(function () {
    /*
    在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
    接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
    接口类型的对象
     多了或者少了属性是不允许的
     可选属性: ?
     只读属性: readonly
    */
    /*
    需求: 创建人的对象, 需要对人的属性进行一定的约束
      id是number类型, 必须有, 只读的
      name是string类型, 必须有
      age是number类型, 必须有
      sex是string类型, 可以没有
    */
    console.log("==============接口================");
    // readonly vs const
    // 做为变量使用的话用 const，若做为属性则使用 readonly
    var person = {
        id: 1,
        name: 'tom',
        age: 20,
        sex: '男'
    };
    console.log(person);
    var mySearch = function 函数(source, sub) {
        // search查找子字符串
        return source.search(sub) > -1;
    };
    console.log(mySearch('abcd', 'bc'));
})();
