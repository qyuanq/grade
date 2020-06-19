<template>
    <div>
        <el-tabs tab-position="left" >
            <el-tab-pane v-for="(item,index) in count" :key="item.index" :label="labels[index]">
                <form class="form1" ref="form1">
                    <h1>{{labels[index]}}</h1>
                    <div class="content">
                        <div class="group-block">
                        <h2>工程设计思维(30分)</h2>
                        <label>1.主题符合任务的要求，体现与任务要求相关的思想情感和价值观。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade1" v-model="grade1">
                        <label>2.表达方式具有想象力和个性表现力，结构设计独到，凸显主题。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade2" v-model="grade2">
                        <label>3.作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade3" v-model="grade3">
                    </div>
                    <div class="group-block">
                        <h2>工程实践能力(20分)</h2>
                        <label>4.能根据任务要求准确、灵活选用相应类型的传感器。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade4" v-model="grade4">
                        <label>5.能正确连接主板、传感器等电子元件。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade5" v-model="grade5">
                    </div>
                    <div class="group-block">
                         <h2>信息技术素养(10分)</h2>
                        <label>6.能运用图形化编程软件控制传感器，使之实现任务功能。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade6" v-model="grade6">
                    </div>
                   <div class="group-block">
                       <h2>创新革新意识(10分)</h2>
                        <label>7.能利用原有知识与技能实现作品表现形式的优化。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade7" v-model="grade7">
                   </div>
                    <div class="group-block">
                        <h2>沟通协作能力(10分)</h2>
                        <label>8.小组分工明确、合作默契，作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数" name="grade8" v-model="grade8">
                    </div>
                    <el-button type="primary" plain @click="submitForm(index)">提交</el-button>
                    <el-button v-if="index == count-1" type="primary" plain @click="submitRank()">查看排名</el-button>
                    </div>
                     <input type="hidden" name="groups" :value="groups[index]"  ref="hidden">
                </form>
            </el-tab-pane>
            <!-- <el-tab-pane label="第二组">
                <form class="form1">
                     <h1>第二组</h1>
                    <div class="content">
                        <div class="group-block">
                        <h2>工程设计思维(30分)</h2>
                        <label>1.主题符合任务的要求，体现与任务要求相关的思想情感和价值观。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>2.表达方式具有想象力和个性表现力，结构设计独到，凸显主题。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>3.作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                        <h2>工程实践能力(20分)</h2>
                        <label>4.能根据任务要求准确、灵活选用相应类型的传感器。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>5.能正确连接主板、传感器等电子元件。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                         <h2>信息技术素养(10分)</h2>
                        <label>6.能运用图形化编程软件控制传感器，使之实现任务功能。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                   <div class="group-block">
                       <h2>创新革新意识(10分)</h2>
                        <label>7.能利用原有知识与技能实现作品表现形式的优化。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                   </div>
                    <div class="group-block">
                        <h2>沟通协作能力(10分)</h2>
                        <label>8.小组分工明确、合作默契，作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <el-button type="primary" plain @click="submitForm('ruleForm')">提交</el-button>
                    </div>
                </form>
            </el-tab-pane>
            <el-tab-pane label="第三组">
                <form class="form1">
                     <h1>第三组</h1>
                    <div class="content">
                        <div class="group-block">
                        <h2>工程设计思维(30分)</h2>
                        <label>1.主题符合任务的要求，体现与任务要求相关的思想情感和价值观。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>2.表达方式具有想象力和个性表现力，结构设计独到，凸显主题。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>3.作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                        <h2>工程实践能力(20分)</h2>
                        <label>4.能根据任务要求准确、灵活选用相应类型的传感器。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>5.能正确连接主板、传感器等电子元件。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                         <h2>信息技术素养(10分)</h2>
                        <label>6.能运用图形化编程软件控制传感器，使之实现任务功能。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                   <div class="group-block">
                       <h2>创新革新意识(10分)</h2>
                        <label>7.能利用原有知识与技能实现作品表现形式的优化。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                   </div>
                    <div class="group-block">
                        <h2>沟通协作能力(10分)</h2>
                        <label>8.小组分工明确、合作默契，作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <el-button type="primary" plain @click="submitForm('ruleForm')">提交</el-button>
                    </div>
                </form>
            </el-tab-pane>
            <el-tab-pane label="第四组">
                <form class="form1">
                     <h1>第四组</h1>
                    <div class="content">
                        <div class="group-block">
                        <h2>工程设计思维(30分)</h2>
                        <label>1.主题符合任务的要求，体现与任务要求相关的思想情感和价值观。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>2.表达方式具有想象力和个性表现力，结构设计独到，凸显主题。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>3.作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                        <h2>工程实践能力(20分)</h2>
                        <label>4.能根据任务要求准确、灵活选用相应类型的传感器。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>5.能正确连接主板、传感器等电子元件。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                         <h2>信息技术素养(10分)</h2>
                        <label>6.能运用图形化编程软件控制传感器，使之实现任务功能。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                   <div class="group-block">
                       <h2>创新革新意识(10分)</h2>
                        <label>7.能利用原有知识与技能实现作品表现形式的优化。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                   </div>
                    <div class="group-block">
                        <h2>沟通协作能力(10分)</h2>
                        <label>8.小组分工明确、合作默契，作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <el-button type="primary" plain @click="submitForm('ruleForm')">提交</el-button>
                    </div>
                </form>
            </el-tab-pane>
            <el-tab-pane label="第五组">
                 <form class="form1">
                     <h1>第五组</h1>
                    <div class="content">
                        <div class="group-block">
                        <h2>工程设计思维(30分)</h2>
                        <label>1.主题符合任务的要求，体现与任务要求相关的思想情感和价值观。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>2.表达方式具有想象力和个性表现力，结构设计独到，凸显主题。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>3.作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                        <h2>工程实践能力(20分)</h2>
                        <label>4.能根据任务要求准确、灵活选用相应类型的传感器。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                        <label>5.能正确连接主板、传感器等电子元件。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <div class="group-block">
                         <h2>信息技术素养(10分)</h2>
                        <label>6.能运用图形化编程软件控制传感器，使之实现任务功能。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                   <div class="group-block">
                       <h2>创新革新意识(10分)</h2>
                        <label>7.能利用原有知识与技能实现作品表现形式的优化。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                   </div>
                    <div class="group-block">
                        <h2>沟通协作能力(10分)</h2>
                        <label>8.小组分工明确、合作默契，作品达到预期目标。(10分)</label>
                        <input type="text" placeholder="请输入分数">
                    </div>
                    <el-button type="primary" plain @click="submitForm('ruleForm')">提交</el-button>
                    <el-button type="primary" plain @click="submitForm('ruleForm')">查看排名</el-button>
                    </div>
                </form>
            </el-tab-pane> -->
        </el-tabs>
    </div>
</template>
5
<script>
import {SERVER} from '@/config' 
export default {
    data () {
        return {
            count:localStorage.count,
            group:localStorage.group,
            labels:["第一组","第二组","第三组","第四组","第五组"],
            grade1:'',
            grade2:'',
            grade3:'',
            grade4:'',
            grade5:'',
            grade6:'',
            grade7:'',
            grade8:'',
            groups:["group1","group2","group3","group4","group5"]
        }
      },
      created(){
          this.count = parseInt( this.count)
        //   console.log(typeof this.count)
       
      },
      methods:{
         async submitForm(index){
            let formdata = new FormData();
            formdata.append("grade1",parseInt(this.grade1));
            formdata.append("grade2",parseInt(this.grade2));
            formdata.append("grade3",parseInt(this.grade3));
            formdata.append("grade4",parseInt(this.grade4));
            formdata.append("grade5",parseInt(this.grade5));
            formdata.append("grade6",parseInt(this.grade6));
            formdata.append("grade7",parseInt(this.grade7));
            formdata.append("grade8",parseInt(this.grade8));
            // 当前用户组
            formdata.append("category",this.group);
            // 第几组
            formdata.append("groups",this.$refs.hidden[index].value);
            let json = await this.axios.post(SERVER + 'api/addgrade',formdata)
            if(json.data.err){
               this.grade1='';
               this.grade2='';
               this.grade3='';
               this.grade4='';
               this.grade5='';
               this.grade6='';
               this.grade7='';
               this.grade8='';
            }else{
                alert("提交成功");
            }
          },
          submitRank(){
              this.$router.push('/rank');
          }
      }
    }
</script>

<style  lang='scss' scoped>
.form1 {
    background:#fff;
    .content{
        width:600px;margin:0 auto;
        text-align: cenetr;
        .group-block{
            text-align:left;
            label{display:block;}
            input{width:450px;height:25px;margin:20px 0;}
        }
        button{width:200px;margin:20px 0 30px -125px;}
    }
}


</style>
