<template>
	<div id="app" class="container">
		<component :is="layout">
			<router-view></router-view>
		</component>
	</div>
</template>

<script>
	export default {
		name: 'Cortex',

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
