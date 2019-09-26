<template>
	<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

		<a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
			<div class="sidebar-brand-icon rotate-n-15">
				<i class="fas fa-boxes"></i>
			</div>
			<div class="sidebar-brand-text mx-3">Leytools</div>
		</a>

		<hr class="sidebar-divider my-0">

		<li class="nav-item">
			<a class="nav-link" href="#">
				<font-awesome-icon :icon="['fas', 'tachometer-alt']"/>
				<span>Dashboard</span></a>
		</li>

		<hr class="sidebar-divider">

		<div class="sidebar-heading">
			Toolbox
		</div>

		<li class="nav-item">
			<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
				<i class="fas fa-fw fa-brain"></i>
				<span>Cortex</span>
			</a>
			<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
				<div class="bg-white py-2 collapse-inner rounded">
					<a class="collapse-item" href="#">Technologies</a>
					<a class="collapse-item" href="#">Repository</a>
				</div>
			</div>
		</li>

		<li class="nav-item">
			<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
				<i class="fas fa-fw fa-lightbulb"></i>
				<span>TorchLeyt</span>
			</a>
			<div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
				<div class="bg-white py-2 collapse-inner rounded">
					<h6 class="collapse-header">Coming soon...</h6>
				</div>
			</div>
		</li>

		<hr class="sidebar-divider d-none d-md-block">

		<div class="text-center d-none d-md-inline">
			<button class="rounded-circle border-0" id="sidebarToggle"></button>
		</div>

	</ul>
</template>

<script>
	import $ from 'jquery'

	export default {
		name: 'sidebar',

		created() {
			// Toggle the side navigation
			$(document).on('click', '#sidebarToggle', function (e) {
				$("body").toggleClass("sidebar-toggled");
				let sidebar = $(".sidebar");
				sidebar.toggleClass("toggled");
				if (sidebar.hasClass("toggled")) {
					$('.sidebar .collapse').collapse('hide');
				}
			});

			// Close any open menu accordions when window is resized below 768px
			$(window).resize(function() {
				if ($(window).width() < 768) {
					$('.sidebar .collapse').collapse('hide');
				}
			});

			// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
			$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
				if ($(window).width() > 768) {
					let e0 = e.originalEvent,
						delta = e0.wheelDelta || -e0.detail;
					this.scrollTop += (delta < 0 ? 1 : -1) * 30;
					e.preventDefault();
				}
			});
		}
	}
</script>
