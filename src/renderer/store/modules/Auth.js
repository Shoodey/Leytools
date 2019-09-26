// Import any dependency (axios, sqlite...)
const state = {
	identity: {},
	identities: [
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
	identity: (state) => state.identity,
	identities: (state) => state.identities,
};

const actions = {
	setIdentity({commit}, identity) {
		commit('SET_IDENTITY', identity);
	},

	addIdentity({commit}, identity) {
		commit('ADD_IDENTITY', identity);
	},

	clearIdentity({commit}) {
		commit('CLEAR_IDENTITY');
	}
};

const mutations = {
	ADD_IDENTITY(state, identity) {
		state.identities.push(identity);
	},

	SET_IDENTITY(state, identity) {
		state.identity = identity;
	},

	CLEAR_IDENTITY(state) {
		console.log('cleared');
		state.identity = {};
	}
};

export default {
	state,
	getters,
	mutations,
	actions
};
