<template>
  <div id="content">
    <div class="select">
      <div id="title">信息筛选</div>
      <div id="input"><el-input v-model="value1" placeholder="比赛名称"></el-input></div>
      <div id="btn">
        <el-button @click="reData()" type="primary" round>清空</el-button>
        <el-button @click="filterData()" type="primary" round>搜索</el-button>
        <el-button @click="newTO()" type="primary" round>添加</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" v-if="!show">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="比赛名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="详情">
              <span>{{ props.row.detail }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="添加时间" prop="date">
      </el-table-column>
      <el-table-column label="比赛名称" prop="name">
      </el-table-column>
      <el-table-column label="描述" prop="desc">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.$index)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-empty el-empty description=" 暂无数据" :image-size="300" v-if="show">
    </el-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value1: [],
      matches: [{
        value: '蓝桥杯',
        label: '蓝桥杯'
      }, {
        value: '计算机设计大赛',
        label: '计算机设计大赛'
      }, {
        value: 'ACM',
        label: 'ACM'
      }, {
        value: '力扣周赛',
        label: '力扣周赛'
      }, {
        value: "大创",
        label: '大创'
      }],
      tableData: [],
      tableDataCopy: [],
    }
  },
  methods: {
    newTO() {
      this.$router.push({ path: '/adm-add' })
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    reData() {
      this.value1 = [];
      this.tableData = this.tableDataCopy;
      this.show = false;
    },
    filterData() {
      //
      console.log(this.value1);
      const val = this.value1;
      if (val == "蓝桥杯") {
        this.show = false;
        this.tableData = [{
          date: '2021-10-10',
          name: '蓝桥杯',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          detail: 'xiaoqingjianjijisgkghasdjk'
        }]
      }
      else if (val == "计算机设计大赛") {
        this.flag = false;
        this.tableData = [{
          date: '2021-10-13',
          name: '计算机设计大赛',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          detail: 'xiaoqingjianjijisgkghasdjk'
        },]
      } else if (val == "ACM") {
        this.show = false;
        this.tableData = [{
          date: '2021-10-14',
          name: 'ACM',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          detail: 'xiaoqingjianjijisgkghasdjk'
        },]
      } else {
        this.show = true
      }
    }
  },
  mounted() {
    const info = [{
      date: '2021-10-10',
      name: '蓝桥杯',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      detail: 'xiaoqingjianjijisgkghasdjk'
    }, {
      date: '2021-10-13',
      name: '计算机设计大赛',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      detail: 'xiaoqingjianjijisgkghasdjk'
    }, {
      date: '2021-10-14',
      name: 'ACM',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      detail: 'xiaoqingjianjijisgkghasdjk'
    }, {
      date: '2021-10-15',
      name: '力扣周赛',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      detail: 'xiaoqingjianjijisgkghasdjk'
    }];
    this.tableData = info;
    this.tableDataCopy = info;
  }
  // created() {
  //   // 获取数据
  //   axios.get(url).then(response => {
  //     if (response.data == NULL) {
  //       this.show = true
  //     }
  //     console.log('添加成功：' + response.data);
  //     this.tableData = response.data;
  //   }).catch(error => {
  //     console.log(error.message);
  //   });
  // }
}
</script>

<style scoped lang="less">
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

.select {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: aoto;
  padding: 10px 0 10px 0;
  border-bottom: 2px solid #e8e8e8;
  background-color: #fff;
}

#title {
  font-weight: 600;
  font-size: 14px;
  width: 10%;
  text-align: center;
}

#input {
  width: 20%;
}

#btn {
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

/deep/ .el-input__inner {
  display: block !important;
  width: 100% !important;
  font-size: 15px !important;
  margin-left: 15%;
  outline: none !important;
}
</style>