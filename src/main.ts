import Vue from 'vue';
import * as firebase from 'firebase/app';
import firebaseConfig from '@/config/firebaseconfig';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
