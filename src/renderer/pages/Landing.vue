<template>
	<div class="container-fluid" style="height: 5000px">
		<router-link :to="{ name: 'dashboard'}">Dashboard</router-link>
		<router-link :to="{ name: 'login'}">Login</router-link>
		<a href="#" @click="clearIdentity">Logout</a>	</div>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		name: 'landing',

		components: {},

		methods: {
			...mapActions(['clearIdentity']),
		}
	}
</script>
