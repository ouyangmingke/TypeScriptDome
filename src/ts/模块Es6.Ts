
const moduleName = '模块Es6'

// 默认导出 一个文件只能导出一个 default 模块
export default moduleName
export const common = "普通导出"
export function read() {
    return "read"
}
const item1 = 1
const item2 = 2
export { item1, item2 }

// 引入 export default 导出的模块不用加 {},引入非 export default 导出的模块需要加 {}。
// import moduleName, { common } from '模块Es6';

// 在验证代码的时候遇到如下报错
// access to script from origin 'null' has been blocked by CORS policy
// 浏览器引入模块的 <script> 元素要添加 type="module 属性，
// 但 module 不支持 FTP 文件协议(file://)，只支持 HTTP 协议，
// 所以本地需要使用 http-server 等本地网络服务器打开网页文件。

// import/export 不能对引入模块重新赋值/定义
