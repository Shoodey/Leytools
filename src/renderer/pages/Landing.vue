<template>
	<div class="container-fluid">
		<router-link :to="{ name: 'dashboard'}">Dashboard</router-link>
		<router-link :to="{ name: 'login'}">Login</router-link>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		name: 'landing',

		components: {},

		methods: {
			// ...mapActions(['clearIdentity']),
		}
	}
</script>
