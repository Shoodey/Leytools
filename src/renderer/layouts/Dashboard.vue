<template>
	<div id="wrapper">
		<sidebar></sidebar>
		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">

				<navbar></navbar>

				<slot />

			</div>
			<footer-bar></footer-bar>
		</div>


	</div>
</template>

<script>
	import NavBar from '../components/Bars/NavBar';
	import SideBar from '../components/Bars/SideBar';
	import Footer from '../components/Bars/Footer';

	export default {
		name: 'dashboard-layout',

		components: {
			'navbar': NavBar,
			'sidebar': SideBar,
			'footer-bar': Footer
		}
	}
</script>
