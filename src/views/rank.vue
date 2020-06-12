<template>
    <div>
        <h1>排名</h1>
            <el-table :data="tableData" style="width: 50%;margin:0 auto;">
            <el-table-column prop="group" label="组别" width="180"></el-table-column>
            <el-table-column prop="grade" label="分数" width="180"></el-table-column>
            <el-table-column prop="rank" label="名次"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
             tableData: [{
                group: '一组',
                grade: '98',
                rank: '1'
            }]
        }
      }
    }
</script>

<style lang='scss' scoped>

</style>
