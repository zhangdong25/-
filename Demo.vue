<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="content">
    <!-- 信息筛选 -->
    <div v-if="!show">
      <div class="select">
        <div id="title">信息筛选</div>
        <!-- 比赛名称选择框 -->
        <el-select v-model="value1" placeholder="比赛名称">
          <el-option v-for="match in matches" :key="match.value" :label="match.label" :value="match.value">
          </el-option>
        </el-select>
        <!-- 清空、搜索和创建按钮 -->
        <el-button @click="resetData()" type="primary" round>清空</el-button>
        <el-button @click="filterData()" type="primary" round>搜索</el-button>
        <el-button @click="navigateToNew()" type="primary" round>创建</el-button>
      </div>
      <!-- 展示队伍信息 -->
      <div class="showpage" v-if="flag">
        <div class="info" v-for="(info, index) in filteredInfoList" :key="index">
          <!-- 队伍信息展示 -->
          <div id="name" class="style">{{ info.name }}</div>
          <div id="competitionName" class="style">比赛名称：{{ info.matchName }}</div>
          <div id="leaderName" class="style">负责人：{{ info.leader }}</div>
          <div id="leaderPhone" class="style">联系方式：{{ info.phone }}</div>
          <!-- 详情和申请入队按钮 -->
          <div id="detail" @click="showDetail(info)">详情</div>
          <div id="join" @click="join()">申请入队</div>
          <!-- 头像展示 -->
          <div id="avatar" class="style">
            <el-avatar v-for="avatar in info.avatars" :key="avatar" :icon="avatar"></el-avatar>
            <h5>···</h5>
          </div>
        </div>
      </div>
      <!-- 无数据展示 -->
      <el-empty el-empty description=" 暂无数据" :image-size="300" v-if="!flag"></el-empty>
    </div>
    <!-- 无数据展示 -->
    <el-empty el-empty description=" 暂无数据" :image-size="300" v-if="show"></el-empty>
  </div>
</template>

<script>
import axios from 'axios';
// import Detail from '../pages/Demo';

export default {
  // components: { Detail },
  data() {
    return {
      visible: false,
      show: false,
      // 比赛名称选项
      matches: [
        { value: '蓝桥杯', label: '蓝桥杯' },
        { value: '计算机设计大赛', label: '计算机设计大赛' },
        { value: 'ACM', label: 'ACM' },
        { value: '挑战杯', label: '挑战杯' },
        { value: '大创', label: '大创' }
      ],
      // 用户选择的比赛名称
      value1: [],
      // 存储从后端获取的队伍信息的副本
      infoListCopy: [],
      // 控制是否展示队伍信息的标志
      flag: true,
    };
  },
  computed: {
    // 根据用户选择的比赛名称过滤队伍信息
    filteredInfoList() {
      return this.infoListCopy.filter(info => this.value1.includes(info.matchName));
    }
  },
  methods: {
    // 跳转到入队页面
    join() {
      this.$router.push({ path: '/join' });
    },
    // 跳转到创建页面
    navigateToNew() {
      this.$router.push({ path: '/new' });
    },
    // 清空用户选择的比赛名称和恢复队伍信息为原始数据
    resetData() {
      this.value1 = [];
      this.flag = true;
    },
    // 根据用户选择的比赛名称筛选队伍信息
    filterData() {
      this.flag = this.value1.length > 0;
    },
    // 显示详情弹窗并传递对应队伍信息
    showDetail(info) {
      this.visible = true;
      this.$refs.detail.setData(info);
    },
    // 从后端获取队伍信息
    fetchData() {
      axios.get("http://127.0.0.1/api/getTeamList")
        .then(res => {
          this.infoListCopy = res.data.data;
        })
        .catch(err => {
          console.error("Error fetching data:", err);
        });
    }
  },
  mounted() {
    // 页面加载完成后获取队伍信息
    this.fetchData();
  },
};
</script>
