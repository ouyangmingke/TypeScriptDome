// 基础类型
(() => {
    // 布尔类型 --> boolean
    let isDone: boolean = false;
    isDone = true;
    console.log(isDone);

    // 数字类型 --> number
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    // 字符串 --> string
    let str: string = "字符串"
    console.log(str);

    // undefined 和 null  所有类型的子类型 可以赋值给任何类型 要在 tsconfig.json 中关闭严格模式
    let und: undefined = undefined;
    let nll: null = null;
    console.log(und);
    console.log(nll);

    // 数组类型
    let arr: number[] = [1, 2, 3, 4, 5];
    // 数组泛型写法
    let arr2: Array<Array<number>> = [[1, 2], [3, 4], [5, 6]];
    console.log(arr);
    console.log(arr2);

    // 元组类型
    let Tuple: [string, number, boolean] = ['string', 1, true];
    console.log(Tuple);

    // 枚举
    enum color {
        red,
        green,
        blue
    }
    let mycolor: color = color.red;
    console.log(mycolor);
    console.log(color[2]);

    // any 不确定数据类型时使用
    // 缺点是没有数据检测
    let an: any[] = [100, "string"];
    console.log(an);

    // void  没有任何类型
    /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
    function fn(): void {
        console.log('fn()')
        // return undefined
        // return null
        // return 1 // error
    }
    console.log(fn());

    // object 类型 除 number，string，boolean之外的类型
    function getobj(obj: object): object {
        console.log(obj);
        return {
            name: '姓名',
            age: 18
        }
    }
    console.log(getobj({ obj: "obj" }));

    // Union Types 联合类型  表示取值可以为多种类型中的一种
    function getstring(str: number | string): string {
        return str.toString();
    }

    console.log(getstring("联合类型 取值可以为多种类型中的一种"));

    // 类型断言
    function getLength(str: number | string) {
        // (<string>str) 类型断言 告诉编译器我知道我在干什么 
        // 此时是告诉编译器  str 为 string 类型 判断 lenght 是否存在
        if ((<string>str).length) {
            // (str as string)  tsx中只能用这种方式  执行转换
            return (str as string).length
        } else {
            return str.toString().length
        }
    }
    console.log("abc 长度为" + getLength('abc'));

    // 类型推断
    
    /* 定义变量时赋值了, 推断为对应的类型 */
    let b9 = 123 // number
    // b9 = 'abc' // error
    console.log(b9 as number);

    /* 定义变量时没有赋值, 推断为any类型 */
    let b10  // any类型
    b10 = 123
    b10 = 'abc'
    console.log(b10 as any);

})()