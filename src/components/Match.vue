<template>
  <div id="content">
    <div id="carousel">
      <el-carousel :interval="3000" type="card" height="300px">
        <el-carousel-item v-for="url in urls" :key="url">
          <img :src="url" class="image" loading="lazy">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="table">
      <el-table :data="tableData" border style="width: 100%" stripe>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="赛事名称" width="180">
        </el-table-column>
        <el-table-column prop="des" label="概要">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-link type="primary" @click.prevent="review(scope.$index)">详情</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      tableData: [],
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    }
  },
  methods: {
    review(index) {
      console.log(index);
      window.open('https://element.eleme.io', '_blank');
    },
  },
  mounted() {
    var tableData;
    axios.get("http://127.0.0.1/api/getMatch").then(res => {
      console.log(res);
      tableData = res.data.data;
      this.tableData = tableData;
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
#content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#table {
  width: 90%;
  height: auto;
  padding: 0 5% 1% 5%;
}

.img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}

/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  text-align: center;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
} */
</style>