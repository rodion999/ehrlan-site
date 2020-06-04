import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import 'bootstrap'

import './assets/style.css';
import'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
