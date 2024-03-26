import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// import store from './store'

// 引入 echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入路由
import router from './router/index';

Vue.config.productionTip = false

// 使用 element-ui
Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  // 组测路由信息
  router,
  // store,
  beforeCreate() {
    //此时这个this就是vm，只不过这个时候还并没有去解析模版
    Vue.prototype.$bus = this; //安装全局事件总线
  }
}).$mount('#app')
