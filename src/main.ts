import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/axios'
import  serverMsg  from './serverMsg/index'
import vueMoment from 'vue-moment' 
Vue.use(vueMoment)

Vue.prototype.$eventBus = new Vue();

Vue.prototype.$serverMsg = serverMsg;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
