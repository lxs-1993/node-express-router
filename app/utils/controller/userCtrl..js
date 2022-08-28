// 用户接口 控制器
// 接口添加日志
var logger = require("../../../app/utils/logger")
const login = (req,res) =>{
  logger.warn("登录开始=====")
  res.send("hello 11")
}

module.exports = {
  login
}