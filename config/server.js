var express = require("express")
var app = new express()
var bodyParser = require("body-parser")
var fs = require("fs")
var path = require("path")
// 引入工具包
var util = require("util") // 这种是node自带的
// var userRouter = require("../app/utils/router/userInfo")
// var permissionRouter = require("../app/utils/router/permission")
// console.log("permissionRouter",permissionRouter)
// console.log("userRouter",userRouter)
// 引入跨域插件
// 把端口暴露出去
module.exports = function (port) {
  const cors = require('cors');
  // 配置bodyParser
  app.use(bodyParser.json()) // 处理json数据的
  app.use(bodyParser.urlencoded({ extend: true })) // 处理表单数据的
  // 解决跨域
  app.use(cors());
  // 暴露app.listen
  app.listenAsync = util.promisify(app.listen)

  // userRouter.user(app)
  // permissionRouter.permission(app)
  // 动态加载路由 process.cwd() 程序所在的当前项目的根目录
  console.log("__dirname",__dirname) //  E:\0007-node\02-demo\config
  console.log("process.cwd()",process.cwd()) //  E:\0007-node\02-demo
  var currentDir = process.cwd()
  // console.log("currentDir===",currentDir) //  E:\0007-node\02-demo
  var routerDir =currentDir + '/app/utils/router'
  // 同步读取目录下的文件
  fs.readdirSync(routerDir).forEach(file => {
    // console.log("file===",file)
    //
    var filePath = path.join(routerDir,file)
    console.log("filePath====",filePath) // = E:\0007-node\02-demo\app\utils\router\userInfo.js
    // 加载并执行
    console.log(require(filePath)(app))
    require(filePath)(app)
    
  });
  return app
}
