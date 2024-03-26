<template>
  <div class="silde">
    <el-row style="height: 100%;">
      <el-menu background-color="#324057" text-color="#fff" active-text-color="#20a0ff" :default-active="defaultActive" style="min-height: 100%" @open="handleOpen" @close="handleClose" theme="dark" router>
        <el-menu-item index="/homeadm">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>比赛管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/adm-teams">队伍管理</el-menu-item>
            <el-menu-item index="/adm-users">用户管理</el-menu-item>
            <el-menu-item index="/adm-matches">比赛增删</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>资源管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/adm-load">资源上传</el-menu-item>
            <el-menu-item index="/adm-data">数据统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>用户反馈</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/adm-read">已处理</el-menu-item>
            <el-menu-item index="/adm-unread">未处理</el-menu-item>
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