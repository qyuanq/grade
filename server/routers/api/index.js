const Router = require('koa-router');
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('rank', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql' ,
// });

let router = new Router();

router.post('/login' ,async ctx => {
    let{group,password}=ctx.request.fields;
  
    let rows=await ctx.db.query("SELECT * FROM user_table WHERE groups=?",group);
    console.log(group,password);
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
});

router.post('/addgrade',async ctx=>{
    let post=ctx.request.fields;
    let grade1 = Number(post['grade1']);
    let grade2 = Number(post['grade2']);
    let grade3 = Number(post['grade3']);
    let grade4 = Number(post['grade4']);
    let grade5 = Number(post['grade5']);
    let grade6 = Number(post['grade6']);
    let grade7 = Number(post['grade7']);
    let grade8 = Number(post['grade8']);

    let subject1 = grade1 + grade2 + grade3
    let subject2 =grade4 + grade5
    let subject3 =grade6;
    let subject4 =grade7;
    let subject5 =grade8;
    let score = grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8
    
    await ctx.db.query('INSERT INTO grade_table(category,subject1,subject2,subject3,subject4,subject5,groups,grade1,grade2,grade3,grade4,grade5,grade6,grade7,grade8,score) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[post['category'],subject1,subject2,subject3,subject4,subject5,post['groups'],grade1,grade2,grade3,grade4,grade5,grade6,grade7,grade8,score])
    ctx.body={err:1,msg:"添加成功"};
});

router.get('/rank/:count',async ctx=>{
    let{count} = ctx.params;
    count = Number(count)
    // 总分
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    let score = 0;
    // 五维总分
    let subject1 = 0;
    let subject2 = 0;
    let subject3 = 0;
    let subject4 = 0;
    let subject5 = 0;
    // 一组
    let group1_sub1 = 0
    let group1_sub2 = 0
    let group1_sub3 = 0
    let group1_sub4 = 0
    let group1_sub5 = 0
    // 二组
    let group2_sub1 = 0
    let group2_sub2 = 0
    let group2_sub3 = 0
    let group2_sub4 = 0
    let group2_sub5 = 0
    // 三组
    let group3_sub1 = 0
    let group3_sub2 = 0
    let group3_sub3 = 0
    let group3_sub4 = 0
    let group3_sub5 = 0
    // 四组
    let group4_sub1 = 0
    let group4_sub2 = 0
    let group4_sub3 = 0
    let group4_sub4 = 0
    let group4_sub5 = 0
    // 五组
    let group5_sub1 = 0
    let group5_sub2 = 0
    let group5_sub3 = 0
    let group5_sub4 = 0
    let group5_sub5 = 0
    let rows1 = await ctx.db.query("SELECT * FROM grade_table WHERE groups=? order by id desc limit ?",['group1',count+1])
    // 循环5次，count + 老师
    for(let i=0; i<=count; i++){
        score = rows1[i]['score'];
        subject1 = rows1[i]['subject1'];
        subject2 = rows1[i]['subject2'];
        subject3 = rows1[i]['subject3'];
        subject4 = rows1[i]['subject4'];
        subject5 = rows1[i]['subject5'];
        // console.log(rows1[i]['category'],rows1[i]['groups'])
        if(rows1[i]['category'] === rows1[i]['groups']){
            score =score * 0.3
            subject1 =  subject1 * 0.3
            subject2 =  subject2 * 0.3
            subject3 =  subject3 * 0.3
            subject4 =  subject4 * 0.3
            subject5 =  subject5 * 0.3
        }else if(rows1[i]['category'] === 't1'){
            score = score * 0.4
            subject1 =  subject1 * 0.4
            subject2 =  subject2 * 0.4
            subject3 =  subject3 * 0.4
            subject4 =  subject4 * 0.4
            subject5 =  subject5 * 0.4
        }else{
            score = score * (0.3 * 1000 / (count-1) / 1000)
            subject1 =  subject1 * (0.3 * 1000 / (count-1) / 1000)
            subject2 =  subject2 * (0.3 * 1000 / (count-1) / 1000)
            subject3 =  subject3 * (0.3 * 1000 / (count-1) / 1000)
            subject4 =  subject4 * (0.3 * 1000 / (count-1) / 1000)
            subject5 =  subject5 * (0.3 * 1000 / (count-1) / 1000)
        }
        sum1 = sum1 + score;
        group1_sub1 = group1_sub1 + subject1;
        group1_sub2 = group1_sub2 + subject2;
        group1_sub3 = group1_sub3 + subject3;
        group1_sub4 = group1_sub4 + subject4;
        group1_sub5 = group1_sub5 + subject5;
    }
    sum1 = Number(sum1.toFixed(2))
    group1_sub1 = Number(group1_sub1.toFixed(2))
    group1_sub2 = Number(group1_sub2.toFixed(2))
    group1_sub3 = Number(group1_sub3.toFixed(2))
    group1_sub4 = Number(group1_sub4.toFixed(2))
    group1_sub5 = Number(group1_sub5.toFixed(2))
    console.log(sum1);
    
    
    let rows2 = await ctx.db.query("SELECT * FROM grade_table WHERE groups=? order by id desc limit ?",['group2',count+1])
    for(let i=0; i<=count; i++){
        score = rows2[i]['score'];
        subject1 = rows2[i]['subject1'];
        subject2 = rows2[i]['subject2'];
        subject3 = rows2[i]['subject3'];
        subject4 = rows2[i]['subject4'];
        subject5 = rows2[i]['subject5'];
        if(rows2[i]['category'] === rows2[i]['groups']){
            score = score * 0.3
            subject1 =  subject1 * 0.3
            subject2 =  subject2 * 0.3
            subject3 =  subject3 * 0.3
            subject4 =  subject4 * 0.3
            subject5 =  subject5 * 0.3
        }else if(rows2[i]['category'] === 't1'){
            score = score * 0.4
            subject1 =  subject1 * 0.4
            subject2 =  subject2 * 0.4
            subject3 =  subject3 * 0.4
            subject4 =  subject4 * 0.4
            subject5 =  subject5 * 0.4
        }else{
            score = score * (0.3 * 1000 / (count-1) / 1000)
            subject1 =  subject1 * (0.3 * 1000 / (count-1) / 1000)
            subject2 =  subject2 * (0.3 * 1000 / (count-1) / 1000)
            subject3 =  subject3 * (0.3 * 1000 / (count-1) / 1000)
            subject4 =  subject4 * (0.3 * 1000 / (count-1) / 1000)
            subject5 =  subject5 * (0.3 * 1000 / (count-1) / 1000)
        }
        sum2 = sum2 + score;
        group2_sub1 = group2_sub1 + subject1;
        group2_sub2 = group2_sub2 + subject2;
        group2_sub3 = group2_sub3 + subject3;
        group2_sub4 = group2_sub4 + subject4;
        group2_sub5 = group2_sub5 + subject5;
    }
    sum2 = Number(sum2.toFixed(2))
    group2_sub1 = Number(group2_sub1.toFixed(2))
    group2_sub2 = Number(group2_sub2.toFixed(2))
    group2_sub3 = Number(group2_sub3.toFixed(2))
    group2_sub4 = Number(group2_sub4.toFixed(2))
    group2_sub5 = Number(group2_sub5.toFixed(2))

    let rows3 = await ctx.db.query("SELECT * FROM grade_table WHERE groups=? order by id desc limit ?",['group3',count+1])
    for(let i=0; i<=count; i++){
        score = rows3[i]['score'];
        subject1 = rows3[i]['subject1'];
        subject2 = rows3[i]['subject2'];
        subject3 = rows3[i]['subject3'];
        subject4 = rows3[i]['subject4'];
        subject5 = rows3[i]['subject5'];
        if(rows3[i]['category'] === rows3[i]['groups']){
            score = score * 0.3
            subject1 =  subject1 * 0.3
            subject2 =  subject2 * 0.3
            subject3 =  subject3 * 0.3
            subject4 =  subject4 * 0.3
            subject5 =  subject5 * 0.3
        }else if(rows3[i]['category'] === 't1'){
            score = score * 0.4
            subject1 =  subject1 * 0.4
            subject2 =  subject2 * 0.4
            subject3 =  subject3 * 0.4
            subject4 =  subject4 * 0.4
            subject5 =  subject5 * 0.4
        }else{
            score = score * (0.3 * 1000 / (count-1) / 1000)
            subject1 =  subject1 * (0.3 * 1000 / (count-1) / 1000)
            subject2 =  subject2 * (0.3 * 1000 / (count-1) / 1000)
            subject3 =  subject3 * (0.3 * 1000 / (count-1) / 1000)
            subject4 =  subject4 * (0.3 * 1000 / (count-1) / 1000)
            subject5 =  subject5 * (0.3 * 1000 / (count-1) / 1000)
        }
        sum3 = sum3 + score;
        group3_sub1 = group3_sub1 + subject1;
        group3_sub2 = group3_sub2 + subject2;
        group3_sub3 = group3_sub3 + subject3;
        group3_sub4 = group3_sub4 + subject4;
        group3_sub5 = group3_sub5 + subject5;
    }
    sum3 = Number(sum3.toFixed(2))
    group3_sub1 = Number(group3_sub1.toFixed(2))
    group3_sub2 = Number(group3_sub2.toFixed(2))
    group3_sub3 = Number(group3_sub3.toFixed(2))
    group3_sub4 = Number(group3_sub4.toFixed(2))
    group3_sub5 = Number(group3_sub5.toFixed(2))

    let rows4 = await ctx.db.query("SELECT * FROM grade_table WHERE groups=? order by id desc limit ?",['group4',count+1])
    for(let i=0; i<=count; i++){
        score = rows4[i]['score'];
        subject1 = rows4[i]['subject1'];
        subject2 = rows4[i]['subject2'];
        subject3 = rows4[i]['subject3'];
        subject4 = rows4[i]['subject4'];
        subject5 = rows4[i]['subject5'];
        if(rows4[i]['category'] === rows4[i]['groups']){
            score = score * 0.3
            subject1 =  subject1 * 0.3
            subject2 =  subject2 * 0.3
            subject3 =  subject3 * 0.3
            subject4 =  subject4 * 0.3
            subject5 =  subject5 * 0.3
        }else if(rows4[i]['category'] === 't1'){
            score = score * 0.4
            subject1 =  subject1 * 0.4
            subject2 =  subject2 * 0.4
            subject3 =  subject3 * 0.4
            subject4 =  subject4 * 0.4
            subject5 =  subject5 * 0.4
        }else{
            score = score * (0.3 * 1000 / (count-1) / 1000)
            subject1 =  subject1 * (0.3 * 1000 / (count-1) / 1000)
            subject2 =  subject2 * (0.3 * 1000 / (count-1) / 1000)
            subject3 =  subject3 * (0.3 * 1000 / (count-1) / 1000)
            subject4 =  subject4 * (0.3 * 1000 / (count-1) / 1000)
            subject5 =  subject5 * (0.3 * 1000 / (count-1) / 1000)
        }
        sum4 = sum4 + score;
        group4_sub1 = group4_sub1 + subject1;
        group4_sub2 = group4_sub2 + subject2;
        group4_sub3 = group4_sub3 + subject3;
        group4_sub4 = group4_sub4 + subject4;
        group4_sub5 = group4_sub5 + subject5;
    }
    sum4 = Number(sum4.toFixed(2))
    group4_sub1 = Number(group4_sub1.toFixed(2))
    group4_sub2 = Number(group4_sub2.toFixed(2))
    group4_sub3 = Number(group4_sub3.toFixed(2))
    group4_sub4 = Number(group4_sub4.toFixed(2))
    group4_sub5 = Number(group4_sub5.toFixed(2))

    let rows5 = await ctx.db.query("SELECT * FROM grade_table WHERE groups=? order by id desc limit ?",['group5',count+1])
    for(let i=0; i<=count; i++){
        let score = rows5[i]['score'];
        subject1 = rows5[i]['subject1'];
        subject2 = rows5[i]['subject2'];
        subject3 = rows5[i]['subject3'];
        subject4 = rows5[i]['subject4'];
        subject5 = rows5[i]['subject5'];
        if(rows5[i]['category'] === rows5[i]['groups']){
            score = score * 0.3
            subject1 =  subject1 * 0.3
            subject2 =  subject2 * 0.3
            subject3 =  subject3 * 0.3
            subject4 =  subject4 * 0.3
            subject5 =  subject5 * 0.3
        }else if(rows5[i]['category'] === 't1'){
            score = score * 0.4
            subject1 =  subject1 * 0.4
            subject2 =  subject2 * 0.4
            subject3 =  subject3 * 0.4
            subject4 =  subject4 * 0.4
            subject5 =  subject5 * 0.4
        }else{
            score = score * (0.3 * 1000 / (count-1) / 1000)
            subject1 =  subject1 * (0.3 * 1000 / (count-1) / 1000)
            subject2 =  subject2 * (0.3 * 1000 / (count-1) / 1000)
            subject3 =  subject3 * (0.3 * 1000 / (count-1) / 1000)
            subject4 =  subject4 * (0.3 * 1000 / (count-1) / 1000)
            subject5 =  subject5 * (0.3 * 1000 / (count-1) / 1000)
        }
        sum5 = sum5 + score;
        group5_sub1 = group5_sub1 + subject1;
        group5_sub2 = group5_sub2 + subject2;
        group5_sub3 = group5_sub3 + subject3;
        group5_sub4 = group5_sub4 + subject4;
        group5_sub5 = group5_sub5 + subject5;
        console.log(group5_sub1,group5_sub2,group5_sub3,group5_sub4,group5_sub5)
    }
    sum5 = Number(sum5.toFixed(2))
    group5_sub1 = Number(group5_sub1.toFixed(2))
    group5_sub2 = Number(group5_sub2.toFixed(2))
    group5_sub3 = Number(group5_sub3.toFixed(2))
    group5_sub4 = Number(group5_sub4.toFixed(2))
    group5_sub5 = Number(group5_sub5.toFixed(2))
    console.log(group5_sub1,group5_sub2,group5_sub3,group5_sub4,group5_sub5)

    // 五维数据
    let json = [
        {'name':'第一组','values':[group1_sub1,group1_sub2,group1_sub3,group1_sub4,group1_sub5]},
        {'name':'第二组','values':[group2_sub1,group2_sub2,group2_sub3,group2_sub4,group2_sub5]},
        {'name':'第三组','values':[group3_sub1,group3_sub2,group3_sub3,group3_sub4,group3_sub5]},
        {'name':'第四组','values':[group4_sub1,group4_sub2,group4_sub3,group4_sub4,group4_sub5]},
        {'name':'第五组','values':[group5_sub1,group5_sub2,group5_sub3,group5_sub4,group5_sub5]}
    ]

    let res = [
        {'group':'第一组','grade':sum1},
        {'group':'第二组','grade':sum2},
        {'group':'第三组','grade':sum3},
        {'group':'第四组','grade':sum4},
        {'group':'第五组','grade':sum5}
    ]
    let arr = [];
    let pics = [];
    for(let i =0; i<count; i++){
        // 总分
        arr.push(res[i])
        // 五维
        pics.push(json[i])
    }
    // sort()从小到大排序
    arr.sort((a,b) => {
        return (b.grade) - (a.grade);
    })
    
    arr.forEach((item,i)=>{
        item.rank=i+1;
    })
    console.log(pics)
    
    ctx.body={arr,pics};
})
module.exports=router.routes();