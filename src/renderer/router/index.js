import Vue from 'vue'
import Router from 'vue-router'
import {auth, guest } from './middlewares'
import {isEmpty} from 'lodash'

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: '/',
			// redirect: '/login'
			name: 'landing',
			meta: {
				middleware: auth
			},
			component: require('@/pages/Landing').default
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			meta: {
				bodyClass: 'page-top',
				middleware: auth
			},
			component: require('@/pages/Dashboard').default
		},
		{
			path: '/login',
			name: 'login',
			meta: {
				layout: 'auth',
				bodyClass: 'bg-gradient-primary',
				middleware: guest
			},
			component: require('@/pages/Login').default
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
});

function nextFactory(context, middleware, index) {
	const subsequentMiddleware = middleware[index];
	// If no subsequent Middleware exists,
	// the default `next()` callback is returned.
	if (!subsequentMiddleware) return context.next;

	return (...parameters) => {
		// Run the default Vue Router `next()` callback first.
		context.next(...parameters);
		// Then run the subsequent Middleware with a new
		// `nextMiddleware()` callback.
		const nextMiddleware = nextFactory(context, middleware, index + 1);
		subsequentMiddleware({...context, next: nextMiddleware});
	};
}

router.beforeEach((to, from, next) => {
	if (to.meta.middleware) {
		const middleware = Array.isArray(to.meta.middleware)
			? to.meta.middleware
			: [to.meta.middleware];

		const context = {
			from,
			next,
			router,
			to,
		};
		const nextMiddleware = nextFactory(context, middleware, 1);

		return middleware[0]({...context, next: nextMiddleware});
	}

	return next();
});

export default router;
