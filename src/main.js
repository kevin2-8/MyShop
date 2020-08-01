import 'open-iconic/font/css/open-iconic-bootstrap.css'
import "./css/index.css"
import Vue from 'vue'
import app from './app.vue'
import router from './router.js'
import VueRouter from 'vue-router'

// 按需导入mint组件
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'

// 给vue安装 VueRouter 
Vue.use(VueRouter)
//注册全局mint-ui组件
Vue.component(Header.name, Header);

//导入mui 样式
import './lib/mui/css/mui.min.css'


var vm = new Vue({
    el: '#app',
    data: {
    },
    router,
    render: ce=>ce(app)
});

//webpack环境中是Vue开发总结：
//1.引入vue包 cnpm i vue -D
//2.引入.vue 解析loader   cnpm i vue-loader vue-template-compiler -D, 配置vue-loader时还需要配置vue-loader/lib/plugin到plugins中
//3.新建后缀为vue的组件，内部包含三大块 template script style
//4.在main.js中分别倒入vue和vue组件， import Vue form 'vue'  import login form './login.vue'
//5.将login配置到vue实例对象的render函数的返回函数中， render: c => c(login)