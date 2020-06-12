const Router = require('koa-router');
let router=new Router();

router.post('/login',ctx=>{
    let{group,password}=ctx.request.fields;
    let rows=await ctx.db.query("SELECT * FROM user_table WHERE group=?",group);
    if(rows.length == 0){
        ctx.body = {err:1,msg:'用户组不存在'};
    }else{
        let row = rows[0];
        if(row['password'] != password){
            ctx.body={err:1,msg:'密码错误'};
        }else{
            ctx.body={err:0,msg:'登录成功'};
        }
    }
})