<template>
  <div id="content">
    <div id="form">
      <h4>信息填写</h4>
      <div id="main">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :disabled=show>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <!-- <el-form-item label="身份证号" prop="idCard">
            <el-input v-model="ruleForm.idCard"></el-input>
          </el-form-item> -->
          <el-form-item label="性别" prop="gender">
            <el-radio v-model="ruleForm.gender" label="1">男</el-radio>
            <el-radio v-model="ruleForm.gender" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <!-- <el-select v-model="ruleForm.region" placeholder="请选择所在省份">
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="北京" value="beijing"></el-option>
              <el-option label="辽宁" value="liaoning"></el-option>
              <el-option label="深圳" value="shenzhen"></el-option>
              </el-select> -->
            <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="个人描述" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      userID: '',
      ruleForm: {
        name: '',
        password: '',
        email: '',
        gender: '1',
        birthday: '',
        desc: '',
      },
      show: false,
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 3 或 4 个字符', trigger: 'blur' }
        ],
        /* region: [
          { required: true, message: '请选择所在区域', trigger: 'change' }
        ], */
        email: [
          { required: true, message: '请输入正确的电子邮箱', trigger: 'change' },
          // { min: 18, max: 18, message: '长度18个字符', trigger: 'blur' }
        ],
        birthday: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 8, max: 256, message: '长度8个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写个人描述', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        /* contact: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
        ] */
      },
      /* numsRegex: /^1(3\d|4[5-9]|5[^4]|6[567]|7[^249]|8\d|9[189])\d{8}$/, // 定义正则表达式
      idRegex: /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}[Xx\d]$/, */
      emailRegex: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      isEmailValid: false,
      /* isNumsValid: false,
      isIdValid: false, */
    };
  },
  methods: {
    convertToTimestamp(isoString) {
      // 检查输入是否为有效的日期字符串
      /* if (!/^(.+) \d{4} (.+) (.+) (.+):(.+):(.+) GMT[+-]\d{4}$/i.test(isoString)) {
        throw new Error('Invalid date string format.');
      } */

      // 将日期字符串转换为Date对象
      var date = new Date(isoString);

      // 由于Date对象默认使用本地时区，我们需要将其转换为UTC时间戳
      // 首先获取Date对象的时间（即UTC时间）
      var timeInMs = date.getTime();

      // 然后根据本地时区与UTC的偏移量调整时间戳
      var localOffset = date.getTimezoneOffset() * 60000; // 时区偏移量转换为毫秒
      var timestamp = timeInMs + localOffset;

      return timestamp;
    },
    success() {
      const data = this.ruleForm;
      console.log(data);
      axios.post('http://127.0.0.1/api/register', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          this.userID = response.data.id;
          // 将本地存储中的userID设置为响应中的id
          localStorage.setItem('userID', this.userID);
          // this.$bus.$emit('userID', this.userID);
          console.log(response.data.id);
          console.log(response.data.done);
          this.show = true;
          this.$message({
            message: '恭喜你，成功创建，自动登录中',
            type: 'success'
          });
        })
        .catch(error => {
          console.error(error);
        });
    },
    checkEmail() {
      this.isEmailValid = this.emailRegex.test(this.ruleForm.email);
    },
    // 使用正则表达式测试输入值
    /* checkNums() {
      this.isNumsValid = this.numsRegex.test(this.ruleForm.contact); // 使用正则表达式测试输入值
    }, */
    /* checkId() {
      this.isIdValid = this.idRegex.test(this.ruleForm.idCard); // 使用正则表达式测试输入值
    }, */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // 校验所有信息是否合格
        if (valid) {
          // 继续校验手机号码是否正确
          // this.checkNums();
          // this.checkId()
          // 校验邮箱是否正确
          this.checkEmail();
          if (this.isEmailValid) {
            this.ruleForm.birthday = this.convertToTimestamp(this.ruleForm.birthday);
            this.success();
            setTimeout(function () {
              this.$router.push({ path: '/home' });
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

<style lang="less" scoped>
#content {
  width: 100vw;
  height: 100vh;
  background-color: #c3d7df;
  // background-image: url(https://s1.ax1x.com/2023/03/05/ppExLLT.jpg);
  background-size: cover;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

#form {
  width: 30%;
  height: 80%;
  background-color: #d8e3e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  // box-shadow: 1px 10px 50px #c3d7df;
  border-radius: 24px;
}

#main {
  width: 100%;
  height: 85%;
}

/deep/ .el-input {
  width: 70%;
}

/deep/ .el-textarea {
  width: 70%;
}

/deep/ .el-select {
  width: 100%;
}
</style>