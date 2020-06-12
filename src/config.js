// 开发模式与生产模式下服务器地址的变化
let server='';
if(process.env.NODE_ENV=='development'){
  server='http://localhost:8081/';
}else{
  server='http://aaa.com/';
}

export const SERVER=server;
