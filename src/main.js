// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'; //  导入vuex
import './assets/styles/reset.css'; //  导入reset.css
import './assets/styles/border.css'; //  导入一像素边框
import fastClick from 'fastClick'; // 解决三百毫秒延迟
import './assets/styles/iconfont.css'; // 引入icon图标

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
