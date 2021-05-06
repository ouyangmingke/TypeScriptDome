// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(function () {
    console.log("==============函数================");
    // TS中 可以为参数添加类型 也可以为函数本身添加返回值类型
    // TypeScript 能够根据返回语句自动推断出返回值类型。
    // 命名函数
    function Add(x, y) {
        return x + y;
    }
    // 匿名函数
    var myAdd = function (x, y) {
        return x + y;
    };
    //完整函数类型
    // myAdd2 变量名
    // (x: number, y: number) => number 函数类型
    // function (x: number, y: number): number {return x + y }
    // 相当于函数的实现  要符合 函数的类型  这里使用的是一个名为 myAdd1 的函数
    var myAdd2 = function myAdd1(x, y) {
        return x + y;
    };
    // 可选参数和默认参数
    var GetFullName = function (fistName, lastName) {
        if (fistName === void 0) { fistName = "默认"; }
        console.log("默认参数和可选参数");
    };
    GetFullName();
    // 剩余参数
    function showMsg(string) {
        var arr = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arr[_i - 1] = arguments[_i];
        }
        console.log(string);
        console.log(arr);
    }
    showMsg('剩余参数', 1, 2, 3, 4, 5);
    //function add(x: number, y: string): string
    // 定义函数实现
    function add(x, y) {
        // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y;
        }
        else if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        }
        // else if (typeof x === 'number' && typeof y === 'string') {
        //     return x + y
        // }
    }
    console.log(add(1, 2));
    console.log(add('a', 'b'));
    //console.log(add(1, 'a'))
})();
