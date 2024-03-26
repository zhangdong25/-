<template>
  <div id="content">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :disabled=show>
      <el-form-item label="比赛名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="比赛省份" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择所在省份">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="辽宁" value="liaoning"></el-option>
          <el-option label="深圳" value="shenzhen"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="比赛名称" prop="category">
        <el-select v-model="ruleForm.category" placeholder="请选择比赛名称">
          <el-option label="计算机设计大赛" value="计算机设计"></el-option>
          <el-option label="ACM" value="ACM"></el-option>
          <el-option label="大创" value="大创"></el-option>
          <el-option label="挑战杯" value="挑战杯"></el-option>
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="性别" prop="gender">
        <el-radio v-model="ruleForm.gender" label="1">男</el-radio>
        <el-radio v-model="ruleForm.gender" label="2">女</el-radio>
      </el-form-item> -->
      <el-form-item label="管理员账号" prop="contact">
        <el-input v-model="ruleForm.contact"></el-input>
      </el-form-item>
      <el-form-item label="比赛简介" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        desc: '',
        contact: ''
      },
      show: false,
      rules: {
        name: [
          { required: true, message: '请输入比赛名称', trigger: 'blur' },
          { min: 2, max: 16, message: '长度在 2 或 16 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择所在区域', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写比赛简介', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入管理员账号', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ]
      },
      numsRegex: /^1(3\d|4[5-9]|5[^4]|6[567]|7[^249]|8\d|9[189])\d{8}$/, // 定义正则表达式
      isNumsValid: false,
    };
  },
  methods: {
    success() {
      this.show = true;
      this.$message({
        message: '成功添加',
        type: 'success'
      });
    },
    checkNums() {
      this.isNumsValid = this.numsRegex.test(this.ruleForm.contact); // 使用正则表达式测试输入值
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // 校验所有信息是否合格
        if (valid) {
          // 继续校验手机号码是否正确
          this.checkNums();
          if (this.isNumsValid) {
            this.success();
            // 数据传输
            // axios.post('http://127.0.0.1/api/post', this.ruleForm).then(function (response) { console.log(response.data); }).catch(function (error) { console.log(error); })
            // bind(this)将当前上下文绑定到回调函数中，确保在回调函数中使用的 this 指向的是 vue 组件实例的上下文
            setTimeout(function () {
              this.$router.push({ path: '/adm-teams' });
            }.bind(this), 1000);
          } else {
            console.log('error submit!!');
            return false;
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  // beforeDestroy() {
  //   axios.post('http://127.0.0.1/api/post', ruleForm).then(function (response) { console.log(response.data); }).catch(function (error) { console.log(error); })
  // }
}
</script>
<style scoped>
#content {
  width: 50%;
  height: auto;
  margin: 10% 25% 0 25%;
}
</style>
