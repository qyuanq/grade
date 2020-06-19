<template>
    <div>
        <h1>排名</h1>
        <el-table :data="tableData" style="width: 50%;margin:0 auto;">
            <el-table-column prop="group" label="组别" width="180"></el-table-column>
            <el-table-column prop="grade" label="分数" width="180"></el-table-column>
            <el-table-column prop="rank" label="名次"></el-table-column>
        </el-table>
        <div id="main" v-for="(item,index) in count" :key="index" style="height:400px;margin-top:20px;"></div>
    </div>
</template>

<script>
import {SERVER} from '@/config' 
import echarts from 'echarts'
export default {
    data () {
        return {
            tableData: [],
            count:localStorage.count,
            pieData:[]
        }
      },
      async created(){
          this.count = parseInt( this.count)
          let res = await this.axios.get(SERVER + `api/rank/${this.count}`)
          this.tableData = res.data.arr;
          console.log(this.tableData);

        //   五维图
        this.pieData = res.data.pics
        console.log( this.pieData)
      },
      mounted(){
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
                    left: 'center',
                    data: ['一组']
                },
                radar: [
                    {
                        indicator: [
                            {text: '工程设计思维', max: 100},
                            {text: '工程实践能力', max: 100},
                            {text: '信息技术素养', max: 100},
                            {text: '创新革新意思', max: 100},
                            {text: '沟通协作能力', max: 100}
                        ],
                        center: ['25%', '40%'],
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
                                value: [60, 73, 85, 40,80],
                                name: '一组'
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

</style>
