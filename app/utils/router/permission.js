var express = require("express")

const router = express.Router();

// module.exports.fn = ()=>{

// }

const permission = (app)=>{
  router.route("/permission/login").post()
  router.route("/permission/query").get()
  // 使用这个路由 后端路由就是一个接口地址 ，前端路由是页面跳转的url地址
  // app.use("/api",router)
  app.use("/",router)
}
// es6的导出
module.exports = permission