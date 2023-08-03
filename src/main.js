import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


import 'bootstrap/dist/css/bootstrap.css'
import VueTheMask from 'vue-the-mask'
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/analytics";
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// Vue.prototype.$analytics = firebase.analytics();
Vue.use(VueTheMask)

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
