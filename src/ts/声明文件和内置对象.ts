// 引入文件
import jQuery from 'jquery'

(() => {
    console.log("==============声明文件================");
    jQuery("")
    /* 
    当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
    声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码
      declare var jQuery: (selector: string) => any;
    声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件
    下载声明文件: npm install @types/jquery --save-dev
    */

    console.log("==============内置对象================");
    // ECMAScript 的内置对象
    // Boolean
    // Number
    // String
    // Date
    // RegExp
    // Error
    /* 1. ECMAScript 的内置对象 */
    let b: Boolean = new Boolean(1) // 布尔
    let n: Number = new Number(true) // 数字
    let s: String = new String('abc') // 字符串
    let d: Date = new Date() // 时间
    let r: RegExp = /^1/ // 正则表达式
    let e: Error = new Error('error message') // 错误信息
    b = true
    // let bb: boolean = new Boolean(2)  // error

    // BOM 和 DOM 的内置对象
    // Window
    // Document
    // HTMLElement
    // DocumentFragment
    // Event
    // NodeList

    const div: HTMLElement = document.getElementById('test')
    const divs: NodeList = document.querySelectorAll('div')
    document.addEventListener('click', (event: MouseEvent) => {
        console.dir(event.target)
    })
    const fragment: DocumentFragment = document.createDocumentFragment()

})()