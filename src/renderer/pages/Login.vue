<template>
	<div class="row">
		<div class="col-lg-5 d-none d-lg-block bg-password-image"></div>
		<div class="col-lg-7 py-5">
			<div class="p-5">
				<div class="text-center">
					<h1 class="h4 text-gray-900 mb-2">Identification</h1>
					<p class="mb-4">Please enter your name and initial.<br> This helps us track issues and
						contributions!</p>
				</div>
				<form class="user py-3">
					<div class="form-group row">
						<div class="col-sm-9 mb-4 mb-sm-0">
							<div class="small mb-1 pl-3">Full name:</div>
							<vue-bootstrap-typeahead
									inputClass="form-control-user"
									:minMatchingChars=0
									:maxMatches=3
									v-model="name"
									:data="identities"
									:serializer="s => s.name"
									placeholder="Enter your name..."
									@hit="setLocalIdentity($event)">
								<template slot="suggestion" slot-scope="{ data, htmlText }">
									<div class="d-flex bd-highlight">
										<img class="rounded-circle bd-highlight align-self-center"
										     :src="'https://api.adorable.io/avatars/40/' + data.name"
										     style="width: 40px; height: 40px;"/>
										<span class="ml-4 bd-highlight align-self-center" v-html="htmlText"></span>
										<small class="ml-auto bd-highlight align-self-center">
											<strong>{{ data.initials }}</strong>
										</small>
									</div>
								</template>
							</vue-bootstrap-typeahead>
						</div>
						<div class="col-sm-3">
							<div class="small mb-1 pl-3">Initials:</div>
							<input type="text" class="form-control form-control-user" placeholder="JD"
							       v-model="initials">
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
					<a class="small" href="#" @click="open('https://github.com/Shoodey/Cortex')">What is this
						anyway?</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {some, isEmpty} from 'lodash'
	import {mapGetters, mapActions} from 'vuex'
	import VueBootstrapTypeahead from 'vue-bootstrap-typeahead/src/components/VueBootstrapTypeahead'

	export default {
		name: 'login',

		components: {
			VueBootstrapTypeahead
		},

		data() {
			return {
				name: null,
				initials: null,
			}
		},

		watch: {
			name() {
				// this.initials = toUpper(join(map(split(this.name, ' '), head), ''));
				if (this.name) {
					this.initials = this.name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g).join('').toUpperCase()
				}
			}
		},

		computed: {
			...mapGetters(['identities']),
		},

		methods: {
			...mapActions(['addIdentity', 'setIdentity']),

			open(link) {
				this.$electron.shell.openExternal(link)
			},

			setLocalIdentity(identity) {
				this.name = identity.name;
				this.initials = identity.initials;
			},

			proceed() {
				let identity = {name: this.name, initials: this.initials};

				if(!some(identity, isEmpty)){
					if (!some(this.identities, identity)) {
						this.addIdentity(identity);
					}

					this.setIdentity(identity);

					this.$router.push({ name: 'dashboard'})
				}
			}
		}
	}
</script>
