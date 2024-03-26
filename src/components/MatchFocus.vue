<template>
  <div id="content">
    <div id="matchList">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="蓝桥杯" name="1">
          <div>负责人：张壮东</div>
          <div>联系方式：66666666666</div>
          <div>组队需求：要个大佬</div>
        </el-collapse-item>
        <el-collapse-item title="计算机设计大赛" name="2">
          <div>负责人：张壮东</div>
          <div>联系方式：66666666666</div>
          <div>组队需求：要个大佬</div>
        </el-collapse-item>
        <el-collapse-item title="ACM" name="3">
          <div>负责人：张壮东</div>
          <div>联系方式：66666666666</div>
          <div>组队需求：要个大佬</div>
        </el-collapse-item>
        <el-collapse-item title="大创" name="4">
          <div>负责人：张壮东</div>
          <div>联系方式：66666666666</div>
          <div>组队需求：要个大佬</div>
        </el-collapse-item>
        <el-collapse-item title="大创" name="5">
          <div>负责人：张壮东</div>
          <div>联系方式：66666666666</div>
          <div>组队需求：要个大佬</div>
        </el-collapse-item>
        <el-collapse-item title="大创" name="6">
          <div>负责人：张壮东</div>
          <div>联系方式：66666666666</div>
          <div>组队需求：要个大佬</div>
        </el-collapse-item>
        <el-collapse-item title="大创" name="7">
          <div>负责人：张壮东</div>
          <div>联系方式：66666666666</div>
          <div>组队需求：要个大佬</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1'
    };
  }
}
</script>

<style scoped lang="less">
#content {
  margin-top: 10px;
  width: 100%;
}

#matchList {
  width: 96%;
  margin: 0 1% 0 2%;
}

/deep/.el-collapse-item__header {
  padding-left: 1%;
  font-size: 16px;
  font-weight: 700;
}

/deep/.el-collapse-item__content {
  padding-left: 1%;
}
</style>