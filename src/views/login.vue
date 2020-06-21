<template>
    <div class="container">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
            <el-form-item label="分组" prop="group">
                <el-select v-model="ruleForm.group" placeholder="请选择" name="group" class="select" ref="group">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="共几组" prop="count">
                <el-select v-model="ruleForm.count" placeholder="请选择" name="count" class="select">
                    <el-option v-for="item in counts" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" placeholder="请输入密码" name="pass" v-model="ruleForm.pass" autocomplete="off" class="pwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <!-- <el-button type="danger" @click="$router.push('/register')">注册</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {SERVER} from '@/config' 
export default {
    data () {
         var checkGroup = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('请填写第几组'));
            }else{
                 callback();
            }
        };
        var checkCount = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('请填写共有几组'));
            }else{
                 callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        };
        return {
            options: [{
                value: 'group1',
                label: '第一组'
                }, {
                value: 'group2',
                label: '第二组'
                }, {
                value: 'group3',
                label: '第三组'
                }, {
                value: 'group4',
                label: '第四组'
                }, {
                value: 'group5',
                label: '第五组'
                },{
                value: 't1',
                label: '教师'
                }
            ],
            counts: [{
                value: 1,
                label: '一'
                }, {
                value: 2,
                label: '二'
                }, {
                value: 3,
                label: '三'
                }, {
                value: 4,
                label: '四'
                }, {
                value: 5,
                label: '五'
            }],

            ruleForm: {
                pass: '',
                checkPass: '',
                group: '',
                count:null
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                group: [
                    { validator: checkGroup, trigger: 'blur' }
                ],
                count:[
                    { validator: checkCount, trigger: 'blur' }
                ]
            },
            SERVER
        }
      },
      methods:{
        submitForm(formName) {    
            this.$refs[formName].validate((valid) => {
            if (valid) {
                let formdata = new FormData();
                formdata.append('group',this.ruleForm.group);
                formdata.append('count',this.ruleForm.count);
                formdata.append('password',this.ruleForm.pass);
                this.axios.post(SERVER + 'api/login',formdata
                ).then(res => {
                    if(res.data.err){
                    alert(res.data.msg);
                }else{
                    localStorage.count = this.ruleForm.count;
                    localStorage.group = this.ruleForm.group;
                    // localStorage.setItem("group", this.ruleForm.group);
                    this.$router.push('/index');
                }
                })
            } else {
                console.log('error submit!!');
                return false;
            }
         });
        }
      }
    }
</script>

<style lang='scss' scoped>
.container{
    width:600px;
    margin:100px auto 0;
    .select{width:80%;}
    .pwd{width:80%;}
}
@media (max-width:767.98px){
    .container{width:100%;}
}
</style>
