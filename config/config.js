// 系统常用的配置项

const config = {
  // vuecli---多环境 process.env.xxxx
  port: process.env.PORT || 3300
}
console.log("process.env.PORT",process.env.PORT)
module.exports = config