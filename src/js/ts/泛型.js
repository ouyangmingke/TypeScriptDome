var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function () {
    console.log("==============泛型================");
    // 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
    // 定义一个泛型 方法
    function createArray2(value, count) {
        var arr = [];
        for (var index = 0; index < count; index++) {
            arr.push(value);
        }
        return arr;
    }
    var arr3 = createArray2(11, 3);
    console.log(arr3[0].toFixed());
    // console.log(arr3[0].split('')) // error
    var arr4 = createArray2('aa', 3);
    console.log(arr4[0].split(''));
    // console.log(arr4[0].toFixed()) // error
    // 多个泛型参数的函数
    function swap(a, b) {
        return [a, b];
    }
    var result = swap('abc', 123);
    console.log(result[0].length, result[1].toFixed());
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        return User;
    }());
    var UserCRUD = /** @class */ (function () {
        function UserCRUD() {
            this.data = [];
        }
        UserCRUD.prototype.add = function (user) {
            user = __assign(__assign({}, user), { id: Date.now() });
            this.data.push(user);
            console.log('保存user', user.id);
        };
        UserCRUD.prototype.getById = function (id) {
            return this.data.find(function (item) { return item.id === id; });
        };
        return UserCRUD;
    }());
    var userCRUD = new UserCRUD();
    userCRUD.add(new User('tom', 12));
    userCRUD.add(new User('tom2', 13));
    console.log(userCRUD.data);
    // 泛型类
    // 在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    var myGenericString = new GenericNumber();
    myGenericString.zeroValue = 'abc';
    myGenericString.add = function (x, y) {
        return x + y;
    };
    console.log(myGenericString.add(myGenericString.zeroValue, 'test'));
    console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12));
    // 指定泛型约束
    function fn2(x) {
        console.log(x.length);
    }
})();
