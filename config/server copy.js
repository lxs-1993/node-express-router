var express = require("express")
var app = new express()
var bodyParser = require("body-parser")
// 路由模式
var router = express.Router()


// 引入跨域插件
const cors = require('cors'); 


// 配置bodyParser
app.use(bodyParser.json()) // 处理json数据的
app.use(bodyParser.urlencoded({extend: true})) // 处理表单数据的
// 解决跨域
app.use(cors());

// 日志中间件
app.use(async(req,res,next)=>{
  console.log("日志中间件开始")
  console.log(`${req.method} ${req.originalUrl}`) // req.method是请求的方式 req.originalUrl 是请求的url地址
  await next()
  console.log("日志中间件结束")
})
// cors后端来处理跨域问题
// app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   next();
// });
// let p = new Promise((resolve,reject)=>{
//   resolve('ok')
// })
let p = Promise.resolve("ok")
app.get("/user/:id",(req,res)=>{
  // console.log("req.query====",req.query)
  // setTimeout(()=>{
    console.log(p)
  
    p.then(Response=>{
      console.log("Response",Response)
      console.log("req.params====",req.params.id)
      res.send("hello express")
    })

  // })
})
app.post("/login",(req,res)=>{
  // console.log("req====post",req.body) // { name: '李四', age: '18' }
  res.send("hello express")
})
// 路由模式
router.get("/api/getList",(req,res)=>{
  let list = [
    {id:1,name:"张三1"},
    {id:2,name:"张三2"},
  ]
  res.status(200).send(list)
})
// 添加路由
app.use("/",router)
let port = 9527
app.listen(port,()=>{
  console.log(`端口是: http://localhost:${port}`);
})

let num = 18737653793
let str = num.toString()
let str1 = str.replaceAll(/\d/,'*')
str1
