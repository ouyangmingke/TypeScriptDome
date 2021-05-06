// 基础类型
(function () {
    console.log("==============基础类型================");
    // 布尔类型 --> boolean
    var isDone = false;
    isDone = true;
    console.log(isDone);
    // 数字类型 --> number
    var a1 = 10; // 十进制
    var a2 = 10; // 二进制
    var a3 = 10; // 八进制
    var a4 = 0xa; // 十六进制
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    // 字符串 --> string
    var str = "字符串";
    console.log(str);
    // undefined 和 null  所有类型的子类型 可以赋值给任何类型 要在 tsconfig.json 中关闭严格模式
    var und = undefined;
    var nll = null;
    console.log(und);
    console.log(nll);
    // 数组类型
    var arr = [1, 2, 3, 4, 5];
    // 数组泛型写法
    var arr2 = [[1, 2], [3, 4], [5, 6]];
    console.log(arr);
    console.log(arr2);
    // 元组类型
    var Tuple = ['string', 1, true];
    console.log(Tuple);
    // 枚举
    var color;
    (function (color) {
        color[color["red"] = 0] = "red";
        color[color["green"] = 1] = "green";
        color[color["blue"] = 2] = "blue";
    })(color || (color = {}));
    var mycolor = color.red;
    console.log(mycolor);
    console.log(color[2]);
    // any 不确定数据类型时使用
    // 缺点是没有数据检测
    var an = [100, "string"];
    console.log(an);
    // void  没有任何类型
    /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
    function fn() {
        console.log('fn()');
        // return undefined
        // return null
        // return 1 // error
    }
    console.log(fn());
    // object 类型 除 number，string，boolean之外的类型
    function getobj(obj) {
        console.log(obj);
        return {
            name: '姓名',
            age: 18
        };
    }
    console.log(getobj({ obj: "obj" }));
    // Union Types 联合类型  表示取值可以为多种类型中的一种
    function getstring(str) {
        return str.toString();
    }
    console.log(getstring("联合类型 取值可以为多种类型中的一种"));
    // 类型断言
    function getLength(str) {
        // (<string>str) 类型断言 告诉编译器我知道我在干什么 
        // 此时是告诉编译器  str 为 string 类型 判断 lenght 是否存在
        if (str.length) {
            // (str as string)  tsx中只能用这种方式  执行转换
            return str.length;
        }
        else {
            return str.toString().length;
        }
    }
    console.log("abc 长度为" + getLength('abc'));
    // 类型推断
    /* 定义变量时赋值了, 推断为对应的类型 */
    var b9 = 123; // number
    // b9 = 'abc' // error
    console.log(b9);
    /* 定义变量时没有赋值, 推断为any类型 */
    var b10; // any类型
    b10 = 123;
    b10 = 'abc';
    console.log(b10);
})();
