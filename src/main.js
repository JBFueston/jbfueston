import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
  created() {console.log("%cMade With Love by Ryan Wans [ https://ryanwans.com ]", "font-size: 20px; color: red;")}
}).$mount('#app')
