import Vue from 'vue';
import App from './App.vue';
require('../node_modules/roboto-fontface/css/roboto/roboto-fontface.css');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
