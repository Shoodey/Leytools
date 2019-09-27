<template>
	<component :is="layout">
		<router-view></router-view>
	</component>
</template>

<script>
	export default {
		name: 'Leytools',

		data() {
			return {
				defaultLayout: 'dashboard'
			}
		},

		computed: {
			layout() {
				return (this.$route.meta.layout || this.defaultLayout) + '-layout'
			}
		}
	}
</script>

<style>
	/* CSS */
</style>
