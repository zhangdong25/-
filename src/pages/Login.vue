<template>
  <div class="content">
    <div class="container">
      <div class="login-wrapper">
        <div class="header">登录</div>
        <div class="form-wrapper">
          <el-input type="text" name="username" placeholder="用户名" class="input-item" v-model="username"></el-input>
          <el-input type="password" name="password" placeholder="密码" class="input-item" show-password v-model="password"></el-input>
          <button class="btn" @click="login">登录</button>
          <div id="register">
            <router-link to='/register'>
              去注册
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      password: '',
      username: ''
    }
  },
  methods: {
    formatTimestamp(timestampStr) {
      // 将时间戳字符串转换为数字
      var timestamp = parseInt(timestampStr, 10);

      // 创建一个新的Date对象
      var date = new Date(timestamp);

      // 获取各个日期和时间部分
      var year = date.getFullYear();
      var month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以加1
      var day = date.getDate().toString().padStart(2, '0');
      var hours = date.getHours().toString().padStart(2, '0');
      var minutes = date.getMinutes().toString().padStart(2, '0');
      var seconds = date.getSeconds().toString().padStart(2, '0');

      // 构建格式化的日期和时间字符串
      var formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      return formattedDateTime;
    },
    saveUsrID(id) {
      localStorage.setItem('userID', id)
    },
    login() {
      const formData = {
        username: this.username,
        password: this.password
      };
      axios.post('http://127.0.0.1/api/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response);
          console.log(response.data.data);
          const time = this.formatTimestamp(response.data.data.timestamp);
          console.log(time);
          if (response.data.data.exist) {
            if (!response.data.data.isRoot) {
              this.saveUsrID(response.data.data.userID);
              this.$message.success("登录成功!");
              this.$router.push({ path: '/home' })
            } else {
              this.saveUsrID(response.data.data.id);
              this.$message.success("登录成功!");
              this.$router.push({ path: '/homeadm' })
            }
          } else {
            this.$message.error('用户不存在');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.content {
  width: 100vw;
  height: 100vh;
  background-image: url(https://s1.ax1x.com/2023/03/05/ppExLLT.jpg);
  background-size: cover;
  user-select: none;
}

.container {
  height: 70%;
  width: 450px;
  position: absolute;
  left: 65%;
  top: 15%;
  background-color: #F5F5F5;
  border-radius: 15px;
  box-shadow: 10px 10px 55px rgb(222, 219, 219);
  border: rgb(222, 219, 219) solid 0.5px;
}

.login-wrapper {
  background-color: #F5F5F5;
  width: 250px;
  height: 200px;
  border-radius: 15px;
  position: relative;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
}

.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  border: none;
}

.btn:hover {
  box-shadow: 5px 5px 20px rgb(222, 219, 219);
}

#register {
  margin-left: 100px;
}

/deep/ .el-input__inner {
  display: block !important;
  width: 100% !important;
  margin-bottom: 20px !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 10px !important;
  box-shadow: inset 5px 5px 20px rgb(225, 225, 225) !important;
  font-size: 15px !important;
  outline: none !important;
}

.el-input__inner:placeholder {
  text-transform: uppercase !important;
}
</style>

<!-- 在写有scoped的style标签中书写的样式不会覆盖ElementUI默认的样式 -->
