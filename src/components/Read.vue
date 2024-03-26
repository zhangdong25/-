<template>
  <div id="content">
    <div v-if="show">
      <el-empty description="暂无消息" :image-size="300">
      </el-empty>
    </div>
    <el-table :data="tableData" style="width: 100%" v-if="!show">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.$index)" type="primary">标记未读</el-button>
          <el-button @click="handleDelete(scope.$index)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      show: false,
      /* tableData: [
        { date: '2022-01-01', name: '张三', address: '北京市' },
        { date: '2022-01-02', name: '李四', address: '上海市' },
        { date: '2022-01-03', name: '王五', address: '广州市' },
      ], */
      tableData: []
    };
  },
  methods: {
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
  },
  mounted() {
    var tableData;
    axios.get("http://127.0.0.1/api/getRead").then( res => {
      console.log(res);
      tableData = res.data.data;
      this.tableData = tableData;
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
#content {
  height: 100%;
  width: 100%;
}
</style>