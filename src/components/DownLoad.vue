<template>
  <div id="content">
    <div v-if="show">
      <el-empty description="暂无资源可下载" :image-size="300">
        <el-button type="primary" @click="toLoad">去上传</el-button>
      </el-empty>
    </div>
    <el-table :data="tableData" style="width: 100%" v-if="!show">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="发件人">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="详情">
              <span>{{ props.row.detail }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="时间" prop="date">
      </el-table-column>
      <el-table-column label="发件人" prop="name">
      </el-table-column>
      <el-table-column label="描述" prop="desc">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button @click="handleDelete(scope.$index)" type="danger">删除</el-button> -->
          <el-button @click="downLoad(scope.$index)" type="primary"><el-link :underline="false">下载</el-link></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      show: true,
      tableData: [{
        date: '12987122',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        detail: 'xiaoqingjianjijisgkghasdjk'
      }, {
        date: '12987123',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        detail: 'xiaoqingjianjijisgkghasdjk'
      }, {
        date: '12987123',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        detail: 'xiaoqingjianjijisgkghasdjk'
      }, {
        date: '12987123',
        name: '好滋好味鸡蛋仔',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        detail: 'xiaoqingjianjijisgkghasdjk'
      }]
    }
  },
  methods: {
    toLoad() {
      this.$router.push({ path: '/resourcesload' })
    },
    downLoad(index) {
      const h = this.$createElement;
      this.$notify({
        title: '提示',
        message: h('i', { style: 'color: teal' }, '下载成功'),
        type: 'success',
        duration: 1000
      });
      // this.tableData.splice(index, 1);
      // axios({
      //   method: 'get',
      //   url: 'http://your-backend-server.com/fileUrl',
      //   responseType: 'blob' // 表示返回的数据类型为二进制流
      // }).then(response => {
      //   const blob = new Blob([response.data]) // 转换成blob对象
      //   const fileName = 'downloadFile.xlsx'
      //   if (window.navigator.msSaveOrOpenBlob) {
      //     // 兼容IE10及以上版本
      //     navigator.msSaveBlob(blob, fileName)
      //   } else {
      //     // 创建a标签并设置属性，再将其添加到body中，最后进行点击下载
      //     const link = document.getElement('a')
      //     link.style.display = 'none'
      //     link.href = URL.createObjectURL(blob)
      //     link.setAttribute('download', fileName)
      //     document.body.appendChild(link)
      //     link.click()
      //     document.body.removeChild(link)
      //   }
      // })
    },
  },
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

<style scoped lang="less">
#content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
}
</style>