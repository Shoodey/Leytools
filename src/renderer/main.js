import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import AuthLayout from './layouts/Auth'
import DashboardLayout from './layouts/Dashboard'

import 'bootstrap'
import './assets/scss/styles.scss'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(fas, fab, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import BodyClass from 'vue-body-class'

Vue.use(BodyClass, router);


if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.component('auth-layout', AuthLayout);
Vue.component('dashboard-layout', DashboardLayout);

/* eslint-disable no-new */
new Vue({
	components: {App},
	router,
	store,
	template: '<App/>'
}).$mount('#app');
