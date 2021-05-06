// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
(() => {
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
    console.log("==============接口================")

    // 定义接口
    interface IPerson {
        // readonly 只读属性
        readonly id: number
        name: string
        age: number
        // ? 可选属性
        sex?: string
    }
    // readonly vs const
    // 做为变量使用的话用 const，若做为属性则使用 readonly
    const person: IPerson = {
        id: 1,
        name: 'tom',
        age: 20,
        sex: '男'
    }
    console.log(person);


    //接口可以描述函数类型(参数的类型与返回的类型)
    interface ISearchFunc {
        // 用接口定义函数的形状
        (source: string, subString: string): boolean
    }
    const mySearch: ISearchFunc = function 函数(source: string, sub: string): boolean {
        // search查找子字符串
        return source.search(sub) > -1
    }

    console.log(mySearch('abcd', 'bc'))

})();



