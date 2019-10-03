<template>
	<footer class="sticky-footer bg-white">
		<div class="container my-auto">
			<div class="copyright text-center my-auto">
				<span>
					Made with
					<font-awesome-icon :icon="['fas', 'heart']"/>
					and
					<font-awesome-icon :icon="['fas', 'coffee']"/>
					by
					<a href="#" @click="open('https://alielamri.com/')">Ali EL AMRI</a>
				</span>
			</div>
		</div>

		<a class="scroll-to-top rounded" href="#page-top">
			<font-awesome-icon :icon="['fas', 'angle-up']"/>
		</a>
	</footer>
</template>

<script>
	import $ from 'jquery'
	import easing from 'jquery-easing'

	export default {
		name: 'footer-bar',

		created() {
			// Scroll to top button appear
			$(document).on('scroll', function () {
				let scrollDistance = $(this).scrollTop();
				if (scrollDistance > 100) {
					$('.scroll-to-top').fadeIn();
				} else {
					$('.scroll-to-top').fadeOut();
				}
			});

			// Smooth scrolling using jQuery easing
			$(document).on('click', 'a.scroll-to-top', function (e) {
				let $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: ($($anchor.attr('href')).offset().top)
				}, 1000, 'easeInOutExpo');
				e.preventDefault();
			});
		},

		methods: {
			open(link) {
				this.$electron.shell.openExternal(link)
			},
		}
	}
</script>

<style scoped>
	.fa-heart {
		color: rgba(255, 0, 0, 0.6);
		animation: fa-beat 5s ease infinite;
	}

	@keyframes fa-beat {
		0% {
			transform: scale(1);
		}
		5% {
			transform: scale(1.25);
		}
		20% {
			transform: scale(1);
		}
		30% {
			transform: scale(1);
		}
		35% {
			transform: scale(1.25);
		}
		50% {
			transform: scale(1);
		}
		55% {
			transform: scale(1.25);
		}
		70% {
			transform: scale(1);
		}
	}

	.fa-coffee {
		color: rgba(139, 69, 19, 0.65);
		animation: shake 0.2s ease-in-out 0.2s infinite alternate;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}

	@keyframes shake {
		from {
			-webkit-transform: rotate(7deg);
		}
		to {
			-webkit-transform-origin: center center;
			-webkit-transform: rotate(-7deg);
		}
	}
</style>
