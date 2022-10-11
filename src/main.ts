import './ts/基础类型'
import './ts/接口'
import './ts/类'
import './ts/函数'
import './ts/泛型'
import './ts/声明文件和内置对象'

const hh = "import/export 只能在模块顶层使用，不能在函数、判断语句等代码块之中引用；require/exports 可以。"
document.writeln(`<p>${hh} </p>`)

var A = require('./ts/模块CommonJS')
document.writeln(A.moduleName)

// 引入 export default 导出的模块不用加 {},引入非 export default 导出的模块需要加 {}。
import moduleName, { common } from './ts/模块Es6';
document.writeln(`<p>moduleName:${moduleName} common:${common}</p>`)




