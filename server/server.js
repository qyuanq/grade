const Koa = require('koa');
const Router = require('koa-router');
const mysql= require('mysql');
const co= require('co-mysql');
const cors = require('koa-cors')   // npm i koa-cors

const body=require('koa-better-body');

let conn=mysql.createPool({host:'localhost',user:'root',password:'root',database:'rank'});   //数据库连接池

let server = new Koa();//创建服务器
server.listen(8081); //创建8081端口

let obj=body({uploadDir: 'upload'});
server.use(obj);

server.context.db=co(conn); //将数据库连接对象包起来

// server.use(async (ctx,next)=>{
//     await ctx.set('Access-Control-Allow-Origin','*');     //服务器端解决跨域的一种方式
//     await next();
// });
server.use(cors())
server.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200; 
    } else {
      await next();
    }
  });



let router=new Router();    //创建router

router.use('/api',require('./routers/api'));

server.use(router.routes());         //将router挂载到服务器上
