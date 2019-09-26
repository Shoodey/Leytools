import store from '../store';
import {isEmpty} from 'lodash'

export const auth = ({next, router,}) => {
	return isAuthenticated()
		? next()
		: router.push({name: `login`})
};

export const guest = ({next, router, from}) => {
	return isAuthenticated()
		// ? router.push(from)
		? null
		: next()
};

function isAuthenticated() {
	return !isEmpty(store.state.Auth.identity);
}
