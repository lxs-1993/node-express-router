var express = require("express")
var userInterface = require("../../../app/utils/controller/userCtrl.")
const router = express.Router();
const user = (app)=>{
  router.route("/userinfo/login").post()
  router.route("/userinfo/query").get(userInterface.login)
  // 使用这个路由 后端路由就是一个接口地址 ，前端路由是页面跳转的url地址
  // app.use("/api",router)
  app.use("/",router)
}
module.exports = {
  user
}