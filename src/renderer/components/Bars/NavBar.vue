<template>
	<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

		<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
			<font-awesome-icon :icon="['fas', 'bars']"/>
		</button>

		<form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
			<div class="input-group">
				<input type="text" class="form-control bg-light border-0 small" placeholder="Find me..."
				       aria-label="Search">
				<div class="input-group-append">
					<button class="btn btn-primary" type="button">
						<font-awesome-icon :icon="['fas', 'search']" size="sm"/>
					</button>
				</div>
			</div>
		</form>

		<ul class="navbar-nav ml-auto">

			<li class="nav-item dropdown no-arrow d-sm-none">
				<a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
				   aria-haspopup="true" aria-expanded="false">
					<font-awesome-icon :icon="['fas', 'search']" fixed-width/>
				</a>

				<div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
				     aria-labelledby="searchDropdown">
					<form class="form-inline mr-auto w-100 navbar-search">
						<div class="input-group">
							<input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
							       aria-label="Search">
							<div class="input-group-append">
								<button class="btn btn-primary" type="button">
									<font-awesome-icon :icon="['fas', 'search']" size="sm"/>
								</button>
							</div>
						</div>
					</form>
				</div>
			</li>


			<li class="nav-item dropdown no-arrow mx-1">
				<a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
				   aria-haspopup="true" aria-expanded="false">
					<font-awesome-icon :icon="['fas', 'bell']" fixed-width/>
					<span class="badge badge-danger badge-counter">3</span>
				</a>

				<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
				     aria-labelledby="alertsDropdown">
					<h6 class="dropdown-header">
						Alerts Center
					</h6>
					<a class="dropdown-item d-flex align-items-center" href="#">
						<div class="mr-3">
							<div class="icon-circle bg-success">
								<font-awesome-icon :icon="['fas', 'file-alt']" :style="{ color: 'white' }"/>
							</div>
						</div>
						<div>
							<div class="small text-gray-500">5 November 2019</div>
							Your report passed QC.
						</div>
					</a>
					<a class="dropdown-item d-flex align-items-center" href="#">
						<div class="mr-3">
							<div class="icon-circle bg-warning">
								<font-awesome-icon :icon="['fas', 'donate']" :style="{ color: 'white' }"/>
							</div>
						</div>
						<div>
							<div class="small text-gray-500">24 September 2019</div>
							Congratulations, You cashed £495!
						</div>
					</a>
					<a class="dropdown-item d-flex align-items-center" href="#">
						<div class="mr-3">
							<div class="icon-circle bg-danger">
								<font-awesome-icon :icon="['fas', 'exclamation-triangle']" :style="{ color: 'white' }"/>
							</div>
						</div>
						<div>
							<div class="small text-gray-500">31 December 2019</div>
							Hard deadline approaching!
						</div>
					</a>
					<a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
				</div>
			</li>


			<li class="nav-item dropdown no-arrow mx-1">
				<a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown"
				   aria-haspopup="true" aria-expanded="false">
					<font-awesome-icon :icon="['fas', 'envelope']" fixed-width/>
					<span class="badge badge-danger badge-counter">3</span>
				</a>

				<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
				     aria-labelledby="messagesDropdown">
					<h6 class="dropdown-header">
						Message Center
					</h6>
					<a class="dropdown-item d-flex align-items-center" href="#">
						<div class="dropdown-list-image mr-3">
							<img class="rounded-circle" src="https://api.adorable.io/avatars/40/MAL" alt="">
							<div class="status-indicator bg-success"></div>
						</div>
						<div>
							<div class="text-truncate">Got some RBAC?</div>
							<div class="small text-gray-500">MAL · 58m</div>
						</div>
					</a>
					<a class="dropdown-item d-flex align-items-center" href="#">
						<div class="dropdown-list-image mr-3">
							<img class="rounded-circle" src="https://api.adorable.io/avatars/40/NT" alt="">
							<div class="status-indicator"></div>
						</div>
						<div>
							<div class="text-truncate">Where is the baseline?</div>
							<div class="small text-gray-500">NT · 1d</div>
						</div>
					</a>
					<a class="dropdown-item d-flex align-items-center" href="#">
						<div class="dropdown-list-image mr-3">
							<img class="rounded-circle" src="https://api.adorable.io/avatars/40/AEA" alt="">
							<div class="status-indicator bg-warning"></div>
						</div>
						<div>
							<div class="text-truncate">No R&D there...</div>
							<div class="small text-gray-500">AEA · 2d</div>
						</div>
					</a>
					<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
				</div>
			</li>

			<div class="topbar-divider d-none d-sm-block"></div>

			<li class="nav-item dropdown no-arrow">
				<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
				   aria-haspopup="true" aria-expanded="false">
					<span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ identity.name }}</span>
					<img class="img-profile rounded-circle" :src="'https://api.adorable.io/avatars/40/' + identity.initials">
				</a>

				<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
					<a class="dropdown-item" href="#">
						<font-awesome-icon :icon="['fas', 'user']" size="sm" fixed-width class="mr-2 text-gray-400"/>
						Profile
					</a>
					<a class="dropdown-item" href="#">
						<font-awesome-icon :icon="['fas', 'cogs']" size="sm" fixed-width class="mr-2 text-gray-400"/>
						Settings
					</a>
					<a class="dropdown-item" href="#">
						<font-awesome-icon :icon="['fas', 'list']" size="sm" fixed-width class="mr-2 text-gray-400"/>
						Activity Log
					</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#" @click="logout">
						<font-awesome-icon :icon="['fas', 'sign-out-alt']" size="sm" fixed-width class="mr-2 text-gray-400"/>
						Logout
					</a>
				</div>
			</li>

		</ul>

	</nav>
</template>

<script>
	import $ from 'jquery'
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: 'navbar',

		data() {
			return {
				identity: {
					name: 'Ali EL AMRI',
					initials: 'AEA'
				}
			}
		},

		created() {
			// Toggle the side navigation
			$(document).on('click', '#sidebarToggleTop', function (e) {
				$("body").toggleClass("sidebar-toggled");
				let sidebar = $(".sidebar");
				sidebar.toggleClass("toggled");
				if (sidebar.hasClass("toggled")) {
					$('.sidebar .collapse').collapse('hide');
				}
			});
		},

		computed: {
			// ...mapGetters(['identity'])
		},

		methods: {
			// ...mapActions(['clearIdentity']),

			logout(){
				// this.clearIdentity();
				this.$router.push({name: 'login'})
			}
		}
	}
</script>
