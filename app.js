const koa = require('koa2')

const app = new koa()

// 调用中间件
app.use(async (ctx) => {
    // 返回数据给页面
    ctx.response.body = "hello,koa"
})

const port = 5050

app.listen(port, () => {
    console.log('server is running,port is' + port);
})