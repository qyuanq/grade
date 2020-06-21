<template>
    <div>
        <h1>排名</h1>
        <el-table :data="tableData" class="table">
            <el-table-column prop="group" label="组别" width="180"></el-table-column>
            <el-table-column prop="grade" label="分数" width="180"></el-table-column>
            <el-table-column prop="rank" label="名次"></el-table-column>
        </el-table>
        <div id="main" v-for="(item,index) in count" :key="index" style="height:1400px;margin-top:20px;"></div>
    </div>
</template>

<script>
import {SERVER} from '@/config' 
var echarts = require('echarts');
export default {
    data () {
        return {
            tableData: [],
            count:localStorage.count,
            pieData:[],
            legend_data:[],
            values:[],
            sum:['一组','二组','三组','四组','五组']
        }
      },
      async created(){
          this.count = parseInt( this.count)
          let res = await this.axios.get(SERVER + `api/rank/${this.count}`)
          this.tableData = res.data.arr;
          console.log(this.tableData);

        //   五维图
        this.pieData = res.data.pics
       for(let i=0; i<this.pieData.length;i++){
            this.legend_data.push(this.pieData[i].name)
            this.values.push(this.pieData[i].values)
        }
         this.drawPie();
      },
      methods:{
          drawPie(){
            // 基于准备好的dom，初始化echarts图表
            let myChart = echarts.init(document.getElementById('main'));
           myChart.setOption({
                title: {
                    text: '综合评价'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    left: 'right',
                    orient: 'vertical',
                    data: this.legend_data
                },
                radar: [
                    {
                        indicator: [
                            {text: '工程设计思维', max: 40},
                            {text: '工程实践能力', max: 20},
                            {text: '信息技术素养', max: 20},
                            {text: '创新革新意思', max: 10},
                            {text: '沟通协作能力', max: 10}
                        ],
                        center: ['50%', '250px'],
                        radius: 80
                    },
                    {
                        indicator: [
                            {text: '工程设计思维', max: 40},
                            {text: '工程实践能力', max: 20},
                            {text: '信息技术素养', max: 20},
                            {text: '创新革新意思', max: 10},
                            {text: '沟通协作能力', max: 10}
                        ],
                        center: ['50%', '500px'],
                        radius: 80
                    },
                    {
                        indicator: [
                            {text: '工程设计思维', max: 40},
                            {text: '工程实践能力', max: 20},
                            {text: '信息技术素养', max: 20},
                            {text: '创新革新意思', max: 10},
                            {text: '沟通协作能力', max: 10}
                        ],
                        center: ['50%', '750px'],
                        radius: 80
                    },
                    {
                        indicator: [
                            {text: '工程设计思维', max: 40},
                            {text: '工程实践能力', max: 20},
                            {text: '信息技术素养', max: 20},
                            {text: '创新革新意思', max: 10},
                            {text: '沟通协作能力', max: 10}
                        ],
                        center: ['50%', '1000px'],
                        radius: 80
                    },
                    {
                        indicator: [
                            {text: '工程设计思维', max: 40},
                            {text: '工程实践能力', max: 20},
                            {text: '信息技术素养', max: 20},
                            {text: '创新革新意思', max: 10},
                            {text: '沟通协作能力', max: 10}
                        ],
                        center: ['50%', '1250px'],
                        radius: 80
                    }
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        areaStyle: {},
                        data: [
                            {
                                value: this.values[0],
                                name: '第一组'
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 1,
                        tooltip: {
                            trigger: 'item'
                        },
                        areaStyle: {},
                        data: [
                            {
                                value: this.values[1],
                                name: '第二组'
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 2,
                        tooltip: {
                            trigger: 'item'
                        },
                        areaStyle: {},
                        data: [
                            {
                                value:this.values[2],
                                name: '第三组'
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 3,
                        tooltip: {
                            trigger: 'item'
                        },
                        areaStyle: {},
                        data: [
                            {
                                value:this.values[3],
                                name: '第四组'
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 4,
                        tooltip: {
                            trigger: 'item'
                        },
                        areaStyle: {},
                        data: [
                            {
                                value:this.values[4],
                                name: '第五组'
                            }
                        ]
                    }
                ]
            })
          }
      }
    }
</script>

<style lang='scss' scoped>
.table{width:50%;margin:0 auto}
#main{width:50%;margin:0 auto;}
@media (max-width:767.98px){
    .table{width:100%;}
    #main{width:100%}
}
</style>
