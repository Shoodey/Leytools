<template>
	<div class="row">
		<div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
		<div class="col-lg-7 py-5">
			<div class="p-5">
				<div class="text-center">
					<h1 class="h4 text-gray-900 mb-2">Registration</h1>
					<br>
					<p class="mb-4">Please sign up to start using the platform.</p>
				</div>
				<form class="user py-3 needs-validation" novalidate @submit="checkForm">
					<div class="row">
						<div class="form-group col-6">
							<label for="email" class="small mb-1 pl-3">Email:</label>
							<input id="email" type="email" class="form-control form-control-user"
							       placeholder="jdoe@leyton.com"
							       v-model="password" required>
							<small class="invalid-feedback">
								Email error message
							</small>
						</div>
						<div class="form-group col-6">
							<label for="password" class="small mb-1 pl-3">Password:</label>
							<input id="password" type="password" class="form-control form-control-user"
							       placeholder="super-duper-password"
							       v-model="password" required>
							<small class="invalid-feedback">
								Password error message
							</small>
						</div>
					</div>

					<div class="row justify-content-center">
						<div class="col-sm-12">
							<button type="submit" class="btn btn-primary btn-user btn-block align-self-center">
								Proceed
							</button>
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
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: 'login',

		data() {
			return {
				email: '',
				password: ''
			}
		},

		created() {

		},

		computed: {
			...mapGetters(['error']),
		},

		methods: {
			...mapActions(['register']),

			open(link) {
				this.$electron.shell.openExternal(link)
			},

			checkForm(event) {
				// event.preventDefault();
				// event.target.classList.add('was-validated');
				this.$router.push({name: 'dashboard'})
			},


			proceed() {
				let credentials = {email: this.email, password: Math.random().toString(36).slice(2)};

				this.register(credentials);

				if (this.error) {
					// 	this.setIdentity(identity);
					//
					// 	this.$router.push({ name: 'dashboard'})
					console.log("error", this.error)
				} else {
					console.log("all good", this.error)
				}

			}
		}
	}
</script>
