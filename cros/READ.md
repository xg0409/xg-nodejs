#Node 跨域 CORS 模块
```
1.网络请求策略
    同源策略的限制：XmlHttpRequest 只允许请求当前源（域名、协议、端口）的资源，所以AJAX是不允许跨域的。
    相反就是跨域：如果想让XmlHttpRequest 按照自己意愿（域名、协议、端口）请求数据，那就需要跨域
```
##下面是 Node 如何跨域的两种方法，均是在服务器设置，并不是JSOP这样不优雅的方式
```
1.方法一
app.use('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有   www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  if (req.method == 'OPTIONS') {
    res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
  }
  else {
    next();
  }
});
```
```
2.方法二
npm install cors

var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://www.baidu.com', //只有百度可以访问
  optionsSuccessStatus: 200 
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: '只有百度可以访问'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```