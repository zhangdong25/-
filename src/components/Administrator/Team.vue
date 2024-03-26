<template>
  <div id="content">
    <div v-if="!show">
      <div class="select">
        <div id="title">信息筛选</div>
        <el-select v-model="value1" placeholder="比赛名称">
          <el-option v-for="item in matches" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <!-- <el-select v-model="value2" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
          <el-option v-for="item in grades" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select> -->
        <el-button @click="reData()" type="primary" round>清空</el-button>
        <el-button @click="filterData()" type="primary" round>搜索</el-button>
      </div>
      <div class="showpage" v-if="flag">
        <div class="info" v-for="(info, index) in infoList" :key=index>
          <div id="name" class="style">{{ info.name }}</div>
          <div id="leader" class="style">负责人：{{ info.leader }}</div>
          <div id="contact" class="style">联系方式：{{ info.contact }}</div>
          <div id="delte" @click="delte(info.id)">删除该队伍</div>
          <div id="avatar" class="style"><el-avatar icon="el-icon-user-solid"></el-avatar><el-avatar icon="el-icon-user-solid"></el-avatar><el-avatar icon="el-icon-user-solid"></el-avatar>
            <h5>···</h5>
          </div>
        </div>
      </div>
      <el-empty el-empty description=" 暂无数据" :image-size="300" v-if="!flag">
      </el-empty>
    </div>
    <el-empty el-empty description=" 暂无数据" :image-size="300" v-if="show">
    </el-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        value: '力扣周赛',
        label: '力扣周赛'
      }, {
        value: "大创",
        label: '大创'
      }],
      // grades: [{
      //   value: '校级',
      //   label: '校级'
      // }, {
      //   value: '省级',
      //   label: '省级'
      // }, {
      //   value: '国家级',
      //   label: '国家级'
      // },],
      value1: [],
      // value2: [],
      infoList: [],
      infoListCopy: [],
      flag: true,
    }
  },
  methods: {
    delte(index) {
      // this.$router.push({ path: '/join' })
      // console.log(index - 1);
      // this.infoList.splice(index - 1, 1);
      // this.infoListCopy.splice(index - 1, 1);
    },
    reData() {
      this.value1 = [];
      this.infoList = this.infoListCopy;
      this.flag = true;
    },
    filterData() {
      //
      console.log(this.value1);
      const val = this.value1;
      if (val == "蓝桥杯") {
        this.flag = true;
        this.infoList = [{
          name: "蓝桥杯",
          leader: "诸葛",
          contact: "15976245978",
        }, {
          name: "蓝桥杯",
          leader: "刘欢",
          contact: "15176255998",
        }, {
          name: "蓝桥杯",
          leader: "蔡集美",
          contact: "15146256998",
        }, {
          name: "蓝桥杯",
          leader: "蔡坤",
          contact: "15147256798",
        }]
      }
      else if (val == "计算机设计大赛") {
        this.flag = true;
        this.infoList = [{
          name: "计算机设计大赛",
          leader: "张壮东",
          contact: "18172440102",
        }, {
          name: "计算机设计大赛",
          leader: "李宁",
          contact: "18172445236",
        }, {
          name: "计算机设计大赛",
          leader: "霍德",
          contact: "18172645436",
        }, {
          name: "计算机设计大赛",
          leader: "罗斯",
          contact: "18972645636",
        }]
      } else {
        this.flag = false
      }
    }
  },
  mounted() {
    const info = [{
      name: "计算机设计大赛",
      leader: "张壮东",
      contact: "18172440102",
      id: 1
    }, {
      name: "蓝桥杯",
      leader: "诸葛",
      contact: "15976245978",
      id: 2
    }, {
      name: "计算机设计大赛",
      leader: "李宁",
      contact: "18172445236",
      id: 3
    }, {
      name: "蓝桥杯",
      leader: "蔡坤",
      contact: "15147256798",
      id: 4
    }, {
      name: "计算机设计大赛",
      leader: "霍德",
      contact: "18172645436",
      id: 5
    }, {
      name: "蓝桥杯",
      leader: "刘欢",
      contact: "15176255998",
      id: 6
    }, {
      name: "计算机设计大赛",
      leader: "罗斯",
      contact: "18972645636",
      id: 7
    }, {
      name: "蓝桥杯",
      leader: "蔡集美",
      contact: "15146256998",
      id: 8
    },];
    this.infoList = info;
    this.infoListCopy = info;
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
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-flow: row wrap;
}

.info {
  width: 200px;
  height: 250px;
  /* border: 1px solid red; */
  margin: 25px;
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

#delte {
  width: 90%;
  height: 40px;
  background-color: #fef0f0;
  border-radius: 12px;
  margin: 0 5% 0 5%;
  line-height: 40px;
  text-align: center;
  color: #f56c6c;
  font-size: 14px;
}

#delte:hover {
  background-color: #f56c6c;
  color: #fef6f6;
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