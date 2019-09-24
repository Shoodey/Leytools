<template>
	<div>
		<slot />
	</div>
</template>

<script>
	import NavBar from '@/components/Bars/NavBar';
	import SideBar from '@/components/Bars/SideBar';
	import Footer from '@/components/Bars/Footer';

	export default {
		name: 'dashboard',

		components: {
			NavBar, SideBar, Footer
		}
	}
</script>
