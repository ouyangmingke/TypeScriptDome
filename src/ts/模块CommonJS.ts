// 自定义模块中都有一个module对象
// 可以使用module.exports对象
// 将模块内的成员共享出去，供外界使用
// exports =  module.exports
var moduleName = "使用模块"

// 不要在同一个模块中同时使用exports和module.exports  
// exports.moduleName = "测试模块"

// 外界使用require（）导入自定义模块时 永远以module.exports指向的对象为准
module.exports = {
    moduleName: "自定义模块"
}

console.log(module)

// Node.js中的模块化规范-CommonJS
// Node.js遵循CommonJS模块化规范，CommonJS规定了模块的特性和各模块之间如何相互依赖

// CommonJS规定

// 每个模块内部，module变量代表当前模块
// module变量是一个对象，它的exports属性（即module.exports）是对外的接口
// 加载某个模块，其实是加载该模块的module.exports属性。require()方法用于加载模块。