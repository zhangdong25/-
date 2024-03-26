<!--
该页面用于展示组队大厅的信息
-->
<template>
  <div id="content">
    <div v-if="!show">
      <div class="select">
        <div id="title">信息筛选</div>
        <el-select v-model="value1" placeholder="比赛名称">
          <el-option v-for="item in matches" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-button @click="reData()" type="primary" round>清空</el-button>
        <el-button @click="filterData()" type="primary" round>搜索</el-button>
        <el-button @click="newTO()" type="primary" round>创建</el-button>
      </div>
      <div class="showpage" v-if="flag">
        <div class="info" v-for="(info, index) in infoList" :key=index>
          <div id="name" class="style">{{ info.name }}</div>
          <div id="competitionName" class="style">比赛名称：{{ info.CompetitionName }}</div>
          <div id="leaderName" class="style">负责人：{{ info.UserName }}</div>
          <div id="leaderPhone" class="style">邮箱：{{ info.Email }}</div>
          <div id="detail" @click="sendData">详情</div>
          <div id="join" @click="join()">申请入队</div>
          <div id="avatar" class="style"><el-avatar icon="el-icon-user-solid"></el-avatar><el-avatar icon="el-icon-user-solid"></el-avatar><el-avatar icon="el-icon-user-solid"></el-avatar>
            <Detail :dialogVisible="visible" :obj="info"></Detail>
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
import axios from 'axios'
import Detail from '../pages/Detail'
export default {
  components: { Detail },
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
    join() {
      this.$router.push({ path: '/join' })
    },
    newTO() {
      this.$router.push({ path: '/new' })
    },
    reData() {
      this.value1 = [];
      this.infoList = this.infoListCopy;
      this.flag = true;
    },
    filterData() {
      console.log(this.value1);
      const val = this.value1;
      var dataList = [];
      console.log("dataList" + dataList);
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
        console.log(dataList);
        dataList = [];
      } else {
        this.flag = false;
      }
    },
    /*
    *    利用组件的props搭配全局事件总线进行数据传输
    *    1.子组件设置props接受父组件给的数据
    *    2.在需要传输的组件中（子组件：Detail），调用this.$bus.$emit('transData',data)方法，并传递需要传输的数据
    *    3.在需要接收的组件中（父组件：本组件），调用this.$bus.$on('transData',data)方法，并传递一个回调函数，用于接收数据
     */
    sendData() {
      // this.$router.push({ path: '/demo' })
      this.visible = true,
        this.$bus.$on('transData', (data) => {
          /* console.log('收到了数据');
          console.log(data); */
          this.visible = data;
        })
    },
  },
  mounted() {
    var info;
    axios.get("http://127.0.0.1/api/getTeamList").then(res => {
      console.log(res.data.data);
      info = res.data.data;
      this.infoList = info;
      this.infoListCopy = info;
    }).catch(err => {
      console.log(err);
    })
  },
  beforeDestroy() {
    this.$bus.$off('transData'); //销毁解绑
  }
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
  height: auto;
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

#detail {
  width: 90%;
  height: 20px;
  color: #4fa6ff;
  text-align: end;
  font-size: 13px;
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

#leaderName {
  width: 90%;
  height: 30px;
  margin: 0 5% 0 5%;
  line-height: 30px;
  font-size: 12px;
}

#competitionName {
  width: 90%;
  height: 30px;
  margin: 0 5% 0 5%;
  line-height: 30px;
  font-size: 12px;
}

#leaderPhone {
  width: 90%;
  height: 30px;
  margin: 0 5% 0 5%;
  line-height: 30px;
  font-size: 12px;
}

#join {
  width: 90%;
  height: 40px;
  background-color: #ecf5ff;
  border-radius: 12px;
  margin: 0 5% 0 5%;
  line-height: 40px;
  text-align: center;
  color: #4fa6ff;
  font-size: 14px;
}

#join:hover {
  background-color: #4fa6ff;
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