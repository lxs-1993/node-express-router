### 请求的方式
```javacript
  post 
  get
  delete
  put
  patch
  options
```
### MVC模式(后端常用的开发模式)
  1: M-module(模型)
  2: V-view(视图)
  3: C-controller(控制器，http请求入口)

### express-jade 前端模板 相当于vue中的template
### 中间件middleWare

### 模块化
```javascript
1: module.exports const variable = require('./1')
2: Esmodule import export export default
```
### 支持ES6的语法
```javascript 
babel-cli babel-node
cnpm i babel-cli babel-preset-env babel-plugin-add-module-exports
```
### 解决跨域问题
```javascript
cors 后端处理
nginx 中间代理
webpack proxy 中间代理 仅限开发使用
```
### cookie(浏览器上)-session(服务器上)
```javascript
 cookie--5k
 通过会话cookie-session识别不同的用户

 登陆后服务端分配的cookieId和sessionId是绑定的关系嘛，还是说本来就是一个id
 登录成功之后--生成的sessionId--返回给浏览器并设置到cookieId
 chrome >=80版本 http写一下不在携带cookie https支持
 小程序 线上环境一定是https
```
### 框架日志
```javascript
  日志非常重要，运维，调试
```
### 对port进行可配置的处理
1: 通过cross-env 设置环境变量(这样写的好处实现可配置性)
yarn add -D cross-env
```javascript

```