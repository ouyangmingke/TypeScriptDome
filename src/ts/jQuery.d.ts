// 声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件

// TS编译器会扫描并加载项目中所有的TS声明文件
// 很多的第三方库都定义了对应的声明文件库, 库文件名一般为 @types/xxx, 可以在 https://www.npmjs.com/package/package 进行搜索

//有的第三库在下载时就会自动下载对应的声明文件库(比如: webpack),有的可能需要单独下载(比如jQuery/react)

// 定义操作
// 现在使用的是官方的声明文件
// npm install @types/jquery
//declare var jQuery: (selector: string) => any;