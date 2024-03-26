<template>
  <el-dialog title="队伍详情" :visible="dialogVisible" width="30%" :before-close="handleClose">
    <div id="info">
      <div id="info_name">比赛名称：{{ obj.CompetitionName }}</div>
      <div id="info_teamName">队伍名称：{{ obj.TeamName }}</div>
      <div id="info_leader">负责人：{{ obj.UserName }}</div>
      <!-- <div id="info_address">学校：{{ obj.school }}</div> -->
      <div id="info_contact">联系方式：{{ obj.Email }}</div>
      <div id="info_dec">需求描述：{{ obj.Description }}</div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: Boolean,
    obj: Object
  },
  data() {
    return {
      // dialogVisible: true,
      /* obj: [{
        name: "计算机设计大赛",
        teamName: "这个对",
        leader: "张壮东",
        address: '清华大学',
        contact: "18172440102",
        dec: '需要你个什么都会的、头发还多的、长得还帅...................'
      }] */
    }
  },
  // change() { // 谁来调用它？ 是子组件的业务操作
  //   this.$emit('send', false)
  // },
  methods: {
    handleClose(done) {
      // var that = this
      this.$confirm('确认关闭？')
        .then(() => {
          done();
          // this.$emit('send', false)
          this.$bus.$emit('transData', false);
          // that.$router.push('/teamlist')
        })
        .catch(() => { });
    }
  },
}
</script>

<style>
#info {
  width: 90%;
  height: 250px;
  /* border: 1px solid red; */
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
</style>