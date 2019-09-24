import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';
import {isEmpty} from 'lodash'
Vue.use(Router);

const guard = async (to, from, next) => {
	if (!isEmpty(store.state.Identity.identity)) {
		next();
	} else {
		next({name: 'login'});
	}
};

export default new Router({
	routes: [
		{
			path: '/',
			name: 'dashboard',
			beforeEnter: guard,
			component: require('@/pages/Dashboard').default
		},
		{
			path: '/login',
			name: 'login',
			meta: {layout: 'auth', bodyClass: 'bg-gradient-primary'},
			component: require('@/pages/Login').default
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
