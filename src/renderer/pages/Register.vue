<template>
	<div class="row">
		<div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
		<div class="col-lg-7 py-5">
			<div class="p-5">
				<div class="text-center">
					<h1 class="h4 text-gray-900 mb-2">Registration</h1>
					<br>
					<p class="mb-4">Please enter your email address to start using the platform.</p>
				</div>
				<form class="user py-3">
					<div class="row">
						<div class="form-group">
							<label class="small mb-1 pl-3">Email:</label>
							<input type="email" class="form-control form-control-user" placeholder="jdoe@leyton.com"
							       v-model="email" required>
							<small class="form-text text-danger">
								Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
							</small>
						</div>
						<div class="form-group">
							<label class="small mb-1 pl-3">Password:</label>
							<input type="password" class="form-control form-control-user" placeholder="supersecret"
							       v-model="password" required>
							<small class="form-text text-danger">
								Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
							</small>
						</div>
					</div>

					<div class="row justify-content-center">
						<div class="col-sm-12">
							<a href="#" @click="proceed" class="btn btn-primary btn-user btn-block  align-self-center">
								Proceed
							</a>
						</div>
					</div>
				</form>
				<hr>
				<div class="text-center">
					<router-link class="small" :to="{name: 'login'}">I already have an account</router-link>
					<br>
					<a class="small" href="#" @click="open('https://github.com/Shoodey/Leytools')">What is this
						anyway?</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {isNull} from 'lodash'
	import {mapGetters, mapActions} from 'vuex'
	import VueBootstrapTypeahead from 'vue-bootstrap-typeahead/src/components/VueBootstrapTypeahead'

	export default {
		name: 'login',

		data() {
			return {
				email: null,
				password: null,
			}
		},

		created(){
			window.addEventListener('load', function() {
				// Fetch all the forms we want to apply custom Bootstrap validation styles to
				var forms = document.getElementsByClassName('needs-validation');
				// Loop over them and prevent submission
				var validation = Array.prototype.filter.call(forms, function(form) {
					form.addEventListener('submit', function(event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						}
						form.classList.add('was-validated');
					}, false);
				});
			}, false);
		},

		computed: {
			...mapGetters(['error']),
		},

		methods: {
			...mapActions(['register']),

			open(link) {
				this.$electron.shell.openExternal(link)
			},

			proceed() {
				let credentials = {name: this.name, initials: this.initials};

				this.register(credentials);

				if (isNull(this.error)) {
					// 	this.setIdentity(identity);
					//
					// 	this.$router.push({ name: 'dashboard'})
				}else{
					// console.log(this.error)
				}

			}
		}
	}
</script>
