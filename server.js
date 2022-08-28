const express = require('./config/server')
// import express  from "./config/server"
var logger = require("./app/utils/logger")
const server = express()
const config = require('./config/config')
server.listenAsync(config.port).then(()=>{
  console.log("logger====",logger)
  logger.warn("服务已经启动,端口是"+config.port)
  logger.info("服务已经启动,端口是"+config.port)
})