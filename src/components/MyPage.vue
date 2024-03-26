<template>
  <div id="content">
    <div class="avatar"><el-avatar icon="el-icon-user-solid" :size="100"></el-avatar></div>
    <div class="info">
      <el-descriptions class="margin-top" :column="3" :size="size" border v-for="(item, index) in info" :key=index>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          {{ item.username }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ item.phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          {{ item.province }}
        </el-descriptions-item>
        <!-- <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            备注
          </template>
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item> -->
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            学校
          </template>
          {{ item.school }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      /* info: [{
        name: 'curry',
        phone: '18154763214',
        address: '辽宁',
        school: '大连工业大学',
      }] */
      info: []
    };
  },
  mounted() {
    var info;
    axios.get("http://127.0.0.1/api/getUser").then(res => {
      console.log(res.data.data);
      info = res.data.data;
      this.info = info;
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style scoped lang="less">
#content {
  margin-top: 10px;
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.info {
  width: 90%;
  height: 100%;
  // background-color: aqua;
}
</style>