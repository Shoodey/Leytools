import Firebase from 'firebase'

const state = {
	user: {},
	users: [
		{
			name: 'Ali EL AMRI',
			initials: 'AEA'
		},
		{
			name: 'Noha TAOUSSE',
			initials: 'NT'
		},
		{
			name: 'Mohammed-Amine LECHGAR',
			initials: 'MAL'
		}
	]
};
const getters = {
	user: (state) => state.user,
	users: (state) => state.users,
};

const actions = {
	register({commit}, payload) {
		Firebase.auth().createUserWithEmailAndPassword(
			payload.email,
			payload.password
		).then(
			credentials => {
				// Firebase.database.collection('users').doc(credentials.user.uid).set({
				// 	name: 'John Doe',
				// 	initials: 'JD'
				// });
				commit('clearError')
			}
		).catch(
			error => {
				commit('setError', error)
			}
		)
	},
};

const mutations = {
	setUser(state, payload) {
		state.user = payload;
	},
};

export default {
	state,
	getters,
	mutations,
	actions
};
