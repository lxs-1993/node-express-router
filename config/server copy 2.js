var express = require("express")
var app = new express()
var bodyParser = require("body-parser")
// 引入工具包
var util = require("util") // 这种是node自带的

var portHandler = (port)=>{
  const cors = require('cors');
  // 配置bodyParser
  app.use(bodyParser.json()) // 处理json数据的
  app.use(bodyParser.urlencoded({ extend: true })) // 处理表单数据的
  // 解决跨域
  app.use(cors());

  // 日志中间件
  app.use(async (req, res, next) => {
    console.log("日志中间件开始")
    console.log(`${req.method} ${req.originalUrl}`) // req.method是请求的方式 req.originalUrl 是请求的url地址
    await next()
    console.log("日志中间件结束")
  })
  // params可选参数
  app.get("/user/:id?", (req, res) => {
    console.log("req.params====", req.params.id)
    res.send("hello express")
  })
  app.post("/login", (req, res) => {
    res.send("hello express")
  })

  app.listen(port, () => {
    console.log(`端口是: http://localhost:${port}`);
  })
  // 暴露app.listen
  app.listenAsync = util.promisify(app.listen)
  return app
}
// 引入跨域插件
// 把端口暴露出去
export default portHandler
