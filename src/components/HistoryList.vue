<template>
  <div id="content">
    <div v-if="!show">
      <div class="select">
        <div id="title">信息筛选</div>
        <el-select v-model="value1" placeholder="请选择">
          <el-option v-for="item in matches" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-button @click="filterData()" type="primary" round>搜索</el-button>
        <el-button @click="newTO()" type="primary" round>创建</el-button>
      </div>
      <div class="showpage" v-if="flag">
        <div class="info" v-for="(info, index) in infoList" :key=index>
          <div id="name" class="style">{{ info.matchName }}</div>
          <div id="leader" class="style">负责人：{{ info.leader }}</div>
          <div id="contact" class="style">联系方式：{{ info.phone }}</div>
          <div id="delete" @click="deleteData(index)">删除记录</div>
          <div id="avatar" class="style"><el-avatar icon="el-icon-user-solid"></el-avatar><el-avatar icon="el-icon-user-solid"></el-avatar><el-avatar icon="el-icon-user-solid"></el-avatar>
            <h5>···</h5>
          </div>
        </div>
      </div>
      <el-empty el-empty description=" 暂无数据" :image-size="300" v-if="!flag">
      </el-empty>
    </div>
    <el-empty description="暂无数据" :image-size="300" v-if="show">
    </el-empty>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      visible: false,
      show: false,
      matchesList: [],
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
        value: '挑战杯',
        label: '挑战杯'
      }, {
        value: "大创",
        label: '大创'
      }],
      value1: [],
      infoList: [],
      infoListCopy: [],
      flag: true,
    }
  },
  methods: {
    filterData() {
      console.log(this.value1);
      const val = this.value1;
      console.log(val);
      var dataList = [];
      this.infoList = this.infoListCopy
      console.log("infoList" + this.infoList);
      for (var i = 0; i < this.infoList.length; i++) {
        if (val == this.infoList[i].matchName) {
          console.log(this.infoList[i]);
          // this.flag = true;
          dataList.push(this.infoList[i]);
          console.log(dataList);
          // this.infoList = [this.infoList[i]]
          // break;
          // this.infoList = dataList;
        }
      }
      if (dataList.length != 0) {
        this.flag = true;
        this.infoList = dataList;
        dataList = [];
      } else {
        this.flag = false;
      }
      // this.infoList = dataList;
    },
    reData() {
      this.value1 = [];
      this.infoList = this.infoListCopy;
      this.flag = true;
    },
    deleteData(index) {
      const _this = this;
      console.log(index);
      console.log(this.infoList[index].leader);
      // this.infoList.splice(index, 1);
      const data = {
        id: this.infoList[index].id
      }
      axios.post("http://127.0.0.1/api/delete", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response.data);
        _this.getData();
      }).catch(error => {
        console.log(error);
      })
    },
    getData() {
      var info;
      axios.get("http://127.0.0.1/api/getHistory").then(res => {
        console.log(res.data.data);
        info = res.data.data;
        this.infoList = info;
        this.infoListCopy = info;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    /* var info;
    axios.get("http://127.0.0.1/api/getHistory").then(res => {
      console.log(res.data.data);
      info = res.data.data;
      this.infoList = info;
      this.infoListCopy = info;
    }).catch(err => {
      console.log(err);
    }) */
    this.getData();
  }
  // 检查是否有数据然后展示不同的界面
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

<style scoped>
#content {
  height: 100%;
  width: 100%;
}

#title {
  font-weight: lighter;
  font-size: 14px;
  width: 80px;
  text-align: center;
  /* background-color: aqua; */
  border-radius: 12px;
}

.select {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: aoto;
  padding: 10px 0 10px 0;
  border-bottom: 2px solid #e8e8e8;
}

.showpage {
  margin-top: 10px;
  width: 90%;
  padding-left: 100px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row wrap;
}

.info {
  width: 200px;
  height: 250px;
  /* border: 1px solid red; */
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 0px;
  margin-right: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
}

.info:hover {
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
}

.style {
  border-radius: 12px;
}

#name {
  width: 90%;
  height: 30px;
  /* background-color: blue; */
  margin: 0 5% 0 5%;
  text-align: center;
  line-height: 30px;
}

#leader {
  width: 90%;
  height: 30px;
  margin: 0 5% 0 5%;
  line-height: 30px;
  font-size: 12px;
}

#contact {
  width: 90%;
  height: 30px;
  margin: 0 5% 0 5%;
  line-height: 30px;
  font-size: 12px;
}

#delete {
  width: 90%;
  height: 40px;
  background-color: #fef0f0;
  border-radius: 12px;
  margin: 0 5% 0 5%;
  line-height: 40px;
  text-align: center;
  color: #f67979;
  font-size: 14px;
}

#delete:hover {
  background-color: #f56c6c;
  color: #ecf5ff;
}

#avatar {
  width: 90%;
  height: 40px;
  margin: 0 5% 0 5%;
  line-height: 40px;
  display: flex;
  justify-content: space-evenly;
}
</style>