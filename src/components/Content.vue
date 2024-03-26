<template>
  <div>
    <!-- 第一行四分格 -->
    <el-row :gutter="20" style="margin-left:0px;margin-right:0px;">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="titleFirst"><i class="el-icon-user-solid" :style="{ color: iconColor[2] }"></i>我的组队</div>
          <div class="content"><el-empty description="暂无记录" :image-size="90"></el-empty></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="titleFirst"><i class="el-icon-s-promotion" :style="{ color: iconColor[3] }"></i>历史组队</div>
          <div class="content"><el-empty description="暂无记录" :image-size="90"></el-empty></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="titleFirst"><i class="el-icon-s-cooperation" :style="{ color: iconColor[2] }"></i>我的消息</div>
          <div class="content"><el-empty description="暂无消息" :image-size="90"></el-empty></div>
        </div>
      </el-col>
    </el-row>
    <!-- 第一行四分格 -->
    <!-- 第二行二分格 -->
    <el-row :gutter="20" style="margin-left:0px;margin-right:0px;">
      <el-col :span="12">
        <div class="grid" id="gridL">
          <el-row :gutter="24" style="margin-left:0px;margin-right:0px; margin-bottom: 0px;">
            <div class="title"><i class="el-icon-s-flag" :style="{ color: iconColor[0] }"></i>便捷导航</div>
            <div>
              <el-col :span="8">
                <div class="one" @click="toTeam">
                  我的组队
                </div>
              </el-col>
              <el-col :span="8">
                <div class="one" @click="toTeamHis">历史组队</div>
              </el-col>
              <el-col :span="8">
                <div class="one" @click="toMySources">我的消息</div>
              </el-col>
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid" id="gridR" @click="showInfo()">
          <div class="titleFirst"><i class="el-icon-s-comment" :style="{ color: iconColor[2] }"></i>比赛资讯</div>
          <div class="info" v-for="(info, index) in info" :key="index">
            {{ info }}
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 第二行二分格 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 导航 关注 资源 历史组队
      iconColor: ['#46abfe', '#FDE047', '#64748B', '#22D3EE'],
      info: ["•蓝桥杯火热开赛!!!", "•ACM又要开始了，小伙伴们快来狂刷吧!!!", "•关于本届计算机设计大赛(辽宁赛区)的通知", "•移动应用开发的大赛都需要注意那些!!!", "•力扣周赛"]
    }
  },
  methods: {
    toTeam() {
      this.$router.push({ path: '/teamlist' })
    },
    toTeamHis() {
      this.$router.push({ path: '/teamhistory' })
    },
    toMySources() {
      this.$router.push({ path: '/messageRead' })
    },
    toMyFoucs() {
      this.$router.push({ path: '/focusmatch' })
    },
    showInfo() {
      this.$router.push({ path: '/info' })
    }
  },
  mounted() {
    // 获取用户id
    const userID = localStorage.getItem('userID');
    console.log(userID);
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  margin-top: 10px;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
}

.grid-content:hover {
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.grid {
  min-height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

.title {
  width: 100%;
  height: 35px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: #e8e8e8 2px solid;
  font-size: 16px;
  font-weight: bolder;
}

.titleFirst {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: #e8e8e8 2px solid;
  font-size: 16px;
  font-weight: bolder;
}

.content {
  width: 100%;
}

.el-empty {
  padding: 0px;
}

i {
  margin-right: 10px;
  font-size: 30px;
}

#gridL {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

#gridR {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.info {
  width: 95%;
  margin: 10px 10px 0px 10px;
  background-color: #f5f5f5;
  border-radius: 12px;
  font-size: 13px;
}

.one {
  min-height: 6vh;
  display: flex;
  width: 8vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}

.one:hover {
  box-shadow: inset 0 2px 8px rgb(0 0 0 / 10%);
}
</style>