<template>
  <div id="content">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :disabled=show>
      <el-form-item label="负责人" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="队伍名称" prop="teamName">
        <el-input v-model="ruleForm.teamName" placeholder="请输入内容"></el-input>
        <!-- <el-select v-model="ruleForm.region" placeholder="请选择所在省份">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="辽宁" value="liaoning"></el-option>
          <el-option label="深圳" value="shenzhen"></el-option>
        </el-select> -->
      </el-form-item>
      <el-form-item label="比赛名称" prop="category">
        <el-select v-model="ruleForm.category" placeholder="请选择比赛名称">
          <el-option label="计算机设计大赛" value="计算机设计"></el-option>
          <el-option label="ACM" value="ACM"></el-option>
          <el-option label="大创" value="大创"></el-option>
          <el-option label="挑战杯" value="挑战杯"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio v-model="ruleForm.gender" label="1">男</el-radio>
        <el-radio v-model="ruleForm.gender" label="2">女</el-radio>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="需求描述" prop="desc">
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
        id: '',
        name: '',
        teamName: '',
        category: '',
        gender: '1',
        desc: '',
        email: '',
        timeTamp: ''
      },
      show: false,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 3 或 4 个字符', trigger: 'blur' }
        ],
        teamName: [
          { required: true, message: '请输入队伍名称', trigger: 'change' }
        ],
        category: [
          { required: true, message: '请选择比赛名称', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写个人描述', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入电子邮箱', trigger: 'blur' },
          // { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ]
      },
      /* numsRegex: /^1(3\d|4[5-9]|5[^4]|6[567]|7[^249]|8\d|9[189])\d{8}$/, // 定义正则表达式
      isNumsValid: false, */
      emailRegex: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      isEmailValid: false,
    };
  },
  methods: {
    // 获取当前时间戳
    getTimestamp() {
      return new Date().getTime();
    },
    success() {
      this.show = true;
      this.$message({
        message: '恭喜你，成功创建',
        type: 'success'
      });
    },
    checkEmail() {
      this.isEmailValid = this.emailRegex.test(this.ruleForm.email);
    },
    /* checkNums() {
      this.isNumsValid = this.numsRegex.test(this.ruleForm.contact); // 使用正则表达式测试输入值
    }, */
    submitForm(formName) {
      // 校验表单
      this.$refs[formName].validate((valid) => {
        // 校验所有信息是否合格
        if (valid) {
          // 继续校验手机号码是否正确
          this.checkEmail();
          if (this.isEmailValid) {
            this.success();
            this.ruleForm.id = localStorage.getItem('userID');
            this.ruleForm.timeTamp = this.getTimestamp();
            // 发送请求
            axios.post('http://127.0.0.1/api/createTeam', this.ruleForm)
              .then(function (response) { console.log(response.data); })
              .catch(function (error) { console.log(error); });
            setTimeout(function () {
              this.$router.push({ path: '/teamlist' });
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
}
</script>
<style scoped>
#content {
  width: 50%;
  height: auto;
  margin: 10% 25% 0 25%;
}
</style>
