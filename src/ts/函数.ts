// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(() => {
    console.log("==============函数================");

    // TS中 可以为参数添加类型 也可以为函数本身添加返回值类型
    // TypeScript 能够根据返回语句自动推断出返回值类型。

    // 命名函数
    function Add(x: number, y: number): number {
        return x + y
    }
    // 匿名函数
    let myAdd = function (x: number, y: number): number {
        return x + y
    }

    //完整函数类型
    // myAdd2 变量名
    // (x: number, y: number) => number 函数类型
    // function (x: number, y: number): number {return x + y }
    // 相当于函数的实现  要符合 函数的类型  这里使用的是一个名为 myAdd1 的函数
    let myAdd2: (x: number, y: number) => number =
        function myAdd1(x: number, y: number): number {
            return x + y
        }


    // 可选参数和默认参数
    const GetFullName = function (fistName: string = "默认", lastName?: string) {
        console.log("默认参数和可选参数");
    }

    GetFullName();


    // 剩余参数
    function showMsg(string: string, ...arr: number[]) {
        console.log(string);
        console.log(arr);
    }
    showMsg('剩余参数', 1, 2, 3, 4, 5);



    // 函数重载: 函数名相同, 而形参不同的多个函数
    // 需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 


    // 重载函数声明
    function add(x: string, y: string): string
    function add(x: number, y: number): number
    //function add(x: number, y: string): string

    // 定义函数实现
    function add(x: string | number, y: string | number): string | number {
        // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y
        }
        // else if (typeof x === 'number' && typeof y === 'string') {
        //     return x + y
        // }
    }

    console.log(add(1, 2))
    console.log(add('a', 'b'))
    //console.log(add(1, 'a'))


    
})()