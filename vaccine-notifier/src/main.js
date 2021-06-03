import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Registration from './components/Registration.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'

Vue.prototype.moment = moment
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);

Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/Registration', component: Registration },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
