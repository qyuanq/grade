const Koa = require('koa');
const Router = require('koa-router');
const mysql= require('mysql');
const co= require('co-mysql');
const body=require('koa-better-body');

let server = new Koa();//创建服务器
server.listen(8081); //创建8081端口

let conn=mysql.createPool({host:'localhost',user:'root',password:'root',database:'rank'});   //数据库连接池

server.context.db=co(conn); //将数据库连接对象包起来

server.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*');     //服务器端解决跨域的一种方式
    await next();
});

let router=new Router();    //创建router

router.use('/api',require('./routers/api'));

server.use(router.routes());         //将router挂载到服务器上
