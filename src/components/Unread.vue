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

.demo-table-expand {
  font-size: 0;
  margin-left: 20px;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>