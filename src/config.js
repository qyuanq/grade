// 开发模式与生产模式下服务器地址的变化
let server='';
if(process.env.NODE_ENV=='development'){
  // server='http://192.168.1.5:8081/'
  server='http://grade.free.qydev.com/';
}else{
  server='http://grade.free.qydev.com/';
}

export const SERVER=server;
