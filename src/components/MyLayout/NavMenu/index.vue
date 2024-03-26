<template>
  <div class="silde">
    <el-row style="height: 100%;">
      <el-menu background-color="#324057" text-color="#fff" active-text-color="#20a0ff" :default-active="defaultActive" style="min-height: 100%" @open="handleOpen" @close="handleClose" theme="dark" router>
        <el-menu-item index="/home">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>组队信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/teamlist">组队大厅</el-menu-item>
            <el-menu-item index="/teamhistory">历史组队</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>我的资源</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/resourcesload">资源上传</el-menu-item>
            <el-menu-item index="/resourcesdown">资源下载</el-menu-item>
            <el-menu-item index="/downloadrecord">下载历史</el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
        <!-- <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>我的关注</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/focusmatch">关注的组队</el-menu-item>
            <el-menu-item index="/focusinfo">关注的资讯</el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>消息通知</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/messageRead">已读</el-menu-item>
            <el-menu-item index="/messageUnread">未读</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>资讯</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/info">比赛资讯</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('//', '');
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.silde {
  height: 100vh;
  width: 300px;
}

.item {
  margin-top: -20px;
  /* margin-right: 50px; */
  margin-left: 1px;
}
</style>